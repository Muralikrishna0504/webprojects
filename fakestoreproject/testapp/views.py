from django.shortcuts import render
# Create your views here.
from rest_framework.generics import ListCreateAPIView,RetrieveUpdateDestroyAPIView
from testapp.serializers import ProductSerializer
from testapp.models import Products
from rest_framework.permissions import IsAuthenticated
class ProductListView(ListCreateAPIView):
    queryset = Products.objects.all()
    serializer_class = ProductSerializer
    def get_queryset(self):
        qs=Products.objects.all()
        name=self.request.GET.get('title',None)
        category = self.request.GET.get('category', None)
        if name is not None:
            qs=qs.filter(title__contains=name)
        if category is not None:
            qs=qs.filter(category__contains=category)
        return qs



class ProductRetrieveView(RetrieveUpdateDestroyAPIView):
    queryset = Products.objects.all()
    serializer_class = ProductSerializer
    
