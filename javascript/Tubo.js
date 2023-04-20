class Tubo {
  constructor( positionY, isImgUp ) {
    // propiedades de cada tubo

    this.img = new Image();
    if (isImgUp === true) {
        this.img.src = "images/obstacle_top.png"; // es la de arriba o de abajo?
    } else {
        this.img.src = "images/obstacle_bottom.png"
    }
   

    this.x = canvas.width;
    this.y = positionY; //esto debería ser aleatorio(ahora lo es, antes era 0)
    this.w = 60;
    this.h = 230;
    this.speed = 1.5;
  }

  // metodos (acciones) de los tubos

  draw = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  //los tubos se mueven hacia el pollito
  move = () => {
    this.x -= this.speed;
  };
}


//esto de crear dos elementos, toda esta logica e suna logica para este juego.