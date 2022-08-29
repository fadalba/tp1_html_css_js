function colorer()  {
   
    var x = document.querySelectorAll('.para');
        
        var y = document.querySelectorAll('.bloc');

        for (var i=0; i<x.length; i++)
   {

    x[i].classList.toggle("p");
    y[i].classList.toggle("color");

   }
}

const saisie = document.getElementsByClassName('form-control')
const submitBtn = document.getElementById('submit')
let donnee = {}
let infos = []
for(let i = 0; i<saisie.length;i++){
    saisie[i].addEventListener('keyup', ()=> {
        let value = saisie[i].value
        let id = saisie[i].id
        donnee[id] = value
    })
}

submitBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    for(let i = 0; i<saisie.length;i++){
        let affichErreur = document.getElementById(saisie[i].id+'-erreur');
        if (saisie[i].value === "")
         {
            affichErreur.innerHTML = "<p>Ce champ est requis</p>"
        } 
        else {
            affichErreur.innerHTML = ""
        }
    }
})

infos.push(donnee)
console.table(infos) 
