import navbar from "../component/navbar.js"
document.getElementById("navbar").innerHTML=navbar()

import footer from "../component/footer.js"
document.getElementById("footer").innerHTML=footer()
    let data=[
        {
          titlehref: "https://www.meanbuy.com/shop/product/Dual_Movt_Quartz_Wristwatch_2",
          image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5MzQzXC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
          title: "Dual Movt Quartz Wristwatch",
          rating: 4.6,
          your_price: 1899,
          our_price: 2299,
          quantity:1,
          uptooff: "UP TO 24% OFF"
        },
        {
          titlehref: "https://www.meanbuy.com/shop/product/XG~D12_Wireless_Mini_Bluetooth_Earbuds_3",
          image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxNjU1XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
          title: "Dual Wireless Mini Bluetooth Earbuds with Charging Bin",
          rating: 4.5,
          your_price: 1899,
          our_price: 2199,
          quantity:1,
          uptooff: "UP TO 53% OFF"
        },
        {
          titlehref: "https://www.meanbuy.com/shop/product/Remote_Control_Aircraft_MiG_530",
          image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxOTk3XC9CbHVlX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
          title: "Remote Control Aircraft MiG 530",
          rating: 4.5,
          your_price: 5499,
          our_price: 6499,
          quantity:1,
          uptooff: "UP TO 31% OFF"
        },
        {
          titlehref: "https://www.meanbuy.com/shop/product/Women_ZX19_Smartwatch",
          image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMyMzg0XC9Hb2xkX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
          title: "Women ZX19 Smartwatch",
          rating: 4.6,
          your_price: 5499,
          our_price: 7199,
          quantity:1,
          uptooff: "UP TO 21% OFF"
        },
        {
          titlehref: "https://www.meanbuy.com/shop/product/Mens_LED_Digital_Wristwatch",
          image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5MzQwXC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
          title: "Mens LED Digital Wristwatch",
          rating: 4.6,
          your_price: 2999,
          our_price: 3599,
          quantity:1,
          uptooff: "UP TO 33% OFF"
        },
        {
          titlehref: "https://www.meanbuy.com/shop/product/Mens_Luxury_Analog_Wristwatch",
          image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMyMDQ1XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
          title: "Mens Luxury Analog Wristwatch",
          rating: 3.8,
          your_price: 4499,
          our_price: 5699,
          quantity:1,
          uptooff: "UP TO 25% OFF"
        },
        {
          titlehref: "https://www.meanbuy.com/shop/product/Mens_Digital_Smart_Watches",
          image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5Mjg0XC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
          title: "Mens Digital Smart Watches",
          rating: 4.8,
          your_price: 3999,
          our_price: 4999,
          quantity:1,
          uptooff: "UP TO 33% OFF"
        },
        {
          titlehref: "https://www.meanbuy.com/shop/product/TWS_6D_Stereo_Earphones",
          image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyNzc4XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
          title: "TWS 6D Stereo Earphones",
          rating: 4.6,
          your_price: 2299,
          our_price: 3099,
          quantity:1,
          uptooff: "UP TO 36% OFF"
        },
        {
          titlehref: "https://www.meanbuy.com/shop/product/KOSPET_TANK_M1_Smartwatch",
          image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMyMzg1XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
          title: "KOSPET TANK M1 Smartwatch",
          rating: 4.1,
          your_price: 4999,
          our_price: 5749,
          quantity:1,
          uptooff: "UP TO 38% OFF"
        },
        {
          titlehref: "https://www.meanbuy.com/shop/product/Qi_Wireless_Charger",
          image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxNjQ1XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
          title: "Qi Wireless Charger",
          rating: 4.6,
          your_price: 3199,
          our_price: 4099,
          quantity:1,
          uptooff: "UP TO 29% OFF"
        },
        {
          titlehref: "https://www.meanbuy.com/shop/product/Haylou_GT1_Touch_Bluetooth_2",
          image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyOTQxXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
          title: "Haylou GT1 Touch Bluetooth",
          rating: 4.6,
          your_price: 3299,
          our_price: 3799,
          quantity:1,
          uptooff: "FREE SHIPPING"
        },
        {
          titlehref: "https://www.meanbuy.com/shop/product/TWS_LT04_Smart_Watch",
          image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzMDM3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
          title: "TWS LT04 Smart Watch",
          rating: 4.7,
          your_price: 5999,
          our_price: 6999,
          quantity:1,
          uptooff: "UP TO 25% OFF"
        },
        {
          titlehref: "https://www.meanbuy.com/shop/product/Mini_Pocket_Umbrella_2",
          image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5Mzk0XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
          title: "Mini Pocket Umbrella",
          rating: 4.4,
          your_price: 2999,
          our_price: 3599,
          quantity:1,
          uptooff: "UP TO 33% OFF"
        },
        {
          titlehref: "https://www.meanbuy.com/shop/product/TWS_Touch_Earbuds",
          image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxODM1XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
          title: "TWS Touch Earbuds",
          rating: 4.7,
          your_price: 2599,
          our_price: 2999,
          quantity:1,
          uptooff: "UP TO 48% OFF"
        },
        {
          titlehref: "https://www.meanbuy.com/shop/product/Mens_Skull_Watch_2",
          image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5Nzc2XC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
          title: "Mens Skull Watch",
          rating: 4.5,
          your_price: 2699,
          our_price: 3299,
          quantity:1,
          uptooff: "UP TO 33% OFF"
        },
        {
          titlehref: "https://www.meanbuy.com/shop/product/3D_Art_Sand_Hour_Glass",
          image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNzY2XC9QaW5rX25fMV92ZnYuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
          title: "3D Art Sand Hour Glass",
          rating: 4.9,
          your_price: 1499,
          our_price: 2299,
          quantity:1,
          uptooff: "UP TO 50% OFF"
        },
        {
          titlehref: "https://www.meanbuy.com/shop/product/i7s_TWS_Wireless_Bluetooth_Earphone_With_Charging_Box_2",
          image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyMDA2XC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
          title: "i7s TWS Wireless Bluetooth Earphone With Charging Box",
          rating: 5,
          your_price: 799,
          our_price: 1299,
          quantity:1,
          uptooff: "UP TO 47% OFF"
        },
        {
          titlehref: "https://www.meanbuy.com/shop/product/Leather_Sport_Quartz_Watch_2",
          image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5MjgzXC9CbHVlX25fMV8xLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
          title: "Leather Sport Quartz Watch",
          rating: 4.9,
          your_price: 1699,
          our_price: 2299,
          quantity:1,
          uptooff: "UP TO 39% OFF"
        },
        {
          titlehref: "https://www.meanbuy.com/shop/product/Waterproof_Smart_Watch_2",
          image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxNzc0XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
          title: "Waterproof Smart Watch",
          rating: 4.4,
          your_price: 4399,
          our_price: 4899,
          quantity:1,
          uptooff: "UP TO 37% OFF"
        },
        {
          titlehref: "https://www.meanbuy.com/shop/product/B57_Smart_Watch_2",
          image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5MDMxXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
          title: "B57 Smart Watch",
          rating: 4.4,
          your_price: 4499,
          our_price: 5199,
          quantity:1,
          uptooff: "UP TO 25% OFF"
        },
        {
          titlehref: "https://www.meanbuy.com/shop/product/Mens_Waterproof_Watch",
          image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyNDQ4XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
          title: "Mens Waterproof Watch",
          rating: 4.8,
          your_price: 3399,
          our_price: 3799,
          quantity:1,
          uptooff: "UP TO 26% OFF"
        },
        {
          titlehref: "https://www.meanbuy.com/shop/product/CURREN_Luxury_Wrist_Watch",
          image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5Nzc5XC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
          title: "CURREN Luxury Wrist Watch",
          rating: 4.4,
          your_price: 2499,
          our_price: 2999,
          quantity:1,
          uptooff: "FREE SHIPPING"
        },
        {
          titlehref: "https://www.meanbuy.com/shop/product/Skmei_Luxury_Quartz_Watch",
          image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5Mzk5XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
          title: "Skmei Luxury Quartz Watch",
          rating: 4.6,
          your_price: 3099,
          our_price: 3699,
          quantity:1,
          uptooff: "UP TO 31% OFF"
        },
        {
          titlehref: "https://www.meanbuy.com/shop/product/Car_Mount_Charger",
          image: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5MTA5XC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
          title: "Baseus Car Mount Charger",
          rating: 4.2,
          your_price: 3599,
          our_price: 4299,
          quantity:1,
          uptooff: "UP TO 28% OFF"
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
      