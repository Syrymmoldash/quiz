from django.urls import path
from api import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('api/', views.ContactView.as_view()),
    path('api/<int:pk>', views.ContactDetails.as_view()),
    path('api/', views.ContactCBV.as_view()),
    path('api/<int:pk>', views.ContactDetailCBV.as_view()),
    path('register/', views.register),
    path('login/', views.login),
    path('logout/', views.logout)
]

urlpatterns = format_suffix_patterns(urlpatterns)