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
                                <p><a href="watch.html">Watches</a></p>
                                <p><a href="">Men's Watches</a></p>
                                <h4><u>WOMEN</u></h4>
                                <p><a href="">Makeup Accessories</a></p>
                                <p><a href="">Watches</a></p>
                                </div>
                                <div>
                                <h5><u>ELECTRONICS</u></h5>
                                <p><a href="electronics.html">Gaming Accessories</a></p>
                                <p><a href="">Keyboards & Mouse</a></p>
                                <p><a href="">Small Appliances</a></p>
                          </div>
                    
                          <div>
                            <h5><u>ESSENTIALS</u></h5>
                            <p><a href="">Home Essentials</a></p>
                            <p><a href="">Men's Essentials</a></p>
                            <p><a href="">Women Essentials</a></p>
                          </div>
                    
                          <div>
                            <h5><u>FLASH SALE</u></h5>
                            <p><a href="">Flash Sale</a></p>
                          </div>
                    
                          <div>
                            <h5><u>HOME & LIVING</u></h5>
                            <p><a href="">Bath & Storage</a></p>
                            <p><a href="">Gardening</a></p>
                            <p><a href="">Home Decor</a></p>
                            <p><a href="">Home Improvement</a></p>
                            <p><a href="">Kitchen Wares</a></p>
                            <p><a href="">Nordic Celling Lights</a></p>
                            <p><a href=""> Pet Products</a></p>
                          </div>
                    
                          <div>
                            <h5><u>KIDS &MOM</u></h5>
                            <p><a href="">Action Figures</a></p>
                            <p><a href="">Discovery Adventures</a></p>
                            <p><a href="">Disney</a></p>
                            <p><a href="">Hello Kitty</a></p>
                            <p><a href="">Kid's Shoes</a></p>
                            <p><a href="">Marvel</a></p>
                            <p><a href="">Minions</a></p>
                            <p><a href="">School Backpacks</a></p>
                            <p><a href="">Toys</a></p>
                          </div>
                    
                          <div>
                            <h5><u>MEANBUY DEALS</u></h5>
                            <p><a href="">Gifts</a></p>
                            <p><a href="">Electronics</a></p>
                            <p><a href="">Men's Watches</a></p>
                            <p><a href="">Smart Watches</a></p>
                            <p><a href="">Top selling</a></p>
                          </div>
                          <div>
                <h5><u>MOBILES & TABS</u></h5>
        <p><a href=""> Bluetooth Earphone</a></p>
        <p><a href="">Mobiles Accessories</a></p>
        <p><a href="">Sporting Bluetooth</a></p>
        <p><a href="">Wired Headphones</a></p>
        <p><a href="">Wireless  Charger</a></p>
        <p><a href="">Wireless Speakers</a></p>
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