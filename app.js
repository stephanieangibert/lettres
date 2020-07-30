let alphabet=["a","b","c","c","c","c","d","e","e","e","e","f","g","h","h","h","h","i","i","i","j","k","l","m","m","m","m","n","o","p","p","p","q","r","r","r","s","s","s","t","u","v","w","x","y","z"];
const contain=document.getElementsByTagName("div");
console.log(contain);
console.log(innerWidth);
console.log(innerHeight);

for(let j=0;j<52;j++){
    alphabet.push(alphabet[j]);
}

console.log(alphabet);

for(let i=0;i<alphabet.length;i++){
    let lettre=document.createElement("p");
    let depart=document.getElementById("depart");
  
  console.log(depart);
    lettre.setAttribute("draggable",true);
    lettre.innerHTML=alphabet[i];
   
    
console.log(lettre);
depart.appendChild(lettre);
lettre.classList.add("lettreMove");

let x = Math.floor(Math.random()*window.innerWidth);
let y = Math.floor(Math.random()*window.innerHeight);
let taille=(Math.random()*100)+25;
let duration=Math.random()*10;
lettre.style.top=y+'px';
lettre.style.left=x+'px';
lettre.style.fontSize=1+taille+'px';
lettre.style.animationDuration=5+ duration+'s';
lettre.style.animationDelay=duration+'s';
console.log(lettre.style.width);
}
let para=document.getElementsByTagName("p");
for(j=0;j<para.length;j++){
    para[j].setAttribute("id",j);
}
let box=document.getElementsByClassName("case");

console.log(box);
 let nbreLettre=document.getElementsByClassName("tenu");
 let pancarte=document.getElementById("pancarte");
 let fil=document.getElementById("fil");
let bouton=document.getElementById("btm");
let x=610;
let y=1430;

for( let i=0;i<para.length;i++){
   
     let data=para[i].getAttribute("id");
    
    
    para[i].addEventListener('click',function(){
        this.classList.remove("lettreMove");
        this.classList.add("tenu");      
        this.style.position="absolute";
        this.style.fontSize="63px";      
        this.style.left=x+"px";     
        this.style.top="400px";      
        x=x+80;
       console.log(nbreLettre);
        if (nbreLettre.length>1){
            bouton.style.opacity="1";    
           
        }  
        bouton.addEventListener('click',function(){
   
             para[i].style.left=y+"px";
             para[i].style.top="360px";
             para[i].style.fontSize="33px";
             para[i].classList.add("tenuBis"); 
             y=y+40;
           pancarte.style.display="block";
          fil.style.display="block";
          bouton.classList.remove("bout");
         
          let tl1= new TimelineMax();
          tl1 
          .to(".buttonBis",0.8,{delay:1.8,scale:1.4,ease:Back.easeOut.config(1.7)})
          bouton.classList.add("buttonBis");
          bouton.innerHTML="La pensée n'amène pas aux mots, ce sont les mots qui amènent la pensée ! ";
     
     })  
       
    })
  
     
}

