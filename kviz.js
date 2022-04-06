let poleOtazek = [
    {
        otazka: "Až o kolik centimetrů může 'vyrůst' Eiffelova věž v létě pod vlivem změny teplotních podmínek?",
        obrazek: 'obrazky/vez.png',
        odpovedi: ['100cm','10cm','15cm','1cm'],
        indexSpravneOdpovedi: 3
    },
    {
        otazka: 'Ze své biologické podstaty avocado je... ?',
        obrazek: 'obrazky/avocado.jpeg',
        odpovedi: ['ovoce','zelenina'],
        indexSpravneOdpovedi: 1
    },
    {
        otazka: 'V jakém roce vzlétlo první motorové letadlo?',
        obrazek: 'obrazky/letadlo.png',
        odpovedi: ['1903', '1920', '1941'],
        indexSpravneOdpovedi: 1
    }]

let otazka = document.getElementById('otazka');
let obrazek = document.getElementById('obrazek');
let odpovedi = document.getElementById('odpovedi');
let poradi = document.getElementById('poradi');

zobrazitOtazku1();


//dale jen funkce

function zobrazitOtazku1(){ 
    otazka.innerText = poleOtazek[0].otazka;
    obrazek.src = poleOtazek[0].obrazek;

    poleOtazek[0].odpovedi.forEach(function(odpoved, indx){
        odpoved = document.createElement('li');
        odpoved.innerText = poleOtazek[0].odpovedi[indx];
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

    otazka.innerText = poleOtazek[1].otazka;
    obrazek.src = poleOtazek[1].obrazek;
    poleOtazek[1].odpovedi.forEach(function(odpoved, indx){
        odpoved = document.createElement('li');
        odpoved.innerText = poleOtazek[1].odpovedi[indx];
        odpovedi.appendChild(odpoved);
    })
    poradi.innerText = "Otázka 2/3"
    
    odpovedi.onclick = function(event){
        zobrazitOtazku3();}
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
    poradi.innerText = "Otázka 3/3"
}