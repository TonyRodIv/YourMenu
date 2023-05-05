let menu = [
    {
        title:"Buttermilk Pankakes",
        category:"breakfast",
        price:"15",
        image:"./images/item-2.jpeg",
        description:"I'm baby woke milkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed.",
    },
    {
        title:"Buttermilk Pankakes",
        category:"breakfast",
        price:"12",
        image:"./images/item-3.jpeg",
        description:"I'm baby woke milkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed.",
    },
    {
        title:"Buttermilk Pankakes",
        category:"breakfast",
        price:"19",
        image:"./images/item-4.jpeg",
        description:"I'm baby woke milkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed.",
    },
]
let menuItens = document.getElementById('menu-itens')
let i = 0
function write(){
    for(i=0;i<menu.length;i++){

        menuItens.innerHTML += `
        <div class="item-image">
                        <img src="${menu[i].image}" alt="" srcset="">
                    </div>
                    <div class="item-info">
                        <div class="item-title">
                            <p>${menu[i].title}</p>
                            <p class="price">R$${menu[i].price}</p>
                        </div>
                        <div class="item-description">
                            <p>${menu[i].description}</p>
                        </div>
                    </div>
        `;
    }

}
write()