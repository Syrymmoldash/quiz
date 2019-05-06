from django.db import models


class User(models.Model):
    name = models.CharField(max_length = 200)
    surname = models.CharField(max_length = 200)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'surname': self.surname
        }

class Post(models.Model):
    title = models.CharField(max_length = 200)
    body = models.CharField(max_length = 200)
    like_count = models.IntegerField()
    created_at = models.DateTimeField()
    created_by = models.ForeignKey(User, on_delete = models.CASCADE)

    def to_json(self):
        return {
            'id': self.id,
            'title': self.title,
            'body': self.body,
            'like_count': self.like_count,
            'created_at': self.created_at
        }    

        