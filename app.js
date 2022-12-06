const password = document.querySelector("#inputPassword")
const repeatPassword = document.querySelector('#inputRepeatPassword')
const errorMessage = document.querySelector("#errorPassword")

/* Error password */
repeatPassword.addEventListener("input", function(event){
    if(repeatPassword.value == ""){
        errorMessage.textContent = ""
    }   
    else if(password.value !== repeatPassword.value){
        errorMessage.textContent = "Error. Passwords don't match"
    }
})

