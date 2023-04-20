class Game {
  constructor() {
    // Agregar las propiedades de Game => todos los elementos que existen en el juego

    // el fondo:
    this.background = new Image();
    this.background.src = "images/bg.png";

    // pollito:
    this.pollitoObj = new Pollito();
    console.log(this.pollitoObj);

    //tubos
    //probar haciendo un solo tubo
    //this.tubo = new Tubo() //pueba
    //como controlamos muchos elementos de tubos
    //como controlamos cuando se agregan más tubos al juego
    this.tubosArr = [];
  }

  //aparecen tubos en diferentes distancias
  tubosAparecen = () => {
    //metodo que determina cuando deberia aparecer un tubo
    if (this.tubosArr.length === 0 || this.tubosArr[this.tubosArr.length - 1].x < 300) {
        //cuando empieza el juego (el array esta vacio) 
        // o cuando el ultimo tubo haya pasado la mitad del camvas
      let nuevoTubo = new Tubo();
      this.tubosArr.push(nuevoTubo); //añade un tubo
    }
  };

  drawBackground = () => {
    ctx.drawImage(this.background, 0, 0, canvas.width, canvas.height);
  };

  // Agregar los metodos de Game => todas las acciones que se realizan en el juego

  gameLoop = () => {
    console.log("ejecutando recursion del juego");

    // 1- Limpieza del canvas

    // 2- Acciones y movimientos de los elementos
    this.pollitoObj.gravity();
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
    requestAnimationFrame(this.gameLoop); // 60ps hace gameLoop()
  };
}
