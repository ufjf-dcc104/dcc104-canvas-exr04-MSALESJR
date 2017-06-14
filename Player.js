/**
 * Criado por Marcus em 10/05/2017.
 */
function Player()
{
    this.x = null;
    this.y = null;
    this.width  = null;
    this.height = null;
    this.image = null;
}


Player.prototype.update = function (dt) {

}

Player.prototype.desenha = function (contexto) {
    /**
    contexto.drawImage(
        this.image,
        0,
        0,
        this.width,
        this.height,
        this.x,
        this.y,
        this.width,
        this.height);**/
}

Player.prototype.mover = function (dt) {
    //this.y = this.y + this.vy * this.gravidade * dt;
};