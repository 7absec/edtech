# Generated by Django 4.1.1 on 2023-04-01 14:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('eLearning', '0022_attempquiz'),
    ]

    operations = [
        migrations.AddField(
            model_name='attempquiz',
            name='right_ans',
            field=models.CharField(max_length=200, null=True),
        ),
    ]
