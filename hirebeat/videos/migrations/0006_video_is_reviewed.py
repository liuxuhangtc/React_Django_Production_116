# Generated by Django 3.0.5 on 2020-05-01 13:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('videos', '0005_auto_20200430_2006'),
    ]

    operations = [
        migrations.AddField(
            model_name='video',
            name='is_reviewed',
            field=models.BooleanField(default=False),
        ),
    ]
