/*!
    Title: Dev Portfolio Template
    Version: 1.2.2
    Last Change: 03/25/2020
    Author: Ryan Fitzgerald
    Repo: https://github.com/RyanFitzgerald/devportfolio-template
    Issues: https://github.com/RyanFitzgerald/devportfolio-template/issues

    Description: This file contains all the scripts associated with the single-page
    portfolio website.
*/

(function ($) {

    AOS.init();


    // Remove no-js class
    $('html').removeClass('no-js');

    // Animate to section when nav is clicked
    $('header a').click(function (e) {

        // Treat as normal link if no-scroll class
        if ($(this).hasClass('no-scroll')) return;

        e.preventDefault();
        var heading = $(this).attr('href');
        var scrollDistance = $(heading).offset().top;

        var scrollSpeed = (Math.abs(window.pageYOffset - $(heading).offset().top) / 1) * 0.75

        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, scrollSpeed);


        // Hide the menu once clicked if mobile
        if ($('header').hasClass('active')) {
            $('header, body').removeClass('active');
        }
    });

    // Scroll to top
    $('.to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    // Scroll to first element
    $('#lead-down span').click(function () {
        var scrollDistance = $('#lead-content').offset().top;
        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, 500);
    });

    // Create timeline
    $('#experience-timeline').each(function () {

        $this = $(this); // Store reference to this
        $userContent = $this.children('div'); // user content

        // Create each timeline block
        $userContent.each(function () {
            $(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
        });

        // Add icons to each block
        $this.find('.vtimeline-point').each(function () {
            $(this).prepend('<div class="vtimeline-icon"><i class="fa fa-rocket"></i></div>');
        });

        // Add dates to the timeline if exists
        $this.find('.vtimeline-content').each(function () {
            var date = $(this).data('date');
            if (date) { // Prepend if exists
                $(this).parent().prepend('<span class="vtimeline-date">' + date + '</span>');
            }
        });

    });

    // Create projects
    const projects = [
        {
            name: "Choccy Blog",
            preview: "https://www.choccy.darrenxu.com/",
            description: "Hear about my latest hard hitting choccy reviews. A Gatsby blog hosted on Netlify with custom React components and styling",
            link: "https://github.com/DarrenXu94/gatsby-starter-netlify-cms",
            imgLink: "https://user-images.githubusercontent.com/16931153/95315560-5fec0f80-08de-11eb-87f0-0890b4dbb3b4.png"
        },
        {
            name: "Will it Cereal?",
            preview: "https://willitcereal.darrenxu.com/",
            description: "A fun blog where I see what food goes well as a cereal. Another Gatsby blog using the same tools as the Choccy Blog",
            link: "https://github.com/DarrenXu94/will-it-cereal",
            imgLink: "https://user-images.githubusercontent.com/16931153/102003406-3bd40100-3d5b-11eb-8256-d0e6d635f06f.png"
        },
        {
            name: "Full Stack Roadmap",
            preview: "https://roadmapdxu.netlify.com/",
            description: "A full stack web application designed to host basic information about beginning web development. MongoDB hosted on MLab, static site hosted on Netlify",
            link: "https://github.com/DarrenXu94/roadmap",
            imgLink: "https://user-images.githubusercontent.com/16931153/50616987-0d2e3880-0f3f-11e9-8ead-3b7b83a34c89.png"
        },
        {
            name: "Interactive Currency Converter",
            preview: "https://currency-convertor.netlify.com/",
            description: "LWebsite that converts currency using an API and also shows the locations on a map",
            link: "https://github.com/DarrenXu94/interactive-currency-converter",
            imgLink: "https://user-images.githubusercontent.com/16931153/52897620-cebcb680-322a-11e9-9115-b322a993a92e.png"
        },
        {
            name: "Portfolio",
            description: "Basic responsive HTML landing page for my portfolio",
            preview: "https://darrenxu.com/",
            link: "https://github.com/DarrenXu94/new-web",
            imgLink: "https://user-images.githubusercontent.com/16931153/93014848-df483500-f5f7-11ea-9946-3d29e7386c42.gif"
        },
        {
            name: "Beam Game",
            preview: "https://darrenxu94.github.io/Beam/",
            description: "A p5js game created for a fun side project",
            link: "https://github.com/DarrenXu94/Beam",
            imgLink: "https://user-images.githubusercontent.com/16931153/50622683-585a4280-0f63-11e9-944c-88d82733d9ba.gif"
        },
        {
            name: "Splitscreen Slider",
            preview: "https://darrenxu94.github.io/splitscreen-slider/",
            description: "Basic HTML, CSS and JS website that animates a bar based on mouse movement",
            link: "https://github.com/DarrenXu94/splitscreen-slider",
            imgLink: "https://user-images.githubusercontent.com/16931153/50621755-27c2da80-0f5c-11e9-92c2-62e9d5647b39.gif"
        },
        {
            name: "Promotional Band Website",
            preview: "https://edhunting.netlify.com/",
            description: "Promotional responsive website for a band. Created using node-sass and HTML5.",
            link: "https://github.com/DarrenXu94/edhunting",
            imgLink: "https://user-images.githubusercontent.com/16931153/54064176-2c5e8480-4266-11e9-8224-dd11705a28e5.png"
        },
    ]

    const projectSelector = $('#projects-container');
    projects.forEach(function (project) {
        projectSelector.append(`<div class="project-card">
        <div class="project-card__img">
            <img src="${project.imgLink}"
                alt="">
        </div>
        <div class="text">
        <div class="project-card__header">
            <h3>
                ${project.name}
            </h3>
        </div>
        <div class="project-card__content">
            ${project.description}
        </div>
        <div class="project-card__links">
            <span>
                <a href="${project.preview}">
                    <i class="fa fa-tablet" aria-hidden="true"></i>
                    <span>
                        Live page
                    </span>
                </a>
            </span>
            <span>
                <a href="${project.link}">
                    <i class="fa fa-code" aria-hidden="true"></i>
                    <span>
                        Code
                    </span>
                </a>
            </span>
        </div>
        </div>
    </div>`)
    })

    // Open mobile menu
    $('#mobile-menu-open').click(function () {
        $('header, body').addClass('active');
    });

    // Close mobile menu
    $('#mobile-menu-close').click(function () {
        $('header, body').removeClass('active');
    });

    // Load additional projects
    $('#view-more-projects').click(function (e) {
        e.preventDefault();
        $(this).fadeOut(300, function () {
            $('#more-projects').fadeIn(300);
        });
    });

})(jQuery);
