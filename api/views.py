# api/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import AREDLLevel

class ProxyAREDLView(APIView):
    def get(self, request):
        # Query all levels sorted by position from your local database
        levels = AREDLLevel.objects.all().order_by('aredlPosition').values(
            'aredlPosition', 'personalPosition', 'name', 'creator', 'completionDate', 'enjoyment', 'attemptCount'
        )
        return Response(list(levels))