$("#hinkypunk").hide();
$("#hinkypunk1").hide();
$("#hinkypunk1-5").hide();
$("#hinkypunk2").hide();
$("#hinkypunk3").hide();
$("#right2").hide();
$("#right3").hide();
$("#right4").hide();
$("#right5").hide();
$("#right6").hide();

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
    $("#question1").append("<p id='right1'>This leads you into a deeper, darker part of the forest. There doesn't seem to be much around besides normal small forest creatures. However, you have an eery sense that you are being watched. As you head further, you begin to see signs of habitation: remnants of fires with strange smells and sticks arranged for divination What do you do?</p>");
    $("#choices1").hide();
    $("#right2").show();
});
    $("#confident").click(function() {
        $("#question").append("<p id='right1'>This leads you into a deeper, darker part of the forest. There doesn't seem to be much around besides normal small forest creatures. However, you have an eery sense that you are being watched. As you head further, you begin to see signs of habitation: remnants of fires with strange smells and sticks arranged for divination What do you do?</p>");
        $("#question1").html("<p>Suddenly the noise of hooves fills the air and the centaur herd appears before you. Bane stands at the forfront. 'What are you doing here human? You have no place in our forest.'</p>");
        $("#right2").hide();
        $("#right3").show();
    });
        $("#polite").click(function() {
            $("#question").append("<p>Suddenly the noise of hooves fills the air and the centaur herd appears before you. Bane stands at the forfront. 'What are you doing here human? You have no place in our forest.'</p>");
            $("#question1").html("<p>Bane opens his mouth, but before he says anything, Magorian steps forward 'You're helping Hagrid and an innocent hurt unicorn. Besides, you are just a foal, and pose no threat to us. The unicorn isn't here. Go from this place.' You thank Magorian, and leave. Now which way do you go?</p>");
            $("#right3").hide();
            $("#right4").show();
        });
            $("#left4-1").click(function() {
                $("#question").append("<p>SBane opens his mouth, but before he says anything, Magorian steps forward 'You're helping Hagrid and an innocent hurt unicorn. Besides, you are just a foal, and pose no threat to us. The unicorn isn't here. Go from this place.' You thank Magorian, and leave. Now which way do you go?</p>");
                $("#question1").html("<p>Oops! This way led you right back out of the forest to school grounds. When you step out into the open you don't even have time to wonder if you could get away with sneaking back to you bed before Filtch is upon you.His glare tell you everything: you had better head back into the trees</p>");
                $("#right4").hide();
                $("#hinkypunk1-5").show();
            });
            $("#straight").click(function() {
                $("#question").append("<p>SBane opens his mouth, but before he says anything, Magorian steps forward 'You're helping Hagrid and an innocent hurt unicorn. Besides, you are just a foal, and pose no threat to us. The unicorn isn't here. Go from this place.' You thank Magorian, and leave. Now which way do you go?</p>");
                $("#question1").html("<p>You see a strange bobbing light. What now?</p>");
                $("#right4").hide();
                $("#hinkypunk").show();
            });
            $("#right4-1").click(function(){
                $("#question").append("<p>Bane opens his mouth, but before he says anything, Magorian steps forward 'You're helping Hagrid and an innocent hurt unicorn. Besides, you are just a foal, and pose no threat to us. The unicorn isn't here. Go from this place.' You thank Magorian, and leave. Now which way do you go?</p>");
                $("#question1").html("<p>After walking for a short time you see some shiny stuff on the ground. What do you do? (run away, examine further)</p>");
                $("#right4").hide();
                $("#right5").show();
            });
                $("#run").click(function(){
                    $("#question").append("<p>After walking for a short time you see some shiny stuff on the ground. What do you do?</p>");
                    $("#question1").html("<p>Better hightail it out of here. You've had a rough night already. Even dealing with Filtch is better than this. Back to where you entered the forest!...................... You reach the edge of the trees and bump straight into Filtch. 'Where do you think you're going? Don't even think about going back to the castle until it's morning. If I catch you here again I'll hang you from your thumbs in the dungeon!!</p>");
                    $("#right5").hide();
                    $("#hinkypunk1-5").show();
                });
                $("#examine").click(function(){
                    $("#question").append("<p>After walking for a short time you see some shiny stuff on the ground. What do you do?</p>");
                    $("#question1").html("<p>Eureka!! Unicorn blood! There isn't much, so it must not be that badly injured. luckily it was bleeding just enough to leave a sparse trail...You follow the trail and....There it is!! Now what?</p>");
                    $("#right5").hide();
                    $("#right6").show();
                });
                    $("#sparks").click(function(){
                        $("#question").append("<p>AEureka!! Unicorn blood! There isn't much, so it must not be that badly injured. luckily it was bleeding just enough to leave a sparse trail...You follow the trail and....There it is!! Now what? (shoot green sparks into the air, 'petrificus totalus'</p>");
                        $("#question1").html("<p>Great! Hagrid sees the sparks and is quickly there. He calms the unicorn and examines its injuries.They aren't so bad that it won't make it back to his cabin, so all three of you head back. You meet Filtch sneering at the edge of the forest, but just Hagrid brushes him off and tells him you did a great job. You help him clean up the unicorn's injuries, and he invites you into the cabin for a cup of coacoa before bed. Congratulations!</p>");
                        $("#right6").hide();
                        $("#hinkypunk1-5").show();
                    });
                    $("#petrificus2").click(function(){
                        $("#question").append("<p>AEureka!! Unicorn blood! There isn't much, so it must not be that badly injured. luckily it was bleeding just enough to leave a sparse trail...You follow the trail and....There it is!! Now what? (shoot green sparks into the air, 'petrificus totalus'</p>");
                        $("#question1").html("<p>Ok! It's immobilized, now time to get it back to Hagrid somehow...Oh you hear him coming through the trees! 'What are yer doin'?!??!' he yells. Unpetrify it right now! unfortunately you don't know the spell to un-immobilize. Professor McGonnagal ends up having to get involved. She isn't happy about being roused from her bed to deal with your mess-up.....At least you ended up finding it right?</p>");
                        $("#right6").hide();
                        $("#hinkypunk1-5").show();
                    });
    $("#turn-around").click(function() {
        $("#question").append("<p id='right1'>This leads you into a deeper, darker part of the forest. There doesn't seem to be much around besides normal small forest creatures. However, you have an eery sense that you are being watched. As you head further, you begin to see signs of habitation: remnants of fires with strange smells and sticks arranged for divination What do you do?</p>");
        $("#question1").html("<p>Suddenly the noise of hooves fills the air and the centaur herd appears before you. Bane stands at the forfront. 'What are you doing here human? You have no place in our forest.'</p>");
        $("#right2").hide();
        $("#right3").show();
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
