import './index.css'; 
import React from 'react';
import ProductList from './components/ProductList';

function App() {
  return (
    <>
      {<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>homework</title>
  <link rel="stylesheet" href="index.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
    integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
  <style dangerouslySetInnerHTML={{ __html: "" }} />
  <header>
    <div className="navbar">
      <div className="nav-logo border">
        <div className="logo"/>
      </div>
      <div className="address border">
        <p className="deliver">Deliver To</p>
        <div className="icon">
          <i className="fa-solid fa-location-dot" />
          <p className="india">India</p>
        </div>
      </div>
      {/* 2nd box */}
      <div className="nav-search">
        <select className="search">
          <option>All </option>
          <option>Appliances</option>
          <option>Apps and Games</option>
          <option>Baby</option>
          <option>Beauty</option>
          <option>Books</option>
          <option>Car &amp; Motorbikes</option>
          <option>Computer &amp; Accesories</option>
          <option>Clothing</option>
          <option>Deals</option>
          <option>Electronic</option>
          <option>Furniture</option>
        </select>
        <input placeholder="Search Amazon.in" className="input" />
        <button className="search-icon">
          {" "}
          <i className="fa-solid fa-magnifying-glass" />
        </button>
      </div>
      {/* 3rd box */}
      <div className="lang border">
        <i className="fa-solid fa-flag" />
        <select className="lang">
          <option>EN</option>
          <option>HI</option>
        </select>
      </div>
      {/* 4th box */}
      <div className="sign-in border">
        <p>
          <span>Hello,sign in</span>
        </p>
        <p className="account">Account &amp; Lists</p>
      </div>
      {/* 5th box */}
      <div className="nav-return border">
        <p>
          <span>Returns</span>
        </p>
        <p className="account"> &amp; Orders</p>
      </div>
      {/* 6th box */}
      <div className="nav-cart">
        <i className="fa-solid fa-cart-shopping" />
        Cart
      </div>
    </div>
    {/* 2nd line */}
    <div className="panel">
      <div className="menu">
        <i className="fa-solid fa-bars" />
        All
      </div>
      <div className="ops">
        <p>MX Player</p>
        <p> Sell</p>
        <p> Bestsellers</p>
        <p> Mobiles</p>
        <p> Customer Service</p>
        <p> New Releases</p>
        <p>Electronics</p>
        <p>Fashion</p>
        <p>Home &amp; Kitchen</p>
        <p> Amazon Pay</p>
        <p> Computers</p>
      </div>
      <div className="deals">Today's Deals</div>
    </div>
  </header>
  {/* hero section */}
  <section className="hero" />
  <div className="content-section1">
    {/* 1st line containers  */}
    <div className="container1">
      <div className="title">
        Appliances for your home <br />| Up to 55% off
      </div>
      <div className="grid">
        <div className="box"><img src="/image/ac.jpeg"alt="Ac"/>
          <p>Air Conditioner</p>
        </div>
        <div className="box">< img src="/image/refri.jpeg"alt="refri"/>
          <p>Refrigerator</p>
        </div>
        <div className="box1" ><img src="/image/micro.jpeg"alt="micro"/>
          <p>Microwaves</p>
        </div>
        <div className="box1"><img src="/image/wash.jpeg"alt="wash"/>
          <p>Washing Machines</p>
        </div>
        <a
          href="https://www.amazon.in/s?bbn=84514735031&rh=n%3A84514735031%2Cp_85%3A10440599031&_encoding=UTF8&content-id=amzn1.sym.58c90a12-100b-4a2f-8e15-7c06f1abe2be&pd_rd_r=002e213d-6a3f-407e-a241-5a6363e73172&pd_rd_w=JmGei&pd_rd_wg=c5HaI&pf_rd_p=58c90a12-100b-4a2f-8e15-7c06f1abe2be&pf_rd_r=8RRQ1DMWZHDDTQ84MCV2&ref=pd_hp_d_atf_unk"
          className="text1"
        >
          See more
        </a>
      </div>
    </div>
    <div className="container2">
      <div className="title">
        Revamp your home in <br />
        style
      </div>
      <div className="grid">
        <div className="box " ><img src="/image/cusion.jpeg"alt="cusion"/>
          <p>
            Cushion covers,
            <br /> bedsheets &amp; more
          </p>
        </div>
        <div className="box "><img src="/image/vases.jpeg"alt="vases"/>
          <p>
            Figurines,vases &amp;
            <br /> more
          </p>
        </div>
        <div className="box1 "><img src="/image/home.jpeg"alt="home"/>
          <p>Home Storage</p>
        </div>
        <div className="box1 " ><img src="/image/light.jpeg"alt="light"/>
          <p>Lighting Solutions</p>
        </div>
        <a
          href="https://www.amazon.in/b/?_encoding=UTF8&node=12414705031&pd_rd_w=nNl3G&content-id=amzn1.sym.f8e82c51-0408-4554-a158-9be4d776850d&pf_rd_p=f8e82c51-0408-4554-a158-9be4d776850d&pf_rd_r=8RRQ1DMWZHDDTQ84MCV2&pd_rd_wg=c5HaI&pd_rd_r=002e213d-6a3f-407e-a241-5a6363e73172&ref_=pd_hp_d_atf_unk"
          className="text1"
        >
          Explore all
        </a>
      </div>
    </div>
    <div className="container3">
      <div className="title">
        Starting ₹149 <br />| Headphones
      </div>
      <div className="grid">
        <div className="box "><img src="/image/boult.jpeg"alt="boult"/>
          <p> Starting ₹249 | boAt</p>
        </div>
        <div className="box " ><img src="/image/boat.jpeg"alt="boat"/>
          <p>Starting ₹349 | boult</p>
        </div>
        <div className="box1 " ><img src="/image/noise.jpeg"alt="noise"/>
          <p> Starting ₹649 | Noise</p>
        </div>
        <div className="box1"><img src="/image/zeb.jpeg"alt="zeb"/>
          <p>
            Starting ₹149 | <br />
            Zebronics
          </p>
        </div>
        <a
          href="https://www.amazon.in/b/?_encoding=UTF8&ie=UTF8&node=1388921031&pd_rd_w=3ok9Q&content-id=amzn1.sym.82b20790-8877-4d70-8f73-9d8246e460aa&pf_rd_p=82b20790-8877-4d70-8f73-9d8246e460aa&pf_rd_r=8RRQ1DMWZHDDTQ84MCV2&pd_rd_wg=c5HaI&pd_rd_r=002e213d-6a3f-407e-a241-5a6363e73172&ref_=pd_hp_d_atf_unk"
          className="text1"
        >
          See all offers
        </a>
      </div>
    </div>
    <div className="container4">
      <div className="title">
        Automotive essentials <br />| Up to 60% off
      </div>
      <div className="grid">
        <div className="box " ><img src="/image/clean.jpeg"alt="clean"/>
          <p>Cleaning accesories</p>
        </div>
        <div className="box "><img src="/image/vaccum.jpeg"alt="vaccum"/>
          <p>Vaccum cleaner</p>
        </div>
        <div
          className="box1 ">
          <img src="/image/helmet.jpeg"alt="helmet"/>
       
          <p>Helmet</p>
        </div>
        <div className="box1"><img src="/image/tyre.jpeg"alt="tyre"/>
          <p>Tyre &amp; rime care</p>
        </div>
        <a
          href="https://www.amazon.in/b/?_encoding=UTF8&ie=UTF8&node=4772060031&pd_rd_w=Wv1lk&content-id=amzn1.sym.9ff36f11-82d6-4600-a8fb-e52bb32e171c&pf_rd_p=9ff36f11-82d6-4600-a8fb-e52bb32e171c&pf_rd_r=8RRQ1DMWZHDDTQ84MCV2&pd_rd_wg=c5HaI&pd_rd_r=002e213d-6a3f-407e-a241-5a6363e73172&ref_=pd_hp_d_atf_unk"
          className="text1"
        >
          See more
        </a>
      </div>
    </div>
  </div>
  {/* 2nd line containers  */}
  <div className="content-section2">
    <div className="container5">
      <div className="title">
        Up to 60% off <br />| Styles for women
      </div>
      <div className="grid">
        <div className="box " ><img src="/image/women.jpeg"alt="women"/>
          <p>Women's Clothing</p>
        </div>
        <div className="box "><img src="/image/foot.jpeg"alt="foot"/>
          <p>Footwear+Handbags</p>
        </div>
        <div className="box1 "><img src="/image/watch.jpeg"alt="watch"/>
          <p>Watches</p>
        </div>
        <div className="box1 "><img src="/image/jewel.jpeg"alt="jewel"/>
          <p>Fashion jewellery</p>
        </div>
        <a
          href="https://www.amazon.in/b/ref=sl_gw_feb20/?_encoding=UTF8&node=6648217031&pd_rd_w=BPt35&content-id=amzn1.sym.74f25a9d-e850-443b-a26a-da459bed7e95&pf_rd_p=74f25a9d-e850-443b-a26a-da459bed7e95&pf_rd_r=8RRQ1DMWZHDDTQ84MCV2&pd_rd_wg=c5HaI&pd_rd_r=002e213d-6a3f-407e-a241-5a6363e73172&ref_=pd_hp_d_atf_unk"
          className="text1"
        >
          End of season sale
        </a>
      </div>
    </div>
    <div className="container6">
      <div className="title">
        Under ₹499 | Deals on
        <br /> home improvement...
      </div>
      <div className="grid">
        <div className="box "><img src="/image/supple.jpeg"alt="supple"/>
          <p>Kitchen</p>
        </div>
        <div className="box "><img src="/image/tools.jpeg"alt="tools"/>
          <p>Tools</p>
        </div>
        <div className="box1 "><img src="/image/wal.jpeg"alt="wal"/>
          <p>Wall Stickers</p>
        </div>
        <div className="box1 "><img src="/image/bath.jpeg"alt="bath"/>
          <p>Bathroom</p>
        </div>
        <a
          href="https://www.amazon.in/b/?_encoding=UTF8&node=4286640031&pd_rd_w=1M2WF&content-id=amzn1.sym.0a250fc6-18a4-49da-8c15-ae7cde5579f2&pf_rd_p=0a250fc6-18a4-49da-8c15-ae7cde5579f2&pf_rd_r=8RRQ1DMWZHDDTQ84MCV2&pd_rd_wg=c5HaI&pd_rd_r=002e213d-6a3f-407e-a241-5a6363e73172&ref_=pd_hp_d_atf_unk"
          className="text1"
        >
          Explore all
        </a>
      </div>
    </div>
    <div className="container7">
      <div className="title">
        Starting ₹199 | Amazon <br />
        Brands &amp; more
      </div>
      <div className="grid">
        <div className="box "><img src="/image/bed.jpeg"alt="bed"/>
          <p>
            Starting 199| <br />
            Bedsheets
          </p>
        </div>
        <div
          className="box ">
        <img src="/image/curtain.jpeg"alt="curtaion"/>
        
          <p>
            Starting 199|
            <br /> Curtains
          </p>
        </div>
        <div className="box1 " ><img src="/image/decor.jpeg"alt="decor"/>
          <p>
            Upto 60% off | <br />
            Home decor
          </p>
        </div>
        <div className="box1 " ><img src="/image/iron.jpeg"alt="iron"/>
          <p>Minimum 40% off | Ironing board &amp; more</p>
        </div>
        <a
          href="https://www.amazon.in/s?bbn=1380442031&rh=n%3A1380442031%2Cp_n_format_browse-bin%3A19560802031&_encoding=UTF8&content-id=amzn1.sym.4d494d65-8009-406a-9a50-5e08a16212d7&pd_rd_r=002e213d-6a3f-407e-a241-5a6363e73172&pd_rd_w=5M4Xm&pd_rd_wg=c5HaI&pf_rd_p=4d494d65-8009-406a-9a50-5e08a16212d7&pf_rd_r=8RRQ1DMWZHDDTQ84MCV2&ref=pd_hp_d_atf_unk"
          className="text1"
        >
          See more
        </a>
      </div>
    </div>
    <div className="container8">
      <div className="title">
        Min. 40% off | Fun games
        <br /> that spark joy | Amazon
      </div>
      <div className="grid">
        <div className="box " ><img src="/image/toy.jpeg"alt="toy"/>
          <p>Stuff toys</p>
        </div>
        <div className="box" ><img src="/image/ele.jpeg"alt="ele"/>
          <p>Toys</p>
        </div>
        <div
          className="box1 "
        >
          <img src="/image/wash.jpeg"alt="wash"/>
          <p>Outdoor games </p>
        </div>
        <div
          className="box1 "
        >
          <img src="/image/outdoor.jpeg"alt="outdoor"/>
          <p>Indoor games</p>
        </div>
        <a
          href="https://www.amazon.in/b/?_encoding=UTF8&_encoding=UTF8&ie=UTF8&node=17410462031&ref_=baby_gw_pcqc&pd_rd_w=uiXDo&content-id=amzn1.sym.2db1e755-cd0a-4b02-8f0b-5916398d7c3c&pf_rd_p=2db1e755-cd0a-4b02-8f0b-5916398d7c3c&pf_rd_r=8RRQ1DMWZHDDTQ84MCV2&pd_rd_wg=c5HaI&pd_rd_r=002e213d-6a3f-407e-a241-5a6363e73172"
          className="text1"
        >
          See all offers
        </a>
      </div>
    </div>
  </div>
  {/* 3rd line containers */}
  <div className="content-section3">
    <div className="container9">
      <div className="title2">
        Home shopping spree | Bestsellers in kitchen &amp; dining | Amazon
        Launchpad{" "}
        <a
          href="https://www.amazon.in/l/10894223031?pd_rd_w=2vvdH&content-id=amzn1.sym.c98b2de5-b64f-4cf7-8225-13b72aabecf0&pf_rd_p=c98b2de5-b64f-4cf7-8225-13b72aabecf0&pf_rd_r=SWDD4TDKNKF4G7R1X42C&pd_rd_wg=5Rzlm&pd_rd_r=fe8d538b-40fd-4a92-a0eb-7b89d546fad3"
          className="text2"
        >
          See all
        </a>
      </div>
      <div className="bow-row">
        <div className="box2"><img src="/image/bottle.jpg"alt="bottle"/>
       </div>
        <div className="box2" ><img src="/image/glass.jpg"alt="glass"/>
        </div>
        <div
          className="box2"><img src="/image/bottles.jpg"alt="bottles"/>
               </div>
        <div className="box2"> <img src="/image/container.jpeg"alt="container"/>
        </div>
        <div className="box2"><img src="/image/box.jpg"alt="box"/>
      </div>
    </div>
  </div>
  </div>
  {/* 4th line container */}
  <div className="content-section4">
    <div className="container10">
      <div className="line1" />
      <p className="text4">See personalized recommendations</p>
      <button
        href="https://www.amazon.in/ap/signin?openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fref%3Drhf_sign_in&openid.assoc_handle=inflex&openid.pape.max_auth_age=0"
        className="text5"
      >
        Sign in
      </button>
      <p className="new-customer">
        New customer?
        <a href="https://www.amazon.in/ap/register?openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fref%3Drhf_sign_in&openid.assoc_handle=inflex">
          Start here
        </a>
      </p>
      <div className="line2" />
    </div>
  </div>
  {/* footer section */}
  <footer>
    <div className="foot-panel1">Back to top</div>
    <div className="foot-panel2">
      <ul>
        <p className="help">
          Get to Know <br />
          Us
        </p>
        <a
          href="https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer"
          className="text3"
        >
          About Amazon
          <br />
        </a>
        <a href="https://amazon.jobs/en/" className="text3">
          Careers
          <br />
        </a>
        <a
          href="https://press.aboutamazon.com/in/press-release-archive"
          className="text3"
        >
          Press Releases
          <br />
        </a>
        <a href="https://www.amazon.science/" className="text3">
          Amazon Science
        </a>
      </ul>
      <ul>
        <p className="help">
          Connect with
          <br /> Us
        </p>
        <a
          href="https://www.amazon.in/gp/redirect.html/ref=footer_fb?location=http://www.facebook.com/AmazonIN&token=2075D5EAC7BB214089728E2183FD391706D41E94&6"
          className="text3"
        >
          Facebook
          <br />
        </a>
        <a
          href="https://www.amazon.in/gp/redirect.html/ref=footer_twitter?location=http://twitter.com/AmazonIN&token=A309DFBFCB1E37A808FF531934855DC817F130B6&6"
          className="text3"
        >
          Twitter
          <br />
        </a>
        <a
          href="https://www.amazon.in/gp/redirect.html?location=https://www.instagram.com/amazondotin&token=264882C912E9D005CB1D9B61F12E125D5DF9BFC7&source=standards"
          className="text3"
        >
          Instagram
          <br />
        </a>
      </ul>
      <ul>
        <p className="help">Make Money with Us</p>
        <a
          href="https://www.amazon.in/b/?node=2838698031&ld=AZINSOANavDesktopFooter_C&ref_=nav_footer_sell_C"
          className="text3"
        >
          Sell on Amazon
          <br />
        </a>
        <a
          href="https://www.amazon.in/b/?node=2838698031&ld=AZINSOANavDesktopFooter_C&ref_=nav_footer_sell_C"
          className="text3"
        >
          Sell under Amazon Accelerator
          <br />
        </a>
        <a href="https://sell.amazon.in/brand-registry" className="text3">
          Protect and Build Your Brand
          <br />
        </a>
        <a
          href="https://sell.amazon.in/grow-your-business/amazon-global-selling?ld=AZIN_Footer_V1&ref=AZIN_Footer_V1"
          className="text3"
        >
          Amazon Global Selling
        </a>
        <a
          href="https://supply.amazon.com/?ref_=footer_sta&lang=en-IN"
          className="text3"
        >
          Supply to Amazon
          <br />
        </a>
        <a
          href="https://affiliate-program.amazon.in/?utm_campaign=assocshowcase&utm_medium=footer&utm_source=GW&ref_=footer_assoc"
          className="text3"
        >
          Become an Affiliate
          <br />
        </a>
        <a
          href="https://sell.amazon.in/?ref_=asin_soa_rd&ld=AWRGINFBAfooter"
          className="text3"
        >
          Fulfilment by Amazon
          <br />
        </a>
        <a
          href="https://advertising.amazon.com/en-gb?ref=Amz.in"
          className="text3"
        >
          Advertise Your Products
          <br />
        </a>
        <a href="https://www.amazon.in/amazonpay/home" className="text3">
          Amazon Pay on Merchants
          <br />
        </a>
      </ul>
      <ul>
        <p className="help">Let Us Help You</p>
        <a
          href="https://www.amazon.in/gp/css/homepage.html?ref_=footer_ya"
          className="text3"
        >
          Your Account
          <br />
        </a>
        <a
          href="https://www.amazon.in/ap/signin?openid.pape.max_auth_age=3600&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fspr%2Freturns%2Fhomepage%2Fhomepage.html%3Fref_%3Dfooter_hy_f_4&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_psr_desktop_in&openid.mode=checkid_setup&language=en_IN&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0"
          className="text3"
        >
          Returns Centre
          <br />
        </a>
        <a
          href="https://www.amazon.in/ap/signin?openid.pape.max_auth_age=3600&openid.return_to=https%3A%2F%2Famazon.in%2Fyour-product-safety-alerts%3Fref_%3Dfooter_bsx_ypsa&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_yourrecalls_in&openid.mode=checkid_setup&language=en_IN&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0"
          className="text3"
        >
          Recalls and Product Safety Alerts
          <br />
        </a>
        <a
          href="https://www.amazon.in/gp/help/customer/display.html?nodeId=201083470&ref_=footer_swc"
          className="text3"
        >
          100% Purchase Protection
          <br />
        </a>
        <a
          href="https://www.amazon.in/gp/browse.html?node=6967393031&ref_=footer_mobapp"
          className="text3"
        >
          Amazon App Download
          <br />
        </a>
        <a
          href="https://www.amazon.in/gp/help/customer/display.html?nodeId=200507590&ref_=footer_gw_m_b_he"
          className="text3"
        >
          Help
        </a>
      </ul>
    </div>
    <div className="foot-panel3">
      <div className="logo1">
        <button className="button1">
          <i className="fa-solid fa-globe" />
          English
        </button>
        <button className="button2">
          <i className="fa-regular fa-flag" />
          INDIA
        </button>
      </div>
    </div>
    <div className="foot-panel4">
      <ul>
        <p className="text6">AbeBooks</p>
        <p className="text7">
          Books, art
          <br />
          &amp; collectibles
        </p>
        <p className="text6">Shopbop</p>
        <p className="text7">Designer</p>
        <p className="text7">Fashion Brands</p>
      </ul>
      <ul>
        <p className="text6"> Amazon Web Services</p>
        <p className="text7">Scalable Cloud</p>
        <p className="text7">Computing Services</p>
        <p className="text6">Amazon Business</p>
        <p className="text7">
          Everything For
          <br />
          Your Business
        </p>
      </ul>
      <ul>
        <p className="text6 ">Audible</p>
        <p className="text7">
          Download
          <br />
          Audio Books
        </p>
        <p className="text6">Prime Now</p>
        <p className="text7">
          2-Hour Delivery
          <br />
          on Everyday Item
        </p>
      </ul>
      <ul>
        <p className="text6">IMDb</p>
        <p className="text7">Movies, TV &amp; Celebrities</p>
        <p className="text6">Amazon Prime Music</p>
        <p className="text7">
          100 million songs, ad-
          <br />
          free
        </p>
        <p className="text7">
          Over 15 million podcast <br />
          episodes
        </p>
      </ul>
    </div>
    <p className="panel5">
      {" "}
      Conditions of Use &amp; Sale Privacy Notice Interest-Based Ads
      <br />© 1996-2025, Amazon.com, Inc. or its affiliates
    </p>
  </footer>
</>
}
    </>
  );
}

export default App;