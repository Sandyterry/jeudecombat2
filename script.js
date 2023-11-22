//Pour masquer la division :
// document.getElementById(identifiant_de_ma_div).style.display = none;
///Pour afficher la division :
// document.getElementById(identifiant_de_ma_div).style.display = block;

// Sélectionnez toutes les images que vous souhaitez agrandir
let images = document.querySelectorAll('.allcontainerp1 img');

// Ajoutez un gestionnaire d'événements clic à chaque image
images.forEach(function (image) {
    image.addEventListener('click', function () {
        agrandirImage(image);
    });
});

// Fonction pour agrandir l'image
function agrandirImage(image) {
    // Définissez la nouvelle taille de l'image
    let nouvelleTaille = "200px"; // Vous pouvez ajuster la taille selon vos besoins

    // Modifiez la taille de l'image
    image.style.width = 200 px;
    image.style.height = 200 px;
}