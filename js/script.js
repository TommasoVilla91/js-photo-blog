const rowElem = document.querySelector(".row");


let imgs = [];

const printImg = () => {

    let result = "";
    imgs.forEach((curImg) => {
        const {url, title} = curImg;
        console.log(curImg);
        
        result += `
        <div class="card">
        <img class="pin" src="./img/pin.svg" alt="">
        <img src="${url}" alt="" class="card-img">
        <p>${title}</p>
        </div>
        `        
    });
    rowElem.innerHTML = result;
};

const params = {
    _limit: 6
};

axios.get("https://jsonplaceholder.typicode.com/photos", {params}).then((resp) => {
    console.log(resp);

    imgs = resp.data;
    console.log(imgs);
    
    printImg();
});