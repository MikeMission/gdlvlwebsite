# api/admin.py
from django.contrib import admin
from .models import AREDLLevel

@admin.register(AREDLLevel)
class AREDLLevelAdmin(admin.ModelAdmin):
    list_display = ('aredlPosition', 'personalPosition', 'name', 'creator', 'completionDate', 'enjoyment', 'attemptCount')
    search_fields = ('name', 'creator')
    ordering = ('personalPosition',)