const boxMain = document.querySelector('main');

async function loadDesserts() {
  try {
    const response = await fetch('./data.json');
    if (!response.ok) {
      throw new Error('Erreur réseau : ' + response.status);
    }
    const ListDessert = await response.json();
    console.log('Liste des desserts:', ListDessert);

    // creation du section pour chacun dessert
    const boxSection = document.createElement('section');
    // Exemple : afficher les noms dans la console
    ListDessert.forEach(dessert => {
    //   console.log(dessert.name, '-', dessert.price + '€');
      boxDesserts(boxSection, dessert.name, dessert.category,dessert.price)
    });

  } catch (error) {
    console.error('Erreur chargement JSON:', error);
  }
}



// focntion por gere le box dessert
function boxDesserts(boxSection, nom, description, price) {
    // creation du  div image
    const imgDiv = document.createElement('div');
    imgDiv.classList.add('image');
   
    // creation du div contenue
    const contenueDiv = document.createElement('div');
    contenueDiv.classList.add('contenue');
    
    // creation du paragraph du contenue
    const nameDessert = document.createElement('p');
    nameDessert.classList.add('nameDessert');
    const descriptionDessert = document.createElement('p')
    descriptionDessert.classList.add('descriptionDessert');
    const priceDessert = document.createElement('p');
    priceDessert.classList.add('priceDessert');

    nameDessert.innerText = nom;
    descriptionDessert.innerText = description;
    priceDessert.innerText = price;

    // ajout du paragraph dans le div contenue
    contenueDiv.append(nameDessert);
    contenueDiv.append(descriptionDessert);
    contenueDiv.append(priceDessert)

    // ajout des div dans boite section
    boxSection.append(imgDiv);
    boxSection.append(contenueDiv);

    // ajout des du dans boxMain
    boxMain.append(boxSection);
}

// Appelle la fonction async
loadDesserts();







