const productsarray = [
  {
    name: "iPhone",
    model: "13 Pro Max",
    price: 1099,
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-hero?wid=940&hei=1112&fmt=png-alpha&.v=1645552346295",
  },
  {
    name: "Samsung Galaxy",
    model: "S22 Ultra",
    price: 1199,
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/in/galaxy-s22-ultra-s908-sm-s908edrhins-530157073?$684_547_PNG$",
  },
  {
    name: "Google Pixel",
    model: "6 Pro",
    price: 899,
    image: "https://m.media-amazon.com/images/I/71pQKQwH0CL._AC_SX679_.jpg",
  },
  {
    name: "OnePlus",
    model: "9 Pro",
    price: 799,
    image: "https://m.media-amazon.com/images/I/61mXrcMU9UL._AC_SX522_.jpg",
  },
  {
    name: "Sony Xperia",
    model: "1 III",
    price: 1299,
    image: "https://m.media-amazon.com/images/I/61vG5OZ7wsL._AC_SX679_.jpg",
  },
  {
    name: "Motorola Edge",
    model: "20 Pro",
    price: 699,
    image: "https://m.media-amazon.com/images/I/81mWuOAlnWL._AC_SL1500_.jpg",
  },
  {
    name: "Nokia",
    model: "G50",
    price: 299,
    image: "https://m.media-amazon.com/images/I/71pXk8VjYGL._AC_SX522_.jpg",
  },
  {
    name: "Asus ROG",
    model: "Phone 5",
    price: 999,
    image:
      "https://dlcdnwebimgs.asus.com/gain/1fe3a567-944d-4bbd-bbbc-c7a8b3330d3f/",
  },
  {
    name: "Xiaomi",
    model: "Mi 11",
    price: 749,
    image:
      "https://i01.appmifile.com/webfile/globalimg/products/pc/mi-11/specs_color_white.png",
  },
  {
    name: "Huawei",
    model: "P50 Pro",
    price: 1049,
    image:
      "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/p50-pro/list-image/p50pro_black.png",
  },
  {
    name: "Realme",
    model: "GT",
    price: 599,
    image: "https://m.media-amazon.com/images/I/71TSvB5eLFL._AC_SX679_.jpg",
  },
  {
    name: "Oppo",
    model: "Find X3 Pro",
    price: 1099,
    image: "https://m.media-amazon.com/images/I/81ocP7A0f7L._AC_SL1500_.jpg",
  },
  {
    name: "Vivo",
    model: "X70 Pro+",
    price: 1099,
    image: "https://fdn2.gsmarena.com/vv/pics/vivo/vivo-x70-pro-plus.jpg",
  },
  {
    name: "LG",
    model: "Wing",
    price: 899,
    image: "https://m.media-amazon.com/images/I/71gbWeq8s0L._AC_SL1500_.jpg",
  },
  {
    name: "Honor",
    model: "50",
    price: 499,
    image: "https://fdn2.gsmarena.com/vv/bigpic/honor-50.jpg",
  },
  {
    name: "ZTE",
    model: "Axon 30 Ultra",
    price: 749,
    image: "https://fdn2.gsmarena.com/vv/bigpic/zte-axon-30-ultra.jpg",
  },
  {
    name: "Blu",
    model: "G90 Pro",
    price: 249,
    image: "https://m.media-amazon.com/images/I/61mkFwUuWDL._AC_SL1000_.jpg",
  },
  {
    name: "Infinix",
    model: "Zero X Pro",
    price: 299,
    image: "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-x-pro.jpg",
  },
  {
    name: "Meizu",
    model: "18 Pro",
    price: 799,
    image: "https://fdn2.gsmarena.com/vv/bigpic/meizu-18-pro.jpg",
  },
  {
    name: "Sharp",
    model: "Aquos R6",
    price: 999,
    image: "https://fdn2.gsmarena.com/vv/bigpic/sharp-aquos-r6.jpg",
  },
  {
    name: "Fairphone",
    model: "4",
    price: 579,
    image: "https://fdn2.gsmarena.com/vv/bigpic/fairphone-4.jpg",
  },
  {
    name: "TCL",
    model: "10 Pro",
    price: 449,
    image: "https://m.media-amazon.com/images/I/71WiZUk07PL._AC_SL1500_.jpg",
  },
  {
    name: "Lava",
    model: "Z6",
    price: 139,
    image: "https://m.media-amazon.com/images/I/71npDLOVZNL._AC_SL1500_.jpg",
  },
  {
    name: "Vsmart",
    model: "Live 4",
    price: 249,
    image: "https://fdn2.gsmarena.com/vv/bigpic/vsmart-live-4.jpg",
  },
  {
    name: "Tecno",
    model: "Camon 16",
    price: 159,
    image: "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-16-premier.jpg",
  },
];

const productsdiv = document.querySelector(".products");
const cartgetagain = localStorage.getItem("cart");

console.log(typeof cartgetagain); // Check the type of cartgetagain
console.log(cartgetagain);        // Check the value of cartgetagain

// Try to parse cartgetagain; if it's null or not an array, default to an empty array
let parsedcart;

try {
    parsedcart = cartgetagain ? JSON.parse(cartgetagain) : [];
    // Ensure parsedcart is an array
    if (!Array.isArray(parsedcart)) {
        parsedcart = [];
    }
} catch (error) {
    console.error("Parsing error or data is not iterable:", error);
    parsedcart = [];
}

console.log(typeof parsedcart); // Check the type of parsedcart
console.log(parsedcart);

const cart = [...parsedcart];

const addtocart = (index) => {
  const item = productsarray[index];
  // console.log(item)
  if (cart.indexOf(item) === -1) {
    cart.push(item);
    item.quantity = 1;
    console.log("hello jiii");
    Swal.fire("Product added!");
  } else {
    item.quantity = item.quantity + 1;
    Swal.fire("Product already in cart!");
  }
  console.log(cart);
};

const checkout = () => {
  window.location = "cart.html";
  const cartstring = JSON.stringify(cart);
  localStorage.setItem("cart", cartstring);
};

productsarray.map((item, index) => {
  productsdiv.innerHTML += `            
           <div class="card">
           <img src=${item.image} alt="">
            <h2>${item.name}</h2>
            <h2>${item.model}</h2>
            <h3>price : $${item.price}</h3>
            <button onclick="addtocart(${index})" id="addtocartbtn">add to cart</button>
           </div>`;
});
