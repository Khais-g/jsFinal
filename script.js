fetch("https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/sneakers.json")
.then(response => response.json())
.then(data => {

    //document.body.onload = addElement;


    //Dans la fonction, crée un élément div 
    function entreprise(){
        const div = document.createElement("div")
        document.body.appendChild(div);

        const NomEntreprise = document.createElement("h1");
        NomEntreprise.textContent =  data.nomCommercial;
        div.appendChild(NomEntreprise);

        const slogan = document.createElement("h2");
        slogan.textContent = data.phraseAccroche;
        div.appendChild(slogan);

        const bouton = document.createElement("button");
        bouton.textContent = data.texteAppelAction;
        div.appendChild(bouton);

        const arguments = document.createElement("p");
        arguments.textContent = data.avantagesClients;
        div.appendChild(arguments);
    }
     //pour afficher le nom de l'entreprise, 
    //sa phrase d'accroche et un bouton d'appel à l'action.

    entreprise();

    function products (){
    const sec = document.createElement("section");

    data["produits"].forEach(produits => {
         const card = document.createElement("div");
        card.classList.add("card");

        const name = document.createElement("p");
            name.textContent =  produits.nom;
            card.appendChild(name);

        const desk = document.createElement("h2");
            desk.textContent = produits.description;
            card.appendChild(desk);

        
    });
    }

    products();   

        
        
       

   





})
