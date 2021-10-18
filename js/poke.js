/////////////////////////////////////////////////////////////////////////////////////////
// Titre professionnel DWWM 
// ECF 1 : Frontend responsive Ajax Pokémon
// Auteur : Arnaud Boisjardin
// Date : 2021
/////////////////////////////////////////////////////////////////////////////////////////
// Dépendance avec la librairie jQuery 3.5.1
//                 la librairie Popper 1.16.1
//                 la librairie Bootstrap 4.5.3
/////////////////////////////////////////////////////////////////////////////////////////
// Testé sur : Chrome : Version 89.0.4389.72 (Build officiel) (64 bits)
//             Firefox : Version 85.0 (64 bits)
/////////////////////////////////////////////////////////////////////////////////////////
// Utilisation du mode strick pour la robustesse du code js
"use strict";
/////////////////////////////////////////////////////////////////////////////////////////
//                           Affichage de l'heure                                      //
/////////////////////////////////////////////////////////////////////////////////////////
// Au chargement de la page la fonction s'exécute sur toutes les pages html et génére un message d'erreur sur les pages ou l'ID 'div_horloge' d'execution dans la console
// Ne lance la fonction que si l'ID 'date_du_jour' est présent sur la page html
var affichage = document.getElementById("date_du_jour")

if (affichage)
    window.onload = function() {
        horloge("date_du_jour");
    };
// else console.log("Pas besoin d'afficher la date");
function horloge(el) {
    if (typeof el == "string") {
        el = document.getElementById(el);
    }
    // on constitue les différentes information que l'on souhaite de Date Constructor 
    function actualiser() {
        let date = new Date();
        let dateActuelle = date.toLocaleString("en-EN", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });
        el.innerHTML = dateActuelle;
    }
    // Atualiser  toutes les 100 millisecondes, donc toutes les secondes
    actualiser();
    setInterval(actualiser, 100);
}
/////////////////////////////////////////////////////////////////////////////////////////
//                               Affichage Pokemons                                    //
/////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function() {
    $(".btn").click(function() {
        //récupére l'id du bouton correspondant a cette card en particulier
        $(this).attr("id");
        //ajoute un paramétre a l'Url de la page de destination, l'id récupéré
        var urlId = "fiche.html" + "?" + "id=" + this.id
            //charge la nouvelle url de destination
        window.location.href = urlId;
    });
    // Identifie le pokemon selectionné et utilise PokeAPI pour afficher son détail
    if ($('.pokemon').length) {
        $(function fichePokemon() {
            // Récupére sur la page d'arrivée le paramétre passé dans l'Url 
            var searchParams = new URLSearchParams(window.location.search);
            var newId = (searchParams.get("id"))
                // Utilise cet Id pour cibler les caractéristiques du pokemon dans l'Api
            var pokId = newId; //
            //console.log(pokId);
            var apiData = {
                url: "https://pokeapi.co/api/v2/",
                type: "pokemon",
            };
            var apiUrl = `${apiData.url}${apiData.type}/${pokId}`;
            // console.log(apiUrl);

            fetch(apiUrl)
                .then((data) => data.json())
                .then((pokemon) => generateHtml(pokemon));

            const generateHtml = (data) => {
                // console.log(data);
                // la card du pokemon dont on a récupéré l'Id avec ces informations
                const html = ` 
                    <div class="card mt-3 mb-5" >
                            <div class="card-header">
                                <h5 class="card-title text-center name">${data.name}</h5>
                            </div>
                            <div class="backM">
                                <img src=${data.sprites.other["official-artwork"].front_default} width="200" class="card-img-top" alt="..." />
                            </div>
                            <div class="card-body">
                                <p class="card-text">Id : ${data.id}</p>
                            </div>
                            <div class="card-footer">
                                <p> Height: ${data.height}</p> 
                                <p> Weight: ${data.weight}</p> 
                                <p> Species: ${data.species.name}</p>
                                <p> Ability name: ${data.abilities[0].ability.name}</p>
                                <p> Slot: ${data.abilities[0].slot}</p>
                                <p> Base experience: ${data.base_experience}</p>  
                            </div>
                    </div>
                         `;
                // on insére le html dans la div de class pokemon
                ($('.pokemon').html(html));
            };
        });
    };
});