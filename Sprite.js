/**
 * Criado por Marcus em 10/05/2017.
 */
function Sprite()
{
    this.x = 800;
    this.y = 0;
    this.width  = 50;
    this.height = 50;
    this.vy     = 90;
    this.image  = null;
    this.tag    = null;
}

Sprite.prototype.desenha = function (contexto) {
    contexto.drawImage(this.image,this.x,this.y);
};

Sprite.prototype.mover = function (dt) {
    this.y = this.y + this.vy * dt;
};
