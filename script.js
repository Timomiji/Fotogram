



const images = [
       
    "./img/bird-100880_1280.jpg",
    "./img/flying-dog-1633706_1280.jpg",
    "./img/penguin-2104173_1280.jpg",
    "./img/pelican-7181900_1920.jpg",

    "./img/koala-7830706_1280.jpg",
    "./img/coati-8014344_1920.jpg",
    "./img/racoon-4730137_1920.jpg",
    "./img/red-panda-1194506_1920.jpg",

    "./img/beaver-1217466_1280.jpg",
    "./img/grey-squirrel-2374339_1280.jpg",
    "./img/hamster-577257_1280.jpg",
    "./img/hedgehog-3654520_1280.jpg",
    "./img/marmot-2807219_1280.jpg",
    "./img/otter-1438378_1280.jpg",

    "./img/alpaca-656765_1280.jpg",
    "./img/camel-3540678_1280.jpg",
    "./img/horse-4999669_1280.jpg",
    "./img/goat-6717792_1920.jpg",

    "./img/ornamental-fish-2988242_1280.jpg",
    "./img/seal-1660368_1920.jpg",
   "./img/mexico-2086549_1920.jpg",
                ];


let dialogWindow = document.getElementById('dialog');







   function showAlbum(){

        const image = document.getElementById('main-container');
        image.innerHTML="";

        for (let indexImage = 0; indexImage < images.length; indexImage++) 

        image.innerHTML+=`<img tabindex=0 onclick="openDialog(${indexImage})" class="main-images" src="${images[indexImage]}">`;
    }


   
function closeAlbum() {
  document.getElementById('main-container').innerHTML = "";
}



function openDialog(indexImage){

dialogWindow.innerHTML =showDialogImage(indexImage);
dialogWindow.showModal();

}






function showDialogImage(indexImage) {
  return  `

<div class="fensterDialog">
<div class="dialog-header">
<button class="dialogButton" aria-label="Schließen Knopf" onclick="closeDialog()" >close ❌</button>
</div>
<div class="bild-limiter">
<img src="${images[indexImage]}">
</div>
<div class="dialog-footer">
<button id="prevBtn" class="dialogButton" aria-label="Vorher Bild" onclick="openDialog(${(indexImage - 1 + images.length) % images.length})" >⬅️ previ</button>
<button id="nextBtn" class="dialogButton" aria-label="Nächstes Bild"  onclick="openDialog(${(indexImage + 1) % images.length})" >next ➡️</button>
</div>

</div>
`;
    
}



function closeDialog() {
  document.getElementById('dialog').close();
}










document.addEventListener("keydown", (event) => {
  
  

  if (!dialogWindow.open) return;

  if (event.key === "ArrowRight") {
    const nextBtn = dialogWindow.querySelector(".dialog-footer button:last-child");
    nextBtn.click();
  }

  if (event.key === "ArrowLeft") {
    const prevBtn = dialogWindow.querySelector(".dialog-footer button:first-child");
    prevBtn.click();
  }

  if (event.key === "Escape") {
    closeDialog(); 
  }
  
});






   
    



