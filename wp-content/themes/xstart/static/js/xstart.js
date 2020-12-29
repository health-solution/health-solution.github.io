jQuery(document).ready(function ($) {
    // 头部滚动效果
    /* $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
            $("#transparent-header-wrap").addClass("minibar");
        } else {
            $("#transparent-header-wrap").removeClass("minibar");
        }
    }) */

    if ($(window).width() > 768) {
        $("#site-header #menu-1-4387159 > li.menu-item-has-children").each(function () {
            var clss = $(this).attr('class').split(' ');
            var id = $('#' + clss[0]);
            id.find('.elementor-image-box-content').each(function () {
                var a_link = $(this).find(".elementor-image-box-title a").attr('href');
                $(this).find(".elementor-image-box-description").html("<a href='" + a_link + "'>" + $(this).find(".elementor-image-box-description").html() + "</a>");
            })
            $(this).append('<div class="pc-submenu-page">' + id.find('.elementor-template').html() + '</div>')
        })
    }

    $("#team-tab-nav .elementor-column:first-child,#team-tab-content .elementor-widget-wrap .team-tab-content:first-child").addClass('show');
    $("#team-tab-nav .elementor-column").hover(function () {
        $(this).addClass("show").siblings().removeClass('show');
        console.log($("#team-tab-content section").index($(this)));
        $("#team-tab-content section:eq(" + $(this).index() + ")").addClass("show").siblings().removeClass('show');
    })

    $("#jiaoyu-tab-nav .elementor-widget-heading:first-child,#jiaoyu-tab-content .elementor-widget-wrap section:first-child").addClass('show');
    $("#jiaoyu-tab-nav .elementor-widget-heading").click(function () {
        $(this).addClass("show").siblings().removeClass('show');
        $("#jiaoyu-tab-content section:eq(" + $(this).index() + ")").addClass("show").siblings().removeClass('show');
    })


/*     if($(window).width()>768){
        $("#menu-2-e345d49 > li > a").click(function () {
            $(this).parent().find(".sub-menu").slideToggle();
        })

    }
 */
});