//tableau de mots a trouver
var tabmots= ['maison', 'avion', 'voiture', 'stylo', 'ordinateur', 'tasse', 'table', 'nuages',
            'cousin', 'marcher', 'commerce', 'bouteille', 'enfants', 'bateaux', 'arbre',
            'chaise', 'feuille', 'papier', 'nageoire', 'piscine', 'clavier', 'piége',
            'cartable', 'radiateur', 'poubelle' ];


//generer un mot aleatoire du tableau ci dessus qu'il faut trouver
var motsaleatoire = Math.floor(Math.random() * tabmots.length);
var mot = tabmots[motsaleatoire];
console.log(mot);


//lettre entré par utilisateur
var inputLettre = document.getElementById('inputLettre');



// boucle pour la creation des span pour pour chaque lettres du mot
for (var i = 0; i <= mot.length -1; i++)
{
    var span = document.createElement('span');
    document.getElementById('lettres').appendChild(span).innerHTML = "_";
    span.id = 'L' + i;
    span.style.fontSize = '40px';
    span.style.border = 'black solid 2px';
    span.style.padding = '0% 2% 2% 2%';

}



var lettretrouve = 0;
var essai = 6;
console.log(essai);




//niveau de difficulté
document.getElementById('nivFacile').addEventListener('click', function ()
    {

        essai = 8;
        console.log(essai);
        document.getElementById('essais').innerHTML = 'Vous avez ' + essai + ' essais';
        document.getElementById('nivNormal').style.display='none';
        document.getElementById('nivDifficile').style.display='none';

    });
document.getElementById('nivNormal').addEventListener('click', function ()
    {

        essai=6;
        console.log(essai);
        document.getElementById('essais').innerHTML= 'Vous avez ' + essai + ' essais';
        document.getElementById('nivFacile').style.display='none';
        document.getElementById('nivDifficile').style.display='none';

    });
document.getElementById('nivDifficile').addEventListener('click', function ()
    {

        essai=3;
        console.log(essai);
        document.getElementById('essais').innerHTML= 'Vous avez ' + essai + ' essais';
        document.getElementById('nivNormal').style.display='none';
        document.getElementById('nivFacile').style.display='none';

    });

//affichage nombre d'essai
document.getElementById('essais').innerHTML= 'Vous avez ' + essai + ' essais';


//bonton rejouer
document.getElementById('rejouer').addEventListener('click', function ()
    {
        document.location.reload(false);
    })



//fonction pour récupérer champs input au clic du bouton
document.getElementById('bt').addEventListener('click', function ()
    {
        var recup = inputLettre.value.toLowerCase();
        console.log(recup);
        var repTrouve = 0;



        for( var i=0; i< mot.length; i++)
        {
            if (recup==mot[i])
            {

                repTrouve=1;
                document.getElementById('reponse').innerHTML = "Bravo ! une lettre de trouvé";
                document.getElementById('L'+i).innerHTML = recup;
                lettretrouve++;

            }

        }

        if(repTrouve==0)
        {

            document.getElementById('reponse').innerHTML = "Désolé, essayé encore";
            essai--;

            for (var a = 0; a <= 0 ; a++)
            {var span1 = document.createElement('span');
                document.getElementById('lettresfausse').appendChild(span1).innerHTML = recup;
                span1.id = 'LF' + a;
                span1.style.fontSize = '40px';
                span1.style.border = 'black solid 2px';
                span1.style.padding = '0% 2% 2% 2%';}
        }

        if (recup=='')
        {

            document.getElementById('reponse').innerHTML ="Champ requis ou erroné";
            essai++;

        }
        if(mot.length==lettretrouve)
        {
            alert('Bravo vous avez trouvé le mot : '+ mot);
            document.location.reload(false);
        }
        if(essai<=0)
        {

            alert('Désolé, vous avez perdu le mot etait : ' + mot);
            document.location.reload(false);
        }


        document.getElementById('essais').innerHTML= 'Encore ' + essai + ' essai(s)';



    });



