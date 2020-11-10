let img = document.getElementById("img");
img.addEventListener('click', change);

img.addEventListener('mouseover', zoomImg);
img.addEventListener('mouseout', dzoomImg);

// change l'image au click
function change() {
    //getAttribute donne l'element assets/img/img1.jpg console.log()
    if (img.getAttribute('src') =="assets/img/img1.jpg"){
    img.src = "assets/img/img2.jpg";		
}else  {
    img.src = "assets/img/img1.jpg";
}
};
// pour agrandir image
function zoomImg() {
img.style.width='800px';
};

// fonction qui fait reprendre la taille normale de l'image quand le pointeur quitte l'image
function dzoomImg() {
  img.style.width='500px';
};


