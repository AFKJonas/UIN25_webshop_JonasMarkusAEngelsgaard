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
                <button id="">Legg til i Handlekurv</button>
            </article>`)

//Finn #productlist, og fyll den med verdiene i variabelen productlistHTML
document.getElementById("productlist").innerHTML = productHTML; 