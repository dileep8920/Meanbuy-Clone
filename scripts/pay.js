
  import navbar from "../component/navbar.js"
  document.getElementById("navbar").innerHTML=navbar()


  import footer from "../component/footer.js"
  document.getElementById("footer").innerHTML=footer()


  
  let data = JSON.parse(localStorage.getItem("productsdet"));
  let alltotal = localStorage.getItem("total");


  function myfun() {
    let state = document.getElementById("state").value;
    return state;
  }
  let option = document.querySelectorAll(".optionsecoptions");
  function payy() {
    let st = document.getElementById("accept");
    option.forEach((el) => {
      el.addEventListener("click", function () {
        console.log(el.id);
        option.forEach((ele) => ele.classList.remove("active"));
        if (el.id === "net") {
          st.innerText =
            "We accept all major credit and debit cards of Indian and International banks.";
        }
        if (el.id === "upi") {
          st.innerText =
            "We accept all major credit and debit cards of Indian and International banks.";
        }
        if (el.id === "credit") {
          st.innerText =
            "We accept all major credit and debit cards of Indian and International banks.";
          pops();
        }
        if (el.id === "emi") {
          st.innerText =
            "We accept all major credit and debit cards of Indian and International banks.";
        }
        if (el.id === "simpl") {
          st.innerText = `3 interest free payments of ₹${(alltotal / 3).toFixed(
            2
          )} with Simpl!`;
        }
        this.classList.add("active");
      });
    });
  }
  payy();

  function display(data) {
    let save = 0;
    let products = document.getElementById("products");
    products.innerHTML = "";
    data.forEach((el) => {
      let div = document.createElement("div");
      let h6 = document.createElement("h6");
      h6.innerText = `${el.quantity} × ${el.title}`;
      let p = document.createElement("p");
      p.setAttribute("id", "delivery_date");
      p.innerText = "Delivery Date:";
      let span1 = document.createElement("span");
      span1.innerText = "26 September";
      p.append(span1);
      let p1 = document.createElement("p");
      p1.setAttribute("id", "price");
      p1.innerText = "Price : ";
      let span2 = document.createElement("span");
      span2.innerText = `₹${el.your_price}`;
      let span3 = document.createElement("span");
      span3.innerText = `₹${el.our_price}`;
      p1.append(span2, span3);
      div.append(h6, p, p1);
      products.append(div);
      save = save + (el.our_price - el.your_price);
    });
    let saving = document.getElementById("saving");
    saving.innerText = `₹${save}`;
    let rupe = document.getElementById("rupe");
    let s = (alltotal / 3).toFixed(2);
    rupe.innerText = `₹${s}`;
    rupe.style.color = "black";
    let tree=document.querySelector("#top3>p");
    tree.innerText=`PAY ₹${alltotal}`;
    let topay=document.getElementById("topay");
    topay.innerText=`₹${alltotal}`
  }
  display(data);

  let sub = document.getElementById("sub");
  sub.innerText = `₹${alltotal}`;

  let grande = document.getElementById("tdd");
  grande.innerText = `₹${alltotal}`;

  function coupon() {
    let code = document.getElementById("code");
    if (code.value === "PREPAID") {
      alltotal = alltotal - 500;
      let grand = document.getElementById("tdd");
      grand.innerText = `₹${alltotal}`;
      let tree=document.querySelector("#top3>p");
      tree.innerText=`PAY ₹${alltotal}`
      let topay=document.getElementById("topay");
      topay.innerText=`₹${alltotal}`
      localStorage.setItem("grandtotal",alltotal)
      let promo = document.getElementById("td3");
      promo.innerText = `₹500`;
      document.getElementById("apply").disabled = true;
      let rem = document.getElementById("remove");
      rem.innerText = "Remove Promotional Code";
      let wro = document.getElementById("wrongpromo");
      wro.innerText = "Promo Code applied successfully";
      let rupe = document.getElementById("rupe");
      let s = (alltotal / 3).toFixed(2);
      rupe.innerText = `₹${s}`;
      rupe.style.Color = "black";
    } else {
      let wro = document.getElementById("wrongpromo");
      wro.innerText = "This Promo Code is not valid";
    }
  }

  function remove() {
    alltotal = alltotal + 500;
    let grand = document.getElementById("tdd");
    grand.innerText = `₹${alltotal}`;
    let tree=document.querySelector("#top3>p");
    tree.innerText=`PAY ₹${alltotal}`;
    let topay=document.getElementById("topay");
    topay.innerText=`₹${alltotal}`
    let promo = document.getElementById("td3");
    promo.innerText = `₹0`;
    document.getElementById("apply").disabled = false;
    let rem = document.getElementById("remove");
    rem.innerText = "";
    let wro = document.getElementById("wrongpromo");
    wro.innerText = "";
    let rupe = document.getElementById("rupe");
    let s = (alltotal / 3).toFixed(2);
    rupe.innerText = `₹${s}`;
    rupe.style.Color = "black";
  }

  function pops() {
    let popup = document.getElementById("popup");
    let paynow = document.getElementById("paynow");
    paynow.addEventListener("click", () => {
      popup.showModal();
    });

    let close = document.getElementById("close");
    close.addEventListener("click", () => {
      popup.close();
    });
  }

  let tops=document.getElementById("top3");
    tops.addEventListener("click",placed)
    function placed(){
        let popup=document.getElementById("popup");
        popup.innerHTML="";
        let img=document.createElement("img");
        img.setAttribute("id","orderimg")
        img.src="https://c.tenor.com/wpSo-8CrXqUAAAAj/loading-loading-forever.gif";
        popup.append(img)
        setTimeout(function(){
            let popup=document.getElementById("popup");
            popup.innerHTML="";
            popup.style.backgroundImage="url('https://media0.giphy.com/media/5T06ftQWtCMy0XFaaI/200w.webp?cid=ecf05e47ivulsl0ahgd03x1w1l6ydy18s9y6nrzjvjk3hkua&rid=200w.webp&ct=g')";
            let h3=document.createElement("h3");
            h3.setAttribute("id","head")
            h3.innerText="Order placed !"
            popup.append(h3);
            setTimeout(function(){
                window.location.href="cart.html"
                alert("hello")
            },5000)
        },3000)
    }