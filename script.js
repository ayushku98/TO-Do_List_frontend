const input = document.getElementById("taskInput")

const button = document.getElementById("addbutton");
const list = document.getElementById("tasklist")

button.addEventListener("click",function(){ 
    // hum log YAHA Pay ek  event banay hai  jis m click karnay 
    const task = input.value.trim()
    if(task!==""){
        const li = document.createElement ("li")
        li.textContent= task;
        console.log("task added")
        list.appendChild(li)
        input.value="";
        



    const removebutton = document.createElement("button")
    removebutton.textContent="remove"
    removebutton.style.marginLeft = "15px"; // Some space
    removebutton.style.color = "white"; // Optional styling
    removebutton.onclick = function (){
        list.removeChild(li)
        console.log("task removed")
    };
li.appendChild(removebutton)

    }
    else{
        alert("plz enter new task")
    }
})

const togglebutton = document.getElementById("toggleDarkmode")
togglebutton.addEventListener("click",()=>{
    document.body.classList.toggle("dark-mode")
})

