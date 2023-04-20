class Pollito {

    constructor() {
      // propiedades del pollito  
      this.img = new Image();
      this.img.src = "images/flappy.png";

      this.x = 50; //posicion eje x
      this.y = canvas.height / 2; //posicion eje y

      this.w = 40;  //ancho del pollito
      this.h = 35;  //alto del pollito

      this.gravitySpeed = 1.3; //velocidad de la caida
      this.jumpSpeed = 43; //velocidad del salto

    }


    // metodos (acciones) del pollito

    // dibujar el pollito
    draw = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }


    // que el pollito caiga
    gravity = () => {
       this.y += this.gravitySpeed;

       //* que no pueda caer mas alla del piso
    }


    // que el pollito lo tengamos que hacer saltar
    jump = () => {
        this.y -= this.jumpSpeed;

       //* que no pueda saltar mas alla del techo
       //* que solo pueda saltar cada segundo

    }

    
}