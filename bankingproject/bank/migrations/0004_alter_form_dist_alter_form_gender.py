# Generated by Django 4.2.3 on 2023-09-21 19:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bank', '0003_alter_form_gender'),
    ]

    operations = [
        migrations.AlterField(
            model_name='form',
            name='dist',
            field=models.CharField(max_length=250),
        ),
        migrations.AlterField(
            model_name='form',
            name='gender',
            field=models.CharField(max_length=250),
        ),
    ]