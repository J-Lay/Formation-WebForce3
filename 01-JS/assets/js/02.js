// -- Déclarer un tableau Indexé.
var monTableau = [];
var myArray    = new Array;

monTableau[0] = "Rahma"
monTableau[1] = "Freddy"
monTableau[2] = "Ousmane"

// -- Affiche toute les données
console.log(monTableau);

// -- Affiche Freddy
console.log(monTableau[1]);

var NosPrenoms = ["Salim", "Greg", "Cheffia", "Glenn", "Julien"];
console.log(NosPrenoms);

// - Déclarer et Affcter des Valeurs à un Objet.
// PAS DE TABLEAU ASSOCIATIF EN JAVASCRIPT

var Coordonnee = { 
    prenom : "Jean-François",
    nom    : "LAY",
    age    : 82
};

console.clear();
console.log(Coordonnee);
console.log(Coordonnee['prenom']);
console.log(Coordonnee.prenom);
console.log(Coordonnee.nom);

// -- Je vais créer 2 tableaux indexé
/* var listeDePrenoms= ["Ousmane", "Cheffia", "Hugo"];
var listeDeNoms = ["MAMA", "BENALLAL", "LIEGEARD"];
var Annuaire = [ listeDePrenoms, listeDeNoms ];
console.log(Annuaire);
document.write( Annuaire[0][1]);
document.write( ' ' );
document.write( Annuaire[1][1]);
 */


    /* -------------------------------------------------\
    |                    EXERCICE :-)                   |   
    |   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~   |
    |   Créez un Tableau à 2 dimensions appelé          |
    |   "AnnuaireDesStagiaires" qui contiendra          |
    |   toutes les coordoonnées pour chaque stagiaire.  |
    |                                                   |
    |   Ex. Nom, Prénom, Tel                            |
    \------------------------------------------------- */


console.clear();




/* var listeDePrenoms = ["Jean-François", "Pransun", "James"];
var listeDeNoms = ["LAY", "BALASUBRAMANIAM", "RANAIVOSON"];
var listeDeTel =["0606060606", "0707070707", "0808080808"]
var AnnuaireDesStagiaires = [listeDePrenoms, listeDeNoms, listeDeTel]
console.log(AnnuaireDesStagiaires)
document.write(AnnuaireDesStagiaires[0][1]);
document.write( ' ' );
document.write(AnnuaireDesStagiaires[1][1]);
document.write( ' ' );
document.write(AnnuaireDesStagiaires[2][1]);  */


/* var AnnuaireDesStagiaires = [
    { prenom : "Hugo", nom : "LIEGEARD", tel : "0783 97 15 15" },    
    { prenom : "Salim", nom : "SOUMARE", tel : "XXXX XX XX XX" },
    { prenom : "Pransun", nom : "BALASUBRAMANIAM", tel : "XXXX XX XX XX" },
];

console.log(AnnuaireDesStagiaires); */




// -- Exemple 3D

var Contacts = [

    {
        prenom      :   "Hugo",
        nom         :   "LIEGEARD",
        coordonnees :   {
            email   :   "wf3@hl-media.fr",
            tel     :   {
                fixe    :   "0596 108 328",
                fax     :   "0596 108 632",
                port    :   {
                    prive   :   "07 83 97 10 15",
                    pro     :   "07 83 97 15 15"
                }
            },
            adresse :  {
                ville   :   "Ducos",
                cp      :   "97224",
                region  :   "Martinique",
                pays    :   {
                    code    :   "FR",
                    nom     :   "France"
                }
            }
            
        }
    },

    {
        prenom      :   "Rodrigue",
        nom         :   "NOUEL",
        coordonnees :   {
            email   :   "rodrigue.nouel@hl-media.fr",
            tel     :   {
                fixe    :   "0596 56 78 89",
                fax     :   "0596 32 15 22",
                port    :   {
                    prive   :   "0696 78 89 56",
                    pro     :   "0696 89 23 45"
                }
            },
            adresse :  {
                ville   :   "Fort-de-France",
                cp      :   "97200",
                region  :   "Martinique",
                pays    :   {
                    code    :   "FR",
                    nom     :   "France"
                }
            }
            
        }
    },

    {
        prenom      :   "Gregory",
        nom         :   "D'HAEM",
        coordonnees :   {
            email   :   "greg.dhaem@hl-media.fr",
            tel     :   {
                fixe    :   "0675 89 78 45",
                fax     :   "",
                port    :   {
                    prive   :   "0620 86 78 45",
                    pro     :   ""
                }
            },
            adresse :  {
                ville   :   "les Mesnuls",
                cp      :   "78490",
                region  :   "Ile de France",
                pays    :   {
                    code    :   "FR",
                    nom     :   "France"
                }
            }
            
        }
    }

];

console.log(Contacts);
console.log(Contacts[0].coordonnees.email);
console.log(Contacts[1].coordonnees.email);
console.log(Contacts[2].coordonnees.email);

// console.log(Contacts[0].coordonnees.adresse.pays.nom);



/*--------------------------------------\
|            AJOUTER UN ELEMENT         |
\--------------------------------------*/

var Couleurs= ['Route','Jaune','Vert'];

/* 
* Si je souhaite ajouter un élément  dans mon tableau.
* Je fais appel à la fonction push() qui me renvoie le nombre d'éléments.
*/

console.clear();
console.log(Couleurs);
var nbElementsDeMonTableau = Couleurs.push('Orange');
console.log(Couleurs);
console.log(nbElementsDeMonTableau);

/* 
* https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/unshift
* NB : La fonction unshift() permet d'ajouter un ou plusieurs éléments de mon tableau au début de mon tableau et d'en récuperer la valeur.
* Je peux accessoirement récuperer cette valeur dans une variable.
*/

/* 
* La fonction pop() me permet de supprimer un ou plusieurs éléments de mon tableau et d'en récuperer la valeur.
* Je peux accessoirement récupérer ctte valeur dans une variable.
*/

var monDernierElement = Couleurs.php();
console.log(Couleurs);
console.log(monDernierElement);

/* 
* La même chose est possible avec le premier élément en utilisant la fonction shift.
*---
* NB = La fonction splice() vous permet de sortir un ou plusieurs élément de votre tableau.
*/