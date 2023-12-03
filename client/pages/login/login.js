// const formElement = document.querySelectorAll("login-area");
const formElement = document.querySelector(".login-wrapper .login .right .login-area")
// const usarnameInput = document.getElementsByClassName("usarname");
const usarnameInput = document.querySelector(".login-wrapper .login .right .login-area .usarname");
// const emailInput = document.getElementsByClassName("email");
const emailInput = document.querySelector(".login-wrapper .login .right .login-area .email");
// const firstPasswordInput = document.getElementsByClassName("password1");
const firstPasswordInput = document.querySelector(".login-wrapper .login .right .login-area .password1");
// const secondPasswordInput = document.getElementsByClassName("password2");
const secondPasswordInput = document.querySelector(".login-wrapper .login .right .login-area .password2");

const p1 = document.querySelector(".login-wrapper .login .right .login-area #first")
const p2 = document.querySelector(".login-wrapper .login .right .login-area #second")
const p3 = document.querySelector(".login-wrapper .login .right .login-area #third")
const p4 = document.querySelector(".login-wrapper .login .right .login-area #fourth")
const h1 = document.querySelector(".login-wrapper .login .right .login-area #welcome-username")

// formElement.addEventListener('submit', e=>{
//     e.pre
// })

const validateEmail = (email) => {
    return String(email).toLowerCase().match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };


formElement.addEventListener('submit', e=>{
    e.preventDefault();
    resetError();
    validateInputs();
});


const validateInputs = () => {
    
    
    const usarnameValue = usarnameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const firstPasswordValue = firstPasswordInput.value.trim();
    const secondPasswordValue = secondPasswordInput.value.trim();

    // console.log(usarnameValue);

    

    if(firstPasswordValue !== secondPasswordValue){
        p4.className = "open"
        p4.textContent ="Passwords do not match"
        
    }

    if(firstPasswordValue === secondPasswordValue){
        // h1.className = "h-open"
        // h1.textContent = `Welcome ${usarnameValue}`;

        window.open("./../../pages/home/home.html")

    }
}

function resetError(){
    p1.className= "";
    p2.className= "";
    p3.className= "";
    p4.className= "";
    h1.className= "";

}