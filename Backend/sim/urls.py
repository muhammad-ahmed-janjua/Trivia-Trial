from django.urls import path
from . import views

urlpatterns = [
    path('api/set-csrf-token', views.set_csrf_token, name='set_csrf_token'),
    path('api/login', views.login_view, name='login'),
    path('api/logout', views.logout_view, name='logout'),
    path('api/user', views.user, name='user'),
    path('api/register', views.register, name='register'),
	path('api/users', views.get_all_users, name='users'),
	path('api/user/stats', views.get_user_stats, name='user_stats'),
	path('api/user/stats/update', views.update_user_stats, name='update_user_stats'),
	path('api/trivia/questions/', views.TriviaQuestionsView.as_view(), name='trivia-questions'),
]