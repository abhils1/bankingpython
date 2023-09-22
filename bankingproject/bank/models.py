from django.db import models


# Create your models here.
class Form(models.Model):
    name = models.CharField(max_length=250)
    gender = models.CharField(max_length=250)
    dob = models.DateField()
    age = models.IntegerField()
    mob_no = models.IntegerField()
    email = models.EmailField()
    address = models.TextField()
    dist = models.CharField(max_length=250)
    branch = models.CharField(max_length=250)
    acc_type = models.CharField(max_length=250)
    mat_pro = models.TextField()




def __str__(self):
    return self.name