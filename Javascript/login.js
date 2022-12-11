//////////////////////  LogIn //////////////////////////////
document.getElementById("loginBtn").addEventListener('click', function(){

    let email   = document.getElementById("email");
    let password   = document.getElementById("password");
 
 
 
    if(email.value == "suvo@gmail.com" && password.value == 1607207){
     window.location.href = 'Account.html';
    
    }
    else{alert('!!!!Wrong Information!!!!');}
 })