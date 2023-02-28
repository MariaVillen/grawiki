from .models import Article, Category, Tag
from rest_framework import viewsets, permissions
from .serializers import ArticleSerializer, CategorySerializer, TagSerializer

class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = ArticleSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = CategorySerializer

class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = TagSerializer