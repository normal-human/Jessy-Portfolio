$(function () {

    var change_img_time     = 3000; 
    var transition_speed    = 200;

    var simple_slideshow    = $("#exampleSlider"),
        listItems           = simple_slideshow.children('li'),
        listLen             = listItems.length,
        i                   = 0,

        changeList = function () {

            listItems.eq(i).fadeOut(transition_speed, function () {
                i += 1;
                if (i === listLen) {
                    i = 0;
                }
                listItems.eq(i).fadeIn(transition_speed);
            });

        };

    listItems.not(':first').hide();
    setInterval(changeList, change_img_time);

});

$("#link1").click(function(){
   window.location.href='https://normal-human.github.io/Jessy-Portfolio/Beets';
});

$("#link2").click(function(){
   window.location.href='https://normal-human.github.io/Jessy-Portfolio/ChineseThought';
});

$("#link3").click(function(){
   window.location.href='https://normal-human.github.io/Jessy-Portfolio/Hackone';
});

$("#link4").click(function(){
   window.location.href='https://normal-human.github.io/Jessy-Portfolio/Jokes';
});

$("#link5").click(function(){
   window.location.href='https://normal-human.github.io/Jessy-Portfolio/Truths';
});
