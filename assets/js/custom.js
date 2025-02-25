// ============= side bar start ============= // 
function openNav() {
    "use strict";
    const sidepanel = document.getElementById("mySidepanel");
    if (sidepanel) {
        sidepanel.style.left = "0";
    } else {
        console.error("Error: Side panel element not found!");
    }
}

function closeNav() {
    "use strict";
    const sidepanel = document.getElementById("mySidepanel");
    if (sidepanel) {
        sidepanel.style.left = "-320px";
    } else {
        console.error("Error: Side panel element not found!");
    }
}
// ============= side bar end ============= //

// button back to top start
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backToTopBtn").style.display = "block";
    } else {
        document.getElementById("backToTopBtn").style.display = "none";
    }
}

function scrollToTop() {
    const scrollToTopBtn = document.documentElement || document.body;
    scrollToTopBtn.scrollIntoView({
        behavior: "smooth"
    });
}
// button back to top end

// footer validation start
const fom = document.getElementById('footer-form');
const footerMessage = document.getElementById('footer-message');

fom.addEventListener('submit', (event) => {
    event.preventDefault();
    footerMessage.innerHTML = 'Form submitted success fully!';
    footerMessage.style.display = 'block';
    fom.reset();
    setTimeout(() => {
        footerMessage.style.display = 'none';
    }, 3000);
});
// footer validation end

// ============= carousel start
$(document).ready(function() {
    var slider = $('.slider');

    slider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
    });

    // Pause the slider on hover
    slider.on('mouseenter', function() {
        slider.slick('slickPause');
    });

    // Resume the slider when not hovering
    slider.on('mouseleave', function() {
        slider.slick('slickPlay');
    });
});

// ============= carousel end

// ============= counter start ============= // 

(function(e) {
    "use strict";
    e.fn.counterUp = function(t) {
        var n = e.extend({
            time: 400,
            delay: 10
        }, t);
        return this.each(function() {
            var t = e(this),
                r = n,
                i = function() {
                    var e = [],
                        n = r.time / r.delay,
                        i = t.text(),
                        s = /[0-9]+,[0-9]+/.test(i);
                    i = i.replace(/,/g, "");
                    var o = /^[0-9]+$/.test(i),
                        u = /^[0-9]+\.[0-9]+$/.test(i),
                        a = u ? (i.split(".")[1] || [])
                        .length : 0;
                    for (var f = n; f >= 1; f--) {
                        var l = parseInt(i / n * f);
                        u && (l = parseFloat(i / n * f)
                            .toFixed(a));
                        if (s)
                            while (/(\d+)(\d{3})/.test(l.toString())) l = l.toString()
                                .replace(/(\d+)(\d{3})/, "$1,$2");
                        e.unshift(l)
                    }
                    t.data("counterup-nums", e);
                    t.text("0");
                    var c = function() {
                        t.text(t.data("counterup-nums")
                            .shift());
                        if (t.data("counterup-nums")
                            .length) setTimeout(t.data("counterup-func"), r.delay);
                        else {
                            delete t.data("counterup-nums");
                            t.data("counterup-nums", null);
                            t.data("counterup-func", null)
                        }
                    };
                    t.data("counterup-func", c);
                    setTimeout(t.data("counterup-func"), r.delay)
                };
            t.waypoint(i, {
                offset: "100%",
                triggerOnce: !0
            })
        })
    }
})(jQuery);

jQuery(document)
    .ready(function($) {
        $('.count')
            .counterUp({
                delay: 10,
                time: 2000
            });
    });
// ============= counter end ============= //

// ============= Read more Start ============= //

   // JavaScript to toggle content visibility
   const readMoreButtons = document.querySelectorAll('.read-more');
        
   readMoreButtons.forEach(button => {
       button.addEventListener('click', () => {
           const target = button.getAttribute('data-target');
           const introParagraph = document.getElementById(`intro-paragraph-${target}`);
           const hiddenParagraph = document.getElementById(`hidden-paragraph-${target}`);
           
           if (introParagraph.style.display !== 'none') {
               introParagraph.style.display = 'none';
               hiddenParagraph.style.display = 'block';
               button.textContent = 'Read Less';
           } else {
               introParagraph.style.display = 'block';
               hiddenParagraph.style.display = 'none';
               button.textContent = 'Read More';
           }
       });
   });

// Function to update the offer banner text and style

function updateOfferBanner() {
    const banner = document.getElementById('offer-banner');
    if (banner) {
    banner.textContent = "Act fast! Be among the first 10 to secure our top-tier Attack Surface Management service and enjoy an exclusive 30% discount. Strengthen your security now!";
        banner.style.backgroundColor = '#ff9900'; // Change to a different color
    }
}

// Call the function to update the offer banner
updateOfferBanner();

// =============  End ============= //
