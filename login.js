function doIt(){
    const email = document.getElementById("emailL")
    const password = document.getElementById("passwordL")
    if(email.value.length > 5 && password.value.length > 2){
        const request = new XMLHttpRequest()
        request.onreadystatechange = function(){
            if(this.readyState === XMLHttpRequest.DONE){
                if(this.status == 200){
                    //localStorage.setItem("GKN-token", request.token)
                    localStorage.setItem("GKN-user", JSON.parse(request.response).id)
                    localStorage.setItem("GKN-username", JSON.parse(request.response).g_username)
                    console.log('successful login')
                    showOverlay('Login successful','info')
                    console.log(JSON.parse(request.response).id)
                    loggedInFunction()
                    load()
                }
                else if(this.status == 401){
                    showOverlay('Incorrect username or password','info')
                    //alert("Incorrect username or password")
                }
                else{
                    //alert('login unsuccessful')
                    showOverlay('login unsuccessful','info')
                }
            }
        }
        request.open('post', 'http://localhost:8000/api/guestlogin')
        const sendThis = JSON.stringify({
            "g_email": email.value,
            "g_password": password.value
        })
        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
        request.send(sendThis)
        console.log(sendThis)
    }
    else{
        showOverlay('Please add your email and password','info')
        //alert("Please add your email and password")
    }
}

function showRegister(){
    document.getElementById('login').style.display = "none"
    document.getElementById('registration').style.display = "block"
}

function loggedInFunction(){
    let userID = localStorage.getItem('GKN-user')
    if(userID != 'null'){
        if(userID.length > 0){
            login.style.display = "none"
            loggedIn.style.display = "block"
            usernameSpan.innerText = localStorage.getItem('GKN-username')
        }
    }
}