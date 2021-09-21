let nameE1,errE1,telE1,errE2,mailE1,errE3,addE1,errE4,pinE1,errE5,checknode,formNode

$(function(){

nameE1=$("#fname");
errE1=$("#error1");

telE1=$("#tel");
errE2=$("#error2");


mailE1=$("#mail");
errE3=$("#error3");


addE1=$("#add");
errE4=$("#error4");


pinE1=$("#pin");
errE5=$("#error5");

checknode=$("#check");

formNode=$("#regForm")

nameE1.blur(()=>names());
telE1.blur(()=>phone());
mailE1.blur(()=>email());
addE1.blur(()=>address());
pinE1.blur(()=>pincode());

checknode.change(()=>showPass());

formNode.submit(()=>validationForm());

});

function names(){
    errE1.html("");
    let firstname=nameE1.val();
    if(firstname == ""){
        errE1.html("This field is required*");
        nameE1.css({border:"2px solid red"});
        return false;
    }
    else if(firstname.length<2){
        errE1.html(" name should contain atleast 2 characters");
        nameE1.css({border:"2px solid red"});
        return false;
    }
    else{
        nameE1.css({border:"2px solid green"});
        return true;
    }
}

function phone(){
    errE2.html("");
    let age=telE1.val();
    if(age == ""){
        errE2.html("This field is required*");
        telE1.css({border:"2px solid red"});
        return false;
    }
    else if(isNaN(age)){
        errE2.html("phone number should be correct");
        telE1.css({border:"2px solid red"});
        return false;
    }
    else if(age.length<10){
        errE2.html("please put valid phone number");
        telE1.css({border:"2px solid red"});
        return false;

    }
  else if(age.length>=10){
      errE2.html("");
      telE1.css({border:"2px solid green"});
      return true;
  }
}

          
function email(){
    errE3.html("");
    let email=mailE1.val();
    let ss=email.substring(email.indexOf("@")+1);
    if(email == ""){
        errE3.html("This field is required*");
        mailE1.css({border:"2px solid red"});
        return false;
    }
    else if(!email.includes("@") || ss==""){
        errE3.html("please put valid email id");
        mailE1.css({border:"2px solid red"});
        return false;
    }
  
    else{
        mailE1.css({border:"2px solid green"});
        return true;
    }

}
function address(){
    errE4.html("");
    let password=addE1.val();
   

  
    if(password == ""){
        errE4.html("This field is required*");
        addE1.css({border:"2px solid red"});
        return false;
    
    }
    
    else{
        addE1.css({border:"2px solid green"});
        return true;
    }


}


function validationForm(){
    let state1=names();
    let state2=phone();
    let state3=email();
    let state4=address();
   

    return (state1 && state2 && state3 && state4);
}