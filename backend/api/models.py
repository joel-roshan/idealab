from django.db import models
import datetime
from django.contrib.postgres.fields import ArrayField



# from phonenumber_field.modelfields import PhoneNumberField


# Create your models here.


class events(models.Model):
    name = models.TextField(blank=False)    
    location= models.TextField(blank=False)
    start_date = models.DateField()
    end_date = models.DateField()
    time=models.TimeField()
    about=models.TextField(blank=False)
    event_coordinator = models.ManyToManyField('event_heads')
    event_img = models.ImageField(null=True,upload_to='', blank=True)
    registration_link = models.URLField(max_length=200, blank=True)
    contact_name = models.CharField(max_length=100, blank=True)
    contact_email = models.EmailField(blank=True)
    contact_phone = models.CharField(max_length=20, blank=True)
    

    def __str__(self):
        return self.name  


class announcement(models.Model):
    announcement_title=models.TextField(blank=False,max_length=60)
    announcement_desc=models.TextField(blank=False)
    announcement_link = models.URLField(max_length=200, blank=True)

    def __str__(self):
        return self.announcement_title



class Equipment(models.Model):
  
    name = models.CharField(max_length=50)
    quantity = models.IntegerField()
    description = models.TextField()
    is_available = models.BooleanField(default=True)
    img=models.ImageField(null=True,upload_to='', blank=True)

    def __str__(self):
        return self.name




class book_equip(models.Model):
    name = models.TextField(blank=False)    
    phone_num = models.TextField(blank=False)
    email = models.EmailField(blank=False)
    college = models.TextField(blank=False)
    classname = models.TextField(blank=False)
    created_at = models.DateTimeField(blank=False, auto_now_add=True)
    appointment_date = models.DateField(blank=False)
    equipment_name = models.ForeignKey(Equipment, on_delete=models.CASCADE, limit_choices_to={'is_available': True})
    description = models.TextField(blank=False)
    is_allotted = models.BooleanField(default=False)

    def __str__(self):
        return self.name

    # def available_equipment(self):
    #     return [(e.name, e.name.capitalize()) for e in self.equipment_set.filter(is_available=True)]

    

class teams(models.Model):
    name = models.TextField(blank=False)    
    DESIGNATION_CHOICES = (
        ('Student', 'Student'),
        ('Student Ambassador', 'Student Ambassador'),
        ('Student Co-Amabassador', 'Student Co-Amabassador'),
        ('Faculty in Charge', 'Faculty in Charge'),
        ('Others', 'Others'),
    )
    designation = models.CharField(max_length=50, choices=DESIGNATION_CHOICES, default='Others')
    class_name = models.TextField(blank=True,null=True)
    ph_no= models.TextField(blank=False)
    img=models.ImageField(null=True,upload_to='', blank=True)
    
    def __str__(self):
        return self.name


class event_heads(models.Model):
    name = models.TextField(blank=False)    
    designation = models.TextField(blank=False)
    ph_no= models.TextField(blank=False)
   
    def __str__(self):
        return self.name

