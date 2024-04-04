//test
//alert("ciao")




const shoppingList = ["latte", "pasta", "formaggio", "biscotti", "pane", "marmellata"]

//prelevo la mia ul dal dom
let listElem = document.querySelector(".shopping-list");


let i = 0;
// let result = "";
while (i < shoppingList.length) {
    const curItem = shoppingList[i];
    console.log(curItem);


    //     result += `<li>${curItem}</li>`;

    //     //oppure si può stampare cosi nel dom
    const listItemElem = document.createElement("li"); //crei l'elemento "tag"
    listItemElem.innerHTML = curItem; //lo scrivi
    listElem.append(listItemElem); //aggiungi tutto nel listItemElem

    i++


    listItemElem.addEventListener("click", function () {
        //listItemElem.style.color = "yellow";
        //listItemElem.style.textDecoration = "line-through";
        listItemElem.classList.toggle("done")

    })
}
//     listElem.innerHTML = result;

//gestione aggiunta nuovo elemnto nella lista
//al click sul bottone 
//  preleva il valore all'input
//  puschiamo il nuovo valore nell'array
//  stampo il nuovo elemento nella pagina

const newInputItem = document.getElementById("new-item")

// document.getElementById("add-btn").addEventListener("click", function () {
//     const newItem = newInputItem.value;
//     shoppingList.push(newItem)

//     const listItemElem = document.createElement("li");
//     listItemElem.innerHTML = newItem;

//     listItemElem.addEventListener("click", function () {
//         //listItemElem.style.color = "yellow";
//         //listItemElem.style.textDecoration = "line-through";
//         listItemElem.classList.toggle("done")


//         listElem.append(listItemElem);

//         //ripulire il campo dall'input
//         newInputItem.value = "";
//     })

// }


document.getElementById("shopping-form").addEventListener("submit", function (event) {
    

    event.preventDefault();
    

    const listItemElem = document.createElement("li");
    listItemElem.innerHTML = newItem;

    listItemElem.addEventListener("click", function () {
        //listItemElem.style.color = "yellow";
        //listItemElem.style.textDecoration = "line-through";
        listItemElem.classList.toggle("done")


        listElem.append(listItemElem);

        //ripulire il campo dall'input
        newInputItem.value = "";
})

})



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