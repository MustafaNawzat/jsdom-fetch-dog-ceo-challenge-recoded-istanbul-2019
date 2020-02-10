const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
window.onload = function(){

    fetch(imgUrl).then(res => res.json()).then(res => insertimages(res.message))
    fetch(breedUrl).then(res => res.json()).then(res => insertbreed(res.message))
    
}
function insertimages(images) {
    const imgsArray = document.querySelector('#dog-image-container');
    images.map(img => {
       const imgTag = document.createElement('img');
       imgTag.src = img
       imgTag.width = 150
       imgTag.height = 150
       imgsArray.appendChild(imgTag);
    });
}

function insertbreed(breeds){
    const ul = document.querySelector('#dog-breeds');
    for (i in breeds){
        const li = document.createElement('li');
        li.textContent = i
        ul.appendChild(li);
    };
}
