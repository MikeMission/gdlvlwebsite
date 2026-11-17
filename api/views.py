# api/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import AREDLLevel
from django.shortcuts import render

class ProxyAREDLView(APIView):
    def get(self, request):
        levels = AREDLLevel.objects.all().order_by('personalPosition').values(
            'aredlPosition',
            'personalPosition',
            'name',
            'creator',
            'completionDate',
            'enjoyment',
            'attemptCount'
        )
        return Response(list(levels))
    
def index(request):
    return render(request, 'completions.html')