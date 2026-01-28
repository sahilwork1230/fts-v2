from django.urls import path
from . import views
urlpatterns = [
    path("",views.sponsors, name = "sponsors" ),
    path("speakers/", views.speakers, name = "speakers"),
    
]