// jshint esversion:6

/* TO-DO:
    - style the scrolling bar on the right.
    - add elment appeearance animation upon loading the website or scrolling to a section.
    - fix navigation bug when clicking a nav item to navigate to a section
    - customers: (?)put customer logos in a carousel that scrolls automotically once loaded.
    - contact-us:
        - add messaging boxes (name, email/number, message).
        - send message via email or whatsapp.
*/

// NAVBAR -------------------------------------
/* Toggle between showing/hiding the navigation menu when hamburger menu is clicked */
function menuClick() {
  const x = $('.nav_links_div');

// checking z-index to apply below for mobile screens only.
  if (x.css('z-index') == '1'){
    if (x.css('display') == 'flex') {
      // x.toggleClass(".nav_links_div");   toggle class to trigger reverse animation.
      // x.toggleClass(".nav_links_div");
      x.css('display', 'none');
    } else {
      x.css('display', 'flex');
    }
  }
}

// ANNOUNCEMENTS SECTION -------------------------------------
function announcementSlide(announcement) {
  return `<div class="announcement_slide_div">
    <div class="announcement_img">
      <img src="images\\announcements.jpg" alt="">
    </div>
    <div class="announcement_text_div">
      <h3>${announcement.title}</h3>
      <p class="announcement_date">${announcement.date}</p>
      <p class="announcement_paragraph">${announcement.text}</p>
      <a href="extra_HTML\\0-announcements.html">إقراء المزيد</a>
    </div>
  </div>`;
}

$(".announcements_slidshow_container").html(`${announcements.map(announcementSlide).join("")}`);

let slideIndex = 1;
let translatepx = 0;
// Announcement Sider
function sliderClicked(n) {
  if ((slideIndex+n) > 0 && (slideIndex+n) < 4){
    slideIndex += n;
    if (n == 1){
      slideSlideshowChildren(translatepx+=320);
    } else {
      slideSlideshowChildren(translatepx-=320);
    }
  }
}

function slideSlideshowChildren (px){
  for (i=1; i<=$(".announcements_slidshow_container").children().length ; i++){
    $(`.announcement_slide_div:nth-child(${i})`).css("transform", `translateX(${px}px`);
  }
}

// ANNOUNCEMENTS PAGE -------------------------------------
function announcementBox(announcement) {
  return `<div class="announcement_box">
    <div class="announcement_box_img">
      <!-- <img src="images\\announcements.jpg" alt=""> -->
    </div>
    <div class="announcement_text_box">
      <h3${announcement.title}</h3>
      <p class="announcement_date">${announcement.date}</p>
      <p>${announcement.text}</p>
      <!-- <a href="service_details\\0-announcements.html">إقراء المزيد</a> -->
    </div>
  </div>`;
}

$(".announcements_container").html(`${announcements.map(announcementBox).join("")}`);

// OUR-SERVICES SECTION ---------------------------------------

function serviceTemplate(service) {
  return `<a href="${service.file}">
  <div class="service_card">
    <img class="service_icon" src="${service.icon}" alt="">
    <p>${service.service}</p>
    </div>
    </a>`;
}

$(".services_cards_div").html(`${services.map(serviceTemplate).join("")}`);


// OUR-CUSTOMERS SECTION -------------------------------------
function customersTemplate(customer) {
  return `<div class="customer_card">
    <img src="${customer.image}" alt="">
  </div>`;
}

$(".customers_cards_div").html(`${customers.map(customersTemplate).join("")}`);


// --------------------- FOR THE EXTRA HTML PAGES -----------------------

$(".extra_HTML_head").html(`<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="../style.css">
<!-- Fontawesome for hamburger menu on small screens -->
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css" integrity="sha384-Bfad6CLCknfcloXFOyFnlgtENryhrpZCe29RTifKEixXQZ38WheV+i/6YWSzkz3V" crossorigin="anonymous">`);

// DOUBLE NAVBAR (for services html) ---------------------------
const doubleNavbarHTML = `<div class="upper_navbar">
<a href="../index.html#">
  <img class="logo_img" src="..\\images\\logo right-left (horizontal).jpg" alt="logo-img">
</a>

  <a class="hamburger_icon" onclick="menuClick()">
    <i class="fas fa-bars fa-2x"></i>
  </a>
</div>

<div class="nav_links_div">
  <a href="../index.html#" onclick="menuClick()">الرئيسية</a>
  <a href="../index.html#announcements" onclick="menuClick()">أنباء وأخبار</a>
  <a href="../index.html#about-us" onclick="menuClick()">تعرف علينا</a>
  <a href="../index.html#our-services" onclick="menuClick()">خدماتنا</a>
  <a href="../index.html#our-customers" onclick="menuClick()">عملائنا</a>
  <a class="contact_us_btn_div" href="../index.html#contact-us" onclick="menuClick()">تواصل معنا</a>
</div>`;

$(".nav_for_services").html(doubleNavbarHTML);


// CONTACT-US SECTION (for services html) ---------------------------
const contactUsHTML = `<div class="contact_us_title_div">
  <p class="contact-us_title">تواصل معنا</p>
</div>

<div class="contact_details_wrapper">
  <div class="contact-details">
    <p><span>العنوان:</span> ٩ عمارات مترو سيتي, شارع الخمسيني, زهراء المعادي, المعادي, القاهرة</p>
    <p><span>أرضي وفاكس:</span> ٠٢٢٧٣٤٠٥٤٥</p>
    <p><span>موبيل:</span> ٠١٠٦٦٦٦٤٦٦٠ / <span>واتس:</span> ٠١١٤٠١٠٧٩٧٩</p>
    <p><span>بريد إلكتروني:</span> Sherif.nassar@c-experts.com</p>
  </div>
  <div class="contact-us_map">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.4843052600336!2d31.314252084886707!3d29.965508681911036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145839ee07b964cb%3A0xb0226e309dcdf5a!2z2LTYsdmD2Kkg2KfZhNiu2KjYsdin2KEg2KfZhNil2LPYqti02KfYsdmK2YjZhg!5e0!3m2!1sar!2seg!4v1591781122894!5m2!1sar!2seg"
      width="500" height="400" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
  </div>
</div>`;

$(".contact-us_section").html(contactUsHTML);

// COPYRIGHT FOOTER (for services html) ---------------------------
const copyrightHTML = `<div class="copyright_div">
  <p class="copyright_p">© Consultative Experts 2020.</p>

  <p class="created-by_p">Create by <a href="https://miminah.github.io/MiminaWebsite/tech.html">Mimina</a></p>
</div>`;
$(".footer_section").html(copyrightHTML);
