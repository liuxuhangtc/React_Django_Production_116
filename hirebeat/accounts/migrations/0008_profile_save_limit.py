# Generated by Django 3.0.7 on 2020-06-18 14:32

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0007_auto_20200520_1853'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='save_limit',
            field=models.IntegerField(default=5, validators=[django.core.validators.MaxValueValidator(1000), django.core.validators.MinValueValidator(5)]),
        ),
    ]