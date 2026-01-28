from django.shortcuts import render
from .utils import images
# Create your views here.

def sponsors(request):

    return render(request, "sponsors.html", {"images": images})

def speakers(request):
    pass
