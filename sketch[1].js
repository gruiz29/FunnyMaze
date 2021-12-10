let x, y, z, t, p, p2, o, k, k2, rx, c1, c2, c3, x1, y1, z1;
let Gametime, pause, Pvar, Complete, com1, Gametime1, o1, song;

function preload() {
    song = loadSound("31214.mp3"); //The Final Hour by Dimrain47
}

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  colorMode(HSB);
  song.loop();
  song.setVolume(0.5);
  c1 = 120; c2 = 1; c3 = 9;
  x = (width / 2) - 185;
  y = (height / 2) - 185;  //x = 310; y = 395; //switchstart
  z = 1; z1 = 1;
  t = 0;
  p = 2;
  k = 0; //switch
  rx = 0;
  Gametime = 0; o = 0; pause = 0; Pvar = 22; Complete = 0;
  com1 = 0; Gametime1 = 0; o1 = 0;
}

function draw() {
  //BackGround
  background(c1, 83, 90);
  stroke('black'); 
  for (let i = 0; i <= 20; i++) {
  for (let j = 0; j <= 20; j++){
     fill('black');
     rect(i * 20, j * 20, 18, 18);
  }} if (Complete < 2) {
  if (pause == 0) {if (x > 49) {
  if (frameCount % 60 == 0) {
    Gametime++;
  }}}} if (Complete > 1) {if (pause == 0) {if (x1 > 49) {
  if (frameCount % 60 == 0) {
    Gametime++; Gametime1++}}}}
  if (pause == 0) {
  if (c2 % 2 == 0) {
  if (frameCount % 1 == 0) {
    c1 = c1 + 6; if (c1 == 360) {c1 = 0}}
  } else {c2 = 1}
  } if (Complete > 2) {song.stop();}
//startpoint
  fill('#8BFFFF');
  rect(40, 18, 10, 40);
//Instruct
  push();
  stroke('white');
  strokeWeight(1);
  fill('#3A3A3A'); push(); if (keyIsDown(65)) {fill('green')}
  rect(290, 58, 22, 22); pop(); //a
  push(); if (keyIsDown(83)) {fill('green')}
  rect(313, 58, 22, 22); pop(); //s
  push(); if (keyIsDown(68)) {fill('green')}
  rect(336, 58, 22, 22); pop(); //d
  push(); if (keyIsDown(87)) {fill('green')}
  rect(313, 35, 24, 22); pop(); //w 
  push(); if (keyIsDown(188)) {fill('green')}
  rect(299, 108, 22, 22); pop(); //<
  push(); if (keyIsDown(190)) {fill('green')}
  rect(326, 108, 22, 22); pop(); //>
  push(); if (keyIsDown(191)) {fill('green')}
  rect(353, 108, 22, 22); pop(); //?
  push(); if (keyIsDown(80)) {fill('green')}
  rect(230, 35, 24, 22); pop(); //p
  push(); if (keyIsDown(86)) {fill('green')}
  rect(216, 83, 24, 22); pop(); //v
  push(); if (keyIsDown(66)) {fill('green')}
  rect(244, 83, 24, 22); pop(); //b
  rect(313, 12, 55, 16); //move
  rect(325, 83, 42, 16); //speed
  rect(230, 60, 50, 16); //BGColor
  rect(60, 170, 80, 121); //Info
  if (Complete < 2) {
  if (o == 0 && Gametime < 1) { //Welcome
  push(); rect(315, 180, 120, 80); noStroke(); textSize(11); fill('white'); text("Welcome to Level 1!", 266, 153); textSize(9); textAlign(CENTER); text("To clear the level, you must activate the pink switch, and cross the finish line that appears. If you touch a wall, you restart! Good Luck!", 316, 194, 115, 70); pop()}}
  textSize(20);
  fill('white');
  text('A', 284, 65);
  text('S', 306, 65);
  text('D', 329, 65);
  text('W', 304, 43);
  text('<', 293, 115);
  text('>', 320, 115);
  text('/', 350, 115);
  text('P', 223, 43);
  text('V', 209, 90);
  text('B', 238, 90);
  textSize(10);
  noStroke();
  text('Movement', 290, 15);
  //text('Pause', 215, 15); //Used later
  text('BGColor', 211, 63);
  text('Speed', 310, 86); 
  //Info
  textSize(15); text('Mistakes:', 25, 175);
  text('Time:', 25, 127);
  textSize(20); //timer
  if (o < 10) {
  if (Gametime < 10) {text(o, 26, 150);
    text(":0" + Gametime, 37, 150);}
  if (Gametime >= 10) {text(o, 26, 150);
    text(":" + Gametime, 37, 150);}
  if (Gametime == 60) {Gametime = 0; o++; text(o, 26, 150); 
    text(":00", 37, 150);} }
  if (o >= 10) {
  if (Gametime < 10) {text(o, 26, 150);
    text(":0" + Gametime, 48, 150);}
  if (Gametime >= 10) {text(o, 26, 150);
    text(":" + Gametime, 48, 150);}
  if (Gametime == 60) {Gametime = 0; o++; text(o, 26, 150); 
    text(":00", 48, 150);}
  } if (o == 59 && Gametime > 58) {o = 0; Gametime = 0;}
  text(t, 26, 200); textSize(13); z = round(z, 2); z1 = round(z1, 2); if (Complete < 2) {text("Speed: "+z, 26, 220)} if (Complete > 1) {text("Speed: "+z1, 26, 220)} //speed
  pop();
  
  if (Complete < 2) {
  
//Switch
  push(); fill('#F88FFB'); strokeWeight(0); if (x > 300) {if (y > 388) {
  translate(0, 50); k++;
  }} if (Complete < 2) {if (k > 99) {k = 2}}
  rect(310, 395, 8, 8); pop();
//map  
  stroke('white');
//jumppads
  fill('yellow');
  ellipse(165, 3, 8, 3);
  rect(165, 1, 11, 4);
  ellipse(218, 300, 3, 8);
  rect(220, 300, 4, 11);
//obstacles(Horiz&Vert)
  fill('#80FF7C');
  rect(70, 40, 159, 5); //Hob1
  rect(147, 110, 5, 135); //Vob1
  rect(177, 75, 5, 150); //Vob2
  rect(200, 147, 39, 6); //Hob2
  rect(161, 180, 33, 5); //Hob3
  rect(180, 233, 5, 111); //Vob3
  rect(223, 226, 5, 165); //Vob4
  fill('blue');
  ellipse(211, 160, 14, 15); //annoying_circles
  ellipse(192, 202, 14, 15); 
  ellipse(211, 244, 14, 15);
//more_obstacles
  fill('#80FF7C');
  rect(138, 292, 89, 5); //Hob4
  rect(167, 312, 117, 5); //Hob5
  rect(90, 309, 5, 40); //Vob5
  rect(178, 333, 181, 5); //Hob6
  rect(276, 312, 103, 5); //Hob7
  rect(272, 370, 5, 79); //Vob6
  rect(325, 360, 5, 100); //Vob7
  fill('blue');
  ellipse(286, 340, 17, 15); //annoying_circles2
  ellipse(311, 370, 17, 15); 
  ellipse(286, 400, 17, 15);
  
  }
  if (Complete < 2) { 
  //player
  stroke('#FF4F4F');
  fill('#FF2727');
  rect(x, y, 10, 10);}
  
  //controls
    //pause
  push(); stroke('white'); fill('#3A3A3A'); rect(230, 12, 45, 16); pop();
  if (keyIsDown(80)) {Pvar--;} if (pause == 1) {if (keyIsDown(80) === false) {Pvar = 10}} if (Pvar > -2 && Pvar < 11) {pause = 1} else {pause = 0} if (Pvar == -3) {Pvar = 22} if (pause == 0) {if (keyIsDown(80) === false) {Pvar = 22} push(); rectMode(CORNER); noStroke(); fill('green'); if (Pvar < 22) {rect(208.5, 5, rx, 14); rx = 11;} if (Pvar > 15 && Pvar < 19) {rx = 22} if (Pvar > 12 && Pvar < 16) {rx = 33} if (Pvar < 13 && Pvar > 10) {rx = 43} pop();} 
  push(); noStroke(); fill('white'); textSize(10); text('Pause', 216, 15); pop();
    //movement
  if (pause == 0) {
  if (keyIsDown(87)) { //w
    y = y - z;
  } else if (keyIsDown(83)) { //s
    y = y + z;
  } else if (keyIsDown(65)) { //a
    x = x - z;
  } else if (keyIsDown(68)) { //d
    x = x + z;
  }
    //BGColorToggle
  if (keyIsDown(66)) {c1 += 6; if (c1 == 360) {c1 = 0}} //b
  if (keyIsDown(86)) {c1 -= 6; if (c1 == 0) {c1 = 360}} //v
    //speed (speedruns idk)
  if (Complete < 2) {
  if (keyIsDown(190)) {
    z += 5/100; if (z > 2.5) {z = 2.5}
  } else if (keyIsDown(188)) {
    z -= 5/100; if (z < 0.5) {z = 0.5}     
  } else if (keyIsDown(191)) {
    z = 1;
  }}
  if (Complete > 1) {if (keyIsDown(190)) {
    z1 += 5/100; if (z1 > 2.5) {z1 = 2.5}
  } else if (keyIsDown(188)) {
    z1 -= 5/100; if (z1 < 0.5) {z1 = 0.5}     
  } else if (keyIsDown(191)) {
    z1 = 1;
  }}}
  //hitboxes (or collision)
    //Sp_ob_WorldBorder
  if (Complete == 0) {
  if (k == 0) {
  if (x >= 48) {p = 50;} else if (x <= 47) {p = 2;}
  if (x < p) {
    x += 3;
  }} if (k > 0 && k < 100) {p = 2}
  if (y < 2) {
    y += 3;
  }
    //Sp_obs_jumppad1
  if (x < 171 && x > 157) {
  if (y < 8) {
    y += 64;
  }}
    //jumppad2
  if (y > 294 && y < 310) {
  if (x > 213 && x < 222) {
    x -= 64;
  }}
    //Hob1-Vob1
  if (x < 155) {
  if (y > 34 && y < 280) { 
      x = (width / 2) - 185;
      y = (height / 2) - 185; t++; k = 0; c1 = 120; c2 = 1; c3 = 9; Complete = 0;
   }}
    //Vob2-Hob2
  if (y < 154) {
  if (x > 170) {
    x = (width / 2) - 185;
    y = (height / 2) - 185; t++; k = 0; c1 = 120; c2 = 1; c3 = 9; Complete = 0;
  }}
    //Hob3-Vob3-Hob4
  if (x > 153 && x < 187) {
  if (y > 172 && y < 300) {
    x = (width / 2) - 185;
    y = (height / 2) - 185; t++; k = 0; c1 = 120; c2 = 1; c3 = 9; Complete = 0;
  }}
    //Vob4
  if (y > 154 && y < 310) {
  if (x > 216) {
    x = (width / 2) - 185;
    y = (height / 2) - 185; t++; k = 0; c1 = 120; c2 = 1; c3 = 9; Complete = 0;
  }}
  //annoying_circles
  if (y > 150 && y < 170) {
  if (x > 201) {
    x = (width / 2) - 185;
    y = (height / 2) - 185; t++; k = 0; c1 = 120; c2 = 1; c3 = 9; Complete = 0;
  }}
  if (y > 192 && y < 212) {
  if (x < 203) {
    x = (width / 2) - 185;
    y = (height / 2) - 185; t++; k = 0; c1 = 120; c2 = 1; c3 = 9; Complete = 0;
  }}
  if (y > 234 && y < 254) {
  if (x > 201) {
    x = (width / 2) - 185;
    y = (height / 2) - 185; t++; k = 0; c1 = 120; c2 = 1; c3 = 9; Complete = 0;
  }}
    //Hob4
  if (x < 187) {
  if (y > 290 && y < 300) {
    x = (width / 2) - 185;
    y = (height / 2) - 185; t++; k = 0; c1 = 120; c2 = 1; c3 = 9; Complete = 0;
  }}
    //Hob5
  if (x > 105 && x < 225) {
  if (y > 304 && y < 320) {
    x = (width / 2) - 185;
    y = (height / 2) - 185; t++; k = 0; c1 = 120; c2 = 1; c3 = 9; Complete = 0;
  }}
    //Vob5
  if (y > 300) {
  if (x < 98) {
    x = (width / 2) - 185;
    y = (height / 2) - 185; t++; k = 0; c1 = 120; c2 = 1; c3 = 9; Complete = 0;
  }}
    //Hob6
  if (x > 90 && x < 274) {
  if (y > 325) {
    x = (width / 2) - 185;
    y = (height / 2) - 185; t++; k = 0; c1 = 120; c2 = 1; c3 = 9; Complete = 0;
  }}
    //Hob7
  if (x > 225 && x < 370) {
  if (y < 318) {
    x = (width / 2) - 185;
    y = (height / 2) - 185; t++; k = 0; c1 = 120; c2 = 1; c3 = 9; Complete = 0;
  }}
    //Vob6
  if (y > 328) {
  if (x < 280) {
    x = (width / 2) - 185;
    y = (height / 2) - 185; t++; k = 0; c1 = 120; c2 = 1; c3 = 9; Complete = 0;
  }}
    //Vob7
  if (x > 317) {
    x = (width / 2) - 185;
    y = (height / 2) - 185; t++; k = 0; c1 = 120; c2 = 1; c3 = 9; Complete = 0;
  }
  //annoying_circles2
  if (y > 329 && y < 351) {
  if (x < 299) {
    x = (width / 2) - 185;
    y = (height / 2) - 185; t++; k = 0; c1 = 120; c2 = 1; c3 = 9; Complete = 0;
  }}
  if (y > 359 && y < 381) {
  if (x > 297) {
    x = (width / 2) - 185;
    y = (height / 2) - 185; t++; k = 0; c1 = 120; c2 = 1; c3 = 9; Complete = 0;
  }}
  if (y > 389 && y < 411) {
  if (x < 299) {
    x = (width / 2) - 185;
    y = (height / 2) - 185; t++; k = 0; c1 = 120; c2 = 1; c3 = 9; Complete = 0;
  }}
  //Sp_ob_WorldBorderEnd
  if (y > 400) {
    y -= 3;  
  } }
  //Switch on
    if (k > 0 && k < 100) {
    if (c3 > 8 && c3 <= 16) {c2 = 2} push(); stroke('white'); fill('#3A3A3A'); rect(60, 260, 80, 40); 
    noStroke(); fill('white'); textSize(10); text('Switch: On', 35, 255); text('(return to start)', 27, 270);
    if (keyIsDown(78)) {c3--; if (c3 == 0) {c3 = 16} if (c3 > 0 && c3 <= 8) {c2 = 1}} //n
  push(); stroke('white'); fill('#3A3A3A'); if (keyIsDown(78)) {fill('green')}
  rect(231, 108, 24, 22); pop(); push(); fill('white'); stroke('white'); textSize(20); text('N', 224, 115); pop(); //n
      for (let i = 0; i < 8; i++) 
      {if (i % 2 === 0) {fill('white'); rect(38, (5 * i)-1, 5, 5); fill('black'); rect(43, (5 * i)-1, 5, 5);} 
      else {fill('black'); rect(38, (5 * i)-1, 5, 5); fill('white'); rect(43, (5 * i)-1, 5, 5);}} 
  //Level1Cleared
      if (x < 44) {x = 5; z = 0; Complete = 1; background('#323232'); strokeWeight(3); stroke('white'); fill('#282828'); rect(width/2, height/2, 300, 300); fill('white'); noStroke(); textSize(25); text("Good Job!", (width/2)-60, (height/2)-100); textSize(20); text("Level 1 Cleared!", (width/2)-135, (height/2)-40); text("Time:", (width/2)-135, (height/2)-10); text("Mistakes:", (width/2)-135, (height/2)+50); text(t, (width/2)-135, (height/2)+77); text("Press '2' for level 2", (width/2)-80, (height/2)+139); if (t == 0) {textSize(25); text("Flawless Run!", (width/2)-75, (height/2)+115);}   

                       //Level 2
  if (Complete == 1) {com1++} if (com1 > 4) {com1 = 3}//2
  if (com1 == 3) {if (keyIsDown(50)) {Complete++}} if (Complete == 2) {Complete = 2}   //Level 2
    if (Complete > 1 && Complete < 4) {
  background(c1, 83, 90); for (let i = 0; i <= 20; i++) {
  for (let j = 0; j <= 20; j++) {
     fill('black'); stroke('black');
     rect(i * 20, j * 20, 18, 18)}} 
  x1 = (width / 2)-185; x = 300; y = 300; 
  y1 = (height / 2)-185; z1 = 1; z = 0; p2 = 2; k = 100; k2 = 100; pause = 0; Pvar = 22; c1 = 120; c2 = 2; c3 = 9;}

  //Postendrestart
  textSize(15); fill('white'); text("Press 'P' and 'R' to restart", (width/2)-85, (height/2)+190); push(); if (keyIsDown(80)) {pause = 1; fill('green')}
  text("P", (width/2)-39.6, (height/2)+190); pop(); push(); if (keyIsDown(82)) {fill('green')}
  text("R", (width/2)+9.56, (height/2)+190); pop();
  //Postendtimer
  if (o < 10) {textSize(20);
  if (Gametime < 10) {text(o, (width/2)-135, (height/2)+20);
    text(":0" + Gametime, (width/2)-125, (height/2)+20);}
  if (Gametime >= 10) {text(o, (width/2)-135, (height/2)+20);
    text(":" + Gametime, (width/2)-125, (height/2)+20);}
  if (Gametime == 60) {Gametime = 0; o++; text(o, (width/2)-135, (height/2)+20); 
    text(":00", (width/2)-125, (height/2)+20);} }
  if (o >= 10) {
  if (Gametime < 10) {text(o, (width/2)-135, (height/2)+20);
    text(":0" + Gametime, (width/2)-114, (height/2)+20);}
  if (Gametime >= 10) {text(o, (width/2)-135, (height/2)+20);
    text(":" + Gametime, (width/2)-114, (height/2)+20);}
  if (Gametime == 60) {Gametime = 0; o++; text(o, (width/2)-135, (height/2)+20); 
    text(":00", (width/2)-114, (height/2)+20);}
  } if (o == 59 && Gametime > 58) {o = 0; Gametime = 0;} pop();
}}                
  if (Complete > 1 && Complete < 4) {fill('#80FF7C'); stroke('white'); push(); rectMode(CORNER);
  rect(0, 38, 105, 5); //Hob1
  rect(105, 38, 5, 112); //Vob1
  rect(130, 0, 5, 125); //Vob2
  rect(130, 125, 265, 5); //Hob2
  rect(105, 150, 97, 5); //Hob3
  rect(202, 150, 5, 20); //Vob3
  rect(225, 125, 5, 110); //Vob4
  rect(105, 165, 97, 5); //Hob4
  rect(130, 190, 100, 5); //Hob5 
  rect(130, 195, 5, 175); //Vob5
  rect(105, 170, 5, 220); //Vob6
  rect(135, 365, 235, 5); //Hob6
  rect(105, 390, 285, 5); //Hob7
  rect(365, 150, 5, 215); //Vob7
  rect(390, 125, 5, 270); //Vob8
  rect(250, 145, 120, 5); //Hob8
  rect(250, 145, 5, 20); //Vob9
  rect(250, 160, 100, 5); //Hob9
  rect(225, 182, 100, 5); //Hob10
  rect(320, 182, 5, 148); //Vob10
  rect(350, 160, 5, 190); //Vob11
  rect(180, 330, 145, 5); //Hob11
  rect(148, 350, 207, 5); //Hob12
  rect(175, 215, 5, 120); //Vob12
  rect(148, 195, 5, 155); //Vob13
  rect(175, 215, 27, 5); //Hob13
  rect(200, 235, 75, 5); //Hob14
  rect(200, 235, 5, 80); //Vob14
  rect(200, 310, 100, 5); //Hob15
  rect(295, 205, 5, 110); //Vob15
  rect(250, 205, 45, 5); //Hob16
  rect(270, 235, 5, 60); //Vob16
  rect(225, 290, 45, 5); //Hob17
  rect(225, 255, 5, 40); //Vob17
  rect(225, 255, 28, 5); //Hob18
  rect(248, 255, 5, 21); //Vob18
  pop();
                     
  if (Complete > 1) {
  if (o1 == 0 && Gametime1 < 1) { //Welcome
  push(); fill('#3A3A3A'); rect(315, 180, 120, 80); noStroke(); textSize(11); fill('white'); text("Welcome to Level 2!", 266, 153); textSize(9); textAlign(CENTER); text("To clear the level, you must get to the center of the labyrinth. If you touch a wall, you restart at this level! Good Luck!", 316, 194, 115, 70); pop()}}
    
  stroke('#FF4F4F');
  fill('#FF2727');
  rect(x1, y1, 10, 10);
  if (pause == 0) {
  if (keyIsDown(87)) { //w
    y1 = y1 - z1;
  } else if (keyIsDown(83)) { //s
    y1 = y1 + z1;
  } else if (keyIsDown(65)) { //a
    x1 = x1 - z1;
  } else if (keyIsDown(68)) { //d
    x1 = x1 + z1;
  }}
  push(); fill('#F88FFB'); strokeWeight(0); if (x1 > 234 && x1 < 249) {if (y1 > 264 && y1 < 276) {
  translate(0, 300); Complete = 4;
  }}
  rect(239, 268, 8, 8); pop();
  if (k2 == 100) {
  if (x1 >= 48) {p2 = 50;} else if (x1 <= 47) {p2 = 2;}
  if (x1 < p2) {
    x1 += 3;
  }} if (k2 > 100) {p2 = 2}
  if (y1 < 2) {
    y1 += 3;
  }
  if (x1 > 385.7) {
      x1 = (width / 2) - 185; y1 = (height/2) - 185; t++; c1 = 120; c2 = 2; c3 = 9; Complete = 2;
      }
  if (y1 > 385.7) {
     x1 = (width / 2) - 185; y1 = (height/2) - 185; t++; c1 = 120; c2 = 2; c3 = 9; Complete = 2;
  }
  if (x1 < 115) {if (y1 > 34) {
      x1 = (width / 2) - 185; y1 = (height/2) - 185; t++; c1 = 120; c2 = 2; c3 = 9; Complete = 2;
    }}
  if (y1 < 134.5) {if (x1 > 125) {
      x1 = (width / 2) - 185; y1 = (height/2) - 185; t++; c1 = 120; c2 = 2; c3 = 9; Complete = 2;
    }}
  if (y1 > 145.5 && y1 < 175.7) {if (x1 < 210.4) {
      x1 = (width / 2) - 185; y1 = (height/2) - 185; t++; c1 = 120; c2 = 2; c3 = 9; Complete = 2;
  }}
  if (x1 > 245 && x1 < 374) {if (y1 > 140 && y1 < 169) {
      x1 = (width / 2) - 185; y1 = (height/2) - 185; t++; c1 = 120; c2 = 2; c3 = 9; Complete = 2;
  }}
  if (y1 > 140 && y1 < 374) {if (x1 > 346 && x1 < 374) {
    x1 = (width / 2) - 185; y1 = (height/2) - 185; t++; c1 = 120; c2 = 2; c3 = 9; Complete = 2;
  }}
  if (x1 > 221 && x1 < 234) {if (y1 < 239) {
    x1 = (width / 2) - 185; y1 = (height/2) - 185; t++; c1 = 120; c2 = 2; c3 = 9; Complete = 2;
  }}
  if (y1 > 345.5 && y1 < 374) {if (x1 > 125 && x1 < 374) {
    x1 = (width / 2) - 185; y1 = (height/2) - 185; t++; c1 = 120; c2 = 2; c3 = 9; Complete = 2;
  }}
  if (x1 > 125 && x1 < 157) {if (y1 > 186 && y1 < 374) {
    x1 = (width / 2) - 185; y1 = (height/2) - 185; t++; c1 = 120; c2 = 2; c3 = 9; Complete = 2;
  }}
  if (x1 > 171 && x1 < 206) {if (y1 > 211 && y1 < 224) {
    x1 = (width / 2) - 185; y1 = (height/2) - 185; t++; c1 = 120; c2 = 2; c3 = 9; Complete = 2;   
  }}
  if (x1 > 170 && x1 < 185) {if (y1 > 211 && y1 < 338) {
    x1 = (width / 2) - 185; y1 = (height/2) - 185; t++; c1 = 120; c2 = 2; c3 = 9; Complete = 2;
  }}
  if (y1 < 339.5 && y1 > 325.5) {if (x1 > 170 && x1 < 329) {
    x1 = (width / 2) - 185; y1 = (height/2) - 185; t++; c1 = 120; c2 = 2; c3 = 9; Complete = 2;
  }}
  if (y1 < 339.5 && y1 > 178) {if (x1 > 316 && x1 < 329) {
    x1 = (width / 2) - 185; y1 = (height/2) - 185; t++; c1 = 120; c2 = 2; c3 = 9; Complete = 2;
  }}
  if (y1 > 177.5 && y1 < 191) {if (x1 > 234 && x1 < 316){
    x1 = (width / 2) - 185; y1 = (height/2) - 185; t++; c1 = 120; c2 = 2; c3 = 9; Complete = 2;
  }}
  if (x1 > 126 && x1 < 228) {if (y1 > 186 && y1 < 194){
    x1 = (width / 2) - 185; y1 = (height/2) - 185; t++; c1 = 120; c2 = 2; c3 = 9; Complete = 2;
  }}
  if (x1 > 196 && x1 < 279) {if (y1 > 231 && y1 < 244) {
    x1 = (width / 2) - 185; y1 = (height/2) - 185; t++; c1 = 120; c2 = 2; c3 = 9; Complete = 2;
  }}
  if (x1 > 196 && x1 < 209) {if (y1 > 231 && y1 < 319) {
   x1 = (width / 2) - 185; y1 = (height/2) - 185; t++; c1 = 120; c2 = 2; c3 = 9; Complete = 2;                              
  }}
  if (x1 > 196 && x1 < 304) {if (y1 > 306 && y1 < 319) {
    x1 = (width / 2) - 185; y1 = (height/2) - 185; t++; c1 = 120; c2 = 2; c3 = 9; Complete = 2;
  }}
  if (x1 > 291 && x1 < 304) {if (y1 > 201 && y1 < 319) {
    x1 = (width / 2) - 185; y1 = (height/2) - 185; t++; c1 = 120; c2 = 2; c3 = 9; Complete = 2;
  }}
  if (y1 > 201 && y1 < 209) {if (x1 > 246 && x1 < 304) {
    x1 = (width / 2) - 185; y1 = (height/2) - 185; t++; c1 = 120; c2 = 2; c3 = 9; Complete = 2;                             
  }}
  }
  if (Complete == 4) {push(); x1 = -10; z1 = 0; background('#323232'); strokeWeight(3); stroke('white'); fill('#282828'); rect(width/2, height/2, 300, 300); fill('white'); noStroke(); textSize(25); text("Stellar!", (width/2)-40, (height/2)-100); textSize(20); text("You beat the game!", (width/2)-135, (height/2)-40); text("Time:", (width/2)-135, (height/2)-10); text("Mistakes:", (width/2)-135, (height/2)+50); text(t, (width/2)-135, (height/2)+77); if (t == 0) {textSize(25); text("Flawless Run!", (width/2)-75, (height/2)+115);} pop();
  push(); if (o < 10) {textSize(20); fill('white'); stroke('white');
  if (Gametime < 10) {text(o, (width/2)-135, (height/2)+20);
    text(":0" + Gametime, (width/2)-125, (height/2)+20);}
  if (Gametime >= 10) {text(o, (width/2)-135, (height/2)+20);
    text(":" + Gametime, (width/2)-125, (height/2)+20);}
  if (Gametime == 60) {Gametime = 0; o++; text(o, (width/2)-135, (height/2)+20); 
    text(":00", (width/2)-125, (height/2)+20);} }
  if (o >= 10) {
  if (Gametime < 10) {text(o, (width/2)-135, (height/2)+20);
    text(":0" + Gametime, (width/2)-114, (height/2)+20);}
  if (Gametime >= 10) {text(o, (width/2)-135, (height/2)+20);
    text(":" + Gametime, (width/2)-114, (height/2)+20);}
  if (Gametime == 60) {Gametime = 0; o++; text(o, (width/2)-135, (height/2)+20); 
    text(":00", (width/2)-114, (height/2)+20);}
  } if (o == 59 && Gametime > 58) {o = 0; Gametime = 0;} pop();
textSize(15); noStroke(); fill('white'); text("Press 'P' and 'R' to restart", (width/2)-85, (height/2)+190); push(); if (keyIsDown(80)) {pause = 1; fill('green')}
  text("P", (width/2)-39.6, (height/2)+190); pop(); push(); if (keyIsDown(82)) {fill('green')}
  text("R", (width/2)+9.56, (height/2)+190); pop();
}             
  
    //Pause screen
  if (pause == 1) {if (Complete == 0) {push(); stroke('white'); fill('#282828'); rect(width/2, height/2, 250, 250); textSize(20); fill('white'); text("Game Paused", (width/2)-60, (height/2)-95); textSize(17); fill('#C0C0C0'); noStroke(); text("Hold 'P' to continue", (width/2)-70, (height/2)+70); text("Or Press 'R' to restart", (width/2)-80, (height/2)+105); pop();} 
                   
                   if (Complete == 2) {push(); stroke('white'); fill('#282828'); rect(width/2, height/2, 250, 250); textSize(20); fill('white'); text("Game Paused", (width/2)-60, (height/2)-95); textSize(17); fill('#C0C0C0'); noStroke(); text("Hold 'P' to continue", (width/2)-70, (height/2)+70); textSize(15); text("Or Press 'R' to restart from Level 1", (width/2)-114, (height/2)+105); pop();}
                   
  //Restart 
  if (keyIsDown(82)) {x = (width / 2) - 185;
  y = (height / 2) - 185; z = 1; t = 0; p = 2; k = 0;
  Gametime = 0; o = 0; pause = 0; Pvar = 22; c1 = 120; c2 = 1; c3 = 9; Complete = 0}}

  //hitbox&testing
  stroke('white');
  //line(250, 0, 250, 400); //x
  //line(0, 205, 400, 205); //y
  //line(0, 381, 400, 381); //y2
}