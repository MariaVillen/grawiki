from rest_framework import routers
from .api import ArticleViewSet, CategoryViewSet, TagViewSet

router = routers.DefaultRouter()

router.register('api/article', ArticleViewSet, 'article')
router.register('api/category', CategoryViewSet, 'category')
router.register('api/tag', TagViewSet, 'tag')

urlpatterns = router.urls