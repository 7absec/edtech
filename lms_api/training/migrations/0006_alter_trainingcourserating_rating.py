# Generated by Django 4.1.1 on 2022-10-22 06:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('training', '0005_alter_coursecreator_options_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='trainingcourserating',
            name='rating',
            field=models.PositiveIntegerField(default=0, max_length=5),
        ),
    ]
