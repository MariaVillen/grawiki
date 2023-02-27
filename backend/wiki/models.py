from django.db import models

# Create your models here.


class Category(models.Model):
    name = models.CharField(
        verbose_name='Nombre',
        max_length=100
    )
    def __str__(self) -> str:
        return self.name
    class Meta:
        verbose_name = 'Categoria'


class Tag(models.Model):
    name = models.CharField(
        verbose_name="Nombre",
        max_length=100,
    )
    def __str__(self) -> str:
        return self.name
    class Meta:
        verbose_name = 'Tag'


class Article(models.Model):
    title = models.CharField(
        verbose_name='Titulo',
        max_length=100
    )
    content = models.CharField(
        verbose_name='contenido',
        max_length=1200
    )
    edit = models.BooleanField(
        verbose_name='Editable',
        default=True
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
    fk_category = models.ForeignKey(
        Category,
        verbose_name="Category",
        on_delete=models.CASCADE,
        null=False, blank=False,
    )
    fk_tags = models.ManyToManyField(Tag, null=True, blank=True,)

    def __str__(self) -> str:
        return self.title

    class Meta:
        verbose_name = 'Articulo'
