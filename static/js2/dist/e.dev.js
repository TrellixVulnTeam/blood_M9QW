"use strict";

/******** Add Another Services ********/
var counterClaim = 2;
$('.add-another').click(function () {
  $(this).before("\n                <fieldset class=\"scheduler-border\">\n                    <legend class=\"scheduler-border\">Service Number <span>".concat(counterClaim, "</span></legend>\n\n                    <div class=\"col-lg-12 form-group mt-5\">\n                        <label for=\"Service-Date\" class=\"text-secondary\">Service <span>").concat(counterClaim, "</span> date</label>\n                        <input type=\"password\" name=\"Service-Date\" id=\"Service-Date\" class=\"c-form__control text-secondary\" maxlength=\"60\">\n                    </div> \n                    <div class=\"col-lg-12 form-group mt-5\">\n                        <label for=\"SelectService\" class=\"text-secondary\">Service <span>").concat(counterClaim, "</span> Type</label>\n                        <select name=\"\" id=\"SelectService\" class=\"c-form__control text-secondary\">\n                            <option value=\"1\">Select Service Type</option>\n                            <option value=\"Emergency\">Emergency</option>\n                            <option value=\"Out_Patient\">Out Patient</option>\n                            <option value=\"In_Patient\">In Patient</option>\n                        </select>\n                    </div> \n                    <div class=\"col-lg-12 form-group mt-5\">\n                        <label for=\"con-newpassID\" class=\"text-secondary\">Service <span>").concat(counterClaim, "</span> description</label>\n                        <input type=\"password\" name=\"con-newpass\" id=\"con-newpassID\" class=\"c-form__control text-secondary\" maxlength=\"60\">\n                    </div> \n                    <div class=\"col-lg-12 form-group mt-5\">\n                        <div class=\"gallery-service\">\n                            <button class=\"btn btn-success mb-4 bg-transparent btn-photo\" id=\"src-btn\" onclick=\"my()\">Upload Service <span>1</span> Attachment</button>\n                            <input type=\"file\" name=\"\" id=\"file-btn\" onchange=\"xyx()\" hidden=\"hidden\">\n                            <span id=\"customTxt2\"></span>\n                        </div>\n                    </div>\n              </fieldset>\n  "));
  counterClaim++;
});
var countPatient = 2;
var counterClaim2 = 2;
$('.add-a').click(function () {
  $('.add-pat').before("\n        <fieldset class=\"scheduler-border \">\n        <legend class=\"scheduler-border\">Patient Number <span>".concat(countPatient, "</span></legend>\n        <div class=\"col-lg-12 form-group mt-5\">\n            <label for=\"nameID\" class=\"text-secondary\">Patient <span>").concat(countPatient, "</span> Name</label>\n            <input type=\"text\" name=\"name\" id=\"nameID\" class=\"c-form__control text-secondary\" maxlength=\"60\">\n        </div>\n        <div class=\"col-lg-12 form-group mt-5\">\n            <div class=\"gallery-service\">\n                <button class=\"btn btn-success mb-4 bg-transparent btn-photo\" id=\"src-btn\" onclick=\"my()\">Upload ID</button>\n                <input type=\"file\" name=\"\" id=\"file-btn\" onchange=\"xyx()\" hidden=\"hidden\">\n                <span id=\"customTxt2\"></span>\n            </div>\n        </div> \n        <div class=\"col-lg-12 form-group mt-5\">\n            <label for=\"Idnum\" class=\"text-secondary\">ID Number</label>\n            <input type=\"text\" name=\"Idnum\" id=\"Idnum\" class=\"c-form__control text-secondary\" maxlength=\"60\">\n        </div>\n\n        <fieldset class=\"scheduler-border\">\n            <legend class=\"scheduler-border\">Service Number <span>").concat(countPatient, "</span></legend>\n\n            <div class=\"col-lg-12 form-group mt-5\">\n                <label for=\"Service-Date\" class=\"text-secondary\">Service <span>").concat(countPatient, "</span> Date</label>\n                <input type=\"password\" name=\"Service-Date\" id=\"Service-Date\" class=\"c-form__control text-secondary\" maxlength=\"60\">\n            </div> \n            <div class=\"col-lg-12 form-group mt-5\">\n                <label for=\"SelectService\" class=\"text-secondary\">Service <span>").concat(countPatient, "</span> Type</label>\n                <select name=\"\" id=\"SelectService\" class=\"c-form__control text-secondary\">\n                    <option value=\"1\">Select Service Type</option>\n                    <option value=\"Emergency\">Emergency</option>\n                    <option value=\"Out_Patient\">Out Patient</option>\n                    <option value=\"In_Patient\">In Patient</option>\n                </select>\n            </div> \n            <div class=\"col-lg-12 form-group mt-5\">\n                <label for=\"con-newpassID\" class=\"text-secondary\">Service <span>").concat(countPatient, "</span> description</label>\n                <input type=\"password\" name=\"con-newpass\" id=\"con-newpassID\" class=\"c-form__control text-secondary\" maxlength=\"60\">\n            </div> \n            <div class=\"col-lg-12 form-group mt-5\">\n                <div class=\"gallery-service\">\n                    <button class=\"btn btn-success mb-4 bg-transparent btn-photo\" id=\"src-btn\" onclick=\"my()\">Upload Service <span>").concat(countPatient, "</span> Attachment</button>\n                    <input type=\"file\" name=\"\" id=\"file-btn\" onchange=\"xyx()\" hidden=\"hidden\">\n                    <span id=\"customTxt2\"></span>\n                </div>\n            </div>\n        </fieldset>\n        <p class=\"text-primary ml-5 add-another\" style=\"cursor: pointer;\">Add another service</p> \n      </fieldset>\n  "));
  countPatient++;
});
var srcBtn = document.getElementById('src-btn');
var fileBtn = document.getElementById('file-btn');
var customTxt2 = document.getElementById('customTxt2');

function my() {
  fileBtn.click();
}

;

function xyx() {
  if (fileBtn.value) {
    customTxt2.innerHTML = fileBtn.value;
  } else {
    customTxt2.innerHTML = "No File Chosen yet !";
  }
}
/**** Slide-in-out in navbar ****/


$('.slide-in').click(function () {
  $('.left').hide(300);
  $('.right').css({
    width: '100%'
  });
  $('.slide-out').show(300);
  $(this).hide(300);
});
$('.slide-out').click(function () {
  $('.left').show(300);
  $('.right').css({
    width: '85%'
  });
  $(this).hide(300);
  $('.slide-in').show(300);
});
$('.slide-in').click(function () {
  if ($(window).width() <= 576) {
    $('.left').hide(300);
    $('.right').show(300);
    $('.right').css({
      width: '100%'
    });
    $('.slide-out').show(300);
    $(this).hide(300);
  }
});
$('.slide-out').click(function () {
  if ($(window).width() <= 579) {
    $('.left').show(300);
    $('.left').css({
      width: '90%'
    });
    $('.right').fadeOut(300);
    $(this).hide(300);
    $('.slide-in').show(300);
  }
});
$('.about-btn').click(function () {
  $('.Register').hide(350);
  $('.overview-section2').hide(350);
  $('.overview-section').show(350);
  $(this).addClass("profile-nav__active");
  $('.register-btn').removeClass("profile-nav__active");
  $('.instructor-btn').removeClass("profile-nav__active");
});
$('.register-btn').click(function () {
  $('.overview-section2').hide(350);
  $('.overview-section ').hide(350);
  $('.Register').show(350);
  $(this).addClass("profile-nav__active");
  $('.about-btn').removeClass("profile-nav__active");
  $('.instructor-btn').removeClass("profile-nav__active");
});
$('.instructor-btn').click(function () {
  $('.overview-section').hide(350);
  $('.Register').hide(350);
  $('.overview-section2').show(350);
  $(this).addClass("profile-nav__active");
  $('.about-btn').removeClass("profile-nav__active");
  $('.register-btn').removeClass("profile-nav__active");
});

function rightSide() {
  if ($(window).width() <= 992) {
    $('.left-chat').hide(300);
    $('.right-chat').show(300);
    $('.right-chat').removeClass('chat-sizes');
    $('.right-chat').addClass('w-97');
  } else {
    $('.left-chat').show(300);
    $('.right-chat').show(300);
    $('.right-chat').addClass('chat-sizes');
    $('.right-chat').removeClass('w-97');
  }
}

$('.back-btn').click(function () {
  $('.left-chat').show(300);
  $('.right-chat').hide(300);
});
/******** For DropDown Menu  ******/

$('.dropdown').click(function () {
  $('.dropdown-menu').toggle(300);
});
$('.dropdown2').click(function () {
  $('.dropdown-menu2').toggle(300);
});
/*********** Question For Upload Source Code Or Not  *********/

$('.upload').click(function () {
  $('.for-upload').fadeIn(300);
});
$('.not-upload').click(function () {
  $('.for-upload').fadeOut(300);
});
/***********   Check Box  **********/

$('#youtube').click(function () {
  $('#youtube-inp').fadeIn(300);
  $('#vedio-inp').fadeOut(300);
  $('#choose-btn-pc').fadeOut(300);
  $('#pic-btn').fadeOut(300);
  $('#ved-btn').fadeIn(300);
});
$('#ph').click(function () {
  $('#youtube-inp').fadeOut(300);
  $('#vedio-inp').fadeOut(300);
  $('#choose-btn-pc').fadeIn(300);
  $('#pic-btn').fadeOut(300);
  $('#ved-btn').fadeOut(300);
});
$('#ved').click(function () {
  $('#vedio-inp').fadeIn(300);
  $('#youtube-inp').fadeOut(300);
  $('#choose-btn-pc').fadeOut(300);
  $('#pic-btn').fadeIn(300);
  $('#ved-btn').fadeOut(300);
});
$('.send-req-btn').click(function () {
  $('.track-pay').hide(350);
  $('.incoming-req').hide(350);
  $('.contract-requests').hide(350);
  $('.send-Req').show(350);
  $(this).addClass("profile-nav__active");
  $('.all-req-btn').removeClass("profile-nav__active");
  $('.track-pay-btn').removeClass("profile-nav__active");
  $('.contract-btn').removeClass("profile-nav__active");
});
$('.all-req-btn').click(function () {
  $('.send-Req').hide(350);
  $('.track-pay').hide(350);
  $('.contract-requests ').hide(350);
  $('.incoming-req').show(350);
  $(this).addClass("profile-nav__active");
  $('.send-req-btn').removeClass("profile-nav__active");
  $('.track-pay-btn').removeClass("profile-nav__active");
  $('.contract-btn').removeClass("profile-nav__active");
});
$('.track-pay-btn').click(function () {
  $('.send-Req').hide(350);
  $('.incoming-req').hide(350);
  $('.contract-requests ').hide(350);
  $('.track-pay').show(350);
  $(this).addClass("profile-nav__active");
  $('.send-req-btn').removeClass("profile-nav__active");
  $('.all-req-btn').removeClass("profile-nav__active");
  $('.contract-btn').removeClass("profile-nav__active");
});
$('.contract-btn').click(function () {
  $('.send-Req').hide(350);
  $('.incoming-req').hide(350);
  $('.track-pay').hide(350);
  $('.contract-requests ').show(350);
  $(this).addClass("profile-nav__active");
  $('.send-req-btn').removeClass("profile-nav__active");
  $('.all-req-btn').removeClass("profile-nav__active");
  $('.track-pay-btn').removeClass("profile-nav__active");
});
var sel = document.getElementById('sel'),
    hide = document.getElementById('hide');

sel.onchange = function () {
  if (this.value === 'Directly_customer_support') {
    hide.style.display = 'block';
  } else {
    hide.style.display = 'none';
  }
};

function success() {
  var Toast = Swal.mixin({
    toast: false,
    position: 'center',
    showConfirmButton: false,
    timer: 3500
  });
  Toast.fire({
    type: 'success',
    title: 'Edit Done Succefully'
  });
}

function addPatientSuccessfully() {
  var Toast = Swal.mixin({
    toast: false,
    position: 'center',
    showConfirmButton: false
  });
  Toast.fire({
    type: 'success',
    title: '<a href="upload-claims.html" class="text-primary ml-5"><span style="color:#333 !important">" Patient Added Successfylly " </span> "press here To Add New Patient "</a> '
  });
}

function success5() {
  var Toast = Swal.mixin({
    toast: false,
    position: 'center',
    showConfirmButton: false,
    timer: 3500
  });
  Toast.fire({
    type: 'success',
    title: 'Payment Uploaded Succesfully'
  });
}

function accept() {
  var Toast = Swal.mixin({
    toast: false,
    position: 'center',
    showConfirmButton: false,
    timer: 3500
  });
  Toast.fire({
    type: 'success',
    title: 'Request Accepted successfully'
  });
}

function Canceled() {
  var Toast = Swal.mixin({
    toast: false,
    position: 'center',
    showConfirmButton: false,
    timer: 3500
  });
  Toast.fire({
    type: 'success',
    title: 'Request Refused successfully'
  });
}

function complain() {
  var Toast = Swal.mixin({
    toast: false,
    position: 'center',
    showConfirmButton: false,
    timer: 3500
  });
  Toast.fire({
    type: 'success',
    title: 'Compain Sent successfully'
  });
}

function success2() {
  var Toast = Swal.mixin({
    toast: false,
    position: 'center',
    showConfirmButton: false,
    timer: 5500
  });
  Toast.fire({
    type: 'success',
    title: '4SOFT has received your request successfully and we will answer soon'
  });
}

function success3() {
  var Toast = Swal.mixin({
    toast: false,
    position: 'center',
    showConfirmButton: false,
    timer: 3000
  });
  Toast.fire({
    type: 'success',
    title: 'Updated successfully'
  });
}

$(window).on("scroll", function () {
  if ($(window).scrollTop() >= 300) {
    $('#goUPButton').slideDown(700);
  } else {
    $('#goUPButton').slideUp(700);
  }
});

function goUP() {
  window.scrollTo(0, 0);
}

;
$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault(); // Store hash

      var hash = this.hash; // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1200, function () {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if

  });
});