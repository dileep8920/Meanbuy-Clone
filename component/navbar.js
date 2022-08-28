let navbar = () => {
    return `
    <div class="navbar">
    <div id="maindiv">
        <div id="midd">
            <div id="midlft">
               <a href="index.html"><img id="imgLogo" src="https://meanbuyassets.s3.ap-south-1.amazonaws.com/baselogo.png" alt=""></a> 
                <div id="abc">
                <form class="searchB" action="">
                <input type="text" placeholder="Search" id="inp"/>
            </form>
            </div>
            </div>
 
            <div id="midrt">
                <div id="links">
                    <p><a href="">Seller's Corner |</a></p>
                    <p><a href="">Feedback |</a></p>
                    <p><a href="blog.html">Blog |</a></p>
                     <p> <a href="">Delivery Info</a></p>
                 </div>
                <div id="log">
                    <div id="smalllogin">
                 <i class="fa fa-user-o" aria-hidden="true"></i>
                    <a href="login.html" class="navlogin">LOGIN <span>/</span></a><a  class="navlogin" href="signup.html"> SiGN UP</a>
                 </div>
                     <p id="log2">WELCOME GUEST</p>
 
                </div>
                <a href="cart.html">
                <div id="cart">
                    <div id="carIm">
                        <img class="cartimg" src="http://www.clker.com/cliparts/O/N/s/Q/P/Y/shopping-cart-orange-th.png" alt="">
                    <p id="cartcount">
                    </div></p>0</div>
            </div>
         </div>
        </a>
        <div id="lower-div">
            <nav class="nav-bar">
                <ul>
                    <li> <a href="">Category</a> 
                         <div class="mega-menu">
                             <div class="inner-mega-menu">
                                <div>
                                <h5><u>MEN</u></h5>
                                <p><a href="">Watches</a></p>
                                <p><a href="">Men's Watches</a></p>
                                <h4><u>WOMEN</u></h4>
                                <p><a href="">Makeup Accessories</a></p>
                                <p><a href="">Watches</a></p>
                                </div>
                                <div>
                                      <p> <a href="Accessories.html">Accessories</a> </p>
                                 <p><a href="Electronics.html">Electronics</a></p>
                                 <p><a href="">Home & Living</a></p>
                                 <p><a href="">Kids & Moms</a></p>
                                 <p><a href="">Meanbuy Deals</a></p>
                                 <p><a href="">Mobile & Tablets</a></p>
                                </div>
                                 <!-- <p> <a href="Accessories.html">Accessories</a> </p>
                                 <p><a href="Electronics.html">Electronics</a></p>
                                 <p><a href="">Home & Living</a></p>
                                 <p><a href="">Kids & Moms</a></p>
                                 <p><a href="">Meanbuy Deals</a></p>
                                 <p><a href="">Mobile & Tablets</a></p> -->
                             </div>
                         </div>
                     </li>
                     <li><a href="flash.html">Flash sale</a></li>
                     <li> <a href="best_deals.html"> Best Deals</a</li>
                     <li> <a href="ShopByBrand.html"> Shop By Brand</a</li>
                     <li> <a href="trending.html"> Trending</a</li>
                     <li> <a href="NewArrival.html"> New Arrival</a</li>
                </ul>
            </nav>
                
            </div>
        </div>
        
    </div>
    `
}

export default navbar;