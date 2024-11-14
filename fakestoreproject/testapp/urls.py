from django.urls import path,include
from testapp import views
from rest_framework_jwt.views import obtain_jwt_token,refresh_jwt_token,verify_jwt_token
urlpatterns = [
    path('products/',views.ProductListView.as_view()),
    path('products/<int:pk>/',views.ProductRetrieveView.as_view()),
]
