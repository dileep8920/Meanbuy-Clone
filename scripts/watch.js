
import navbar from "../component/navbar.js"
document.getElementById("navbar").innerHTML=navbar()

import footer from "../component/footer.js"
document.getElementById("footer").innerHTML=footer()

let data=[
    {
      titlehref: "https://www.meanbuy.com/shop/product/Marvel_Iron_Men_ARC_Reactor_Watch",
      image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjM0MTU3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
      title: "Marvel Iron Men ARC Reactor Watch",
      rating: 3.5,
      your_price: "29,999",
      uptooff: "UP TO 25% OFF"
    },
    {
      titlehref: "https://www.meanbuy.com/shop/product/Steering_Wheel_Leather_Band_Quartz_Watch",
      image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMzNTMxXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
      title: "Steering Wheel Leather Band Quartz Watch",
      rating: 4.7,
      your_price: "3,999",
      uptooff: "UP TO 33% OFF"
    },
    {
      titlehref: "https://www.meanbuy.com/shop/product/Steering_Wheel_Steel_Quartz_Watch",
      image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMzNTMyXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
      title: "Steering Wheel Steel Quartz Watch",
      rating: 4.2,
      your_price: "4,999",
      uptooff: "UP TO 38% OFF"
    },
    {
      titlehref: "https://www.meanbuy.com/shop/product/Luminous_Seagull_waterproof_Watch",
      image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMzMTk4XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
      title: "Luminous Seagull waterproof Watch",
      rating: 4.3,
      your_price: "14,999",
      uptooff: "UP TO 25% OFF"
    },
    {
      titlehref: "https://www.meanbuy.com/shop/product/360_Pixel_Ultra~Clear_Smart_Watch",
      image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMzMDYwXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
      title: "360 Pixel Ultra-Clear Smart Watch",
      rating: 4.3,
      your_price: "8,999",
      uptooff: "UP TO 44% OFF"
    },
    {
      titlehref: "https://www.meanbuy.com/shop/product/Mens_Magnetic_Steel_Watch",
      image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMzMDMwXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
      title: "Mens Magnetic Steel Watch",
      rating: 4.8,
      your_price: "7,999",
      uptooff: "UP TO 33% OFF"
    },
    {
      titlehref: "https://www.meanbuy.com/shop/product/Tourbillon_Mechanical_Watch",
      image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMzMDI4XC9CbHVlX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
      title: "Tourbillon Mechanical Watch",
      rating: 4.3,
      your_price: "7,999",
      uptooff: "UP TO 20% OFF"
    },
    {
      titlehref: "https://www.meanbuy.com/shop/product/Fairwhale_Mechanical_Watch",
      image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMzMDI5XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
      title: "Fairwhale Mechanical Watch",
      rating: 4.2,
      your_price: "4,599",
      uptooff: "UP TO 43% OFF"
    },
    {
      titlehref: "https://www.meanbuy.com/shop/product/Hollow_Mechanical_Watch",
      image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMzMDI3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
      title: "Hollow Mechanical Watch",
      rating: 4.2,
      your_price: "4,999",
      uptooff: "UP TO 38% OFF"
    },
    {
      titlehref: "https://www.meanbuy.com/shop/product/Automatic_Mechanical_Watch",
      image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMyOTk2XC9TaWx2ZXJfbl8xXzEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
      title: "Automatic Mechanical Watch",
      rating: 4.7,
      your_price: "5,499",
      uptooff: "UP TO 31% OFF"
    },
    {
      titlehref: "https://www.meanbuy.com/shop/product/CHENXI_Square_Mens_Watch",
      image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMyOTU3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
      title: "CHENXI Square Mens Watch",
      rating: 3.6,
      your_price: "3,499",
      uptooff: "UP TO 30% OFF"
    },
    {
      titlehref: "https://www.meanbuy.com/shop/product/Authentic_Wrist_Watch",
      image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMyOTY0XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
      title: "Authentic Wrist Watch",
      rating: 4.5,
      your_price: "3,199",
      uptooff: "UP TO 47% OFF"
    },
    {
      titlehref: "https://www.meanbuy.com/shop/product/Mens_Luxury_Mechanical_Watch",
      image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMjMyXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
      title: "Mens Luxury Mechanical Watch",
      rating: 4.9,
      your_price: "8,999",
      uptooff: "UP TO 40% OFF"
    },
    {
      titlehref: "https://www.meanbuy.com/shop/product/Mens_Luminous_Quartz_Watch",
      image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMjMwXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
      title: "Mens Luminous Quartz Watch",
      rating: 4,
      your_price: "8,999",
      uptooff: "UP TO 50% OFF"
    },
    {
      titlehref: "https://www.meanbuy.com/shop/product/Mens_Steering_Wheel_Watch",
      image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMjI4XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
      title: "Mens Steering Wheel Watch",
      rating: 4.9,
      your_price: "9,999",
      uptooff: "UP TO 41% OFF"
    },
    {
      titlehref: "https://www.meanbuy.com/shop/product/Mens_Sport_Car_Wheel_Watch",
      image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMjI2XC9CbHVlX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
      title: "Mens Sport Car Wheel Watch",
      rating: 4.6,
      your_price: "8,999",
      uptooff: "UP TO 40% OFF"
    },
    {
      titlehref: "https://www.meanbuy.com/shop/product/Mens_Quartz_Wheel_Watch",
      image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMjI0XC9HcmVlbl9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
      title: "Mens Quartz Wheel Watch",
      rating: 4.5,
      your_price: "8,999",
      uptooff: "UP TO 40% OFF"
    },
    {
      titlehref: "https://www.meanbuy.com/shop/product/Mens_Stainless_Steel_Wristwatch",
      image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMjMxXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
      title: "Mens Stainless Steel Wristwatch",
      rating: 3.9,
      your_price: "4,499",
      uptooff: "UP TO 36% OFF"
    },
    {
      titlehref: "https://www.meanbuy.com/shop/product/Mens_Steel_Wheel_Watch",
      image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMjI5XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
      title: "Mens Steel Wheel Watch",
      rating: 4,
      your_price: "8,999",
      uptooff: "UP TO 40% OFF"
    },
    {
      titlehref: "https://www.meanbuy.com/shop/product/Mens_Waterproof_Quartz_Watch",
      image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMjI3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
      title: "Mens Waterproof Quartz Watch",
      rating: 4.3,
      your_price: "8,499",
      uptooff: "UP TO 43% OFF"
    },
    {
      titlehref: "https://www.meanbuy.com/shop/product/Mens_Waterproof_Wheel_Watch",
      image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMjI1XC9SZWRfbl8xXzEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
      title: "3D BENZ AMG WHEEL WATCH",
      rating: 1.8,
      your_price: "8,999",
      uptooff: "UP TO 40% OFF"
    },
    {
      titlehref: "https://www.meanbuy.com/shop/product/Men_Analog~Digital_Watch_2",
      image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0NzMzXC9CbHVlX25fMV8xLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
      title: "Men Analog-Digital Watch",
      rating: 4.6,
      your_price: "2,899",
      uptooff: "UP TO 28% OFF"
    },
    {
      titlehref: "https://www.meanbuy.com/shop/product/Mens_Leather_Water~Resistant_Quartz_Watch_2",
      image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0NzMxXC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
      title: "Mens Leather Water-Resistant Quartz Watch",
      rating: 3.9,
      your_price: "2,899",
      uptooff: "UP TO 28% OFF"
    },
    {
      titlehref: "https://www.meanbuy.com/shop/product/Mens_Luxury_Steel_Watch_2",
      image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxOTQ5XC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
      title: "Mens Luxury Steel Watch",
      rating: 4.8,
      your_price: "2,499",
      uptooff: "UP TO 38% OFF"
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