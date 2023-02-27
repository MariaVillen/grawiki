from rest_framework import routers
from .api import ArticleViewSet, CategoryViewSet

router = routers.DefaultRouter()

router.register('api/article', ArticleViewSet, 'article')
router.register('api/category', CategoryViewSet, 'category')

urlpatterns = router.urls