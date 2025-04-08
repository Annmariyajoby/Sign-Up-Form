function clickSubmitButton(event){
    event.preventDefault();
    const Username=document.getElementById("Username").value;
    const Email=document.getElementById("Email").value;
    const password =document.getElementById("password").value;
    const Confirmpassword =document.getElementById("Confirmpassword").value;
    const WelcomeMessage=document.getElementById("WelcomeMessage");
    WelcomeMessage.textContent="Welcome, " +Username + '! Registration Completed';
    WelcomeMessage.style.display="block";

} 