
const cartstring = localStorage.getItem("cart")
const cart = JSON.parse(cartstring)

console.log(cart)
const productsdiv = document.querySelector(".products")

cart.map((item,index)=>{
      productsdiv.innerHTML += `             
              <div class="cartitem">
                <h1>${item.name}</h1>
                <h2>${item.quantity}</h2>
                <button onclick="deleteitem(${index})">Delete</button>
            </div>`
})

const deleteitem = (index)=>{
    productsdiv.innerHTML = `` 
        cart.splice(index,1)
        cart.map((item,index)=>{
            productsdiv.innerHTML += `             
                    <div class="cartitem">
                      <h1>${item.name}</h1>
                      <h2>${item.quantity}</h2>
                      <button onclick="deleteitem(${index})">Delete</button>
                  </div>`
      })
}