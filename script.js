
var baseurl = "http://localhost:8082";

// signin

const signIndata = document.querySelector("#signIndata");
signIndata.addEventListener("submit", (event) => {
  event.preventDefault();
  let username = signIndata.username.value;
  let email = signIndata.email.value;
  let phone = signIndata.phone.value;

  let url = `${baseurl}/api/register`;

  axios
    .post(url, {
      username,
      email,
      phone,
    })
    .then(function (response) {
      window.location = "login.html";
    })
    .catch(function (error) {
      console.log(error);
    });
});
// login



if(typeof(Storage)!=="undefined"){
    setTimeout(() => {
      window.localStorage.clear()
    }, 10000);
  }
  const logindata = document.querySelector('#logindata')

logindata.addEventListener('submit', (event)=>{

  event.preventDefault()
  let email = logindata.email.value
  let url = `${baseurl}/api/login`

   axios.post(url,{
     email
  })
  .then((response)=>{
    console.log(response);
    if(typeof(Storage)!=="undefined"){
      window.localStorage.setItem("email",email)
      window.location = 'otp.html'
    }else{
      console.log("no");
    }
  }) 
  .catch(function (error) {
  console.log(error.response.data);
  });

})

// otp

const otpdata = document.querySelector('#otpdata')
let email = window.localStorage.getItem("email")
 if(!email){
   window.location = 'login.html'
 }
 otpdata.addEventListener('submit', (event)=>{

 event.preventDefault()
 let otp = otpdata.otp.value
 let url = `${baseurl}/api/otp`
 let email = window.localStorage.getItem("email")
  axios.post(url,{
    otp,email
 })
 .then((response)=>{      
   if(typeof(Storage)!=="undefined"){
     window.localStorage.clear()
     window.location = 'index.html'
   }
   document.cookie = `wesfhs5afgysdgfuiif459vgt748bjhfukn=${response.data.token}` 
   
 }) 
 .catch(function (error) {
 console.log(error.response.data);
 });

})

// logout

// index
