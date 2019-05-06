from django.urls import path, re_path
from api import views

urlpatterns = [
    path('post/', views.post),
    path('post/<int:pk>/', views.each_post)
]