$("#hinkypunk").hide();
$("#hinkypunk1").hide();
$("#hinkypunk1-5").hide();
$("#hinkypunk2").hide();
$("#hinkypunk3").hide();

$("button").click(function() {
    var height = $("#container").height() + 30;
    $("#container").height(height);
    $("#question").css("color", "grey");
    $("#question").css("font-style", "italic");
});


$("#left1").click(function() {
    $("#question1").append("<p id='left1'>You see a strange bobbing light. What now?</p>");
    $("#choices1").hide();
    $("#hinkypunk").show();
});
    $("#follow1").click(function() {
        $("#question1").html("<p id='hikypunk'>What do you do?</p>");
        $("#question").append("<p id='left1'>You see a strange bobbing light. What now?</p>");
        $("#hinkypunk").hide();
        $("#hinkypunk1").show();
    });
        $("#closer1").click(function() {
            $("#question1").html("<p id='hikypunk2'>It's so cute! Woah!! Was that a fireball!?!?! It's throwing fire from its lamp!! Hightail it back to start!!!</p>");
            $("#question").append("<p id='left1'>What do you do?</p>");
            $("#hinkypunk1-5").show();
            $("#hinkypunk1").hide();
        });    
        $("#draw-wand1").click(function() {
            $("#question1").html("<p id='hikypunk2-5'>Must be a hinkypunk...what spell do you use?</p>");
            $("#question").append("<p id='left1'>What do you do?</p>");
            $("#hinkypunk1").hide();
            $("#hinkypunk2").show();
        });
            $("#lumos").click(function() {
                $("#question1").html("<p id='hikypunk3'>Great! The wispy, fluffy creature has become more solid and looks dazed. Now what?</p>");
                $("#question").append("<p>Must be a hinkypunk...what spell do you use?</p>");
                $("#hinkypunk2").hide();
                $("#hinkypunk3").show();
            });
                $("#petrificus").click(function() {
                    $("#question1").html("<p>The spell didn't work. Quick try something else!</p>");
                    $("#question").append("<p>Great! The wispy, fluffy creature has become more solid and looks dazed. Now what?</p>");
                    $("#hinkypunk3").show();
                });
                $("#flippendo").click(function() {
                    $("#question1").html("<p>You have defeated the hinkypunk! But oh no you see a dark figure approaching....Phew! Only Hagrid. While the hinkypunk led you astray he went ahead and found the hurt unicorn. You both leave the forest, but when Filtch finds out you weren't any help, he sentences you to three hours detention cleaning Moaning Myrtle's bathroom</p>");
                    $("#question").append("<p>Great! The wispy, fluffy creature has become more solid and looks dazed. Now what?</p>");
                    $("#hinkypunk3").hide();
                    $("#hinkypunk1-5").show();
                });
            $("#sectum").click(function() {
                $("#question1").html("<p id='hikypunk3'>Slashing it won't work! It's made of wispy smoke! Better run!</p>");
                $("#question").append("<p>Must be a hinkypunk...what spell do you use?</p>");
                $("#hinkypunk2").hide();
                $("#hinkypunk1-5").show();
            });
    $("#go-back").click(function() {
        $("#question").append("<p id='left1'>You see a strange bobbing light. What now?</p>");
        $("#question1").html("<p id='hikypunk'>Ok you fraidy cat. Hopefully the injured unicorn isn't this way. Hopefully you aren't abandoning it to its fate just because you're afraid of a little bobbing light. Back to start you go.</p>");
        $("#hinkypunk").hide();
        $("#hinkypunk1-5").show();
    });
    $("#start").click(function() {
        $("#question").html("You were caught out of bed after hours! Looks like you've got to go into the forbidden forest now... Alright, you're in search of a hurt unicorn. Which way?");
        $("#question1").html("");
        $("#question").css("color", "black");
        $("#question").css("font-style", "normal");
        $("#container").height(10);
        $("#choices1").show();
        $("#hinkypunk").hide();
        $("#hinkypunk1-5").hide();
    });



$("#right1").click(function() {
    $("#question").css("color", "grey");
    $("#question").css("font-style", "italic");
    $("#text").append("<p id='right1'>This leads you into a deeper, darker part of the forest. There doesn't seem to be much around besides normal small forest creatures. However, you have an eery sense that you are being watched. As you head further, you begin to see signs of habitation: remnants of fires with strange smells and sticks arranged for divination What do you do? (confidently stride forward, turn around)</p>");
    $("#choices1").hide();
});

$("#forward1").click(function() {
    $("#question").css("color", "grey");
    $("#question").css("font-style", "italic");
    $("#text").append("<p id='forward1'>You're heading into possibly the darkest part of the forest. The tree branches become so thick and low that you have to start bending down to keep moving forward. You walk right through a cobweb. Gross! Everything seems still, the forest animals are few and far between. Keep going?<p>");
    $("#choices1").hide();
});

$("#backward1").click(function() {
    $("#question").css("color", "grey");
    $("#question").css("font-style", "italic");
    $("#text").append("<p id='backward1'>you bump straight into Filtch. 'Where do you think you're going? Don't even think about going back to the castle until it's morning. If I catch you here again I'll hang you from your thumbs in the dungeon!!'....you head back into the forest.</p>");
    $("#choices1").hide();
});
