var form;
var name,email;
var ppr = "paper1";
var paper1,paper2,paper3,paper4;
var image1
var index = 0;
var user;

function setup() {
  createCanvas(displayWidth-30,displayHeight-20);
  form = new Form();
  user = new User();
  //ppr = new Paper(paper1);
}

function preload(){
  image1 = loadImage("Thanksgivingimage.png");
}

function draw() {
  background(255,255,255);  
  form.display();
  image(image1,displayWidth-50,0,100,100);
  select(ppr);
  drawSprites();
}

function select(ppr){
  if(ppr === "paper1"){
      text("abcd",100,100);
  }
}

function getSelectedCheckboxValues(paper){
  constCheckboxes = document.querySelectorAll('input[name="${name}"]:checked');
  let Values=[];
  checkboxes.forEach((checkbox)=>{
      Values.push(checkbox.value);
  })
  return Values;
}
//const btn=document.querySelector('#btn');
//btn.addEventListener('click',(event)=>{
//  alert(getSelectedCheckboxValues('paper'))
//});