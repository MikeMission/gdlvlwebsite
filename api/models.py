# api/models.py
from django.db import models

class AREDLLevel(models.Model):
    aredlPosition = models.IntegerField(unique=True)
    personalPosition = models.IntegerField(unique=True)
    name = models.CharField(max_length=255)
    creator = models.CharField(max_length=255)
    completionDate = models.DateField(null=True, blank=True)
    enjoyment = models.IntegerField(null=True, blank=True)
    attemptCount = models.IntegerField(default=0)
    videoEmbed = models.TextField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)

    def __str__(self):
        return f"#{self.personalPosition} - {self.name}"

class customLevels(models.Model):

    class Meta:
        verbose_name = "Custom Level"
        verbose_name_plural = "Custom Levels"
    
    levelName = models.CharField(max_length=255)
    levelDescription = models.TextField(null=True, blank=True)
    levelPrevImg = models.TextField(null=True, blank=True)
    actualRatingImg = models.TextField(null=True, blank=True)
    actualRatingLabel = models.CharField(max_length=255, null=True, blank=True)
    estimatedRatingImg = models.TextField(null=True, blank=True)
    estimatedDifficultyDescription = models.TextField(null=True, blank=True)
    estimatedRatingLabel = models.TextField(max_length=255, null=True, blank=True)
    favPart1Perc = models.TextField(null=True, blank=True)
    favPart2Perc = models.TextField(null=True, blank=True)
    favPart3Perc = models.TextField(null=True, blank=True)
    favPartImg1 = models.TextField(null=True, blank=True)
    favPartImg2 = models.TextField(null=True, blank=True)
    favPartImg3 = models.TextField(null=True, blank=True)
    favPart1Desc = models.TextField(null=True, blank=True)
    favPart2Desc = models.TextField(null=True, blank=True)
    favPart3Desc = models.TextField(null=True, blank=True)
    bgColor = models.CharField( null=True, blank=True)  # linear gradient

    def __str__(self):
        return f"{self.levelName}"
