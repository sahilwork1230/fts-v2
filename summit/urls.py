from django.urls import path
from . import views
urlpatterns = [
    path("",views.home, name = "sponsors" ),
    path("sponsors/",views.sponsors, name = "sponsors" ),
    path("speakers/", views.speakers, name = "speakers"),
    path("register/", views.register, name = "register"),
    
]