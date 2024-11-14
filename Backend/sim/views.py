from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
import json
from django.contrib.auth.decorators import login_required

from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate, login, logout
from .forms import CreateUserForm

from django.contrib.auth.models import User

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Count
from .models import Category, Question
from random import sample


@ensure_csrf_cookie
@require_http_methods(['GET'])
def set_csrf_token(request):
    """
    We set the CSRF cookie on the frontend.
    """
    return JsonResponse({'message': 'CSRF cookie set'})


@require_http_methods(['POST'])
def login_view(request):
    try:
        data = json.loads(request.body.decode('utf-8'))
        email = data['email']
        password = data['password']
    except json.JSONDecodeError:
        return JsonResponse(
            {'success': False, 'message': 'Invalid JSON'}, status=400
        )

    user = authenticate(request, username=email, password=password)

    if user:
        login(request, user)
        return JsonResponse({'success': True})
    return JsonResponse(
        {'success': False, 'message': 'Invalid credentials'}, status=401
    )


def logout_view(request):
    logout(request)
    return JsonResponse({'message': 'Logged out'})


@require_http_methods(['GET'])
def user(request):
    if request.user.is_authenticated:
        return JsonResponse(
            {'username': request.user.username, 'email': request.user.email}
        )
    return JsonResponse(
        {'message': 'Not logged in'}, status=401
    )


@require_http_methods(['POST'])
def register(request):
    data = json.loads(request.body.decode('utf-8'))
    form = CreateUserForm(data)
    if form.is_valid():
        form.save()
        return JsonResponse({'success': 'User registered successfully'}, status=201)
    else:
        errors = form.errors.as_json()
        return JsonResponse({'error': errors}, status=400)
    

@require_http_methods(['GET'])
def get_all_users(request):
    users = User.objects.all().values('username', 'email')
    return JsonResponse(list(users), safe=False)

@require_http_methods(['GET'])
@login_required
def get_user_stats(request):
    profile = request.user.profile
    print("bruh")
    return JsonResponse({
        'total_score': profile.total_score,
        'highest_score': profile.highest_score,
        'categories_performance': profile.categories_performance
    })

@require_http_methods(['POST'])
@login_required
def update_user_stats(request):
    data = json.loads(request.body.decode('utf-8'))
    category_name = data.get('category')
    score = data.get('score')

    profile = request.user.profile
    profile.total_score += score
    profile.highest_score = max(profile.highest_score, score)
    profile.update_category_performance(category_name, score)

    return JsonResponse({'message': 'User stats updated successfully'})

# Quiz View

class TriviaQuestionsView(APIView):
    """
    API endpoint that retrieves trivia questions based on specified parameters.
    Parameters:
        - category: Name of the category to filter questions (optional).
        - limit: Number of questions to return (optional, default is 10).
        - random: Boolean indicating if questions should be randomly selected (optional, default is False).
    """

    def get(self, request, *args, **kwargs):
        # Get parameters from the request
        category_name = request.query_params.get('category')
        limit = int(request.query_params.get('limit', 10))
        randomize = request.query_params.get('random', 'false').lower() == 'true'
        
        # Fetch questions based on the category
        if category_name:
            try:
                category = Category.objects.get(name__iexact=category_name)
                questions_queryset = Question.objects.filter(category=category)
            except Category.DoesNotExist:
                return Response(
                    {"error": "Category not found"}, status=status.HTTP_404_NOT_FOUND
                )
        else:
            questions_queryset = Question.objects.all()

        # Randomize questions if requested
        if randomize:
            total_questions = questions_queryset.count()
            limit = min(limit, total_questions)  # Ensure limit does not exceed available questions
            questions = sample(list(questions_queryset), limit)
        else:
            questions = questions_queryset[:limit]

        # Serialize the questions
        questions_data = []
        for question in questions:
            options = question.options.all()
            options_data = [{"text": option.text, "is_correct": option.is_correct} for option in options]
            questions_data.append({
                "uid": question.uid,  # Use uid instead of id
                "text": question.text,
                "category": question.category.name,
                "options": options_data
            })

        return Response({"questions": questions_data}, status=status.HTTP_200_OK)