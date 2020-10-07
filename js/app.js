const myTitle = document.querySelector('#card-title');
const myType = document.querySelector('#card-type');
const myText = document.querySelector('#card-text');
const myImage = document.querySelector('#card-img');


fetch("https://8opdbbyonh.execute-api.eu-west-3.amazonaws.com/test/helloworld")
    .then(response => response.json())
    .then(response => {
            myText.textContent = "Voici votre Pokémon"
            myTitle.textContent = response.name
            myType.textContent = response.type
            if (response.type === 'Electrique') {
                myType.classList.add('btn-warning')
                myImage.setAttribute("src", 'https://www.pokepedia.fr/images/0/0f/Miniature_025_RS.gif')

            } else if (response.type === 'Eau') {
                myType.classList.add('btn-primary')
                myImage.setAttribute("src", 'https://www.pokepedia.fr/images/4/46/Miniature_007_RS.gif')


            } else {
                myType.classList.add('btn-danger')
                myImage.setAttribute("src", 'https://www.pokepedia.fr/images/7/78/Miniature_006_RS.gif')
            }
        }
    )
    .catch(error => alert("Erreur : " + error));
