overlay.addEventListener('click', clearOverlay)
function clearOverlay(){
    overlay.style.display = 'none'
    customInfo.style.display = 'none'
    document.body.style.overflow = 'auto'
    customInfo.innerHTML = ""
}
function showOverlay(message, type){
    window.scrollTo(0,0);
    overlay.style.display = "block"
    customInfo.style.display = "block"
    customInfo.style.marginLeft = (document.body.offsetWidth - customInfo.offsetWidth) / 2 + "px"
    document.body.style.overflow = 'hidden'
    if(type == "info"){
        customInfo.innerText = message
    }
    else if(type == "game"){
        const header = document.createElement('p')
        const desc = document.createElement('p')
        const min = document.createElement('p')
        const max = document.createElement('p')
        const button = document.createElement('button')
        customInfo.appendChild(header)
        customInfo.appendChild(min)
        customInfo.appendChild(max)
        customInfo.appendChild(desc)
        //customInfo.appendChild(button)
        if(localStorage.getItem('GKN-user') != "null"){
            customInfo.appendChild(button)
            button.innerText = "Reserve"
            button.addEventListener('click',function(){
                games.selectedIndex = message.id-1
                clearOverlay()
                window.location.href = 'index.html#gameInfos'
            })
        }

        header.innerHTML = "<b>Name:</b>" + message.bg_name
        desc.innerHTML = "<b>Description:</b> " + message.description
        min.innerHTML = "<b>Minimum number of players:</b> " + message.min_players
        max.innerHTML = "<b>Maximum number of players:</b> " + message.max_players

    }
}
window.addEventListener('resize', function(){
    customInfo.style.marginLeft = (document.body.offsetWidth - customInfo.offsetWidth) / 2 + "px"
})