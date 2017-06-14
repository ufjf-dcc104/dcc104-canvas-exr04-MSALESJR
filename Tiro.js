/**
 * Criado por Marcus em 10/05/2017.
 */
function Tiro()
{
    this.x = 390;
    this.y = 477;
    this.width  = 7;
    this.height = 25;
    this.vy     = 290;
    this.vx     = 290;
    this.image  = null;
    this.x_clicado = 0;
    this.y_clicado = 0;


}

Tiro.prototype.desenha = function (contexto) {
    if(this.image === null)
        contexto.fillRect(this.x, this.y, this.width, this.height);
    else{
        contexto.beginPath();
        contexto.arc(this.x, this.y,5,0,2*Math.PI,false);
        contexto.closePath();
        contexto.stroke();
    }
};

Tiro.prototype.mover = function (dt) {
    this.y = this.y + (this.y_clicado * this.vy * dt);
    this.x = this.x + (this.x_clicado * this.vx * dt);
};