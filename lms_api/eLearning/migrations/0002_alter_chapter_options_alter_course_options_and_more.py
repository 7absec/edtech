# Generated by Django 4.1.1 on 2022-10-30 02:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('eLearning', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='chapter',
            options={'verbose_name_plural': '3. Chapter'},
        ),
        migrations.AlterModelOptions(
            name='course',
            options={'verbose_name_plural': '2. Courses'},
        ),
        migrations.AlterModelOptions(
            name='coursecategory',
            options={'verbose_name_plural': '1. Course Categories'},
        ),
        migrations.AlterModelOptions(
            name='teacher',
            options={'verbose_name_plural': '4. Teachers'},
        ),
    ]
