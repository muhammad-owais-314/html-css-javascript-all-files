let phoneNumber = document.getElementById('phoneNumber');
let email = document.getElementById('email');
let password = document.getElementById('password');


let phoneError = document.getElementById('phoneError');
let emailError = document.getElementById('emailError');
let passwordError = document.getElementById('passwordError');


phoneNumber.addEventListener('keyup',()=>{
    // console.log(phoneNumber.value)

    // console.log(!isNaN(phoneNumber.value))

    // console.log(phoneNumber.value.length)


    // if(isNaN(phoneNumber.value)){
    //     console.log('Entered value is not a number')
    //     phoneError.innerText = 'Invalid Phone Number'
    // }

    // if(phoneNumber.value.length < 11 || phoneNumber.value.length > 11)
    // {
    //     console.log('Phone number should be of 11 digits')
    //     phoneError.innerText = 'Invalid Phone Number'

    // }
    // else{
    //     console.log('Valid Phone Number')
    //      phoneError.innerText = ''
    // }

    let phoneRegex = /^[0-9]{11}$/

    if(phoneNumber.value.match(phoneRegex)){
        phoneError.innerText = ''
        console.log('matched')
    }
    else{
        console.log('not matched')
        phoneError.innerText = 'Invalid Phone Number'
    }
})

email.addEventListener('keyup',()=>{
   

    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/


    if(email.value.match(emailRegex)){
        emailError.innerText = ''
        console.log('matched')
    }
    else{
        console.log('not matched')
        emailError.innerText = 'Please enter a valid email address'
    }
})

password.addEventListener('keyup',()=>{
   

    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/

    if(password.value.match(passwordRegex)){
        passwordError.innerText = ''
        console.log('matched')
    }
    else{
        console.log('not matched')
        passwordError.innerText = 'Password must be 8 to 16 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character'
    }
})



