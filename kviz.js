let otazka1 = {
    otazka: "Až o kolik centimetrů může 'vyrůst' Eiffelova věž v létě pod vlivem změny teplotních podmínek?",
    obrazek: 'obrazky/vez.png',
    odpovedi: ['100cm','10cm','15cm'],
    indexSpravneOdpovedi: 3
}

let otazka2 = {
    otazka: 'Ze své biologické podstaty avocado je... ?',
    obrazek: 'obrazky/avocado.jpeg',
    odpovedi: ['ovoce','zelenina','pečivo'],
    indexSpravneOdpovedi: 1
}

let otazka3 = {
    otazka: 'V jakém roce vzlétlo první motorové letadlo?',
    obrazek: 'obrazky/letadlo.png',
    odpovedi: ['1903', '1920', '1941'],
    indexSpravneOdpovedi: 1
}

let otazka = document.getElementById('otazka');
let obrazek = document.getElementById('obrazek');
let odpovedi = document.getElementById('odpovedi');
let poradi = document.getElementById('poradi');

zobrazitOtazku1();


//dale jen funkce

function zobrazitOtazku1(){ 
    otazka.innerText = otazka1.otazka;
    obrazek.src = otazka1.obrazek;

    otazka1.odpovedi.forEach(function(odpoved, indx){
        odpoved = document.createElement('li');
        odpoved.innerText = otazka1.odpovedi[indx];
        odpovedi.appendChild(odpoved);
    })

    odpovedi.onclick = function(event){
        
        console.log(event);
        
        let zvolenaOdpoved = event.innerHTML;
        console.log(zvolenaOdpoved);

        zobrazitOtazku2();
    }
    
}

function zobrazitOtazku2(){ 
    odpovedi.innerText = '';

    otazka.innerText = otazka2.otazka;
    obrazek.src = otazka2.obrazek;
    otazka2.odpovedi.forEach(function(odpoved, indx){
        odpoved = document.createElement('li');
        odpoved.innerText = otazka2.odpovedi[indx];
        odpovedi.appendChild(odpoved);
    })
    poradi.innerText = "Otázka 2/3"
    
    odpovedi.onclick = function(event){
        zobrazitOtazku3();}
}

function zobrazitOtazku3(){ 
    odpovedi.innerText = '';

    otazka.innerText = otazka3.otazka;
    obrazek.src = otazka3.obrazek;
    otazka3.odpovedi.forEach(function(odpoved, indx){
        odpoved = document.createElement('li');
        odpoved.innerText = otazka3.odpovedi[indx];
        odpovedi.appendChild(odpoved);
    })
    poradi.innerText = "Otázka 3/3"
}