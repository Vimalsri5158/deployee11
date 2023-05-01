function addRow(){
   
     
    

    var firstName=document.getElementById("firstName").value;
    var lastName=document.getElementById("lastName").value;
    var Address=document.getElementById("Address").value;
    var pincode=document.getElementById("pincode").value;
    var gender=document.getElementsByName("gender").value;
    var food=document.getElementsByName("food").value;
    var state=document.getElementById("state").value;
    var country=document.getElementById("country").value;

     var table=document.getElementsByTagName("table")[0];

    var newRow=table.insertRow();

    var cel1=newRow.insertCell(0);
    var cel2=newRow.insertCell(1);
    var cel3=newRow.insertCell(2);
    var cel4=newRow.insertCell(3);
    var cel5=newRow.insertCell(4);
    var cel6=newRow.insertCell(5);
    var cel7=newRow.insertCell(6);
    var cel8=newRow.insertCell(7);

    cel1.innerHTML=firstName;
    cel2.innerHTML=lastName;
    cel3.innerHTML=Address;
    cel4.innerHTML=pincode;
    cel5.innerHTML=gender;
    cel6.innerHTML=food;
    cel7.innerHTML=state;
    cel8.innerHTML=country;








};




   

