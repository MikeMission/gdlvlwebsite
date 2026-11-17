# api/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import AREDLLevel, customLevels
from django.shortcuts import render
from django.templatetags.static import static
from .models import customLevels

class ProxyAREDLView(APIView):
    def get(self, request):
        levels = AREDLLevel.objects.all().order_by('personalPosition').values(
            'aredlPosition',
            'personalPosition',
            'name',
            'creator',
            'completionDate',
            'enjoyment',
            'attemptCount',
            'videoEmbed',
            'description'
        )
        return Response(list(levels))

IMG_FIELDS = [
    "levelPrevImg", "actualRatingImg", "estimatedRatingImg",
    "favPartImg1", "favPartImg2", "favPartImg3",
]

def index(request):
    levels = []
    for row in customLevels.objects.order_by("id").values():
        row = {k: ("" if v is None else v) for k, v in row.items()}
        for field in IMG_FIELDS:
            value = row[field]
            if value and not value.startswith(("http://", "https://", "/")):
                row[field] = static(value)   # "api/images/x.png" -> "/static/api/images/x.png"
        levels.append(row)
    return render(request, "index.html", {"levels": levels})

def completions(request):
    return render(request, 'completions.html')

