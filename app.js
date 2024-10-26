const productsarray = [
    {
      "name": "Smartphone Protection Gear",
      "model": "ArmorShield X3 Case",
      "price": 19.99
    },
    {
      "name": "Battery Life Enhancer",
      "model": "PowerSaver Pro",
      "price": 4.99
    },
    {
      "name": "Camera Lens Attachments",
      "model": "SnapLens Kit",
      "price": 29.99
    },
    {
      "name": "Mobile Payment Solution",
      "model": "QuickPay Secure",
      "price": 0.99
    },
    {
      "name": "Modular Accessories",
      "model": "ModiX Attach",
      "price": 24.99
    },
    {
      "name": "Smartphone Sanitizer",
      "model": "SanitiMate UV",
      "price": 39.99
    },
    {
      "name": "Interactive Home Screen Widgets",
      "model": "WidgetPro",
      "price": 1.99
    },
    {
      "name": "Personalization App",
      "model": "ThemeLab Customizer",
      "price": 2.99
    },
    {
      "name": "Phone Mounting System",
      "model": "MountEase Flex",
      "price": 15.99
    },
    {
      "name": "Health Monitoring Accessories",
      "model": "HealthSync Monitor",
      "price": 49.99
    },
    {
      "name": "Wireless Charger",
      "model": "ChargeMate X1",
      "price": 25.99
    },
    {
      "name": "Portable Power Bank",
      "model": "PowerGo 10K",
      "price": 34.99
    },
    {
      "name": "Selfie Stick",
      "model": "SelfieSnap Pro",
      "price": 12.99
    },
    {
      "name": "Bluetooth Earbuds",
      "model": "AudioFit",
      "price": 45.99
    },
    {
      "name": "Gaming Controller",
      "model": "GameGrip One",
      "price": 29.99
    },
    {
      "name": "Noise Cancelling Headphones",
      "model": "SilenceMax",
      "price": 79.99
    },
    {
      "name": "Anti-glare Screen Protector",
      "model": "ClearView Anti-Glare",
      "price": 9.99
    },
    {
      "name": "Phone Ring Holder",
      "model": "RingEasy 360",
      "price": 5.99
    },
    {
      "name": "Car Charger",
      "model": "AutoCharge Turbo",
      "price": 14.99
    },
    {
      "name": "Virtual Reality Headset",
      "model": "VRLite",
      "price": 49.99
    },
    {
      "name": "Magnetic Cable Organizer",
      "model": "CableKeep",
      "price": 7.99
    },
    {
      "name": "Portable Speaker",
      "model": "SoundBlast Mini",
      "price": 39.99
    },
    {
      "name": "Fast Charging Cable",
      "model": "SpeedLink Pro",
      "price": 8.99
    },
    {
      "name": "Waterproof Phone Pouch",
      "model": "AquaSafe",
      "price": 10.99
    },
    {
      "name": "Camera Stabilizer",
      "model": "SmoothCapture",
      "price": 89.99
    },
    {
      "name": "Bluetooth Keyboard",
      "model": "TypeOnGo",
      "price": 25.99
    },
    {
      "name": "PopSocket",
      "model": "GripPop",
      "price": 9.99
    },
    {
      "name": "Wireless Earphones Case",
      "model": "EarGuard",
      "price": 12.99
    },
    {
      "name": "Phone Tripod",
      "model": "SteadyPod",
      "price": 19.99
    },
    {
      "name": "Privacy Screen Protector",
      "model": "ViewGuard",
      "price": 11.99
    },
    {
      "name": "Thermal Imaging Camera",
      "model": "HeatVision",
      "price": 99.99
    },
    {
      "name": "Extended Battery Case",
      "model": "PowerCase Max",
      "price": 39.99
    },
    {
      "name": "Portable Photo Printer",
      "model": "Printy",
      "price": 79.99
    },
    {
      "name": "Memory Card Reader",
      "model": "MemoryConnect",
      "price": 15.99
    },
    {
      "name": "Stylus Pen",
      "model": "TouchPen",
      "price": 5.99
    },
    {
      "name": "Mini Projector",
      "model": "PocketProject",
      "price": 59.99
    },
    {
      "name": "Anti-theft Phone Alarm",
      "model": "SafePhone",
      "price": 6.99
    },
    {
      "name": "Temperature Sensor",
      "model": "ThermoSense",
      "price": 19.99
    },
    {
      "name": "Fingerprint Lock Case",
      "model": "SecureLock",
      "price": 45.99
    },
    {
      "name": "360 Camera Attachment",
      "model": "Panorama360",
      "price": 89.99
    },
    {
      "name": "Wireless Charging Stand",
      "model": "StandCharge",
      "price": 29.99
    },
    {
      "name": "LED Selfie Ring Light",
      "model": "GlowRing",
      "price": 14.99
    },
    {
      "name": "Foldable Bluetooth Keyboard",
      "model": "FoldType",
      "price": 35.99
    },
    {
      "name": "Solar Power Bank",
      "model": "SunCharge",
      "price": 29.99
    },
    {
      "name": "Phone Cleaning Kit",
      "model": "CleanSwipe",
      "price": 6.99
    },
    {
      "name": "Portable Fan Attachment",
      "model": "BreezeClip",
      "price": 7.99
    },
    {
      "name": "Screen Magnifier",
      "model": "MaxView",
      "price": 12.99
    },
    {
      "name": "UV-C Sanitizing Case",
      "model": "PureCase",
      "price": 39.99
    },
    {
      "name": "Headphone Splitter",
      "model": "ShareTunes",
      "price": 5.99
    },
    {
      "name": "Digital Thermometer",
      "model": "TempMate",
      "price": 12.99
    },
    {
      "name": "Infrared Remote Control",
      "model": "SmartControl",
      "price": 9.99
    }
  ]
  


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




productsarray.map((item,index,Array)=>{
    productsdiv.innerHTML += `            
           <div class="card">
            <h2>${item.name}</h2>
            <h2>${item.model}</h2>
            <h3>price : $${item.price}</h3>
            <button onclick="addtocart(${index})" id="addtocartbtn">add to cart</button>
           </div>`
})


