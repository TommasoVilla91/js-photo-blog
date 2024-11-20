// dichiarazione
const rowElem = document.querySelector(".row");
const modalElem =document.querySelector(".modal");

// variabile di supporto per creare array
let imgs = [];

// stampare immagini nell'html creando dei tag
const printImg = () => {

    // destrutturazione oggetti immagini
    let result = "";
    imgs.forEach((curImg) => {
        const {url, title} = curImg;
        console.log(curImg);
        
        // assegnazione valori
        result += `
        <div class="card">
        <img class="pin" src="./img/pin.svg" alt="">
        <img src="${url}" alt="" class="card-img">
        <p>${title}</p>
        </div>
        `        
    });
    // stampa in pagina
    rowElem.innerHTML = result;

    // funzioni per far comparire e scomparire il modal con l'immagine selezionata
    // dichiarazione elementi
    const cardImgElem = document.querySelectorAll(".card-img");
    const closeBtnElem = document.querySelector(".close-btn");
    
    // al click far comparire l'immagine nel modal
    cardImgElem.forEach((cardImg) => {  
        console.log(cardImg);
      
        cardImg.addEventListener("click", () => {
            modalElem.style.display = 'block'
            const imgUrl = cardImg.src;
            document.querySelector(".modal-img").src = imgUrl;
        });       
    });
    
    // al click sul pulsante farla scomparire insieme al modal
    closeBtnElem.addEventListener("click", () => {
        modalElem.style.display = "none";
    });
    
};


// funzione axios per generare massimo 6 immagini con titolo
const params = {
    _limit: 6
};

axios.get("https://jsonplaceholder.typicode.com/photos", {params}).then((resp) => {
    console.log(resp);

    imgs = resp.data;
    console.log(imgs);
    
    printImg();
});

