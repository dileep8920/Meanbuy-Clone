import navbar from "../component/navbar.js"
document.getElementById("navbar").innerHTML=navbar()

import footer from "../component/footer.js"
document.getElementById("footer").innerHTML=footer()

let data=[
  {
    titlehref: "https://www.meanbuy.com/shop/product/Xiaomi_Mi_LED_Desk_Lamp_Pro_2",
    image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMTQ0XC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    title: "Xiaomi Mi LED Desk Lamp Pro",
    rating: 4,
    your_price: "19,999"
  },
  {
    titlehref: "https://www.meanbuy.com/shop/product/Xiaomi_Mi_Smart_Door_Window_Sensor_2",
    image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMTM5XC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    title: "Xiaomi Mi Smart Door & Window Sensor",
    rating: 4.4,
    your_price: "6,999"
  },
  {
    titlehref: "https://www.meanbuy.com/shop/product/Tortilla_Press_Maker",
    image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzODE0XC9SZWRfbl8xX01lYW5idXkxLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    title: "Tortilla Press Maker",
    rating: 4.9,
    your_price: "9,999"
  },
  {
    titlehref: "https://www.meanbuy.com/shop/product/AWEI_T26_Wireless_Earphone",
    image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI3MzMwXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    title: "AWEI T26 Wireless Earphone",
    rating: 3.7,
    your_price: "4,999"
  },
  {
    titlehref: "https://www.meanbuy.com/shop/product/Wireless_Laser_Keyboard_2",
    image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0NDMxXC9XaGl0ZV9uXzFfV2lyZWxlc3NLZXlib2FyZDEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    title: "Wireless Laser Keyboard",
    rating: 4.7,
    your_price: "4,499"
  },
  {
    titlehref: "https://www.meanbuy.com/shop/product/Xiaomi_Mi_Smart_Antibacterial_Humidifier_2",
    image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMDA0XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    title: "Xiaomi Mi Smart Antibacterial Humidifier",
    rating: 4.4,
    your_price: "6,499"
  },
  {
    titlehref: "https://www.meanbuy.com/shop/product/Xiaomi_Mi_Monitor_Light_Bar_2",
    image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMTU3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    title: "Xiaomi Mi Monitor Light Bar",
    rating: 3.8,
    your_price: "5,499"
  },
  {
    titlehref: "https://www.meanbuy.com/shop/product/Luxury_Retro_Tissue_Box",
    image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNzA2XC9Ccm93bl9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    title: "Radio Tissue Box",
    rating: 4.5,
    your_price: "5,999"
  },
  {
    titlehref: "https://www.meanbuy.com/shop/product/Smart_Mug_Warmer",
    image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI3MzQ2XC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    title: "Smart Mug Warmer",
    rating: 4.4,
    your_price: "2,299"
  },
  {
    titlehref: "https://www.meanbuy.com/shop/product/Xiaomi_Mi_Inflator_Pump",
    image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI3MjEzXC9HcmF5X25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    title: "Xiaomi Mi Inflator Pump",
    rating: 3.8,
    your_price: "5,999"
  },
  {
    titlehref: "https://www.meanbuy.com/shop/product/Spiderman_Endgame_Figure_Toy",
    image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMzMjkyXC9SZWRfbl8xXzEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    title: "Spiderman Endgame Figure Toy",
    rating: 4.8,
    your_price: "10,999"
  },
  {
    titlehref: "https://www.meanbuy.com/shop/product/Luxury_Thin_Quartz_Watch",
    image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMyOTU2XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    title: "Luxury Thin Quartz Watch",
    rating: 4.8,
    your_price: "4,999"
  },
  {
    titlehref: "https://www.meanbuy.com/shop/product/Petal_Bracelet",
    image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMyOTQyXC9Hb2xkX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    title: "Petal Bracelet",
    rating: 4.5,
    your_price: "1,799"
  },
  {
    titlehref: "https://www.meanbuy.com/shop/product/Infinity_Heart_Necklace",
    image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMyOTE5XC9Hb2xkX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    title: "Infinity Heart Necklace",
    rating: 4.6,
    your_price: "1,499"
  },
  {
    titlehref: "https://www.meanbuy.com/shop/product/Envelope_Photo_Frame_Necklace",
    image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMyOTIxXC9Hb2xkX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    title: "Envelope Photo Frame Necklace",
    rating: 4,
    your_price: "1,899"
  },
  {
    titlehref: "https://www.meanbuy.com/shop/product/Korean_Heart_Love_Necklace_Set",
    image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMyODk2XC9Hb2xkX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    title: "Korean Heart Love Necklace Set",
    rating: 4.3,
    your_price: "1,499"
  },
  {
    titlehref: "https://www.meanbuy.com/shop/product/Sunflower_Spinning_Necklace",
    image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMyODk4XC9Hb2xkX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    title: "Sunflower Spinning Necklace",
    rating: 3.7,
    your_price: "1,799"
  },
  {
    titlehref: "https://www.meanbuy.com/shop/product/Korean_Steel_Necklace",
    image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMyNjc0XC9Hb2xkX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    title: "Korean Steel Necklace",
    rating: 3.6,
    your_price: "1,999"
  },
  {
    titlehref: "https://www.meanbuy.com/shop/product/Double_Layer_Necklace",
    image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMyNjc4XC9Hb2xkX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    title: "Double Layer Necklace",
    rating: 4,
    your_price: "1,999"
  },
  {
    titlehref: "https://www.meanbuy.com/shop/product/Remote_Control_6_Channel_Excavator",
    image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMyNjQxXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    title: "Remote Control 6 Channel Excavator",
    rating: 4.2,
    your_price: "4,999"
  },
  {
    titlehref: "https://www.meanbuy.com/shop/product/Duke_Measuring_Tape",
    image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMyNjE0XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    title: "Duka Measuring Tape",
    rating: 3.6,
    your_price: "4,999"
  },
  {
    titlehref: "https://www.meanbuy.com/shop/product/TWS_Mini_Semi~in~Ear_Earbuds",
    image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMyNDQzXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    title: "TWS Mini Semi-in-Ear Earbuds",
    rating: 3.5,
    your_price: "3,999"
  },
  {
    titlehref: "https://www.meanbuy.com/shop/product/Zeblaze_Stratos_2_Smartwatch",
    image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMyMzg4XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    title: "Zeblaze Stratos 2 Smartwatch",
    rating: 4.5,
    your_price: "8,999"
  },
  {
    titlehref: "https://www.meanbuy.com/shop/product/Space_Man_Holder",
    image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMyMTY1XC9CbHVlX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    title: "Space Man Holder",
    rating: 4.2,
    your_price: "7,999"
  }
]



let dataa=JSON.parse(localStorage.getItem("productsdet"))||[];
      
function display(){
  let container=document.getElementById("container");
  data.forEach(el=>{
    let box=document.createElement("div");
    box.setAttribute("id","box");
    let imag=document.createElement("div");
    imag.setAttribute("id","imag");
    let img=document.createElement("img");
    img.src=el.image;
    imag.append(img);
    let box1=document.createElement("div");
    box1.setAttribute("id","box1");
    let title=document.createElement("div");
    title.setAttribute("id","title");
    title.innerText=el.title;
    let rating=document.createElement("div");
    rating.setAttribute("id","rating");
    rating.innerText=`${el.rating}/5`;
    box1.append(title,rating);
    let box2=document.createElement("div");
    box2.setAttribute("id","box2");
    let price=document.createElement("div");
    price.setAttribute("id","price")
    price.innerText=`₹${el.your_price}`;
    let cart=document.createElement("div");
    cart.setAttribute("id","cart");
    let btn=document.createElement("button");
    btn.innerText="Add to Cart";
    btn.addEventListener("click",function(){
      dataa.push(el);
      alert("product added to cart")
      // let id=setInterval(function(){
      //   let hello=document.getElementById("hello");
      //   hello.innerText="add to cart"
      // },2000)
      // setTimeout(function(){
      //   id
      // },2000)
      localStorage.setItem("productsdet",JSON.stringify(dataa))
    })
    cart.append(btn);
    box2.append(price,cart);
    box.append(imag,box1,box2);
    container.append(box)

  });
}

display(data)