import navbar from "../component/navbar.js"
document.getElementById("navbar").innerHTML=navbar()


import footer from "../component/footer.js"
document.getElementById("footer").innerHTML=footer()



let login=localStorage.getItem('login');


if(login=="true"){
    localStorage.setItem("login",true)
}else{
     localStorage.setItem("login",false)
 }


