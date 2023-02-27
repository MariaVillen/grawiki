from .models import Article, Category
from rest_framework import viewsets, permissions
from .serializers import ArticleSerializer, CategorySerializer

class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = ArticleSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = CategorySerializer