// DOM references
let text = document.querySelector(".text");
let inqA = document.querySelector(".inqA");
let inqB = document.querySelector(".inqB");
let inqC = document.querySelector(".inqC");
let androidSays = document.querySelector(".androidSays");
let refCode = document.querySelector(".refCode");
const sellProducts = document.querySelector(".sellProducts");
const salesLine = document.querySelector(".salesLine");
const androidModel = document.querySelector(".android");
let changeDroidBtn = document.querySelector(".changeDroid");

document.querySelector("#droid").onclick = () => {
  location.reload();
};

const android = {
  name: "An Android",
  greetings: ["Hei!", "Heisann!", "Hallo! Alt bra?"],
  produkt: ["Europareise", "Asiatur", "Ny-York tur"],
  produktBilder: ["./media/london.jpg", "./media/tokyo.jpg", "./media/ny.jpg"],
  inqResponse: [
    "Vennligst henvend deg til passkontroll i området B2",
    " Hva er referansekoden?",
    "Du kan veksle valuta i området C3.",
  ],
  displayAnswer: function () {
    //vis svar
    console.log(this.inqResponse[response]); //response er split tallet
    androidSays.textContent = this.inqResponse[response]; //refererer til lokal scope

    // function for salg, inkluder en forsinkelse på 3000
    this.presentProducts();
  },
  displayAnswerWait: function () {
    androidSays.textContent = this.inqResponse[response]; //refererer til lokal scope
    this.askMoreInfo();
  },
  //  salgsfunksjoner
  presentProducts: function () {
    console.log("ko0");
    //include a small delay
    console.log("these are my products");

    setTimeout(() => {
      // vis salgsreplikk og skjul text
      salesLine.style.display = "block";
      text.style.display = "none";
      // loop igjennom bilder og produkttitler og lag små varebilder
      this.produktBilder.forEach((bilder) => {
        //array metode for hver object i array...
        let product = document.createElement("div");
        product.setAttribute("class", "products");
        sellProducts.appendChild(product);
        console.log("rr4 " + bilder);
        product.style.backgroundImage = `url(${bilder})`;
      });
    }, 5000);
  },

  askMoreInfo: function () {
    if (response === "1") {
      console.log("omg33");
      androidSays.textContent = "Hva er referansenummeret?";
      refCode.style.display = "block";
    }
  },
  cancelTicket: function () {
    console.log("valid code");
    refCode.style.display = "none";
    androidSays.textContent = "Avbestilling fullført. Beløpet er refundert.";
    refCode.value = "";
    document.querySelector(".responseSound").play();
  },
};

const user = {
  inquiries: [
    "Jeg har glemt passet",
    "Jeg må avbestille",
    "Jeg må veksle valuta",
  ],
  displayinquiries: function () {
    for (i = 0; i < this.inquiries.length; i++) {
      let p = document.createElement("P");
      p.setAttribute("class", "inquiries number" + i); //legg til to klassenavn + i
      p.textContent = this.inquiries[i];
      text.appendChild(p);

      refCode.onkeyup = () => {
        //ved tastetrykk sjekk tegnlengde og gi respons
        if (refCode.value.length > 5) {
          android.cancelTicket();
          //   vis produkter
          android.presentProducts();
        }
      };
    }
  },
};

// store user selected inq.
user.displayinquiries(); // tegn brukerspørsmål.

let selectedInq;
let allInquiries = document.querySelectorAll(".inquiries");

// Trigge en funksjon ved klikk på .inquiries
// merke nummeret eller class tag for metoden android.displayAnswer();

for (i = 0; i < allInquiries.length; i++) {
  allInquiries[i].onclick = (e) => {
    // for hver felles klassenavn kjør
    let classname = e.target.getAttribute("class"); //parameter e sørger for adskilte klikket klassenavn

    hideInq();

    selectedInq = classname;
    console.log(selectedInq.slice(-1)); //kutter ut siste delen av strengen

    response = selectedInq.slice(-1);
    console.log("d3 " + response);
    // android.displayAnswer();
    if (response === "1") {
      android.askMoreInfo();
    } else {
      android.displayAnswer();
    }
  };
}

function hideInq() {
  for (i = 0; i < allInquiries.length; i++) {
    allInquiries[i].style.display = "none";
    document.querySelector(".clickSound").play();
  }
}

// droids
let droids = [
  "/media/robotsix.png",
  "/media/robotfive.png",
  "/media/robot.png",
];



function downloadDroid(callback) {
  //run first local function and then callback function

  let newDroid = Math.floor(Math.random() * 3); //random number
  console.log("dowloading new droid");

  setTimeout(() => {
    //simulated delay
    androidModel.style.backgroundImage = "url(" + droids[newDroid] + " )";
    androidModel.style.marginLeft = "100px";
    androidModel.style.animation =
      "fadeIn 10s forwards, hover 2s infinite alternate"; // to animasjoner samtidig.
    callback();
  }, 5000);
}

function messComplete() {
  console.log("Droid has completed downloading");
}

let bar = document.querySelector(".bar");
// progresjonsbar
let repeat;

changeDroidBtn.onclick = () => {
  repeat = setInterval(inc, 50);
  downloadDroid(messComplete); // first download and then messComplete function
};

let erwin = 0;
function inc() {
  erwin++;
  console.log(erwin);
  bar.style.width = erwin + "%";
  bar.textContent = erwin + "%";

  clear();

  // sound effect loading
  document.querySelector(".loadingSound").play();
}

function clear() {
  // clear setInterval
  if (erwin >= 100) {
    clearInterval(repeat);
    erwin = 0;
    // sound effect new droid
    document.querySelector(".newDroidSound").play();
  }
}
