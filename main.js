var canvas = new fabric.Canvas('myCanvas');


var block_img_width = 30
var block_img_height = 30
var block_object = "";
var player_object = "";

var player_y = 10
var player_x = 10


function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_object = Img;

	block_object.scaleToWidth(block_img_width);
	block_object.scaleToHeight(block_img_height);
	block_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(block_object);

	});

}


function player_update()
{
	fabric.Image.fromURL("player.png", function(Img) {
	player_object = Img;

	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(player_object);

	});
}




window.addEventListener("keydown",my_keydown);

function my_keydown(e){
	var keypressed = e.keyCode;
	if(e.shiftKey == true && keypressed == '80'){
		block_img_width= block_img_width + 10;
		block_img_height= block_img_height + 10;
		document.getElementById("current_width").innerHTML=block_img_width;
		document.getElementById("current_height").innerHTML=block_img_height;
         console.log("Shift + P key has been pressed");	 
	}
	if(e.shiftKey == true && keypressed == '77'){
		block_img_width= block_img_width - 10;
		block_img_height= block_img_height - 10;
		document.getElementById("current_width").innerHTML=block_img_width;
		document.getElementById("current_height").innerHTML=block_img_height;
         console.log("Shift + M key has been pressed");
	}

if (keypressed == '38'){
	up();
}

if (keypressed == '40'){
	down();
}
if (keypressed == '37'){
	left();
}
if (keypressed == '39'){
	right();
}



if (keypressed == '70'){
	new_image('ironman_face.png'); console.log("I + F was pressed");

}
if (keypressed == '76' && keypressed == '73'){
	new_image('ironman_legs.png');
}
if (keypressed == '76' && keypressed == '73' && keypressed == '65'){
	new_image('ironman_left_hand.png');
}
if (keypressed == '82' && keypressed == '73' && keypressed == '65'){
	new_image('ironman_right_hand.png');
}
if (keypressed == '66'){
	new_image('ironman_body.png');
}


if (keypressed == '80'){
	new_image('pepe.jpg');
}

if (keypressed == '70' && keypressed == '72'){
	new_image('hulk_face.png');
}
if (keypressed == '84'){
	new_image('hulk_legs.png');
}
if (keypressed == '76'){
	new_image('hulk_left_hand.png');
}
if (keypressed == '82' && keypressed == '72' && keypressed == '65'){
	new_image('hulk_right_hand.png');
}
if (keypressed == '66' && keypressed == '72'){
	new_image('hulk_body.png');
}



if (keypressed == '70' && keypressed == '84'){
	new_image('thor_face.png');
}
if (keypressed == '84'){
	new_image('thor_legs.png');
}
if (keypressed == '76' && keypressed == '84' && keypressed == '65'){
	new_image('thor_left_hand.png');
}
if (keypressed == '82' && keypressed == '84' && keypressed == '65'){
	new_image('thor_right_hand.png');
}
if (keypressed == '66' && keypressed == '84'){
	new_image('thor_body.png');
}


if (keypressed == '70' && keypressed == '83'){
	new_image('spiderman_face.png');
}
if (keypressed == '76' && keypressed == '83'){
	new_image('spiderman_legs.png');
}
if (keypressed == '76' && keypressed == '83' && keypressed == '65'){
	new_image('spiderman_left_hand.png');
}
if (keypressed == '82'){
	new_image('spiderman_right_hand.png');
}
if (keypressed == '66' && keypressed == '83'){
	new_image('spiderman_body.png');
}
}

function up(){
if (player_y >= 0){
player_y = player_y - block_img_height;
console.log("Up has been pressed");
canvas.remove(player_object);
player_update();
}
}

function down(){
	if (player_y <= 550){
	player_y = player_y + block_img_height;
	console.log("Down has been pressed");
	canvas.remove(player_object);
	player_update();
	}
	}

	function right(){
		if (player_x <= 950){
		player_x = player_x + block_img_width;
		console.log("Right has been pressed");
		canvas.remove(player_object);
		player_update();
		}
		}

		function left(){
			if (player_x >= 0){
			player_x = player_x - block_img_width;
			console.log("Left has been pressed");
			canvas.remove(player_object);
			player_update();
			}
			}