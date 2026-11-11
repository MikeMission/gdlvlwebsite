# api/urls.py
from django.urls import path
from .views import ProxyAREDLView

urlpatterns = [
    path('aredl-proxy/', ProxyAREDLView.as_view(), name='aredl_proxy'),
]