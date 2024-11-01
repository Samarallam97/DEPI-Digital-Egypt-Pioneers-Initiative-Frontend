let range = document.getElementsByClassName("range")[0]
let output = document.querySelector("output")
output.value =`200$`

range.oninput=()=>{
    console.log(range.value);
    output.value =`${range.value }$`
}

// //////////////////////////////////////////

let form = document.querySelector("form")
let _name= document.querySelector("#name")
let email = document.querySelector("#email")
let emailPattern = /^.+@.+\..+$/
let password = document.querySelector("#password")
let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/

let salary= document.querySelector("#salary")
let age = document.querySelector("#age")

let _nameError= document.querySelector(".name")
let emailError = document.querySelector(".email")
let passwordError = document.querySelector(".password")
let salaryError= document.querySelector(".salary")
let ageError = document.querySelector(".age")

// //////////////////////////////////////////

let valid = true;

form.onsubmit = (event)=>{
    event.preventDefault();
    Validation()

    if (valid) {
        
        let formData = new FormData(form)
        let applicant = {}
        formData.forEach((value,key)=>{
            applicant[key] = value
        })

        console.log(applicant);
        
    }

}

function Validation() {
    if (_name.value == "") {
        _nameError.style.display ="inline"
        valid = false
    }
    else{
        _nameError.style.display ="none"
        valid = true
    }
    
    
    if (!emailPattern.test(email.value)  ) {
        emailError.style.display ="inline"
        valid = false
    }
    else{
        emailError.style.display ="none"
        valid = true
    }
    
    if (!passwordPattern.test(password.value)  ) {
        passwordError.style.display ="inline"
        valid = false
    }
    else{
        passwordError.style.display ="none"
        valid = true
    }
    
    if (age.value < 21 ||  age.value>60 ) {
        ageError.style.display ="inline"
        valid = false
    }
    else{
        ageError.style.display ="none"
        valid = true
    }
    
    
}
