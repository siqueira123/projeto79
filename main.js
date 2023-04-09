menuListArray =["Pizza Vegetariana",//adicionar mais itens
                "pizza quatro queijos",
                "pizza portuguesa",   
                "pizza de feijão",
                "pizza de calabresa",
                "pizza extravaganza" 
                ];

function getMenu(){
var htmldata="";
menuListArray.sort();
for(var i=0; i<menuListArray.length;i++){
    htmldata=htmldata+ menuListArray[i] + '<br>';
}  
    document.getElementById("displayMenu").innerHTML = htmldata;//Completar o código
}

function addItem(){
var htmldata;
var imgTags='<img id="img1" src="imagens/pizzaImg.png"/>'
var item=document.getElementById("addItem").value;
menuListArray.sort();
htmldata=""
for (var i=0;i<menuListArray.length; i++){
    htmldata=htmldata+imgTags+ menuListArray[i]+'<br>';
}
  document.getElementById("displayAddedMenu").innerHTML=htmldata
}
//Completar o código



function addTop(){
    var item=document.getElementById("additem").value;
        menuListArray.push(item);
    addItem();
}
//Completar o código
