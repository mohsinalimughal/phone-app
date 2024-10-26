const productsarray = [
  { name: "iPhone", model: "13 Pro Max", price: 1099, image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-hero?wid=940&hei=1112&fmt=png-alpha&.v=1645552346295" },
  { name: "Samsung Galaxy", model: "S22 Ultra", price: 1199, image: "https://images.samsung.com/is/image/samsung/p6pim/levant/galaxy-s22/gallery/levant-galaxy-s22-ultra-s908-sm-s908elgimea-530157073?$PD_GALLERY_L_JPG$" },
  { name: "Google Pixel", model: "6 Pro", price: 899, image: "https://lh3.googleusercontent.com/gTT5jHzAihLy_tYGJh5_hXZx-sVvAEtOZKUQ92y2H8DszmpTt2jkDXs_Cx3gvduRA2XNxZChOT8U1LbA7jjDQ30U=w1200" },
  { name: "OnePlus", model: "9 Pro", price: 799, image: "https://image01.oneplus.net/ebp/202203/25/2053/545e2d967f28d93ccf501b5d89168e10.png" },
  { name: "Sony Xperia", model: "1 III", price: 1299, image: "https://m.media-amazon.com/images/I/71yk4KnI8XS._AC_SY679_.jpg" },
  { name: "Motorola Edge", model: "20 Pro", price: 699, image: "https://motorolaus.vtexassets.com/arquivos/ids/157690-800-800?v=637850853625330000&width=800&height=800&aspect=true" },
  { name: "Nokia", model: "G50", price: 299, image: "https://www.nokia.com/sites/default/files/styles/scale_720w/public/nokia_g50-blue_product_image_1.png" },
  { name: "Asus ROG", model: "Phone 5", price: 999, image: "https://dlcdnwebimgs.asus.com/gain/fe787d1b-988a-4a7c-8359-f5d429d1bb65/" },
  { name: "Xiaomi", model: "Mi 11", price: 749, image: "https://i01.appmifile.com/webfile/globalimg/0320/TO-B/cms/mi11_01.jpg" },
  { name: "Huawei", model: "P50 Pro", price: 1049, image: "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/p50-pro/list-image/p50pro_golden_photos.jpg" },
  { name: "Realme", model: "GT", price: 599, image: "https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/realme-gt/n5-gt-family-black.png" },
  { name: "Oppo", model: "Find X3 Pro", price: 1099, image: "https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/find-x3-pro/navigation/n2-find-x3-pro-black-v2-720x720.jpg" },
  { name: "Vivo", model: "X70 Pro+", price: 1099, image: "https://fdn2.gsmarena.com/vv/pics/vivo/vivo-x70-pro-plus-1.jpg" },
  { name: "LG", model: "Wing", price: 899, image: "https://m.media-amazon.com/images/I/71gbWeq8s0L._AC_SX679_.jpg" },
  { name: "Honor", model: "50", price: 499, image: "https://fdn2.gsmarena.com/vv/pics/honor/honor-50-1.jpg" },
  { name: "ZTE", model: "Axon 30 Ultra", price: 749, image: "https://fdn2.gsmarena.com/vv/pics/zte/zte-axon-30-ultra-1.jpg" },
  { name: "Blu", model: "G90 Pro", price: 249, image: "https://m.media-amazon.com/images/I/61mkFwUuWDL._AC_SY741_.jpg" },
  { name: "Infinix", model: "Zero X Pro", price: 299, image: "https://fdn2.gsmarena.com/vv/pics/infinix/infinix-zero-x-pro-1.jpg" },
  { name: "Meizu", model: "18 Pro", price: 799, image: "https://fdn2.gsmarena.com/vv/pics/meizu/meizu-18-pro-2.jpg" },
  { name: "Sharp", model: "Aquos R6", price: 999, image: "https://fdn2.gsmarena.com/vv/pics/sharp/sharp-aquos-r6.jpg" },
  { name: "Fairphone", model: "4", price: 579, image: "https://fdn2.gsmarena.com/vv/pics/fairphone/fairphone-4-5g.jpg" },
  { name: "TCL", model: "10 Pro", price: 449, image: "https://m.media-amazon.com/images/I/71WiZUk07PL._AC_SY679_.jpg" },
  { name: "Lava", model: "Z6", price: 139, image: "https://m.media-amazon.com/images/I/71npDLOVZNL._AC_SY679_.jpg" },
  { name: "Vsmart", model: "Live 4", price: 249, image: "https://fdn2.gsmarena.com/vv/pics/vsmart/vsmart-live-4.jpg" },
  { name: "Tecno", model: "Camon 16", price: 159, image: "https://m.media-amazon.com/images/I/71ti5ybk+LL._AC_SX679_.jpg" }
];


  


const productsdiv = document.querySelector(".products")
const cartgetagain = localStorage.getItem("cart")
const parsedcart = JSON.parse(cartgetagain)
const cart = [...parsedcart]

const addtocart = (index)=>{
    const item = productsarray[index]
    // console.log(item)
    if(cart.indexOf(item)===-1){
        cart.push(item)
        item.quantity = 1
    }else{
        item.quantity = item.quantity + 1
    }
    console.log(cart)
}



const checkout = ()=>{
    window.location = "cart.html"
    const cartstring = JSON.stringify(cart)
    localStorage.setItem("cart",cartstring)
}




productsarray.map((item,index)=>{
    productsdiv.innerHTML += `            
           <div class="card">
           <img src=${item.image} alt="">
            <h2>${item.name}</h2>
            <h2>${item.model}</h2>
            <h3>price : $${item.price}</h3>
            <button onclick="addtocart(${index})" id="addtocartbtn">add to cart</button>
           </div>`
})


