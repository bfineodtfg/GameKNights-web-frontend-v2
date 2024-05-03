window.onload = load

function load(){

    
    myProfileSection.style.display = "none"
    times.style.display = "grid"
    loadGames()
    loggedInFunction()
    loadTimes()
}

function loadGames(){
    document.getElementsByTagName('section')[0].style.display = "block"
    document.getElementsByTagName('section')[1].style.display = "block"
    const request = new XMLHttpRequest()
    request.onreadystatechange = function(){
        if(this.readyState === XMLHttpRequest.DONE){
            if(this.status == 200){
                const result = JSON.parse(request.response)
                games.innerHTML = ""
                gamePlace.innerHTML = ""
                times.innerHTML = ""
                for(let item of result){
                    //console.log(item)
                    const option = document.createElement('option')
                    option.innerText = item.bg_name
                    option.gameID = item.id
                    games.appendChild(option)
                    makeCard(item)
                }
                games.disabled = false
                let selectedGame = localStorage.getItem('selectedGame')
                games.selectedIndex = parseInt(selectedGame)
                        
                    
                
            }

        }
    }
    request.open('get', 'http://localhost:8000/api/boardgame')
    request.send()
}

//item.bg_name,item.description,item.min_players,item.max_players,item.id
//name,description,minPlayers,maxPlayers,id
function makeCard(item){
    const container = document.createElement('div')
    const header = document.createElement('p')
    //const desc = document.createElement('p')
    //const min = document.createElement('p')
    //const max = document.createElement('p')
    //const button = document.createElement('button')

    container.appendChild(header)
    //container.appendChild(min)
    //container.appendChild(max)
    //container.appendChild(desc)
    //container.appendChild(button)
    /*if(localStorage.getItem('GKN-user') != "null"){
        container.appendChild(button)
        button.innerText = "Reserve"
        button.addEventListener('click',function(){
            games.selectedIndex = item.id-1
        })
    }*/

    /*button.innerText = "More"
    button.addEventListener('click', function(){
        showOverlay(item,"game")
    })*/

    container.addEventListener('click', function(){
        showOverlay(item,"game")
    })
    container.style.border = "solid 2px gray"
    container.style.borderRadius = "100%"
    container.style.aspectRatio = "1"
    container.style.margin = "7px"
    container.style.padding = "5px"
    container.style.backgroundColor = "rgba(120,100,80,0.4)"
    container.style.color = "white"
    header.style.margin = 0
    //header.style.marginTop = "20px"
    container.style.display = 'flex'
    container.style.alignItems = 'center'
    container.style.justifyContent = 'center'
    container.style.textAlign = "center"

    container.classList.add('card')

    header.innerHTML = item.bg_name
    //desc.innerHTML = "<b>Description:</b> " + item.description
    //min.innerHTML = "<b>Minimum number of players:</b> " + item.min_players
    //max.innerHTML = "<b>Maximum number of players:</b> " + item.max_players
    gamePlace.appendChild(container)
}

function logout(){
    localStorage.setItem('GKN-user',"null")
    localStorage.setItem('GKN-username',"null")
    login.style.display = "block"
    loggedIn.style.display = "none"
    console.log("logged out")
    load()
}