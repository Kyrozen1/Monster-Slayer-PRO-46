var PLAY = 0;
var END = 1;
var WIN = 2
var gameState = PLAY;
var bowman, bowmanImg, cave, caveImg;
var slime, stone, bee; 
var boss, boss2, boss3, boss4, boss5, bossImg;
var bossGroup, bossGroup2, bossGroup3, bossGroup4, bossGroup5, princessGroup;
var happy, sad, princess, monster,monsterGroup;
var gameover, gameoverImg;
var arrow1, arrow1Img, goldenarrow, goldenImg;
var arrow2, arrow2Img, goldenarrow2, golden2Img;
var arrow1Group, arrow2Group;
var left;
var arrows = 50;
var score = 8;
var shot = 0;
var shot2 = 0;
var shot3 = 0;
var shot4 = 0;
var shot5 = 0;

function preload(){
  bowmanImg = loadImage("Image/bowman.png");
  caveImg = loadImage("Image/cave.jpg");
  bossImg = loadImage("Image/boss.png")
  slime = loadImage("Image/slime monster.png");
  stone = loadImage("Image/stone monster.png");
  bee = loadImage("Image/bee monster.png");
  sad = loadImage("Image/sad princess.png");
  happy = loadImage("Image/happy princess.png");
  goldenImg = loadImage("Image/goldenarrow1.png");
  golden2Img = loadImage("Image/GoldenArrow2.html");
  arrow1Img = loadImage("Image/arrow 1.png");
  arrow2Img = loadImage("Image/arrow2.png");
}

function setup(){
  createCanvas(1200, 600)  
  cave = createSprite(displayWidth/2, displayHeight/2-100, 1200, displayHeight);
  cave.addImage(caveImg);
  cave.scale = 0.9;
  cave.velocityX=-4;

  bowman = createSprite(200, 500, 30,30);
  bowman.addImage(bowmanImg);
  bowman.scale = 0.13;
  bowman.debug = true;
  bowman.setCollider("rectangle",-130,100,700,1200)

  gameover = createSprite(600, 280, 30, 30);
  gameover.visible = false;

  left = createSprite(-3, 300, 10, 600);
  left.visible = false;

  monsterGroup = new Group;
  arrow1Group = new Group;
  arrow2Group = new Group;
  bossGroup = new Group;
  bossGroup2 = new Group;
  bossGroup3 = new Group;
  bossGroup4 = new Group;
  bossGroup5 = new Group;
  princessGroup = new Group;
}

function draw(){
  if(gameState === PLAY){
  if(score < 10){
    spawnmonsters();
  }
  spawnarrows();

  if(cave.x<310){
    cave.x = cave.x = displayWidth/2+220
  }

  if(keyDown(UP_ARROW)){
    bowman.y -= 10 
  }
  if(keyDown(DOWN_ARROW)){
    bowman.y += 10 
  }
  if(keyDown(LEFT_ARROW)){
    bowman.x -= 10 
  }
  if(keyDown(RIGHT_ARROW)){
    bowman.x += 10 
  }

  if(arrow1Group.isTouching(bowman)){
    arrows++;
    arrow1Group.destroyEach();
  }

  if(arrows > 0 && keyDown("SPACE")){
    createarrow();
    arrows = arrows -1;
  }
  if(arrows < 0 || arrows === 0){
    arrows = 0;
  }

  if(arrow2Group.isTouching(monsterGroup)){
    monsterGroup.destroyEach();
    arrow2Group.destroyEach();
    score++;
  }

  if(monsterGroup.isTouching(bowman)){
    gameState = END;
  }

  if(score === 10){
    //spawnlayer1();
    //spawnlayer2();
    //spawnlayer3();
    spawnlayer4();
    spawnlayer5();
    spawnprincess();
    if(boss.velocityX = -5){
      score = 11
    }
    if(boss.x === 1200){
      boss.velocityX=0;
      boss2.velocityX=0;
    }
  }
  

  if(arrow2Group.isTouching(bossGroup)){
    shot++;
    arrow2Group.destroyEach();
  }
  if(shot===3){
    bossGroup.destroyEach();
    //boss2.x = 1000;
    //boss3.x = 995;
    //boss4.x = 990;
    //boss5.x = 985;
    gameState = PLAY;
  }

  if(arrow2Group.isTouching(bossGroup2)){
    shot2++;
    arrow2Group.destroyEach();
  }
  if(shot2===3){
  bossGroup2.destroyEach();
  gameState = PLAY;
  }
  if(arrow2Group.isTouching(bossGroup3)){
    shot3++;
    arrow2Group.destroyEach();
  }
  if(shot3===3){
    bossGroup3.destroyEach();
    gameState = PLAY;
  }
  if(arrow2Group.isTouching(bossGroup4)){
    shot4++;
    arrow2Group.destroyEach();
  }
  if(shot4===3){
    bossGroup4.destroyEach();
    gameState = PLAY;
  }
  if(arrow2Group.isTouching(bossGroup5)){
    shot5++;
    arrow2Group.destroyEach();
  }
  if(shot5===3){
    bossGroup5.destroyEach();
    gameState = WIN;
  }
  }else if(gameState === END){
    cave.velocityX=0;
    monsterGroup.destroyEach();
    arrow1Group.destroyEach();
    gameover.visible=true;
    bowman.visible = false;
    
  }

  bowman.collide(left)
  drawSprites();
}

function spawnmonsters(){
  if(frameCount%260===0){
    monster = createSprite(1200, 440, 40, 40);
    var rand = Math.round(random(1,3));
    switch(rand){
      case 1:monster.addImage(stone);
      monster.scale=0.3;
      break;
      case 2:monster.addImage(bee);
      monster.scale=0.5;
      break;
      case 3:monster.addImage(slime);
      monster.scale=0.6;
      break;
    }
    monster.velocityX = -5;
    monster.lifetime = 300;
    monster.debug=true;
    monster.setCollider("rectangle",0,0,300, 300)
    monsterGroup.add(monster);
  }
}

function spawnlayer1(){
  boss5 = createSprite(1180, 400, 10, 10);
  boss5.addImage(bossImg);
  boss5.scale = 0.5;
  boss5.velocityX = -5;
  boss5.debug = true;
  bossGroup.add(boss5);
}

function spawnlayer2(){
  boss4 = createSprite(1185, 400, 20, 20);
  boss4.addImage(bossImg);
  boss4.scale = 0.6;
  boss4.velocityX = -5;
  boss4.debug = true;
  bossGroup2.add(boss4);
}

function spawnlayer3(){
  boss3 = createSprite(1190, 400, 30, 30);
  boss3.addImage(bossImg);
  boss3.scale = 0.7;
  boss3.velocityX = -5;
  boss3.debug = true;
  bossGroup3.add(boss3);
}

function spawnlayer4(){
  boss2 = createSprite(1195, 400, 40, 40);
  boss2.addImage(bossImg);
  boss2.scale = 0.8;
  boss2.velocityX = -5;
  boss2.debug = true;
  bossGroup4.add(boss2);
}

function spawnlayer5(){
  boss = createSprite(1200, 400, 50, 50);
  boss.addImage(bossImg);
  boss.scale = 0.9;
  boss.velocityX = -5;
  boss.debug = true;
  bossGroup5.add(boss);
}

function spawnprincess(){
  princess = createSprite(1600, 500, 30, 30);
  princess.addImage(sad);
  princess.scale = 0.3;
  princess.velocityX = -5;
  princess.debug = true;
  princessGroup.add(princess)
}

function spawnarrows(){
  if(frameCount%50===0){
    arrow1 = createSprite(1200, 440, 20, 20);
    arrow1.y = Math.round(random(320, 520));
    arrow1.addImage(arrow1Img)
    arrow1.scale = 0.3;
    arrow1.velocityX = -6;
    arrow1.lifetime = 200;
    //arrow1.debug = true;
    arrow1Group.add(arrow1)
  }
}

function createarrow(){
  arrow2 = createSprite(300, 300, 20, 20);
  arrow2.x = bowman.x;
  arrow2.y = bowman.y;
  arrow2.addImage(arrow2Img);
  arrow2.scale = 0.2;
  arrow2.lifetime = 300;
  arrow2.velocityX=9;
  arrow2Group.add(arrow2);
  arrow2.debug = true;
  return arrow2;
}