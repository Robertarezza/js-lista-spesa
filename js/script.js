//test
//alert("ciao")




 const shoppingList = ["latte", "pasta", "formaggio", "biscotti","pane","marmellata"]
 let listElem = document.querySelector(".shopping-list");


 let i = 0;
// let result = "";
 while (i < shoppingList.length){
     const curItem = shoppingList[i];
     console.log(curItem);
    i++

//     result += `<li>${curItem}</li>`;

//     //oppure si può stampare cosi nel dom
   const listItemElem = document.createElement("li"); //crei l'elemento "tag"
  listItemElem.innerHTML = curItem; //lo scrivi
   listElem.append(listItemElem); //aggiungi tutto nel listItemElem
   
listItemElem.addEventListener("click", function () {
listItemElem.style.color = "yellow";
listItemElem.style.textDecoration = "line-through";
        
        
})
 }
//     listElem.innerHTML = result;


    // const listaSpesa = ["pane","latte","biscotti","marmellata"];
    // let elemList = document.querySelector(".shopping-list");


    // let i = 0;
    // let pezzo = "";
    // while (i < listaSpesa.length){
    //     pezzoPerPezzo = listaSpesa[i];
    //     console.log(pezzoPerPezzo);
    //     i++

    //     pezzo += `<li>${pezzoPerPezzo}</li>`;
    // }

    // elemList.innerHTML = pezzo;