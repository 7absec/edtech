# Generated by Django 4.1.1 on 2023-03-19 07:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('eLearning', '0014_studentassignment_doc_file'),
    ]

    operations = [
        migrations.CreateModel(
            name='Notification',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('notif_text', models.TextField()),
                ('notif_for', models.CharField(max_length=200)),
                ('notif_created_time', models.DateTimeField(auto_now_add=True)),
                ('notifread_status', models.BooleanField(default=False)),
            ],
        ),
    ]
