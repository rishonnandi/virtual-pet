var dog,happyDog,database,foodS,foodStock;

function preload()
{
  dogimg=loadImage("images/Dog.png");
  dogimg1=loadImage("images/dogimg1.png");
}


function setup() {
	createCanvas(500, 500);
  dog=createSprite(250,300,150,150); 
  dog.addImage("Dog.png");
  database=firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);
if(KeyDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(dogimg1);


}




  drawSprites();
  textSize(50);
  fill("red");
  stroke();

}
function readStock(data){
foodS=data.val();


}
function writeStock(x){
if(x<=0){
  x=0;
}else{
  x=x-1;
}



database.ref('/').update({
Food:x

})


}
