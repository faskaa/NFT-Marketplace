 const creatorCards = document.querySelector('.creators-wrapper .creator-cards')
 
 async function getCreatorFromApi(){
    const response = await fetch(`${BASE_URL}/creators`)
    const creators = await response.json();
    
    return creators
 }
 

 async function fillCardWithCreators(){
    const creators = await getCreatorFromApi();
    creators.forEach(creator => createCreatorCards(creator));
 }

 function createCreatorCards(creator){

    console.log(creator);
    const creatorCard = document.createElement("div")
    creatorCard.className = "card";

    const creatorId = document.createElement("div")   
    creatorId.id = "id" 
    creatorId.textContent = creator.id;
    creatorCard.append(creatorId);

    const creatorImage = document.createElement("img")
    // creatorImage.src = `../../../${creator.profileImgPath};
    creatorImage.src = "../../../"+creator.profileImgPath;
    creatorCard.append(creatorImage)

    const creatorName = document.createElement("span")
    creatorName.textContent = creator.name;
    creatorCard.append(creatorName);

    const creatorTotalSales = document.createElement("div")
    creatorTotalSales.className = "total-sales"
    creatorCard.append(creatorTotalSales);

    const creatorSale = document.createElement("span")
    creatorSale.textContent = "Total Sales:";
    creatorTotalSales.append(creatorSale);

    const creatorETH = document.createElement("span")
    creatorETH.textContent = creator.totalSale.value;
    creatorTotalSales.append(creatorETH);

    const creatorNumber = document.createElement("span")
    creatorNumber.textContent = creator.totalSale.currency;
    creatorTotalSales.append(creatorNumber);

    creatorCards.append(creatorCard);
 }
 fillCardWithCreators();



