$(document).ready(function(){

  /**
     * While the document loads, this function 
     * shows loader. 
     * Original code idea from stack overflow
     */
    $('.slow-loader').fadeOut(2500);
    /* This function changes the style of 
    navbar bars when the user clicks on the bars.
    */ 
    $("#barsContainer").click(function () {
        changeBars(this);
    });

    function changeBars(i) {
        i.classList.toggle("change");
    }

    // Animated content load function as you scroll the page.
    $(window).scroll(function() {
      var windowHeight = $(window).height();
      var scrollPos = $(window).scrollTop();

      $('.animated-section').each(function() {
          var contentPos = $(this).offset().top;

          // If the top of the section is visible within the window
          if (scrollPos > contentPos - windowHeight + 100) {
              $(this).addClass('show');
          }
      });
  });
});

// GO Up button functionality
var goUpBtn = document.getElementById("goUpBtn");
/**
* When the user scrolls down 
* 20px from the top of the document
* show the button.
*/
window.onscroll = function() {
    scrollFunction();
};

/**
* Scroll function:
* when the user scrolls the page
* Otherwise, the button remains invisible. 
* the button to go up appears. 
*/
var scrollFunction = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      goUpBtn.style.display = "block";
    } else {
      goUpBtn.style.display = "none";
    }
  };
  
/**
* When the user clicks on the button
* scroll to the top of the document
*/
var topFunction = function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

// Event Listener
  
$("#goUpBtn").click(function () {
    topFunction();
});