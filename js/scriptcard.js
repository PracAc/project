let requestURL = '/project/js/product.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'text';
request.send();

request.onload = function () {
    let btxt = request.response;
    let b = JSON.parse(btxt);
    showsubScript(b);
};

function showsubScript(a) {
    let scripts = a['script'];
    let scriptTitle = document.querySelectorAll('.subscript--txt__box > h2');
    let scriptBox = document.querySelectorAll('.subscript--txt__box');

    let i = 0;


    scripts.filter(function (obj) {
        scriptTitle[i].textContent = obj['script_name'];
        // console.log(obj['script_name']);

        let products = scripts[i].product;
        for (let j = 0; j < products.length; j++) {
            let prodBox = document.createElement('div');
            prodBox
            prodBox.classList.add('subscript--txt', 'font-lg', 'flexbox', 'font-white', 'background-darkgreen', 'flexbox-c');
            prodBox.textContent = `상품명 : ${products[j].name}`;
            let descriptions = products[j].description;
            for (let n = 0; n < descriptions.length; n++) {
                let prodBoxInner = document.createElement('div');
                prodBoxInner.innerHTML = `<div>${descriptions[n]}</div></br>`
                prodBox.appendChild(prodBoxInner);
            }
            prodBox.textContent += products[j].stock;
            scriptBox[i].appendChild(prodBox);
        }
        i++;
    });
}
