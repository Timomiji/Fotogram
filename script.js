  
      let images = [
       
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



let name = [

      "Gelbbrustara",
      "Riesenflughund",
      "Felsenpinguin",
      "Rosapelikan",


      "Koala",
      "Nasenbär",
      "Waschbär",
      "Panda",


      "Bisamratte",
      "Grauhörnchen",
      "Zwerghamster",
      "Weißbauchigel",
      "Präriehund",
      "Fischotter",


      "Alpaka",
      "Kamel",
      "Shetlandpony",
      "Zwergziege",


      "Koi",
      "Seehund",
      "Meeresschildkröte"

];



let beschreibung = [

      "<b>Fakt:</b> <br> 80 bis 90 cm lang  bis zu 40 Jahre alt ",
      "<b>Fakt:</b> <br> Flügelspannweite von bis zu 1,5 Metern <br> Gewicht von etwa 1,5 kg",
      "<b>Fakt:</b> <br> etwa 50-60 cm groß <br> gelben Federbüschel nennt man Supercilium",
      "<b>Fakt:</b> <br> wiegt 9-15 kg <br> Flügelspannweite von bis zu 3,6 Metern",


      "<b>Fakt:</b> <br> schlafen 18 bis 22 Stunden <br> ernährt sich von Eukalyptusblätter  ",
      "<b>Fakt:</b> <br> bis zu 65 cm lang <br> Gewicht zwischen 3,5 und 6 kg. ",
      "<b>Fakt:</b> <br> geschickte Taster mit fünf Fingern <br> halten Winterruhe statt Winterschlaf",
      "<b>Fakt:</b> <br> Kopf-Rumpf-Länge von etwa 50 bis 70 cm <br> 30 bis 50 cm langen Schwanz <br> wiegt zwischen 3 und 6 Kilogramm ",


      "<b>Fakt:</b> <br> dämmerungs- und nachtaktiv <br> können bis zu zehn Minuten tauchen",
      "<b>Fakt:</b> <br> 30 cm Kopf-Rumpf-Länge <br> 400-710 Gramm Gewicht <br> somit größer und plumper <br> als das Europäische Eichhörnchen",
      "<b>Fakt:</b> <br> schlafen tagsüber werden abends aktiv",
      "<b>Fakt:</b> <br> Kopf-Rumpf-Länge von etwa 14 bis 25 cm <br> Stacheln sind weiß mit dunklen Spitzen",
      "<b>Fakt:</b> <br> Kopf-Rumpf-Länge von etwa 20 bis 35 cm <br> Art von Erdhörnchen und eng <br>mit Murmeltieren verwandt, aber nicht mit Hunden ",
      "<b>Fakt:</b> <br> dichteste Fell mit bis zu 80.000 Haaren<br> pro Quadratzentimeterhalten <br> beim Schlafen Händchen",


      "<b>Fakt:</b> <br> <b>Huacaya</b> mit lockigem, voluminösem Vlies <br> <b>Suri</b> mit langen, seidigen Zotten<br> Lebensdauer von 15 bis 25 Jahren",
      "<b>Fakt:</b> <br> Höcker ist ein Fettspeicher <br> drei Augenlider, die ihre Augen <br> vor Sand schützen",
      "<b>Fakt:</b> <br> stammen von schottischen Shetland-Inseln <br> ein Stockmaß von bis zu 107 cm ",
      "<b>Fakt:</b> <br> intelligent, neugierig und erfinderisch <br> sind auch sozial und nachtragend ",


      "<b>Fakt:</b> <br> intelligente, langlebige Zierfische <br> bis zu 60 Jahre und älter werden können",
      "<b>Fakt:</b> <br> können bis zu 30 Minuten tauchen ",
      "<b>Fakt:</b> <br> bis zu 1,5 Meter lang <br> über 300 kg schwer"

];



function showAlbum() {
  document.getElementById("title_album").style.display = "block";
  document.getElementById("title_memory").style.display = "none";

  generateAlbum(); // generiert die Bilder für das Album
}

function showMemory() {
  document.getElementById("title_album").style.display = "none";
  document.getElementById("title_memory").style.display = "block";





    renderMemory(); 
}




function generateAlbum() {
  const container = document.getElementById("main_content");
  container.innerHTML = images.map((src, index) => `
    <div class="album_card">
      <img tabindex=0 src="${src}" class="Mainbilder" onclick="clickImg(${index})">
    </div>
  `).join("");
}










function renderMemory() {
  const mainContainer = document.getElementById("main_content");

  // 1️⃣ Doppeltes Array
  let doubled = [...images, ...images];

  // 2️⃣ Zufällig mischen
  for (let i = doubled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [doubled[i], doubled[j]] = [doubled[j], doubled[i]];
  }

  // 3️⃣ HTML generieren mit data-value
  mainContainer.innerHTML = doubled.map((src, index) => `
    <div id="card" class="card" data-value="${src}" onclick="flipCard(this)">
      <div class="inner">
        <div class="front">
          <img tabindex=0 src="./img/cardDeck.png" class="Mainbilder">
        </div>
        <div class="back">
          <img tabindex=0 src="${src}" class="Mainbilder">
        </div>
      </div>
    </div>
  `).join("");

   
       const cards = mainContainer.querySelectorAll('.card');
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('animationMischel');
    }, index * 200); // jede Karte 0,2s später
  });   
}




let flippedCards = [];

function flipCard(card) {
  const inner = card.querySelector(".inner");

  // Karte flipt nur, wenn sie noch nicht offen ist
  if (card.classList.contains("matched") || flippedCards.includes(card)) return;

  inner.style.transform = "rotateY(180deg)";
  card.classList.add("pending"); // Standardzustand

  flippedCards.push(card);

  if (flippedCards.length === 2) {
    const firstValue = flippedCards[0].dataset.value;
    const secondValue = flippedCards[1].dataset.value;

    if (firstValue === secondValue) {
      // Karten sind richtig → grün markieren
      flippedCards.forEach(c => {
        c.classList.remove("pending");
        c.classList.add("matched");
      });
      flippedCards = [];
    } else {
      // Karten falsch → rot markieren, dann zurückflippen
      flippedCards.forEach(c => {
        c.classList.remove("pending");
        c.classList.add("wrong");
      });

      setTimeout(() => {
        flippedCards.forEach(c => {
          c.querySelector(".inner").style.transform = "rotateY(0deg)";
          c.classList.remove("wrong");
        });
        flippedCards = [];
      }, 1000);
    }
  }
}















 
function clickImg(imagesIndex) {


 console.log(`Ich bin das Bild mit dem Index ${imagesIndex}`);

  let dialogWindow = document.getElementById('dialog');
  let overlay = document.getElementById('overlay');


  // Overlay sichtbar machen
  overlay.classList.remove('hidden');

  showImage(imagesIndex);
}

function showImage(imagesIndex) {
  let dialog = document.getElementById("dialog");
  dialog.innerHTML = `
   

       <div class="dialog-content">
   
     <header class="Bildheader">

     <button class="buttonDialog" onclick="closeDialog()">❌ Schließen</button>
     
     </header>
     
       <figure>
  
       <img src="${images[imagesIndex]}" class="Bild">


    
       
       
       <figcaption>    
          
          <h2>${name[imagesIndex]}</h2>

       <p> ${beschreibung[imagesIndex]}</p>

      </figcaption> 
      
   </figure>

    <div class="Bildfooter">
               <button id="prevBtn" class="buttonDialog" onclick="showImage(${(imagesIndex - 1 + images.length) % images.length})">⬅️ Zurück</button> 

            <button id="nextBtn" class="buttonDialog" onclick="showImage(${(imagesIndex + 1) % images.length})">➡️ Weiter</button>

    </div>

 </div>
    
   
  `;

 dialog.showModal(); // ✅ wichtig: öffnet den Dialog
}
  




//function showImage(imagesIndex) {
 // let dialog = document.getElementById("dialog");
//  dialog.innerHTML = `
 //   <img src="${images[imagesIndex]}" width="400"><br>
 //   <button onclick="showImage(${imagesIndex - 1 < 0 ? images.length - 1 : imagesIndex - 1})">⬅️ Zurück</button>
 //   <button onclick="showImage(${imagesIndex + 1 >= images.length ? 0 : imagesIndex + 1})">➡️ Weiter</button>
//    <button onclick="closeDialog()">❌ Schließen</button>
//  `;
 // dialog.showModal();
//}








function closeDialog() {
  document.getElementById("dialog").close();
  overlay.classList.add('hidden');
}
    


      
  function toggleRespMenu() {
        
        document.getElementById("resp_menu").classList.toggle('closed_menu')
         document.getElementById("resp-button1").classList.remove("buttonAlbum");
        document.getElementById("resp-button2").classList.remove("buttonMemory");
          document.getElementById("resp-button3").classList.toggle("d_none");

    }







document.addEventListener("keydown", (event) => {
  const dialog = document.getElementById("dialog");
  
  // Nur reagieren, wenn der Dialog geöffnet ist
  if (!dialog.open) return;

  if (event.key === "ArrowRight") {
    const nextBtn = dialog.querySelector(".Bildfooter button:last-child");
    nextBtn.click();
  }

  if (event.key === "ArrowLeft") {
    const prevBtn = dialog.querySelector(".Bildfooter button:first-child");
    prevBtn.click();
  }

  if (event.key === "Escape") {
    closeDialog(); // ESC schließt den Dialog
  }
});
