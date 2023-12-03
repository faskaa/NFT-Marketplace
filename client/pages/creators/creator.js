const rankingsElement = document.querySelector(".rankings-wrapper .rankings")

async function getCreatorFromApi(){
    const response = await fetch(`${BASE_URL}/creators`);
    const creators = await response.json();
    
    return creators
 }

 async function fillCardWithCreators(){
    const creators = await getCreatorFromApi();
    creators.forEach(creator => createCreatorCards(creator));
 }

function createCreatorCards(creator){

    console.log(creator);
    const rankingCard = document.createElement("div");
    rankingCard.className= "ranking"
    rankingsElement.append(rankingCard);

    const idElement = document.createElement("div");
    idElement.textContent= creator.id
    rankingCard.append(idElement)

    const creatorImage = document.createElement("img")
    creatorImage.src = "../../../"+creator.profileImgPath;
    rankingCard.append(creatorImage);

    const fullName = document.createElement("span");
    fullName.className = "fullname"
    fullName.textContent= creator.name;
    rankingCard.append(fullName);

    const change = document.createElement("span");
    change.className = "change"
    change.textContent= "+1.41%"
    rankingCard.append(change);

    const sold = document.createElement("span");
    sold.className = "sold"
    sold.textContent= creator.nftSold;
    rankingCard.append(sold);

    const volume = document.createElement("span");
    volume.className = "volume"
    volume.textContent= `${creator.totalSale.value} ETH`;
    rankingCard.append(volume);


    
}

fillCardWithCreators();
// createCreatorCards();

