
let password
let emailString

function myprofile(){
    document.getElementsByTagName('section')[0].style.display = "none"
    document.getElementsByTagName('section')[1].style.display = "none"
    times.style.display = "none"
    myProfileSection.style.display = "block"
    loadProfile()





}

function loadProfile(){
    const id = localStorage.getItem('GKN-user')
    const request = new XMLHttpRequest()
    request.onreadystatechange = function(){
        if(this.readyState === XMLHttpRequest.DONE){
            if(this.status == 200){
                const result = JSON.parse(request.response)
                console.log(result)
                usernameP.value = result.g_username
                nameP.value = result.g_name
                phoneP.value = result.g_phone_number
                emailString = result.g_email
                emailP.value = emailString
                passwordP = result.g_password
            }
            else{
                showOverlay('invalidUser','info')
            }
        }
    }
    request.open('get', ('http://localhost:8000/api/guest/'+id))
    request.send()
}

function saveProfile(){
    const id = localStorage.getItem('GKN-user')
    const request = new XMLHttpRequest()
    request.onreadystatechange = function(){
        if(this.readyState === XMLHttpRequest.DONE){
            if(this.status == 200){
                console.log('update successful')
                showOverlay('update successful','info')
                localStorage.setItem("GKN-username", JSON.parse(request.response).g_username)
                usernameSpan.innerText = localStorage.getItem('GKN-username')
            }
            else{
                showOverlay('update unsuccessful','info')
                //alert('update unsuccessful')
            }
        }
    }
    request.open('put', 'http://localhost:8000/api/guest/'+id)
    const sendThis = JSON.stringify({
        "g_username": usernameP.value,
        "g_password": password,
        "g_name": nameP.value,
        "g_email": emailString,
        "g_phone_number": phoneP.value
    })
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
    request.send(sendThis)
    console.log(sendThis)
}