from django.db import models

# Create your models here.
class Products(models.Model):
    id=models.IntegerField(primary_key=True)
    title=models.CharField(max_length=500)
    price=models.FloatField()
    description=models.CharField(max_length=1000)
    category=models.CharField(max_length=500)
    imageurl=models.CharField(max_length=2000)
    rating=models.FloatField()


