showLogin()
function register(){
    const name = document.getElementById("name")
    const username = document.getElementById("username")
    const password = document.getElementById("password")
    const email = document.getElementById("email")
    const tel = document.getElementById("phone")

console.log(name.value)
console.log(username.value)
console.log(password.value)
console.log(email.value)
console.log(tel.value)
//console.log()
//console.log()

    //if(username.value.length > 2 && password.value.length > 2 && name.value.length > 2 && email.value.length > 4 && phone.value.length > 7){
        const request = new XMLHttpRequest()
        request.onreadystatechange = function(){
            if(this.readyState === XMLHttpRequest.DONE){
                if(this.status == 201){
                    console.log('registration successful')
                    showOverlay('registration successful','info')
                    showLogin(email.value)
                }
                else{
                    showOverlay('registration unsuccessful','info')
                    //alert('registration unsuccessful')
                }
            }
        }
        request.open('post', 'http://localhost:8000/api/guestregister')
        const sendThis = JSON.stringify({
            "g_username": username.value,
            "g_password": password.value,
            "g_name": name.value,
            "g_email": email.value,
            "g_phone_number": tel.value
        })
        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
        request.send(sendThis)
        console.log(sendThis)
    /*}
    else{
        alert("please fill in all the inputs")
    }*/
}

function showLogin(Email){
    document.getElementById('login').style.display = "block"
    document.getElementById('registration').style.display = "none"
    if(Email != undefined){
        emailL.value = Email
    }
    else{
        emailL.value = ""
    }
    passwordL.value = ""
}