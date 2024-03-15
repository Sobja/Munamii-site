// Fetch products based on type
getJsonData = async () => {
    const response = await fetch('./products.json');
    const data = await response.json();
    let result = "";
    data.map((item) => { 
        result = '<div class="product"><img src="img/' + item.img + '">'+
                 "<p>" + item.info + "</p>"+
                 "<p>" + item.price +"$</p><button>Buy</button></div>" ; 
                 document.getElementById("cupcakes").innerHTML += result;
    });
    
    
}

