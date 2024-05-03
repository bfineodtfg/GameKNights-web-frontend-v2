function myappointments(){
    document.getElementsByTagName('section')[0].style.display = "none"
    document.getElementsByTagName('section')[1].style.display = "none"
    times.style.display = "grid"
    myProfileSection.style.display = "none"
    loadTimes(true)
}