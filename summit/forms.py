from django.forms import forms
from django.contrib.auth.models import User

class SummitPassForm(forms.ModelForm):
    class Meta:
        Model: User
        fields: ["first_name", "last_name", "email", ""]