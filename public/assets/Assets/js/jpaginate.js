// jPaginate Plugin for jQuery
// by Angel Grablev for Enavu Web Development network (enavu.com)
// Dual license under MIT and GPL :) enjoy
/*

To use simply call .paginate() on the element you wish like so:
$("#content").jPaginate(); 

you can specify the following options:
items = number of items to have per page on pagination
next = the text you want to have inside the text button
previous = the text you want in the previous button
active = the class you want the active paginaiton link to have
pagination_class = the class of the pagination element that is being generated for you to style
minimize = minimizing will limit the overall number of elements in the pagination links
nav_items = when minimize is set to true you can specify how many items to show
cookies = if you want to use cookies to remember which page the user is on, true by default

*/
(function ($) {
  $.fn.jPaginate = function (options) {
    var defaults = {
      items: 10,
      next: "Next",
      previous: "Previous",
      inicial: "first",
      final: "end",
      active: "active",
      pagination_class: "pagination",
      minimize: false,
      nav_items: 6,
      cookies: true,
      namecookies: "current",
      tablecontent: "content",
      basenumerador: "paginator",
      ocultarinicialfinal: false,
    };
    var options = $.extend(defaults, options);

    return this.each(function () {
      // object is the selected pagination element list
      obj = $(this);
      // this is how you call the option passed in by plugin of items
      var show_per_page = options.items;
      //getting the amount of elements inside parent element

      //ACTULALIZADO
      //var number_of_items = obj.children().size();
      var number_of_items = obj.children().length;
      //ACTULALIZADO END
      //calculate the number of pages we are going to have
      var number_of_pages = Math.ceil(number_of_items / show_per_page);

      //create the pages of the pagination
      var array_of_elements = [];
      var numP = 0;
      var nexP = show_per_page;

      set_cookie(options.namecookies, "1");

      //loop through all pages and assign elements into array
      for (i = 1; i <= number_of_pages; i++) {
        array_of_elements[i] = obj.children().slice(numP, nexP);
        numP += show_per_page;
        nexP += show_per_page;
      }

      // display first page and set first cookie
      if (options.cookies == true) {
        if (get_cookie(options.namecookies)) {
          //console.log("options.cookies true",get_cookie("current"));
          showPage(get_cookie(options.namecookies));
          createPagination(get_cookie(options.namecookies));
        } else {
          set_cookie(options.namecookies, "1");
          showPage(get_cookie(options.namecookies));
          createPagination(get_cookie(options.namecookies));
        }
      } else {
        //console.log("options.cookies false",page);
        showPage(1);
        createPagination(1);
      }

      //show selected page
      function showPage(page) {
        obj = $("#" + options.tablecontent);
        obj.children().hide();
        objPaginator = $("#" + options.basenumerador);
        try {
          array_of_elements[page].show();
        } catch (e) {}
      }

      // create the navigation for the pagination
      function createPagination(curr) {
        var start,
          items = "",
          end,
          nav = "";
        start =
          "<ul class='" +
          options.pagination_class +
          "' id='" +
          options.basenumerador +
          "_'>";
        var inicial =
          "<li><a class='goto_inicial" +
          options.basenumerador +
          "' href='#'>" +
          options.inicial +
          "</a></li>";
        var previous =
          "<li><a class='goto_previous" +
          options.basenumerador +
          "' href='#'>" +
          options.previous +
          "</a></li>";
        var next =
          "<li><a class='goto_next" +
          options.basenumerador +
          "' href='#'>" +
          options.next +
          "</a></li>";
        var final =
          "<li><a class='goto_final" +
          options.basenumerador +
          "' href='#'>" +
          options.final +
          "</a></li>";
        var previous_inactive =
          "<li><a class='inactive'>" + options.previous + "</a></li>";
        var next_inactive =
          "<li><a class='inactive'>" + options.next + "</a></li>";
        end = "</ul>";
        var after = number_of_pages - options.after + 1;
        var pagi_range = paginationCalculator(curr);
        //console.log(number_of_pages);
        for (i = 1; i <= number_of_pages; i++) {
          if (options.minimize == true) {
            var half = Math.ceil(number_of_pages / 2);
            if (i >= pagi_range.start && i <= pagi_range.end) {
              if (i == curr) {
                items +=
                  '<li><a class="' +
                  options.active +
                  '" title="' +
                  i +
                  '">' +
                  i +
                  "</a></li>";
              } else {
                items +=
                  '<li><a href="#" class="goto' +
                  options.basenumerador +
                  '" title="' +
                  i +
                  '">' +
                  i +
                  "</a></li>";
              }
            } else if (curr <= half) {
              if (i >= number_of_pages - 2) {
                if (i == curr) {
                  items +=
                    '<li><a class="' +
                    options.active +
                    '" title="' +
                    i +
                    '">' +
                    i +
                    "</a></li>";
                } else {
                  items +=
                    '<li><a href="#" class="goto' +
                    options.basenumerador +
                    '" title="' +
                    i +
                    '">' +
                    i +
                    "</a></li>";
                }
              }
            } else if (curr >= half) {
              if (i <= 2) {
                if (i == curr) {
                  items +=
                    '<li><a class="' +
                    options.active +
                    '" title="' +
                    i +
                    '">' +
                    i +
                    "</a></li>";
                } else {
                  items +=
                    '<li><a href="#" class="goto' +
                    options.basenumerador +
                    '" title="' +
                    i +
                    '">' +
                    i +
                    "</a></li>";
                }
              }
            }
          } else {
            if (i == curr) {
              items +=
                '<li><a class="' +
                options.active +
                '" title="' +
                i +
                '">' +
                i +
                "</a></li>";
            } else {
              items +=
                '<li><a href="#" class="goto' +
                options.basenumerador +
                '" title="' +
                i +
                '">' +
                i +
                "</a></li>";
            }
          }
        }

        if (options.ocultarinicialfinal) {
          inicial = "";
          final = "";
        }

        if (number_of_pages == 1) {
          nav = start + previous_inactive + items + next_inactive + end;
        } else if (curr != 1 && curr != number_of_pages) {
          nav = start + inicial + previous + items + next + final + end;
        } else if (curr == number_of_pages) {
          nav = start + inicial + previous + items + next_inactive + end;
        } else if (curr == 1) {
          nav = start + previous_inactive + items + next + final + end;
        }
        //obj.after(nav);
        objPaginator.html(nav);
      }

      /* code to handle cookies */
      function set_cookie(name, value) {
        $.cookie(name, value);
      }
      function get_cookie(cookie_name) {
        return $.cookie(cookie_name);
      }

      function paginationCalculator(curr) {
        var half = Math.floor(options.nav_items / 2);
        var upper_limit = number_of_pages - options.nav_items;
        var start =
          curr > half ? Math.max(Math.min(curr - half, upper_limit), 0) : 0;
        var end =
          curr > half
            ? Math.min(curr + half + (options.nav_items % 2), number_of_pages)
            : Math.min(options.nav_items, number_of_pages);
        return { start: start, end: end };
      }

      // handle click on pagination
      // ANTIGUO --------------------------------------------------------------------
      //   $(".goto" + options.basenumerador).live("click", function (e) {
      //     e.preventDefault();
      //     showPage($(this).attr("title"));
      //     set_cookie(options.namecookies, $(this).attr("title"));
      //     $("#" + options.basenumerador + "_").remove();
      //     createPagination($(this).attr("title"));
      //   });
      //   $(".goto_inicial" + options.basenumerador).live("click", function (e) {
      //     e.preventDefault();
      //     var act = "." + options.active;
      //     var newcurr = 1;
      //     set_cookie(options.namecookies, newcurr);
      //     showPage(newcurr);
      //     $("#" + options.basenumerador + "_").remove();
      //     createPagination(newcurr);
      //   });
      //   $(".goto_next" + options.basenumerador).live("click", function (e) {
      //     e.preventDefault();
      //     var act = "." + options.active;
      //     var newcurr =
      //       parseInt(
      //         $("#" + options.basenumerador + "_")
      //           .find(".active")
      //           .attr("title")
      //       ) + 1;
      //     set_cookie(options.namecookies, newcurr);
      //     showPage(newcurr);
      //     $("#" + options.basenumerador + "_").remove();
      //     createPagination(newcurr);
      //   });
      //   $(".goto_previous" + options.basenumerador).live("click", function (e) {
      //     e.preventDefault();
      //     var act = "." + options.active;
      //     var newcurr =
      //       parseInt(
      //         $("#" + options.basenumerador + "_")
      //           .find(".active")
      //           .attr("title")
      //       ) - 1;
      //     set_cookie(options.namecookies, newcurr);
      //     showPage(newcurr);
      //     $("#" + options.basenumerador + "_").remove();
      //     createPagination(newcurr);
      //   });
      //   $(".goto_final" + options.basenumerador).live("click", function (e) {
      //     e.preventDefault();
      //     var act = "." + options.active;
      //     var newcurr = number_of_pages;
      //     set_cookie(options.namecookies, newcurr);
      //     showPage(newcurr);
      //     $("#" + options.basenumerador + "_").remove();
      //     createPagination(newcurr);
      //   });
      // ANTIGUO END --------------------------------------------------------------------
      // ACTUALIZADO *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
      $(document).on("click", ".goto" + options.basenumerador, function (e) {
        e.preventDefault();
        showPage($(this).attr("title"));
        set_cookie(options.namecookies, $(this).attr("title"));
        $("#" + options.basenumerador + "_").remove();
        createPagination($(this).attr("title"));
      });
      $(document).on(
        "click",
        ".goto_inicial" + options.basenumerador,
        function (e) {
          e.preventDefault();
          var newcurr = 1;
          set_cookie(options.namecookies, newcurr);
          showPage(newcurr);
          $("#" + options.basenumerador + "_").remove();
          createPagination(newcurr);
        }
      );

      $(document).on(
        "click",
        ".goto_next" + options.basenumerador,
        function (e) {
          e.preventDefault();
          var newcurr =
            parseInt(
              $("#" + options.basenumerador + "_")
                .find(".active")
                .attr("title")
            ) + 1;
          set_cookie(options.namecookies, newcurr);
          showPage(newcurr);
          $("#" + options.basenumerador + "_").remove();
          createPagination(newcurr);
        }
      );

      $(document).on(
        "click",
        ".goto_previous" + options.basenumerador,
        function (e) {
          e.preventDefault();
          var newcurr =
            parseInt(
              $("#" + options.basenumerador + "_")
                .find(".active")
                .attr("title")
            ) - 1;
          set_cookie(options.namecookies, newcurr);
          showPage(newcurr);
          $("#" + options.basenumerador + "_").remove();
          createPagination(newcurr);
        }
      );

      $(document).on(
        "click",
        ".goto_final" + options.basenumerador,
        function (e) {
          e.preventDefault();
          var newcurr = number_of_pages;
          set_cookie(options.namecookies, newcurr);
          showPage(newcurr);
          $("#" + options.basenumerador + "_").remove();
          createPagination(newcurr);
        }
      );

      // ACTUALIZADO END *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
    });
  };
  jQuery.cookie = function (name, value, options) {
    if (typeof value != "undefined") {
      // name and value given, set cookie
      options = options || {};
      if (value === null) {
        value = "";
        options.expires = -1;
      }
      var expires = "";
      if (
        options.expires &&
        (typeof options.expires == "number" || options.expires.toUTCString)
      ) {
        var date;
        if (typeof options.expires == "number") {
          date = new Date();
          date.setTime(date.getTime() + options.expires * 24 * 60 * 60 * 1000);
        } else {
          date = options.expires;
        }
        expires = "; expires=" + date.toUTCString(); // use expires attribute, max-age is not supported by IE
      }
      var path = options.path ? "; path=" + options.path : "";
      var domain = options.domain ? "; domain=" + options.domain : "";
      var secure = options.secure ? "; secure" : "";
      document.cookie = [
        name,
        "=",
        encodeURIComponent(value),
        expires,
        path,
        domain,
        secure,
      ].join("");
    } else {
      // only name given, get cookie
      var cookieValue = null;
      if (document.cookie && document.cookie != "") {
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
          var cookie = jQuery.trim(cookies[i]);
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) == name + "=") {
            cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
            break;
          }
        }
      }
      return cookieValue;
    }
  };
})(jQuery);
/*
     FILE ARCHIVED ON 00:22:33 Jan 23, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:46:56 Mar 31, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots.policy: 0.19
  esindex: 0.023
  LoadShardBlock: 191.518 (3)
  RedisCDXSource: 105.643
  captures_list: 315.423
  load_resource: 79.036
  PetaboxLoader3.datanode: 51.218 (4)
  CDXLines.iter: 13.571 (3)
  exclusion.robots: 0.204
  PetaboxLoader3.resolve: 64.801 (2)
*/
