var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d")
rover_width = 200;
rover_height = 200;
rover_x = 354;
rover_y = 354;
background_image = "mars.jpg"
rover_image = "rover.png"
function add(){
 bg_img_add = new Image()
 bg_img_add.onload = upload_background;
 bg_img_add.src = background_image;
 rover_img_add = new Image()
 rover_img_add.onload = upload_rover;
 rover_img_add.src = rover_image;
}
function upload_background(){
    ctx.drawImage(bg_img_add,0,0,1100,1100)
}
function upload_rover(){
    ctx.drawImage(rover_img_add,rover_x,rover_y,rover_width,rover_height)
}