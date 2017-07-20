$("button").click(function() {
    var height = $("#container").height() + 30;
    $("#container").height(height);
});

$("#left1").click(function() {
    $("#question").html("You see a strange bobbing light. What now?");
    $("#choices1").html("<button id="follow1">follow</button><button id="go-back">go-back</button>")
});

$("#right1").click(function() {
    $("#question").html("This leads you into a deeper, darker part of the forest. There doesn't seem to be much around besides normal small forest creatures. However, you have an eery sense that you are being watched. As you head further, you begin to see signs of habitation: remnants of fires with strange smells and sticks arranged for divination What do you do? (confidently stride forward, turn around)");
    $("#choices1").hide();
});

$("#forward1").click(function() {
    $("#question").html("You're heading into possibly the darkest part of the forest. The tree branches become so thick and low that you have to start bending down to keep moving forward. You walk right through a cobweb. Gross! Everything seems still, the forest animals are few and far between. Keep going?");
    $("#choices1").hide();
});

$("#backward1").click(function() {
    $("#question").html("you bump straight into Filtch. 'Where do you think you're going? Don't even think about going back to the castle until it's morning. If I catch you here again I'll hang you from your thumbs in the dungeon!!'....you head back into the forest.");
    $("#choices1").hide();
});
