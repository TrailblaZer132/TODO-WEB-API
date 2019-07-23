var ul=document.getElementById("list")
var li




var addButton=document.getElementById("add")
addButton.addEventListener("click", addItem)

var removeButton=document.getElementById("remove")
removeButton.addEventListener("click",removeItem)

var removeAll=document.getElementById("removeall")
removeAll.addEventListener("click",removeAllItem)







function addItem(){
    var input=document.getElementById("input")
    var item=input.value
    var textnode=document.createTextNode(item)

    if(item===""){
        let para=document.createElement("p")
        para.textContent="Enter Something First!"
        document.getElementById("paragraph").appendChild(para)
    }
    else{
        //create li
        li=document.createElement("li")

        //create checkbox
        var checkbox=document.createElement("input")
        checkbox.type="checkbox"
        checkbox.setAttribute("id","check")

        //create label
        var label=document.createElement("label")

        label.setAttribute("for","item")

        ul.appendChild(li)
        li.appendChild(checkbox)
        label.appendChild(textnode)
        li.appendChild(label)
        ul.insertBefore(li,ul.childNodes[0])
        
        //fade in
        setTimeout(() => {
            li.className="visual"
        }, 3);

        input.value=""

    }
}

function removeItem(){
    li=ul.children
    for (let index = 0; index < li.length; index++) {
        // for(;li[index]&&li[index].children[0].checked;)
        while(li[index]&&li[index].children[0].checked){
            ul.removeChild(li[index])
            //for removing todo by clicking one by one: index++
        }
        
    }
}

function removeAllItem(){
    li=ul.children 
    for (let index = li.length-1; index >=0; index--) {
        ul.removeChild(li[index])
        
    }
}