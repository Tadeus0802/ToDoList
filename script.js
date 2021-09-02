const btn = document.getElementById("btn");
const input = document.getElementById("input");
const list = document.getElementById("list");
var aux = "";

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    aux = input.value;
    sessionStorage.setItem("todo",aux)
    input.value='';
    let li = document.createElement('li');
    li.innerHTML=`<input type="checkbox" id="check"> ${sessionStorage.getItem("todo")}`;
    list.appendChild(li);
}).then(function(){
    
})

