let nameE1=document.getElementById("fname");
let errE1=document.getElementById("error1");
let pwdE1=document.getElementById("pass");
let errE4=document.getElementById("error2");

function validate1(){
    errE1.innerHTML="";
    let firstname=nameE1.value;
    if(firstname == ""){
        errE1.innerHTML="This field is required*";
        nameE1.style.border="2px solid red";
        return false;
    }
    else if(firstname.length<2){
        errE1.innerHTML="first name should contain atleast 2 characters";
        nameE1.style.border="2px solid red";
        return false;
    }
    else{

        return true;
    }
}

function validate2(){
    errE4.innerHTML="";
    let password=pwdE1.value;
    console.log(password);

    let regexp=new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+()])");
    if(password == ""){
        errE4.innerHTML="This field is required*";
        pwdE1.style.border="2px solid red";
        return false;
    
    }
    else if(regexp.test(password)==false){
        errE4.innerHTML="password should be alphanumeric with atleast one special symbol";
        pwdE1.style.border="2px solid red";
        return false;
    }
  
    else{
     
        return true;
    }


}


function validationForm(){
    let state1=validate1();

 
    let state4=validate4();
 

    return (state1 && state4);
}