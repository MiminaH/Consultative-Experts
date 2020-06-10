// jshint esversion:6

/* TO-DO:
    - style the scrolling bar on the right.
    - add elment appeearance animation upon loading the website or scrolling to a section.
    - fix navigation bug when clicking a nav item to navigate to a section.
    - announcements: add announcements section.
    - services: add services details when clicking a service card.
    - customers: (?)put customer logos in a carousel that scrolls automotically once loaded.
    - contact-us:
        - add location on map.
        - add messaging boxes (name, email/number, message).
        - send message via email or whatsapp.
    - responsive for mobile:
        - navbar: put nav items in hamburger menue button
  (done)- header: fix header issue in smaller screens.
        - footer: move copyright to be on the left instead of in center.
*/

// ANNOUNCEMENTS SECTION -------------------------------------
const announcements = [{
  "title":"النباء الأول",
  "date":"٩\\٠٦\\٢٠٢٠",
  "text":"نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم. وعند موافقه العميل المبدئيه نموذج افتراضي يوضع في التصاميم لتعرض على العميل. نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم. وعند موافقه العميل المبدئيه نموذج افتراضي يوضع في التصاميم لتعرض على العميل.نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم. وعند موافقه العميل المبدئيه نموذج افتراضي يوضع في التصاميم لتعرض على العميل."
},
{
  "title":"النباء الثاني",
  "date":"٩\\٠٦\\٢٠٢٠",
  "text":"نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم. وعند موافقه العميل المبدئيه نموذج افتراضي يوضع في التصاميم لتعرض على العميل."
},
{
  "title":"النباء الثالث",
  "date":"٩\\٠٦\\٢٠٢٠",
  "text":"نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم. وعند موافقه العميل المبدئيه نموذج افتراضي يوضع في التصاميم لتعرض على العميل."
},];

function announcementTemplate(announcement) {
  return `<div class="announcement_wrapper_div">
    <div class="announcement_img">
      <img src="images\\announcements.jpg" alt="">
    </div>
    <div class="announcement_text_div">
      <h3>${announcement.title}</h3>
      <p class="announcement_date">${announcement.date}</p>
      <p class="announcement_paragraph">${announcement.text}</p>
      <a href="#">إقراء المزيد</a>
    </div>
  </div>`;
}

$(".announcements_slider_wrapper").html(`${announcements.map(announcementTemplate).join("")}`);


// OUR SERVICES SECTION ---------------------------------------
const services = [{
    "service": "تأسيس كافة أنواع الشركات وفروعها داخل وخارج مصر",
    "icon": "images\\icons\\icons8-licence-100 (green).png"
  },
  {
    "service": "خدمات الاستثمار الصناعي",
    "icon": "images\\icons\\icons8-factory-100 (brown).png"
  },
  {
    "service": "الخدمات الضريبية والمحاسبية",
    "icon": "images\\icons\\icons8-ledger-100 (orange).png"
  },
  {
    "service": "خدمات رجال الاعمال",
    "icon": "images\\icons\\icons8-permanent-job-100 (cyan).png"
  },
  {
    "service": "خدمات الشركات",
    "icon": "images\\icons\\icons8-business-building-100 (red).png"
  },
  {
    "service": "خدمات الاجانب",
    "icon": "images\\icons\\icons8-travel-visa-100 (yellow).png"
  },
  {
    "service": "الاستشارات القانونية",
    "icon": "images\\icons\\icons8-scales-100 (blue).png"
  },
  {
    "service": "محكمه الاسرة",
    "icon": "images\\icons\\icons8-family-100 (purple).png"
  }
];

function serviceTemplate(service) {
  return `<div class="service_card">
    <img class="service_icon" src="${service.icon}" alt="">
    <p>${service.service}</p>
    </div>`;
}

$(".services_cards_div").html(`${services.map(serviceTemplate).join("")}`);


// OUR CUSTOMERS SECTION -------------------------------------
const customers = [{
    "image": "images\\customer logos\\Al-Amir.jpg"
  },
  {
    "image": "images\\customer logos\\Cairo Trans.jpg"
  },
  {
    "image": "images\\customer logos\\Cipro.jpg"
  },
  {
    "image": "images\\customer logos\\El-Madar.jpg"
  },
  {
    "image": "images\\customer logos\\Electroserv.jpg"
  },
  {
    "image": "images\\customer logos\\GEI.jpg"
  },
  {
    "image": "images\\customer logos\\Madkour Trade.jpg"
  },
  {
    "image": "images\\customer logos\\Madkour.jpg"
  },
  {
    "image": "images\\customer logos\\Orchid.jpg"
  },
  {
    "image": "images\\customer logos\\Pyramids International.jpg"
  },
  {
    "image": "images\\customer logos\\Pyramids Picon.jpg"
  },
  {
    "image": "images\\customer logos\\Sector.jpg"
  },
];

function customersTemplate(customer) {
  return `<div class="customer_card">
    <img src="${customer.image}" alt="">
  </div>`;
}

$(".customers_cards_div").html(`${customers.map(customersTemplate).join("")}`);
