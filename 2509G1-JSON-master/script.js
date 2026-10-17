// const productContainer = document.getElementById('productContainer');

// const products = [
//     {
//         prodName: "Headphone",
//         prodPrice: 2000
//     },
//     {
//         prodName: "Mouse",
//         prodPrice: 200
//     },
//     {
//         prodName: "Keyboard",
//         prodPrice: 670
//     }
// ]




// console.log(num)


// console.log(products, productContainer)



// products.map((element)=>{
    //     console.log(element)
    // })





    // fetch()


const productContainer = document.getElementById('productContainer');
    
async function getProducts() {
    try {
      const response = await axios.get('products.json');
      console.log(response.data);

      response.data.map((item) => {
        productContainer.innerHTML += `
        <div class="col" >
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${item.prodName}</h5>
            <p class="card-text">Rs: ${item.prodPrice}</p>
            <button type="button" class="btn btn-primary" data-mdb-ripple-init>Button</button>
          </div>
        </div>
        </div>
        `
    });

    } catch (error) {
      console.error(error);
    }
  }


  getProducts()

// console.log(products)
// products.map((item) => {
//     productContainer.innerHTML += `
//     <div class="col" >
//     <div class="card">
//       <div class="card-body">
//         <h5 class="card-title">${item.prodName}</h5>
//         <p class="card-text">Rs: ${item.prodPrice}</p>
//         <button type="button" class="btn btn-primary" data-mdb-ripple-init>Button</button>
//       </div>
//     </div>
//     </div>
//     `
// })



