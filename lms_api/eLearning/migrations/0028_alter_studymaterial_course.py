# Generated by Django 4.1.1 on 2023-04-07 18:29

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('eLearning', '0027_studymaterial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='studymaterial',
            name='course',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='eLearning.course'),
        ),
    ]
