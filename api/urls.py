# api/urls.py
from django.urls import path
from .views import ProxyAREDLView
from api import views

urlpatterns = [
    path('aredl-proxy/', ProxyAREDLView.as_view(), name='aredl_proxy'),
    path("", views.index, name="index"),
]