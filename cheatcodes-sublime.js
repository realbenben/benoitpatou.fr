const allCheatcodes = [
{
"keyscode": "ctrl + z",
"description": "Annuler les dernières modification (appuyer plusieurs fois)"
},
{
"keyscode": "ctrl + shift + d",
"description": "dupliquer une ligne."
},
{
"keyscode": "ctrl +d + selectionner un mot",
"description": " selectionne tout le mots identiques du code."
},
{
"keyscode": "ctrl + /",
"description": "mettre une ligne en commentaire et vice versa."
},
{
"keyscode": "ctrl + shift + flèche haut et bas",
"description": "déplacer une ligne. "
},
{
"keyscode": "ctrl + p",
"description": "acceder à un fichier ou therme avec le nom."
},
{
"keyscode": "ctrl + g + nombre",
"description": "acceder au numéro de ligne correspondant au nombre"
},
{
"keyscode": "ctrl + clic de souris",
"description": "selection multiple avec la souris"
},
{
"keyscode": "ctrl + shift + p",
"description": "acceder au menu des install."
},
{
"keyscode": "ctrl + z",
"description": "annuler les dernières modification (appuyer plusieurs fois). "
},
{
"keyscode": "ctrl + shift + d",
"description": "dupliquer une ligne."
},
{
"keyscode": "ctrl +d + selectionner un mot",
"description": "selectionne tout le mots identiques du code."
},
{
"keyscode": "ctrl + / ",
"description": "mettre une ligne en commentaire et vice versa"
},
{
"keyscode": "ctrl + shift + flèche haut et bas",
"description": "déplacer une ligne. "
},
{
"keyscode": "ctrl + p",
"description": "acceder à un fichier ou therme avec le nom"
},
{
"keyscode": "ctrl + g + nombre",
"description": "acceder au numéro de ligne correspondant au nombre."
},
{
"keyscode": "ctrl + clic de souris",
"description": "selection multiple avec la souris "
},
{
"keyscode": "ctrl + shift + p",
"description": "acceder au menu des install."
},

];
console.log(description);
console.log(allCheatcodes);

const target = document.getElementById('js-cheatcode');

const allCheatcodesHTML = allCheatcodes.map((code) => {

    const template = `
      <p>
        <code>${code."keyscode"}</code>
              ${code."description"}
      </p>
    `;
    return template;
  });
target.innerHTML = allCheatcodesHTML;
