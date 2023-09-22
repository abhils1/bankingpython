from django.shortcuts import render, redirect
from .models import Form

# Create your views here.
def index(request):
    obj = Form.objects.all()
    return render(request, "index.html", {'result': obj})

def form_details(request):
    if request.method=="POST":
        name=request.POST.get('name',)
        gender = request.POST.get('gender', )
        dob = request.POST.get('dob', )
        age = request.POST.get('age', )
        mob_no = request.POST.get('mob_no', )
        email = request.POST.get('email', )
        address = request.POST.get('address', )
        dist = request.POST.get('dist', )
        branch = request.POST.get('branch', )
        acc_type = request.POST.get('acc_type', )
        mat_pro = request.POST.get('mat_pro', )




        form=Form(name=name,gender=gender,dob=dob,age=age,mob_no=mob_no,email=email,address=address,dist=dist,branch=branch,acc_type=acc_type,mat_pro=mat_pro)
        form.save()
        return redirect('bank:message')
    return render(request,'form.html')

def message(request):
    return render(request, "msg.html")

def index1(request):
    return render(request, "index1.html")