//Pour masquer la division :
// document.getElementById(identifiant_de_ma_div).style.display = none;
///Pour afficher la division :
// document.getElementById(identifiant_de_ma_div).style.display = block;

// Sélectionnez toutes les images que vous souhaitez agrandir
// let images = document.querySelectorAll('.allcontainer1');


// // // Ajoutez un gestionnaire d'événements clic à chaque image
// images.forEach(function (image) {
//     image.addEventListener('click', function () {
//         agrandirImage(image);
//     });
// });

// // // Fonction pour agrandir l'image
// function agrandirImage(image) {
// //     // Définissez la nouvelle taille de l'image
//     let nouvelleTaille = "200px"; // Vous pouvez ajuster la taille selon vos besoins

//     // Modifiez la taille de l'image
    // image.style.width = 200 px;
    // image.style.height = 200 px;
// }


// function selectionnerPersonnage(personnage1) {
//     // Masquer tous les autres personnages
//     let tousLesPersonnages = document.querySelectorAll('.allcontainer1');
//     tousLesPersonnages.forEach(function (element) {
//         element.style.display = 'none';
//     })}

//     function selectionnerPersonnage(personnage2) {
//         // Masquer tous les autres personnages
//         let tousLesPersonnages = document.querySelectorAll('.allcontainer2');
//         tousLesPersonnages.forEach(function (element) {
//             element.style.display = 'none';
//         })}

// // Fonction pour agrandir l'image
// function agrandirImage(image) {
//     // Définissez la nouvelle taille de l'image
//     let nouvelleTaille = "200px"; // Vous pouvez ajuster la taille selon vos besoins

//     // Modifiez la taille de l'image
//     // image.style.width = 200%;
//     // image.style.height = 200%
// }

// Fonction pour sélectionner un personnage
// function selectionnerPersonnage(personnage) {
//     // Masquer tous les autres personnages
//     let tousLesPersonnages = document.querySelectorAll('.allcontainer1 > div');
//     tousLesPersonnages.forEach(function (element) {
//         element.style.display = 'none';
//     });

//     // Afficher le personnage sélectionné
//     let personnageSelectionne = document.querySelector('#' + personnage);
//     personnageSelectionne.style.display = 'block';
// }
function selectionnerPersonnage(personnage) {
    // Affiche l'ID du personnage sélectionné pour déboguer
    alert(personnage);

    // Masquer tous les autres personnages
    let tousLesPersonnages = document.querySelectorAll('.allcontainer1 > div');
    tousLesPersonnages.forEach(function (element) {
        element.style.display = 'none';
    });

    // Afficher le personnage sélectionné
    let personnageSelectionne = document.querySelector('.' + personnage);
    personnageSelectionne.style.display = 'block';
}

// function selectionnerPersonnage(personnage) {
//     // Affiche l'ID du personnage sélectionné pour déboguer
//     alert(personnage);

//     // Masquer tous les autres personnages
//     let tousLesPersonnages = document.querySelectorAll('.allcontainer2 > div');
//     tousLesPersonnages.forEach(function (element) {
//         element.style.display = 'none';
//     });

//     // Afficher le personnage sélectionné
//     let personnageSelectionne = document.querySelector('.' + personnage);
//     personnageSelectionne.style.display = 'block';
// }
// // Fonction pour agrandir l'image
// function agrandirImage(image) {
//     // Définissez la nouvelle taille de l'image
//     let nouvelleTaille = "200px"; // Vous pouvez ajuster la taille selon vos besoins

//     // Modifiez la taille de l'image
//     image.style.width = '200%';
//     image.style.height = '200%';
// }

// function agrandirImage(image) {
//     // Définissez la nouvelle taille de l'image agrandie
//     let nouvelleTaille = "200%";

//     // Vérifiez si l'image est déjà agrandie
//     if (image.style.width === nouvelleTaille) {
//         // Si elle est déjà agrandie, réduisez-la à la taille normale
//         image.style.width = "100%";
//         image.style.height = "100%";
//     } else {
//         // Sinon, agrandissez l'image
//         image.style.width = nouvelleTaille;
//         image.style.height = nouvelleTaille;
//     }
// }



// function selectionnerPersonnage(personnage) {
//     // Masquer tous les autres personnages
//     let tousLesPersonnages = document.querySelectorAll('.allcontainer1 > div');
//     tousLesPersonnages.forEach(function (element) {
//         element.style.display = 'none';
//     });

//     // Afficher le personnage sélectionné
//     let personnageSelectionne = document.querySelector('.' + personnage);
//     personnageSelectionne.style.display = 'block';
// }
