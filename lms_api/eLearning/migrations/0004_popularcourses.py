# Generated by Django 4.1.1 on 2022-11-03 02:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('eLearning', '0003_alter_studentcourseenrollment_options'),
    ]

    operations = [
        migrations.CreateModel(
            name='PopularCourses',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='eLearning.course')),
                ('rating', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='eLearning.courserating')),
            ],
            options={
                'verbose_name_plural': '900. Popular Courses',
            },
        ),
    ]
