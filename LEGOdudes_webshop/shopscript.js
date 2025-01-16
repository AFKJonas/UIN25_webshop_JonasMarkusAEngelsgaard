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

    cart.push({cartprodid: prodid, quantity: 1});
    console.log(cart);
}
