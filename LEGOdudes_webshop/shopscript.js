console.log(products);

//Gå igjennom alle produkter, generere HTML for hvert produkt og skrive dette til index.html

//En variabel som kan holde på HTML-en for produktene
let productHTML = "";

products.map((product, index) => productHTML += 
            `<article class="product-card">
                <img src="website_images/PROD_${product.imagefile}" alt="PRODUCTTITTEL" />
                <a href="#KATEGORISIDE">Ninjago</a>
                <h3>${product.title}</h3>
                <p>${product.price},-</p>
                <button onclick="addProductToCart(${product.prodid})">Legg til i Handlekurv</button>
            </article>`)

//Finn #productlist, og fyll den med verdiene i variabelen productlistHTML
document.getElementById("productlist").innerHTML = productHTML; 

//Lage toggle-funksjonalitet for handlevognen
document.getElementById("shoppingcart").addEventListener("click", function(){
    document.getElementById("cart").classList.toggle("visible");
})

//Lage addProductToCart()
function addProductToCart(prodid){
    console.log("Du vil legge til produkt med id " + prodid + " i handlekurven");
    //Bruk .some for å skjekke om prodid allerede finnes i cart:
    const idExists = cart.some(cartprod => cartprod.cartprodid === prodid);
    if(idExists){
        //Oppdater dette produktets quantity i cart
        //Først: finne indexen til dennne ID-en:
        const index = cart.findIndex(p => p.cartprodid === prodid);
        //Så: oppdater riktig quantity
        cart[index].quantity++;
    } else {
        cart.push({cartprodid: prodid, quantity: 1});
    }
    printCart()
    console.log(cart);
}


//Lage en funksjon som skriver ut oppdatert versjon av handlekurven
function printCart() {
    //starter med en ton variabel som vi ka fylle med HTML
    let cartHTML = "";
    //Lag klar variabelen for pris:
    let cartTotal = 0;
    //Lag variabel for antall produkter:
    let cartNumber = 0;

    //Gå igjennom cart-arryen og generere HTML for hvert produkt:
    cart.map((cartprod, index) =>{
        const currentProduct = products.findIndex(p => p.prodid === cartprod.cartprodid);
        const currentProductInfo = products[currentProduct];
        cartHTML += `<article class="cart-product">
                    <span class="title">${currentProductInfo.title}</span>
                    <span class="price">${currentProductInfo.price},-</span>
                    <span class="quantity">x<span class="quantity-number">${cartprod.quantity}</span></span>
                    <button class="delete">x</button>
                </article>`
        //Regn ut totalsum:
        cartTotal += currentProductInfo.price * cartprod.quantity;
        //Regn ut antall produkter:
        cartNumber += cartprod.quantity;
    })

    //Skriv ut generert HTML til Indexfilen:
    ducument.getElementById("cart-products").innerHTML = cartHTML;
    //Skrive ut total pris:
    document.getElementById("cart-total").innerHTML = cartTotal;
    //Skrive ut antall produkter:
    document.getElementById("cartcount").innerHTML = cartNumber;
}
printCart();
