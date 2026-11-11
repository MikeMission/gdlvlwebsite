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

    def __str__(self):
        return f"#{self.personalPosition} - {self.name}"