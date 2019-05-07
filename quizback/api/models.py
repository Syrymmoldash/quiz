from django.db import models
from django.contrib.auth.models import User

class Contact(models.Model):
    name = models.CharField(max_length = 200)
    phone = models.CharField(max_length = 200)
    users = models.ForeignKey(User, on_delete = models.CASCADE)

    def __str__(self):
        return self.name    

        