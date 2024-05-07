let s = document.getElementById("signup")
let loginSection = document.getElementById("login");
loginSection.style.display = "none";
let span =document.getElementById("span")

let main=document.getElementById("main")
main.style.display="none"

let signup=()=>{

let signs=document.getElementById("user").value
let signss=document.getElementById("semail").value

let signsss=document.getElementById("password").value

localStorage.setItem("users",JSON.stringify({user:signs,email:signss,password:signsss}))
s.style.display = "none"
loginSection.style.display= "block"

}

function login(){
    let logs = document.getElementById("lemail").value
    let userData = JSON.parse(localStorage.getItem("users"))
    let pa = document.getElementById("lpass").value
    console.log(userData.password)
    if(userData.email===logs&&userData.password===pa){
        // window.location.assign("")
        span.innerHTML=userData.user
        main.style.display="block"
        loginSection.style.display="none"
    }
    else{
        alert("invalid")
    }
}
