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