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
      createPlatform(200, 700, 100, 10, "black")
      createPlatform(400, 600, 300, 20, "black")
      createPlatform(400, 500, 290, 10, "black")
      createPlatform(750, 550, 200, 10, "black")
      createPlatform(1050, 415, 300, 10, "black")
      createPlatform(1000, 450, 10, 100, "blue")
      createPlatform(400, 400, 100, 10)
      createPlatform(550, 300, 500, 10)



    // TODO 3 - Create Collectables
      createCollectable("chestplate", 880, 500, 0, 0)
      createCollectable("diamondsword", 1250, 360, 0, 0)
      createCollectable("helmet", 630, 545, 0, 0)
      createCollectable("boots", 900, 240, 0, 0)
      createCollectable("leggings", 435, 350, 0, 0)

    
    // TODO 4 - Create Cannons
      createCannon("right", 610, 3500)
      createCannon("right", 700, 4000)
      createCannon("right", 300, 2000)
      createCannon("top", 1020, 1500)
      createCannon("top", 450, 4000)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
