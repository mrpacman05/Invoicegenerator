let but1 =document.getElementById("but-1")
let but2 =document.getElementById("but-2")
let but3 =document.getElementById("but-3")
let serv =document.getElementById("service")
let serviceamnt=document.getElementById("service-amnt")
// let snd =document.getElementsByName(".snd-inv")
let snd =document.querySelector(".snd-inv")
let ttlamnt =document.querySelector(".ttl-a")

ttlamnt.innerHTML=0
let ttl =0
but1.addEventListener("click",function(){
    let washcar ="Wash Car: "
    let amnt= 10;
    serv.innerHTML += washcar+"<br>"
    serviceamnt.innerHTML +="$"+ amnt + "<br>" 
    ttl += amnt
    ttlamnt.innerHTML = ttl 
}, {once : true})

but2.addEventListener("click",function(){
    
    let washcar ="Mow Lawn: "
    let amnt= 20;
    serv.innerHTML += washcar + "<br>" 
    serviceamnt.innerHTML +="$"+ amnt + "<br>" 
    ttl += amnt
    ttlamnt.innerHTML = ttl 
 }, {once : true})

 but3.addEventListener("click",function(){
    
    let washcar ="Pull Weeds: "
    let amnt= 30;
    serv.innerHTML += washcar + "<br>" 
    serviceamnt.innerHTML +="$"+ amnt + "<br>" 
    ttl += amnt
    ttlamnt.innerHTML = ttl 
 }, {once : true})

 snd.addEventListener("click",function(){
    location.reload();

 })