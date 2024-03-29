alert('WOW ! Tu es toujours avec moi... !');

// Deux slash pour faire un commentaire uniligne.

/*
    Ici, je peux faireun commentaire 
    sur plusieurs lignes.

    Raccourci : CTRL + / ( commentaire uniligne )
            ou: ALT + SHIFT + A ( commentaire général )
*/

// -- 1. Déclarer une variable en JS
var Prenom;

// -- 2. AFficher une valeur
Prenom= "Jean-François";

// -- 3. Afficher la valeur de ma variable dans la console
console.log(Prenom);

/*-------------------------------------------------- 
| ~ ~ ~ ~ ~   LES TYPES DE VARIABLES   ~ ~ ~ ~ ~ ~ |
---------------------------------------------------*/

// -- Ici, typeof me permet de connaitre le type de ma variable.
console.log(typeof Prenom);

// -- Déclaration d'un Nombre
var Age = 40;

// -- Afficher dans la console
console.log(Age);

// -- Connaitre son type
console.log(typeof Age);

/*-------------------------------------------------\ 
| ~ ~ ~ ~ ~   LA PORTEE DE VARIABLES   ~ ~ ~ ~ ~ ~ |
|                                                  |
| Les variables déclarées directement à la racine  |
| du fichier JS sont appelées variables GLOBALES.  |
|                                                  |
| Elles sont disponible dans l'ensemle de votre    |
| document, y compris dans les fonctions.          |
|                                                  |
| ###                                              |
|                                                  |
| Les variables déclarés à l'intérieur d'une       |
| fonction sont appelées variable LOCALES.         |
|                                                  |
| Elles sont disponible uniquement dans le contexte|
| de la fonction, ou du bloc qui les contient      |
|                                                  |
| ###                                              |
|                                                  |
| Depuis ECMA 6, vous pouvez déclarer une variable |
| avec le mot-clé "let".                           |
|                                                  |
| Votre variable sera accessible uniquement dans   |
| le bloc dans lequel, elle est contenue.          |
|                                                  |
| Si elle est déclarée dans une condition, elle    |
| sera disponible uniquement dans le bloc de sa    |
| condition.                                       |
|                                                  | 
\-------------------------------------------------*/



// -- Les variables FLOAT
var uneDecimale = -2.984;
console.log(uneDecimale);
console.log(typeof uneDecimale);

// -- Les Booléens (VRAI / FAUX)
var unBooleen =false; //ou true;
console.log(unBooleen);
console.log(typeof unBooleen);

// -- Les Constantes

/* 
* La déclaration CONST permet de créer une constante accesible uniquement en lecture. 
* Sa valeur ne pourra pas être modifiée par des réaffectations ultérieur.
* Une constante ne peux pas être déclarée à nouveau. 
*
* Généralement, par convention, les constantes sont en majuscule.
*
* Depuis ECMA 6, on recommande l'utilisation des constantes plutôt que var ou let s'il n'y aura pas de modification de valeur à votre variable.
*
*/

/* const host ="localhost";
const user= "root";
const PASSWORD ="mysql"; */

// -- Je ne peux pas faire cela...
USER = "Jean-François";
// Uncaught TypeError: Assignment to constant variable.

// const User ="Jean-François";
// Uncaught SyntaxError: Identifier 'USER' has  already been declared


/*-------------------------------------------------\ 
|    ~ ~ ~ ~ ~   LA MINUTE INFO   ~ ~ ~ ~ ~ ~      |
|                                                  |
| Au fur et à mesure que l'ont affecte ou          |
| ré-affecte des valeurs à une variable, celle-ci  |
| prend la nouvelle valeur et le nouveau type.     |
|                                                  |
| En Javascript {ECMA Script} : les variables sont |
|                                                  |
| Pour convertir une variable de type NUMBER en    |
| STRING et STRING en NUMBER je peux utiliser les  |
| fonctions native de javascript.                  |
|                                                  |
\-------------------------------------------------*/

var unNombre= "24";
console.log(unNombre);
console.log(typeof unNombre);

/* 
* La fonction parseInt() pour retourner un Entier à partir de mon string. 
*/

unNombre = parseInt(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

// -- Je ré-affecte une valeur à ma variable

unNombre="12.55";
console.log(unNombre);
console.log(typeof unNombre);

unNombre = parseFloat(unNombre);
console.log(unNombre);
console.log(typeof unNombre)


// -- Conversion d'un Nombre en String avec toString()
unNombre= 10;
var monNombreEnString= unNombre.toString();
console.log(unNombre);
console.log(monNombreEnString);