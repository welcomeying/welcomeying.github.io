// change nav item active state and color by scrolling
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#navbar a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#navbar ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

// add myskills to About section
for (let i = 0; i < myskills.length; i ++) {
    let figure = document.createElement('figure');
    figure.className = 'my-skill';
    let image = document.createElement('img');
    image.src = myskills[i].logo;
    image.alt = myskills[i].alt;
    let figcaption = document.createElement('figcaption');
    figcaption.innerHTML = myskills[i].name;
    figure.append(image);
    figure.append(figcaption);
    document.getElementById('all-skills').append(figure);
}