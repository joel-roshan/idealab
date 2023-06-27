# Generated by Django 4.1.7 on 2023-05-26 13:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0028_alter_event_heads_designation_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='teams',
            name='designation',
            field=models.CharField(choices=[('Student', 'Student'), ('Student Ambassador', 'Student Ambassador'), ('Student Co-Amabassador', 'Student Co-Amabassador'), ('Faculty in Charge', 'Faculty in Charge'), ('Others', 'Others')], default='Others', max_length=50),
        ),
    ]
