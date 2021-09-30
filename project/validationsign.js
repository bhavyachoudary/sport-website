let nameE1=document.getElementById("fname");
let errE1=document.getElementById("error1");

let lnameE1=document.getElementById("lname");
let errE2=document.getElementById("error2");


let mailE1=document.getElementById("email");
let errE3=document.getElementById("error3");


let pwdE1=document.getElementById("pass");
let errE4=document.getElementById("error4");


let cpwdE1=document.getElementById("c-pass");
let errE5=document.getElementById("error5");

let checknode=document.getElementById("check");

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
        nameE1.style.border="2px solid green";
        return true;
    }
}

function validate2(){
    errE2.innerHTML="";
    let lastname=lnameE1.value;
    if(lastname == ""){
        errE2.innerHTML="This field is required*";
        lnameE1.style.border="2px solid red";
        return false;
    }
    else if(lastname.length<2){
        errE2.innerHTML="last name should contain atleast 2 characters";
        lnameE1.style.border="2px solid red";
        return false;
    }
    else{
        lnameE1.style.border="2px solid green";
        return true;
    } 
}

          
function validate3(){
    errE3.innerHTML="";
    let email=mailE1.value;
    
    let regexpmail=new RegExp("^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$");
    if( email== ""){
        errE3.innerHTML="This field is required*";
        emailE1.style.border="2px solid red";
        return false;
    
    }
    else if(regexpmail.test(email)==false){
        errE3.innerHTML="email should be in correct format";
        emailE1.style.border="2px solid red";
        return false;
    }
  
    else{
        emailE1.style.border="2px solid green";
        return true;
    }

}
function validate4(){
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
        pwdE1.style.border="2px solid green";
        return true;
    }


}
function validate5(){
    errE5.innerHTML="";
    let password=pwdE1.value;
    let confirmpass=cpwdE1.value;

    if(confirmpass==""){
        errE5.innerHTML="This field is required*";
        cpwdE1.style.border="2px solid red";
        return false;

    }
    else if(confirmpass!=password){
        errE5.innerHTML="confirm password should be natched with password";
        cpwdE1.style.border="2px solid red";
        return false;
    }
  
    else{
        cpwdE1.style.border="2px solid green";
        return true;
    }

}
function showPass(){
    if(checknode.checked){
        pwdE1.type="text";
        cpwdE1.type="text";
    }
    else{
        pwdE1.type="password";
        cpwdE1.type="password";
    }
}
function validationForm(){
    let state1=validate1();
    let state2=validate2();
    let state3=validate3();
    let state4=validate4();
    let state5=validate5();

    return (state1 && state2 && state3 && state4 && state5);
}