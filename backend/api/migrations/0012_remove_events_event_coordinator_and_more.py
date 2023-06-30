# Generated by Django 4.1.3 on 2023-04-20 09:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0011_teams_events_event_coordinator"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="events",
            name="event_coordinator",
        ),
        migrations.AddField(
            model_name="events",
            name="event_coordinator",
            field=models.ManyToManyField(to="api.teams"),
        ),
    ]