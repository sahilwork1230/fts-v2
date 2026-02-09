from django.shortcuts import render
from .utils import images, partners
# Create your views here.


def home(request):
    return render(request, "home.html")

def sponsors(request):

    return render(request, "sponsors.html", {"images": images, "partners":partners})

def speakers(request):
    return render(request, "speakers.html")

def register(request):
    return render(request, "register.html")
