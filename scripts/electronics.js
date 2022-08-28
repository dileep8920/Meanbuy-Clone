import navbar from "../component/navbar.js"
document.getElementById("navbar").innerHTML=navbar()

import footer from "../component/footer.js"
document.getElementById("footer").innerHTML=footer()


let Electronics =[
    { image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzODExXC9CbGFja19uXzFfTWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
     title: "Smart Display Water Bottle",
     rating: "4.5/5 *",
     price: 3499,
     uptooff: "Free uptooff",
  },
  { image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzg1XC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
     title: "Lenovo Pad Plus 11 inch Tablet (6GB+128GB)",
     rating: "4.5/5 *",
     price: 27999,
     uptooff: "Free uptooff",
  },
  { image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzI1XC9TaWx2ZXJfbl8xXzEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
     title: "Dual-Use Laptop and Desktop Stand",
     rating: "4.9/5 *",
     price: 12999,
     uptooff: "Free uptooff",
  },
  { image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzI3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
     title: "Two-Seater PS4 Charging Base",
     rating: "4.2/5 *",
     price: 1099,
     uptooff: "Free uptooff",
  },
  { image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzI4XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
     title: "PS4 Slim Pro Charging Base",
     rating: "5/5 *",
     price: 2999,
     uptooff: "Free uptooff",
  },
  { image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMTk4XC9HcmF5X25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
     title: "HUAWEI MateBook X Pro i5 16GB 512G",
     rating: "4.2/5 *",
     price: 249999,
     uptooff: "Free uptooff",
  },
  { image:
     " https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMTM2XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
     title: "Xiaomi Mi Dual Mode Wireless Mouse",
     rating: "3.9/5 *",
     price: 1299,
     uptooff: "Free uptooff",
  },
  { image:
     " https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMTM3XC9Sb3NlX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
     title:"Xiaomi Mi Portable Mouse",
     rating: "5/5 *",
     price: 1999,
     uptooff: "Free uptooff",
  },
  { image:
     " https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMTQ4XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
     title:"Xiaomi Mi Computer Glass",
     rating: "3.6/5 *",
     price: 1999,
     uptooff: "Free uptooff",
  },

  { image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzODExXC9CbGFja19uXzFfTWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
     title: "Smart Display Water Bottle",
     rating: "4.5/5 *",
     price: 3499,
     uptooff: "Free uptooff",
  },
  { image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzg1XC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
     title: "Lenovo Pad Plus 11 inch Tablet (6GB+128GB)",
     rating: "4.5/5 *",
     price: 27999,
     uptooff: "Free uptooff",
  },
  { image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzI1XC9TaWx2ZXJfbl8xXzEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
     title: "Dual-Use Laptop and Desktop Stand",
     rating: "4.9/5 *",
     price: 12999,
     uptooff: "Free uptooff",
  },
  { image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzI3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
     title: "Two-Seater PS4 Charging Base",
     rating: "4.2/5 *",
     price: 1099,
     uptooff: "Free uptooff",
  },
  { image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzI4XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
     title: "PS4 Slim Pro Charging Base",
     rating: "5/5 *",
     price: 2999,
     uptooff: "Free uptooff",
  },




     
  ];





let dataa=JSON.parse(localStorage.getItem("productsdet"))||[];
      
function displaydata(Electronics){
  let container=document.getElementById("AccesoriesContainer");
  Electronics.forEach(el=>{
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
    price.innerText=`₹${el.price}`;
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

displaydata(Electronics)


document.getElementById("sortbyprice").addEventListener("change",function(){
   sortbyprice(Electronics)
})

function sortbyprice(Electronics)
{
  let selected = document.querySelector("#sortbyprice").value;
  if(selected=="low")
  {
      Electronics.sort(function(a,b)
      {
          return a.price - b.price
        //   console.log(a.price- b.price)
      })
  }
  if(selected=="high")
  {
    Electronics.sort(function(a,b)
      {
        console.log(b.price- a.price)
          return b.price - a.price
      })
  }
  displaydata(Electronics)

}
// sortbyprice()
