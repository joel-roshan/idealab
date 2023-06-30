# Generated by Django 4.1.3 on 2023-05-13 10:16

import datetime
from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0018_announcement_announcement_link_events_contact_email_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='events',
            name='about',
            field=models.TextField(default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='events',
            name='time',
            field=models.TimeField(default=datetime.datetime(2023, 5, 13, 15, 46, 11, 125067)),
            preserve_default=False,
        ),
    ]