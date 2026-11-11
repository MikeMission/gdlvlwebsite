# api/serializers.py
from rest_framework import serializers
from .models import LevelCompletion

class LevelCompletionSerializer(serializers.ModelSerializer):
    class Meta:
        model = LevelCompletion
        # Specify which fields you want converted to JSON
        fields = ['id', 'level_name', 'aredlPosition', 'personalPosition', 'creator', 'completionDate', 'enjoyment', 'attemptCount']
        
        # Alternatively, you can use '__all__' to include every field automatically:
        # fields = '__all__'