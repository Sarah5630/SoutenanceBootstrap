// // // variables qui ciblent l'endroit ou j'insère les données récupérées en json

let resume1resume = document.querySelector("#resume1 p")
let resume1Date = document.querySelector("#resume1 h6")

let modaldate = document.querySelector(".modal-body p.date")
let modalcontenu = document.querySelector(".modal-body p.contenu")
let modalpicture = document.querySelector(".modal-body img")
let modaltitle = document.querySelector("#exampleModal1 h5")


// adresse url de l'api 
let url = 'https://www.tbads.eu/greta/kercode/ajax/?article=1'




// récupération des données en json et insertion dans le html

fetch(url)
    .then(result => result.json())
    .then(json => {
        let date = json.date.day + " " + json.date.month + " " + json.date.year;
        resume1Date.innerHTML = date;
        let content = json.content[0].substring(0, 100);
        resume1resume.innerHTML = content + "...";

        let title = json.title;
        modaltitle.innerHTML = title;
        let image = json.picture;
        modalpicture.src = image;
        modaldate.innerHTML = date;

        json.content.forEach(content => {
            let p = document.createElement('p');
            p.innerHTML = content;
            modalcontenu.appendChild(p);
        });
    })
    .catch(err => {
        console.error(err)
    });


// même methode pour le deuxième article
// ========url de l'api=====

let url2 = 'https://www.tbads.eu/greta/kercode/ajax/?article=2'

// //==============delaration des variables==========

let resume2resume = document.querySelector("#resume2 p")
let resume2Date = document.querySelector("#resume2 h6")
let modaldate2 = document.querySelector(".modal-body p.date2")
let modalcontenu2 = document.querySelector(".modal-body p.contenu2")
let modalpicture2 = document.querySelector(".modal-body .img2")
let modaltitle2 = document.querySelector("#exampleModal2 h5")

// récupération des données dans le json et insertion dans le html

fetch(url2)
    .then(result => result.json())
    .then(json => {
        let date2 = json.date.day + " " + json.date.month + " " + json.date.year;
        resume2Date.innerHTML = date2;
        let content2 = json.content[1].substring(0, 100);
        resume2resume.innerHTML = content2 + "...";

        let title2 = json.title;
        modaltitle2.innerHTML = title2;
        let image2 = json.picture;
        modalpicture2.src = image2;
        modaldate2.innerHTML = date2;


        json.content.forEach(content2 => {
            let p = document.createElement('p');
            p.innerHTML = content2;
            modalcontenu2.appendChild(p);
        });
    })
    .catch(err => {
        console.error(err)
    });