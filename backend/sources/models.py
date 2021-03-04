from django.db import models

class Source(models.Model):
    name = models.CharField(max_length=256)
    organization = models.CharField(max_length=256)
    phone = models.TextField(blank=True)
    email = models.EmailField(max_length=1024, blank=True)
    remarks = models.TextField(blank=True)
