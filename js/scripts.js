$(document).ready(function() {
  $("#header__btn").on("click", function(event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top - 50;
    $("body,html").animate({ scrollTop: top }, 500);
    $(".header-menu-wrapp").removeClass("open");
    return false;
  });

  $(".hamburger").on("click", function() {
    $(".header-menu-wrapp").toggleClass("open");
  });

  $(".cross").on("click", function() {
    $(".header-menu-wrapp").removeClass("open");
  });

  function services_info_content_1_show() {
    $(
      ".services-info-content-2, .services-info-content-3, .services-info-content-4"
    ).addClass("hidden");
    $(".services-info-content-1").removeClass("hidden");
  }

  function services_info_content_2_show() {
    $(
      ".services-info-content-1, .services-info-content-3, .services-info-content-4"
    ).addClass("hidden");
    $(".services-info-content-2").removeClass("hidden");
  }

  function services_info_content_3_show() {
    $(
      ".services-info-content-1, .services-info-content-2, .services-info-content-4"
    ).addClass("hidden");
    $(".services-info-content-3").removeClass("hidden");
  }

  function services_info_content_4_show() {
    $(
      ".services-info-content-1, .services-info-content-2, .services-info-content-3"
    ).addClass("hidden");
    $(".services-info-content-4").removeClass("hidden");
  }

  $(".switch-item").on("click", function thisId() {
    $(".switch-item").removeClass("active");
    $(this).addClass("active");

    let thisId = $(this).attr("id");

    switch (thisId) {
      case "1":
        services_info_content_1_show();
        break;
      case "2":
        services_info_content_2_show();
        break;
      case "3":
        services_info_content_3_show();
        break;
      case "4":
        services_info_content_3_show();
        break;
      default:
        $(".services-info-content").addClass("hidden");
    }
  });

  $(".switch-mob").change(function() {
    let thisVal = $(this)
      .find("option:selected")
      .val();

    switch (thisVal) {
      case "1":
        services_info_content_1_show();
        break;
      case "2":
        services_info_content_2_show();
        break;
      case "3":
        services_info_content_3_show();
        break;
      case "4":
        services_info_content_3_show();
        break;
    }
  });

  $.extend($.validator.messages, {
    required: "Error"
  });

  $("#form__footer").validate({
    rules: {
      name: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      text: {
        required: true
      }
    }
  });

  $(".submit").on("click", function() {
    if ($("#form__footer").valid() == true) {
      $("#form__footer").submit(function(e) {
        e.preventDefault();
        var thisForm = $(this);
        var data = new FormData(thisForm[0]);
        $.ajax({
          url: "mail.php",
          data: data,
          processData: false,
          contentType: false,
          cache: false,
          type: "POST",
          success: function() {
            alert("Message sent!");
            $("#form__footer")[0].reset();
          },
          error: function() {
            alert("Message not sent!");
            $("#form__footer")[0].reset();
          }
        });
      });
    }
  });
});
