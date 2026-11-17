# api/admin.py
from django.contrib import admin
from .models import AREDLLevel, customLevels

@admin.register(AREDLLevel)
class AREDLLevelAdmin(admin.ModelAdmin):
    list_display = ('aredlPosition', 'personalPosition', 'name', 'creator', 'completionDate', 'enjoyment', 'attemptCount','videoEmbed','description')
    search_fields = ('name', 'creator')
    ordering = ('personalPosition',)

@admin.register(customLevels)
class customLevelsAdmin(admin.ModelAdmin):
    list_display = ('levelName','levelDescription', 'levelPrevImg', 'actualRatingImg', 'actualRatingLabel', 'estimatedRatingImg', 'estimatedDifficultyDescription', 'estimatedRatingLabel', 'favPart1Perc', 'favPart2Perc', 'favPart3Perc', 'favPartImg1', 'favPartImg2', 'favPartImg3', 'favPart1Desc', 'favPart2Desc', 'favPart3Desc', 'bgColor')
    search_fields = ('levelName',)
    ordering = ('levelName',)