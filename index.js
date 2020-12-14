
// DOM references
let text = document.querySelector('.text');
let inqA = document.querySelector('.inqA');
let inqB = document.querySelector('.inqB');
let inqC = document.querySelector('.inqC');
let androidSays = document.querySelector('.androidSays');


const android = {
    name: 'An Android',
    greetings: ['Hei!', 'Heisann!', 'Hallo! Alt bra?'],
    produkt: ['Europareise', 'Asiatur', 'Ny-York tur'],
    showMessage: function() {
        console.log('showing message');
    },
    thisTest: function () {
        console.log(this.greetings[2]);
        this.showMessage();
        for(i = 0; i < this.produkt.length; i ++) {
            console.log(this.produkt[i]);
        }
        

        
    }
}


const user = {
    inquiries: ['Jeg har glemt passet', 'Jeg må avbestille', 'Jeg må veksle valuta'],
    inqResponse: ['Vennligst henvend deg til passkontroll i området B2', ' Hva er referansenummeret?', 'Hvor mye vil du veksle for og ønsket valuta?'],
    displayinquiries: function() {
      
        for (i = 0; i < this.inquiries.length; i++) {
            let p = document.createElement('P'); 
            p.setAttribute('class', 'inquiries number'+ i); //legg til to klassenavn + i
            p.textContent = this.inquiries[i];
            text.appendChild(p);

        }
    },
    markChosenAnswer: function() {
        
    },
    showAnswer: function() {

        

    }
}

// store user selected inq. 
user.displayinquiries();

let selectedInq = [];

let allInquiries = document.querySelectorAll('.inquiries');

for (i = 0; i < allInquiries.length; i++) {
    allInquiries[i].onclick = (e) => { // for hver felles klassenavn kjør
        console.log('show class name'); 
        let classname = e.target.getAttribute('class'); //parameter e sørger for adskilte klikket klassenavn
        
        selectedInq = classname;
        console.log(selectedInq);
        console.log(selectedInq.slice(-1)); //kutter ut siste delen av strengen 

        
    }

}

( () => {
    if(selectedInq[i].slice(-1) = 0);
})

// I just need the numbers to compare with. 
// make a chatbot that answers simple questions
// lag 'oppdater firmware' og en simple callback function for å øve på det. 
// callbacks og promises.
