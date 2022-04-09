let poleOtazek = [
    {
        otazka: "Až o kolik centimetrů může 'vyrůst' Eiffelova věž v létě pod vlivem změny teplotních podmínek?",
        obrazek: 'obrazky/vez.png',
        odpovedi: ['100cm','10cm','15cm','1cm'],
        indexSpravneOdpovedi: 2
    },
    {
        otazka: 'Ze své biologické podstaty avocado je... ?',
        obrazek: 'obrazky/avocado.jpeg',
        odpovedi: ['ovoce','zelenina'],
        indexSpravneOdpovedi: 0
    },
    {
        otazka: 'V jakém roce vzlétlo první motorové letadlo?',
        obrazek: 'obrazky/letadlo.png',
        odpovedi: ['1903', '1920', '1941'],
        indexSpravneOdpovedi: 0
    }]

// console.log(poleOtazek.od)

let otazka = document.getElementById('otazka');
let obrazek = document.getElementById('obrazek');
let odpovedi = document.getElementById('odpovedi');
let poradi = document.getElementById('poradi');
let pocitadlo = document.getElementById('pocitadlo');
let vybraneOdpovedi = document.getElementById('vybraneOdpovedi');

zobrazitOtazku1();


function zobrazitOtazku1(){ 
    odpovedi.innerText = '';

    otazka.innerText = poleOtazek[0].otazka;
    obrazek.src = poleOtazek[0].obrazek;

    poleOtazek[0].odpovedi.forEach(function(odpoved, indx){
        odpoved = document.createElement('li');
        odpoved.innerText = poleOtazek[0].odpovedi[indx];
        odpovedi.appendChild(odpoved);
    })

    odpovedi.onclick = function(event){
        let zvolenaOdpoved = event.srcElement.innerHTML;
        //console.log(zvolenaOdpoved);
        if (zvolenaOdpoved == "15cm"){
            pocitadlo.dataset.celkem = parseInt(pocitadlo.dataset.celkem) + 1;
            //console.log(pocitadlo.dataset.celkem);
        }
        vybraneOdpovedi.dataset.prvniOdpoved = zvolenaOdpoved;
        
        zobrazitOtazku2();
    }
}

function zobrazitOtazku2(){ 
    odpovedi.innerText = '';

    otazka.innerText = poleOtazek[1].otazka;
    obrazek.src = poleOtazek[1].obrazek;

    poleOtazek[1].odpovedi.forEach(function(odpoved, indx){
        odpoved = document.createElement('li');
        odpoved.innerText = poleOtazek[1].odpovedi[indx];
        odpovedi.appendChild(odpoved);
    })
    poradi.innerText = "Otázka 2/3";
    
    odpovedi.onclick = function(event){
        let zvolenaOdpoved = event.srcElement.innerHTML;
        // console.log(zvolenaOdpoved);
        if (zvolenaOdpoved == "ovoce"){
            pocitadlo.dataset.celkem = parseInt(pocitadlo.dataset.celkem) + 1;
           // console.log(pocitadlo.dataset.celkem);
        }
        vybraneOdpovedi.dataset.druhaOdpoved = zvolenaOdpoved;
        zobrazitOtazku3();
    }
}

function zobrazitOtazku3(){ 
    odpovedi.innerText = '';

    otazka.innerText = poleOtazek[2].otazka;
    obrazek.src = poleOtazek[2].obrazek;
    poleOtazek[2].odpovedi.forEach(function(odpoved, indx){
        odpoved = document.createElement('li');
        odpoved.innerText = poleOtazek[2].odpovedi[indx];
        odpovedi.appendChild(odpoved);
    })
    poradi.innerText = "Otázka 3/3";

    odpovedi.onclick = function(event){
        let zvolenaOdpoved = event.srcElement.innerHTML;
        //console.log(zvolenaOdpoved);
        if (zvolenaOdpoved == "1903"){
            pocitadlo.dataset.celkem = parseInt(pocitadlo.dataset.celkem) + 1;
            // console.log(pocitadlo.dataset.celkem);
        }
        vybraneOdpovedi.dataset.tretiOdpoved = zvolenaOdpoved;
        zobrazitHodnoceni();
    }
}

let kviz = document.querySelector('.kviz');


function zobrazitHodnoceni(){
    kviz.innerText = '';
    kviz.className = 'vysledek';

    let nadpis = document.createElement('h2');
    nadpis.innerText = "Tvoje hodnocení";
    kviz.appendChild(nadpis);
    
    //PRVNI OTAZKA
    let prvniOtazka = document.createElement('h3');
    prvniOtazka.innerText = poleOtazek[0].otazka;
    kviz.appendChild(prvniOtazka);

    let vybranaPrvni = document.createElement('div');
    vybranaPrvni.innerText = "Tvoje odpověď: " + vybraneOdpovedi.dataset.prvniOdpoved;
    kviz.appendChild(vybranaPrvni);

    let vyhodnoceniPrvni = document.createElement('div');

    if(vybraneOdpovedi.dataset.prvniOdpoved == poleOtazek[0].odpovedi[poleOtazek[0].indexSpravneOdpovedi]){
        vyhodnoceniPrvni.innerText = "Tohle je SPRÁVNĚ.";
    } else {
        vyhodnoceniPrvni.innerText = "Správná odpověď: "+ poleOtazek[0].odpovedi[poleOtazek[0].indexSpravneOdpovedi];
    }
    kviz.appendChild(vyhodnoceniPrvni);

    //DRUHA OTAZKA
    let druhaOtazka = document.createElement('h3');
    druhaOtazka.innerText = poleOtazek[1].otazka;
    kviz.appendChild(druhaOtazka);

    let vybranaDruha = document.createElement('div');
    vybranaDruha.innerText = "Tvoje odpověď: " + vybraneOdpovedi.dataset.druhaOdpoved;
    kviz.appendChild(vybranaDruha);

    let vyhodnoceniDruhe = document.createElement('div');

    if(vybraneOdpovedi.dataset.druhaOdpoved == poleOtazek[1].odpovedi[poleOtazek[1].indexSpravneOdpovedi]){
        vyhodnoceniDruhe.innerText = "Tohle je SPRÁVNĚ.";
    } else {
        vyhodnoceniDruhe.innerText = "Správná odpověď: "+ poleOtazek[1].odpovedi[poleOtazek[1].indexSpravneOdpovedi];
    }
    kviz.appendChild(vyhodnoceniDruhe);

    //TRETI OTAZKA
    let tretiOtazka = document.createElement('h3');
    tretiOtazka.innerText = poleOtazek[2].otazka;
    kviz.appendChild(tretiOtazka);

    let vybranaTreti = document.createElement('div');
    vybranaTreti.innerText = "Tvoje odpověď: " + vybraneOdpovedi.dataset.tretiOdpoved;
    kviz.appendChild(vybranaTreti);

    let vyhodnoceniTreti = document.createElement('div');

    if(vybraneOdpovedi.dataset.tretiOdpoved == poleOtazek[2].odpovedi[poleOtazek[2].indexSpravneOdpovedi]){
        vyhodnoceniTreti.innerText = "Tohle je SPRÁVNĚ.";
    } else {
        vyhodnoceniTreti.innerText = "Správná odpověď: "+ poleOtazek[2].odpovedi[poleOtazek[2].indexSpravneOdpovedi];
    }
    kviz.appendChild(vyhodnoceniTreti);

    //Souhrnne hodnoceni
    let shrnuti = document.createElement('h2');
    shrnuti.innerText = "Správně " + pocitadlo.dataset.celkem + " ze 3 otázek. " + "Úspěšnost: " + Math.round((pocitadlo.dataset.celkem/3)*100) + "%.";
    kviz.appendChild(shrnuti);

}




//dale jen funkce

// for (let i = 0; i <= poleOtazek.length; i++) {
//     odpovedi.innerText = '';

//     otazka.innerText = poleOtazek[i].otazka;
//     obrazek.src = poleOtazek[i].obrazek;
//     console.log('Prvni misto' + i);

//     poleOtazek[i].odpovedi.forEach(function(odpoved, indx){
//         odpoved = document.createElement('li');
//         odpoved.innerText = poleOtazek[i].odpovedi[indx];
//         odpovedi.appendChild(odpoved);
//     })
//     console.log(i);
//     odpovedi.onclick = function(event){
//         i = i + 1;
//     }
// }
