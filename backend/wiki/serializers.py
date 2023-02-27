from rest_framework import serializers
from .models import Article, Category

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('id', 'title', 'content', 'edit', 'fk_tags', 'create', 'update', 'fk_category',)
        read_only_fields = ('create',)

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name',)