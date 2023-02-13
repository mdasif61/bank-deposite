const login=document.getElementById("login");
const email=document.getElementById("user-email");
const pass=document.getElementById("user-pass");

login.addEventListener("click",function(){
    const emailValue=email.value;
    const passValue=pass.value;
    if(emailValue=="asif@gmail.com" && passValue=="0123"){
        window.location.href="bank-js/page.html";
    }else{
        alert("try again");
    }
    email.value="";
    pass.value="";
})