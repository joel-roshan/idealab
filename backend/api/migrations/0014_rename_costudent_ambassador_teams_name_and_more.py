# Generated by Django 4.1.3 on 2023-04-21 10:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0013_rename_name_teams_costudent_ambassador_and_more"),
    ]

    operations = [
        migrations.RenameField(
            model_name="teams",
            old_name="costudent_ambassador",
            new_name="name",
        ),
        migrations.RemoveField(
            model_name="teams",
            name="faculty_incharge",
        ),
        migrations.RemoveField(
            model_name="teams",
            name="student_ambassador",
        ),
        migrations.AddField(
            model_name="teams",
            name="class_name",
            field=models.TextField(blank=True, null=True),
        ),
    ]
