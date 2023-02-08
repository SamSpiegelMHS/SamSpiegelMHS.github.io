$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)

    //Normal Platforms
    createPlatform(500, 600, 50, 20);
    createPlatform(500, 400, 50, 20);
    createPlatform(650, 350, 15, 20);
    createPlatform(875, 325, 5,5);
    createPlatform(1075, 250, 3,3);


//Secret Stairs
    createPlatform(335, 520, 1, 1)
    createPlatform(330, 515, 1, 1)
    createPlatform(325, 510, 1, 1)
    createPlatform(320, 505, 1, 1)
    createPlatform(315, 500, 1, 1)
    createPlatform(310, 495, 1, 1)
    createPlatform(305, 490, 1, 1)
    createPlatform(300, 485, 1, 1)
    createPlatform(295, 480, 1, 1)
    createPlatform(290, 475, 1, 1)
    createPlatform(285, 470, 1, 1)



// Cage Left Wall
    createPlatform(750, 700, 1, 1)
    createPlatform(750, 675, 1, 1)
    createPlatform(750, 650, 1, 1)
    createPlatform(750, 625, 1, 1)
    createPlatform(750, 600, 1, 1)
    createPlatform(750, 575, 1, 1)
    createPlatform(750, 550, 1, 1)




// Cage Right Wall
    createPlatform(1100, 700, 1, 1)
    createPlatform(1100, 675, 1, 1)
    createPlatform(1100, 650, 1, 1)
    createPlatform(1100, 625, 1, 1)
    createPlatform(1100, 600, 1, 1)
    createPlatform(1100, 575, 1, 1)
    createPlatform(1100, 550, 1, 1)



    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    
    createCollectable("steve", 1250, 700, .025)
    createCollectable("grace", 900, 650, 0)
    createCollectable("steve", 310, 440, 0)
    
    
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay)

    createCannon("left", 600, 5000);
    createCannon("top", 360, 3000);
    createCannon("bottom", 360, 3000);


    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
