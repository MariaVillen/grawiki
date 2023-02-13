from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(
                            verbose_name='Nombre',
                            max_length=100
    )

class Topic(models.Model):
    name = models.CharField(
                            verbose_name='Nombre',
                            max_length=100
    )
    fk_category = models.ForeignKey(
                                        Category,
                                        verbose_name="Categoria",
                                        on_delete=models.CASCADE,
                                        null=False, blank=False,
    )

class Subtopic(models.Model):
    name = models.CharField(
                            verbose_name="Nombre",
                            max_length=100,
    )
    fk_category = models.ForeignKey(
                                        Topic,
                                        verbose_name="Tema",
                                        on_delete=models.CASCADE,
                                        null=False, blank=False,
    )

class Tag(models.Model):
    name = models.CharField(
                            verbose_name="Nombre",
                            max_length=100,
    )

class Article(models.Model):
    title = models.CharField(
                                verbose_name='Titulo',
                                max_length=100
    )
    content = models.TextField(
                                verbose_name='contenido'
    )
    edit = models.BooleanField(
                                verbose_name='Editable',
                                default=True
    )
    tags = models.ManyToManyField(
                                    Tag,
    )
    create = models.DateTimeField(
                                    auto_now_add=True,
                                    editable=False,
                                    verbose_name="Creado"
    )
    update = models.DateTimeField(
                                    auto_now=True,
                                    verbose_name="Actualizado"
    )
    fk_subtopic = models.ForeignKey(
                                        Subtopic,
                                        verbose_name="Subtema",
                                        on_delete=models.CASCADE,
                                        null=False, blank=False,
                                        
    )
    fk_tags = models.ManyToManyField(tags,
                                    null=True, blank=True,
    )