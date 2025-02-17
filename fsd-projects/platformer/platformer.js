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

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
      createPlatform(200, 700, 100, 40, "brown")
      createPlatform(300, 650, 100, 90, "brown")
      createPlatform(400, 600, 100, 50, "green")
      createPlatform(840, 570, 110, 30)
      createPlatform(940, 380, 10, 190)
      createPlatform(400, 250, 50, 250, "green")
      createPlatform(400, 650, 650, 90)
      createPlatform(500, 600, 500, 50)
      createPlatform(1050, 700, 50, 40)
      createPlatform(450, 250, 750, 30)
      createPlatform(450, 220, 750, 30, "green")
      createPlatform(550, 370, 400, 15)
      createPlatform(450, 470, 350, 30)
      createPlatform(1170, 280, 30, 460)
      createPlatform(1100, 280, 70, 300)
      createPlatform(1025, 280, 75, 230)



    // TODO 3 - Create Collectables
      createCollectable("chestplate", 880, 510, 0, 0)
      createCollectable("diamondsword", 1115, 685, 0, 0)
      createCollectable("helmet", 480, 545, 0, 0)
      createCollectable("boots", 880, 330, 0, 0)
      createCollectable("leggings", 480, 420, 0, 0)

    
    // TODO 4 - Create Cannons
      createCannon("right", 610, 4200)
      createCannon("right", 400, 3700)
      createCannon("top", 1040, 1500)
      createCannon("top", 560, 4200)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
