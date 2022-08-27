    import navbar from "../component/navbar.js"
    document.getElementById("navbar").innerHTML=navbar()

    import footer from "../component/footer.js"
    document.getElementById("footer").innerHTML=footer()
    let data=JSON.parse(localStorage.getItem("productsdet"))||[];

    display(data)
    function display(){ 
        let pro = document.getElementById("pro");
        pro.innerHTML="";
        let sum=0;
        data.forEach((el,index) => {
            let products=document.createElement("div");
            products.setAttribute("id","products")

            let images=document.createElement("div");
            images.setAttribute("id","images")

            let img=document.createElement("img");
            img.setAttribute("id","img");
            img.src=el.image;
            images.append(img)


            let details=document.createElement("div");
            details.setAttribute("id","details")

            let title=document.createElement("h4");
            title.setAttribute("id","title")
            title.innerText=el.title;
            
            let quant=document.createElement("div");
            quant.setAttribute("id","quant")
            let select=document.createElement("p");
            select.setAttribute("id","select")
            select.innerText="select quantity:"
            let numbers=document.createElement("select");
            numbers.setAttribute("id","number")
            let option0=document.createElement("option");
            option0.setAttribute("value",el.quantity)
            option0.innerText=el.quantity;
            let option1=document.createElement("option");
            option1.value=1
            option1.innerText=1;
            let option2=document.createElement("option");
            option2.value=2;
            option2.innerText=2;
            let option3=document.createElement("option");
            option3.value=3;
            option3.innerText=3;
            let option4=document.createElement("option");
            option4.value=4;
            option4.innerText=4;
            let option5=document.createElement("option");
            option5.value=5;
            option5.innerText=5;
            numbers.append(option0,option1,option2,option3,option4,option5)
            console.log(numbers.value)    
            sum=sum+el.quantity*el.your_price;
            numbers.addEventListener("change",myfunc)
                function myfunc(){
                    el.quantity=numbers.value;
                    localStorage.setItem("productsdet",JSON.stringify(data))
                    display(data)
                }
            quant.append(select,numbers)
            

            let free=document.createElement("p");
            free.setAttribute("id","free")
            free.innerText="FREE DELIVERY"

            let date=document.createElement("p");
            date.setAttribute("id","date")
            date.innerText="DELIVERY DATE: 26 September";

            let deleted=document.createElement("img");
            deleted.setAttribute("id","delete");
            deleted.src="https://icons.veryicon.com/png/o/commerce-shopping/soft-designer-online-tools-icon/delete-77.png"
            deleted.addEventListener("click",function(el){
                data.splice(index,1)
                localStorage.setItem("productsdet",JSON.stringify(data))
                display(data)
            })
            details.append(title,quant,free,date,deleted)

            let our=document.createElement("div");
            our.setAttribute("id","our")
            let p1=document.createElement("p");
            p1.innerText=`₹${el.our_price}`
            our.append(p1)

            let your=document.createElement("div");
            your.setAttribute("id","your")
            let p2=document.createElement("p");
            p2.innerText=`₹${el.your_price}`;
            your.append(p2)

            products.append(images,details,our,your)

            pro.append(products)
            console.log("sum2",sum)

        });
        
        let quantity=document.getElementById("quantity");
        quantity.innerText=`Total Items: ${data.length}`;


        let sub=document.getElementById("sub");
        sub.innerText=`Subtotal: ₹${sum}`;
        localStorage.setItem("total",sum)
        console.log("total",sum)
        let total=document.getElementById("total");
        total.innerText=`Cart total: ₹${sum}`

        let rate=document.getElementById("rate");
        rate.innerText=`Or 3 interest free payments of  ₹${(sum/3).toFixed(2)} with simpl!`
    }
