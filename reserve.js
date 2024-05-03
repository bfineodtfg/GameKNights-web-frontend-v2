function loadTimes(forThisuser){
    if(localStorage.getItem('GKN-user') != "null"){
        const request = new XMLHttpRequest()
        request.onreadystatechange = function(){
            if(this.readyState === XMLHttpRequest.DONE){
                if(this.status == 200){
                    times.innerHTML = ""
                    const result = JSON.parse(request.response)
                    for(let item of result){
                        if(forThisuser && item.guest_id == parseInt(localStorage.getItem('GKN-user'))){
                            makeTime(item)
                        }
                        else if(!forThisuser){
                            makeTime(item)
                        }
                        
                    }
                }
            }
        }
        request.open('get', 'http://localhost:8000/api/appointment')
        request.send()
    }
}

function sendData(time,employee,id,cancel){

    const request = new XMLHttpRequest()
    request.onreadystatechange = function(){
        if(this.readyState === XMLHttpRequest.DONE){
            if(this.status == 200){
                //localStorage.setItem("GKN-token", request.token)
                console.log('reservation was successful')
                if(cancel){
                    showOverlay('cancel was successful','info')
                }
                else{
                    showOverlay('reservation was successful','info')
                }
                loadTimes(false)
            }
            else{
                showOverlay('reservation was unsuccessful','info')
                //alert('reservation unsuccessful')
            }
        }
    }
    request.open('put', ('http://localhost:8000/api/appointment/'+id))
    let sendThis;
    if(cancel){
        sendThis = JSON.stringify({
            "appointment": time,
            "employee_id": employee,
            "booked": 0,
            "guest_id": null,
            "board_game_id": null,
            "number_of_players": null
        })
    }
    else{
        sendThis = JSON.stringify({
           "appointment": time,
           "employee_id": employee,
           "booked": 1,
           "guest_id": localStorage.getItem('GKN-user'),
           "board_game_id": games.selectedIndex + 1,
           "number_of_players": parseInt(playerNumber.value)
       })
    }
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
    request.send(sendThis)
    console.log(sendThis)
}




function makeTime(item){
    const container = document.createElement('div')
    const header = document.createElement('h2')
    const gamePlayed = document.createElement('p')
    const players = document.createElement('p')
    const button = document.createElement('button')

    container.appendChild(header)
    container.appendChild(gamePlayed)
    container.appendChild(players)
    container.appendChild(button)
    header.innerHTML = "<b>Time:</b>" + item.appointment
    if(item.booked == 1){
        button.innerText = "Reserved"
        gamePlayed.innerHTML = "<b>Game played:</b> "
        for(let option of games){
            if(parseInt(option.gameID) == parseInt(item.board_game_id))
            {
                gamePlayed.innerText += option.innerText
                console.log(option)
            }
        }
        players.innerHTML = "<b>Number of players:</b> " + item.number_of_players
        button.disabled = true
        if(item.guest_id == parseInt(localStorage.getItem('GKN-user'))){
            button.innerText = "Cancel"
            button.disabled = false
            button.addEventListener('click',function(){
                sendData(item.appointment,item.employee_id,item.id,true)
            })
        }
    }
    else{
        button.addEventListener('click',function(){
            //localStorage.setItem('selectedGame',id)
            //window.location.href = 'reserve.html'
            console.log(localStorage.getItem('GKN-user'))
            sendData(item.appointment,item.employee_id,item.id,false)
        })
        button.disabled = false
        button.innerText = "Reserve"
        
    }

    container.style.border = "solid 2px gray"
    container.style.borderRadius = "10px"
    container.style.margin = "7px"
    container.style.padding = "5px"
    header.style.margin = 0

    //max.innerHTML = "<b>Maximum number of players:</b> " + maxPlayers
    times.appendChild(container)
}