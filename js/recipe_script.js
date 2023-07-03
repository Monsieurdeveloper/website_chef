$(document).ready(function () {
    $('.FB_1').css('color', '#c9224a');
    $('.FB_1').click(function (e) {
        $('.flex-block').hide(0);
        $('.only-all').show(400);
        $('.first_cources').show(400);
        $('.second_cources').show(400);
        $('.snacks').show(400);
        $('.salads').show(400);
        $('.sauces').show(400);
        $('.filter-box > *').css('color', '#000000');
        $('.FB_1').css('color', '#c9224a');
    });
    $('.FB_2').click(function (e) { 
        $('.flex-block').hide(0);
        $('.first_cources').show(400);
        $('.filter-box > *').css('color', '#000000');
        $('.FB_2').css('color', '#c9224a');
        
    });
    $('.FB_3').click(function (e) { 
        $('.flex-block').hide(0);
        $('.second_cources').show(400);
        $('.filter-box > *').css('color', '#000000');
        $('.FB_3').css('color', '#c9224a');
        
    });
    $('.FB_4').click(function (e) { 
        $('.flex-block').hide(0);
        $('.snacks').show(400);
        $('.filter-box > *').css('color', '#000000');
        $('.FB_4').css('color', '#c9224a');
        
    });
    $('.FB_5').click(function (e) { 
        $('.flex-block').hide(0);
        $('.salads').show(400);
        $('.filter-box > *').css('color', '#000000');
        $('.FB_5').css('color', '#c9224a');
        
    });
    $('.FB_6').click(function (e) { 
        $('.flex-block').hide(0);
        $('.sauces').show(400);
        $('.filter-box > *').css('color', '#000000');
        $('.FB_6').css('color', '#c9224a');
        
    });
});