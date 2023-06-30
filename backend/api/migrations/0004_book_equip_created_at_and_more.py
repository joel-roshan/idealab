# Generated by Django 4.1.3 on 2023-03-13 18:10

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0003_alter_book_equip_appointment_date"),
    ]

    operations = [
        migrations.AddField(
            model_name="book_equip",
            name="created_at",
            field=models.DateTimeField(
                auto_now_add=True, default=django.utils.timezone.now
            ),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name="book_equip",
            name="appointment_date",
            field=models.DateField(),
        ),
    ]