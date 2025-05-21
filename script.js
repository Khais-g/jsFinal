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


        data["avantagesClients"].forEach(Element=> {
        const arguments = document.createElement("p");
        arguments.textContent = Element;
        div.appendChild(arguments);
        })
  
    }
     //pour afficher le nom de l'entreprise, 
    //sa phrase d'accroche et un bouton d'appel à l'action.

    

    entreprise();

    function products (){
    const sec = document.createElement("section");

    data["produits"].forEach(produits => {
        const card = document.createElement("div");
        card.classList.add("card");
        document.body.appendChild(sec);
        sec.appendChild(card);

        const name = document.createElement("h2");
            name.textContent = produits.nom;
            card.appendChild(name);

        const desk = document.createElement("p");
            desk.textContent = produits.description;
            card.appendChild(desk);

        const img = document.createElement("img");
            img.src = produits["image-url"];
            card.appendChild(img);
          

    });
    }

    products();  




    function temoin (){
    const tion = document.createElement("section");

    data["temoignages"].forEach(deposition => {
        const card = document.createElement("div");
        card.classList.add("card");
        document.body.appendChild(tion);
        tion.appendChild(card);

        const prenom = document.createElement("h3");
            prenom.textContent = deposition.prenom;
            card.appendChild(prenom);

        const type = document.createElement("h4");
            type.textContent = deposition.typesExperience;
            card.appendChild(type);

        const com = document.createElement("p");
           com.textContent = deposition.commentaire;
            card.appendChild(com);
          

    });
    }

    temoin()

        


})
