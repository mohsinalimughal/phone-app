
const cartstring = localStorage.getItem("cart")
const cart = JSON.parse(cartstring)

console.log(cart)
const productsdiv = document.querySelector(".products")

cart.map((item,index)=>{
    // productsdiv.innerHTML = `` 
      productsdiv.innerHTML += `             
                <div class="card">
                <h2>${item.name}</h2>
                <h2>${item.model}</h2>
                <h3>price : ${item.price}</h3>
                <div class="quantity-box">
                    <h2 onclick="plusitem(${index})" >+</h2>
                    <h2>${item.quantity}</h2>
                    <h2 onclick="minusitem(${index})" >-</h2>
                </div>
                <button onclick="deleteitem(${index})" >delete</button>
               </div>`
})

const deleteitem = (index)=>{
    productsdiv.innerHTML = `` 
    cart.splice(index,1) 
       const newcartstring = JSON.stringify(cart)
       localStorage.setItem("cart",newcartstring)
        cart.map((item,index)=>{
            productsdiv.innerHTML += `             
                <div class="card">
                <h2>${item.name}</h2>
                <h2>${item.model}</h2>
                <h3>price : ${item.price}</h3>
                <div class="quantity-box">
                    <h2 onclick="plusitem(${item,index})" >+</h2>
                    <h2>${item.quantity}</h2>
                    <h2 onclick="minusitem(${item,index})" >-</h2>
                </div>
                <button onclick="deleteitem(${index})" >delete</button>
               </div>`
      })
}

const minusitem = (index)=>{
    if(cart[index].quantity === 1){
        deleteitem(index)
    }else{
    productsdiv.innerHTML = `` 
    cart[index].quantity = cart[index].quantity - 1
    cart.map((item,index)=>{
        productsdiv.innerHTML += `             
            <div class="card">
            <h2>${item.name}</h2>
            <h2>${item.model}</h2>
            <h3>price : ${item.price}</h3>
            <div class="quantity-box">
                <h2 onclick="plusitem(${item,index})" >+</h2>
                <h2>${item.quantity}</h2>
                <h2 onclick="minusitem(${item,index})" >-</h2>
            </div>
            <button onclick="deleteitem(${index})" >delete</button>
           </div>`
            localStorage.setItem("cart",JSON.stringify(cart))
        })}}
const plusitem = (index)=>{
        productsdiv.innerHTML = `` 
        cart[index].quantity = cart[index].quantity + 1
        cart.map((item,index)=>{
            productsdiv.innerHTML += `             
                <div class="card">
                <h2>${item.name}</h2>
                <h2>${item.model}</h2>
                <h3>price : ${item.price}</h3>
                <div class="quantity-box">
                    <h2 onclick="plusitem(${item,index})" >+</h2>
                    <h2>${item.quantity}</h2>
                    <h2 onclick="minusitem(${item,index})" >-</h2>
                </div>
                <button onclick="deleteitem(${index})" >delete</button>
               </div>`
               localStorage.setItem("cart",JSON.stringify(cart))

})}