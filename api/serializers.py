# api/serializers.py
from rest_framework import serializers
from .models import LevelCompletion, customLevels

class LevelCompletionSerializer(serializers.ModelSerializer):
    class Meta:
        model = LevelCompletion
        # Specify which fields you want converted to JSON
        fields = ['id', 'level_name', 'aredlPosition', 'personalPosition', 'creator', 'completionDate', 'enjoyment', 'attemptCount', 'videoEmbed','description']

        # Alternatively, you can use '__all__' to include every field automatically:
        # fields = '__all__'

        model = customLevels 

        fields = ['id', 'levelName', 'levelDescription', 'levelPrevImg', 'actualRatingImg', 'actualRatingLabel', 'estimatedRatingImg', 'estimatedDifficultyDescription', 'estimatedRatingLabel', 'favPart1Perc', 'favPart2Perc', 'favPart3Perc', 'favPartImg1', 'favPartImg2', 'favPartImg3', 'favPart1Desc', 'favPart2Desc', 'favPart3Desc', 'bgColor']