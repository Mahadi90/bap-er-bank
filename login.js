
document.getElementById('login-btn').addEventListener('click', function(){
   const emailField = document.getElementById('user-email');
   const email = emailField.value;

   const passwordField = document.getElementById('user-password');
   const password = passwordField.value;

   if(email === 'mahadimhs787@gmail.com' && password === 'maliha+mahadi'){
       window.location.href = 'bank.html'
   }else(
       alert('Wrong Email or Password')
   )
})