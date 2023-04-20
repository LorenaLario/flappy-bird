class Game {
  constructor() {
    // Agregar las propiedades de Game => todos los elementos que existen en el juego

    // el fondo:
    this.background = new Image();
    this.background.src = "images/bg.png";

    // pollito:
    this.pollitoObj = new Pollito();
    console.log(this.pollitoObj);

    //tubos:
    //probar haciendo un solo tubo
    //this.tubo = new Tubo() //pueba
    //como controlamos muchos elementos de tubos
    //como controlamos cuando se agregan más tubos al juego
    this.tubosArr = [];

    this.isGameOn = true;
  }

  //aparecen tubos en diferentes distancias
  tubosAparecen = () => {
    //metodo que determina cuando deberia aparecer un tubo
    if (this.tubosArr.length === 0 || this.tubosArr[this.tubosArr.length - 1].x < 300) {
        //cuando empieza el juego (el array esta vacio) 
        // o cuando el ultimo tubo haya pasado la mitad del camvas

        let randomPositionY = Math.random() * -150;//quiero un valor entre o y -200
      let nuevoTuboArriba = new Tubo(randomPositionY, true);
      this.tubosArr.push(nuevoTuboArriba); //añade un tubo

      //con cada tubo venga otro mas abajo
      let nuevoTuboAbajo = new Tubo(randomPositionY +350, false)
      this.tubosArr.push(nuevoTuboAbajo)
    }
  };


  //colisiones del pollito contra los tubos

  checkCollisionPollitoTubo = () => {

    //this.pollito
    //this.tubosArr
    this.tubosArr.forEach((eachTubos) => {
        // eachTubo vs this.pollito
        if (
            eachTubos.x < this.pollitoObj.x + this.pollitoObj.w &&
            eachTubos.x + eachTubos.w > this.pollitoObj.x &&
            eachTubos.y < this.pollitoObj.y + this.pollitoObj.h &&
            eachTubos.h + eachTubos.y > this.pollitoObj.y
        ) {
            //collision detected!
            console.log("pollito ha colisionado")
            this.gameOver()
        }
    })
    
  }

  //se termina el juego
  gameOver = () => {
    // 1- detener el juego //! Importante en mi juego
    this.isGameOn = false;


    // 2- ocultar el canvas
    canvas.style.display = "none"

    // 3- mostrar la pantalla final
    gameOverScreenDOM.style.display = "flex"
  }

  drawBackground = () => {
    ctx.drawImage(this.background, 0, 0, canvas.width, canvas.height);
  };

  // Agregar los metodos de Game => todas las acciones que se realizan en el juego

  gameLoop = () => {
    console.log("ejecutando recursion del juego");

    // 1- Limpieza del canvas

    // 2- Acciones y movimientos de los elementos
    this.pollitoObj.gravity();
    this.checkCollisionPollitoTubo()
    // this.tubo.move() //test //esto solo seria uno
    // mover todos los tubos que hay en el array 
    this.tubosArr.forEach((eachTubos) => {
        eachTubos.move()
    })
    this.tubosAparecen()

    // 3- Dibujado de los elementos
    this.drawBackground();
    this.pollitoObj.draw();
    // this.tubo.draw() //test //esto solo seria uno
    // dibujar todos los tubos que hay en el array 
    this.tubosArr.forEach((eachTubos) => {
        eachTubos.draw()
    })

    // 4- Recursiom (requestAnimationFrame)
    if (this.isGameOn === true) {
        requestAnimationFrame(this.gameLoop); // 60ps hace gameLoop()
    }
    
  };
}
