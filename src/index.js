// jshint esversion:6

// NAVBAR -------------------------------------
/* Toggle between showing/hiding the navigation menu when hamburger menu is clicked */
function menuClick() {
  const x = $('.nav_links_div');

  // checking z-index to apply below for mobile screens only.
  if (x.css('z-index') == '1') {
    if (x.css('display') == 'flex') {
      // x.toggleClass(".nav_links_div");   toggle class to trigger reverse animation.
      // x.toggleClass(".nav_links_div");
      x.css('display', 'none');
    } else {
      x.css('display', 'flex');
    }
  }
}

// ANNOUNCEMENTS SECTION ------------------------------------- -------------------------------------
try {
  var announcements;

  $.ajax({
    type: 'Get',
    url:
      'http://gsx2json.com/api?id=1o5-vp05-2shn6e5l26BCkrkgjyKoPq8VzcnN2YH-IzU&sheet=1&columns=false',
    dataType: 'json',
    success: function (data) {
      announcements = data.rows;

      $('.announcements_slidshow_container').html(
        `${announcements.map(announcementSlide).join('')}`
      );

      $('.announcements_container').html(
        `${announcements.map(announcementBox).join('')}`
      );
    },
    error: function () {
      console.log('Could not get announcements data!');
    },
  });

  function announcementSlide(announcement) {
    if (announcement.imagename === 0) {
      announcement.imagename = 'announcements.jpg';
    }

    return `<div class="announcement_slide_div">
      <div class="announcement_img">
        <img src="images\\announcements\\${announcement.imagename}" alt="">
      </div>
      <div class="announcement_text_div">
        <h3>${announcement.title}</h3>
        <p class="announcement_date">${announcement.date}</p>
        <p class="announcement_paragraph">${announcement.paragraph}</p>
        <a href="pages\\0-announcements.html">إقراء المزيد</a>
      </div>
    </div>`;
  }

  let slideIndex = 1;
  let translatepx = 0;
  // Announcement Sider
  function sliderClicked(n) {
    if (slideIndex + n > 0 && slideIndex + n < 4) {
      slideIndex += n;
      if (n == 1) {
        slideSlideshowChildren((translatepx += 320));
      } else {
        slideSlideshowChildren((translatepx -= 320));
      }
    }
  }

  function slideSlideshowChildren(px) {
    for (
      i = 1;
      i <= $('.announcements_slidshow_container').children().length;
      i++
    ) {
      $(`.announcement_slide_div:nth-child(${i})`).css(
        'transform',
        `translateX(${px}px`
      );
    }
  }

  // ANNOUNCEMENTS PAGE -------------------------------------
  function announcementBox(announcement) {
    if (announcement.imagename === 0) {
      announcement.imagename = 'announcements.jpg';
    }
    return `<div class="announcement_box">
    <div class="announcement_box_img" style="background-image: url('../images/announcements/${announcement.imagename}');"></div>
    <div class="announcement_text_box">
      <h3${announcement.title}</h3>
      <p class="announcement_date">${announcement.date}</p>
      <p>${announcement.paragraph}</p>
    </div>
  </div>`;
  }
} catch (err) {
  console.log("Couldn't not find 'announcement' - " + err);
}

// OUR-SERVICES SECTION --------------------------------------- -------------------------------------
try {
  function serviceTemplate(service) {
    return `<a href="${service.file}">
    <div class="service_card">
      <img class="service_icon" src="${service.icon}" alt="">
      <p>${service.service}</p>
      </div>
      </a>`;
  }

  $('.services_cards_div').html(`${services.map(serviceTemplate).join('')}`);

  // OUR-CUSTOMERS SECTION ------------------------------------- -------------------------------------
  var customers;
  $.ajax({
    type: 'Get',
    url:
      'http://gsx2json.com/api?id=1o5-vp05-2shn6e5l26BCkrkgjyKoPq8VzcnN2YH-IzU&sheet=2&columns=false',
    dataType: 'json',
    success: function (data) {
      customers = data.rows;

      function customersTemplate(customer) {
        return `<div class="customer_card">
                <img src="images\\customer logos\\${customer.clientimage}" alt="${customer.clientname}">
                </div>`;
      }

      $('.customers_cards_div').html(
        `${customers.map(customersTemplate).join('')}`
      );
    },
    error: function () {
      console.log('Could not read Clients data!');
    },
  });
} catch (err) {
  console.log("Couldn't not find 'service' - " + err);
}

// FOR THE EXTRA HTML PAGES ----------------------------------- -------------------------------------
$('.extra_HTML_head').html(`<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="../style.css">
<!-- Fontawesome for hamburger menu on small screens -->
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css" integrity="sha384-Bfad6CLCknfcloXFOyFnlgtENryhrpZCe29RTifKEixXQZ38WheV+i/6YWSzkz3V" crossorigin="anonymous">`);

// DOUBLE NAVBAR (for services html) --------------------------- -------------------------------------
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
  <a class="contact_us_btn_div" href="#contact-us" onclick="menuClick()">تواصل معنا</a>
</div>`;

$('.doubleNav_from_JS').html(doubleNavbarHTML);

// CONTACT-US SECTION (for services html) --------------------------- -------------------------------------
const contactUsHTML = `<div class="contact_us_title_div">
  <p class="contact-us_title">تواصل معنا</p>
</div>

<div class="contact_details_wrapper">

<div class="contact-details">
  <p><span>العنوان:</span> ٩ عمارات مترو سيتي, شارع الخمسيني, زهراء المعادي, المعادي, القاهرة</p>
  <p><span>أرضي / فاكس:</span> ٠٢٢٧٣٤٠٥٤٥</p>
  <p><span>رقم التواصل:</span> ٠١١٤٠٦٤٠٦٠٣</p>
  <p><span>بريد إلكتروني:</span> Sherif.nassar@c-experts.com</p>
  <div class="contact_icons">
    <a class="icon" href="https://www.facebook.com/ConsultativeExperts" onclick="clickFunction()">
      <i class="fab fa-facebook fa-2x" style="color:#4267B2;"></i></a>
    <a href="mailto:sherif.nassar@c-experts.com">
      <i class="fas fa-envelope fa-2x" style="color:#ffca28;"></i></a>
    <a href="https://api.whatsapp.com/send?phone=201140640603">
      <i class="fab fa-whatsapp fa-2x" style="color:#25D366;"></i></a>
  </div>
</div>

  <div class="contact-us_map">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.4843052600336!2d31.314252084886707!3d29.965508681911036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145839ee07b964cb%3A0xb0226e309dcdf5a!2z2LTYsdmD2Kkg2KfZhNiu2KjYsdin2KEg2KfZhNil2LPYqti02KfYsdmK2YjZhg!5e0!3m2!1sar!2seg!4v1591781122894!5m2!1sar!2seg"
      width="500" height="400" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
  </div>
</div>`;

$('.contact-us_section').html(contactUsHTML);

// COPYRIGHT FOOTER (for services html) --------------------------- -------------------------------------
const copyrightHTML = `<div class="copyright_div">
  <p class="copyright_p">© Consultative Experts 2020.</p>

  <p class="created-by_p">Create by <a href="https://miminah.github.io/MiminaWebsite/tech.html">Mimina</a></p>
</div>`;
$('.footer_section').html(copyrightHTML);

/******************** Social Hover Button ********************/
const socialButton = `<div id="hammy" class="hamburger social-btn">
<div id="bubble1" class="bubble">
  <a href="https://www.facebook.com/ConsultativeExperts">
    <i class="fab fa-facebook" style="left:-6.5px;"></i>
  </a>
</div>
<div id="bubble2" class="bubble">
  <a href="mailto:sherif.nassar@c-experts.com">
    <i class="fas fa-envelope" style="top:-20.5px; left:-9px; font-size: 41px;"></i>
  </a>
</div>
<div id="bubble3" class="bubble">
  <a href="https://api.whatsapp.com/send?phone=201140640603">
    <i class="fab fa-whatsapp" style="left:-9px; top:-20px;"></i>
  </a>
</div>
<div id="bubble4" class="bubble">
  <a href="https://www.linkedin.com/company/c-experts">
    <i class="fab fa-linkedin" style="top:-21px; left:-11.5px; font-size: 40px;"></i>
  </a>
</div>
<div id="bubble5" class="bubble">
  <a href="https://www.youtube.com/channel/UC_PXYiMWVh423L1rO9h11Aw/">
    <i class="fab fa-youtube" style="top:-21px; left:-6.5px; font-size: 41px;"></i>
  </a>
</div>

<div id="cont" class="cont">
  <div class="line" id="line1">
  </div>
  <div class="line" id="line2">
  </div>
  <div class="line" id="line3">
  </div>
</div>
</div>`;
$('.wrapper').html(socialButton);

var hammy = $('#hammy');
// var bub1 = $("#bubble1");
// var bub2 = $("#bubble2");
// var bub3 = $("#bubble3");
// var bub4 = $("#bubble4");
var spun = false;
$('#cont').click(function () {
  if (spun == false) {
    spin();
  } else {
    unspin();
  }
});

$('#cont').focus(function () {
  if (spun == false) {
    spin();
  } else {
    unspin();
  }
});

var spin = function () {
  spun = true;
  $(hammy).removeClass('unspin').addClass('spin');
  bubblesout();
  makecross();
  setTimeout(function () {
    $(hammy).removeClass('spin');
  }, 500);
};
var unspin = function () {
  spun = false;
  $(hammy).removeClass('spin').addClass('unspin');
  bubblesin();
  destroycross();
  setTimeout(function () {
    $(hammy).removeClass('unspin');
  }, 500);
};

var bubblesout = function () {
  var i = 1;
  $('.bubble').each(function () {
    $(this).addClass('out' + i);
    $('.bubble').show();
    i++;
  });
};
var bubblesin = function () {
  var i = 1;
  $('.bubble').each(function () {
    $(this).removeClass('out' + i);
    $('.bubble').hide();
    i++;
  });
};

var makecross = function () {
  var i = 1;
  $('.line').each(function () {
    $(this).addClass('cross' + i);
    i++;
  });
};
var destroycross = function () {
  var i = 1;
  $('.line').each(function () {
    $(this).removeClass('cross' + i);
    i++;
  });
};

var year = new Date();
$('.copyright_p').append(year.getFullYear() + '.');

/* TO-DO:
    - style the scrolling bar on the right.
    - add elment appearance animation upon loading the website or scrolling to a section.
    - fix navigation bug when clicking a nav item to navigate to a section
    - customers: (?)put customer logos in a carousel that scrolls automotically once loaded.
*/

/* CHANGES:
    - removed clickFunction() in HTML from:
    <a class="icon" href="https://www.facebook.com/ConsultativeExperts" onclick="clickFunction()">
*/
