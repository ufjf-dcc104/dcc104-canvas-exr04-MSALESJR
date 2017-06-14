/**
 * Criado por Marcus em 10/05/2017.
 */
function Level()
{
    this.tempo_entre_inimigos = 1;
    this.tempo_corrido_depois_que_ultimo_inimigo_foi_criado = 0;
    this.pontos = 0;
    this.inimigos = [];
    this.tiros    = [];
    this.torres   = [];
    this.tempo_corrido_desde_do_inicio_do_jogo = 0;
    this.image_meteor = null;
    this.image_tiro   = null;
    this.fim_de_jogo  = false;
}

Level.prototype.init = function(){
    var meteor = new Image();
    meteor.src = 'img/meteor.gif';
    this.image_meteor = meteor;

    var tiro = new Image();
    tiro.src = 'img/tiro.png';
    this.image_tiro = tiro;

    var torre_1 = new Sprite();
    torre_1.y = 500;
    torre_1.x = 20;
    torre_1.width = 35;
    torre_1.height= 100;
    torre_1.vy    = 0;

    var torre_1_img = new Image();
    torre_1_img.src = 'img/torre_1.png';

    torre_1.image = torre_1_img;
    torre_1.tag   = "torre";
    this.torres.push(torre_1);

    var torre_2 = new Sprite();
    torre_2.y = 500;
    torre_2.x = 750;
    torre_2.width = 33;
    torre_2.height= 100;
    torre_2.vy    = 0;

    var torre_2_img = new Image();
    torre_2_img.src = 'img/torre_2.png';

    torre_2.image = torre_2_img;
    torre_2.tag   = "torre";
    this.torres.push(torre_2);

    var torre_3 = new Sprite();
    torre_3.y = 500;
    torre_3.x = 80;
    torre_3.width = 32;
    torre_3.height= 100;
    torre_3.vy    = 0;

    var torre_3_img = new Image();
    torre_3_img.src = 'img/torre_3.png';

    torre_3.image = torre_3_img;
    torre_3.tag   = "torre";
    this.torres.push(torre_3);

    var torre_4 = new Sprite();
    torre_4.y = 500;
    torre_4.x = 150;
    torre_4.width = 32;
    torre_4.height= 100;
    torre_4.vy    = 0;
    torre_4.image = torre_3_img;
    torre_4.tag   = "torre";
    this.torres.push(torre_4);

    var torre_5 = new Sprite();
    torre_5.y = 500;
    torre_5.x = 230;
    torre_5.width = 32;
    torre_5.height= 100;
    torre_5.vy    = 0;
    torre_5.image = torre_3_img;
    torre_5.tag   = "torre";
    this.torres.push(torre_5);

    var torre_mestre = new Sprite();
    torre_mestre.y = 460;
    torre_mestre.x = 340;
    torre_mestre.width = 103;
    torre_mestre.height= 150;
    torre_mestre.vy    = 0;

    var torre_mestre_img = new Image();
    torre_mestre_img.src = 'img/torre_mestre_menor.png';

    torre_mestre.image = torre_mestre_img;
    torre_mestre.tag   = "torre_mestre";
    this.torres.push(torre_mestre);

    var torre_6 = new Sprite();
    torre_6.y = 500;
    torre_6.x = 300;
    torre_6.width = 32;
    torre_6.height= 100;
    torre_6.vy    = 0;
    torre_6.image = torre_3_img;
    torre_6.tag   = "torre";
    this.torres.push(torre_6);

    var torre_7 = new Sprite();
    torre_7.y = 500;
    torre_7.x = 450;
    torre_7.width = 32;
    torre_7.height= 100;
    torre_7.vy    = 0;
    torre_7.image = torre_3_img;
    torre_7.tag   = "torre";
    this.torres.push(torre_7);

    var torre_8 = new Sprite();
    torre_8.y = 500;
    torre_8.x = 530;
    torre_8.width = 32;
    torre_8.height= 100;
    torre_8.vy    = 0;
    torre_8.image = torre_3_img;
    torre_8.tag   = "torre";
    this.torres.push(torre_8);

    var torre_9 = new Sprite();
    torre_9.y = 500;
    torre_9.x = 600;
    torre_9.width = 32;
    torre_9.height= 100;
    torre_9.vy    = 0;
    torre_9.image = torre_3_img;
    torre_9.tag   = "torre";
    this.torres.push(torre_9);

    var torre_10 = new Sprite();
    torre_10.y = 500;
    torre_10.x = 680;
    torre_10.width = 32;
    torre_10.height= 100;
    torre_10.vy    = 0;
    torre_10.image = torre_3_img;
    torre_10.tag   = "torre";
    this.torres.push(torre_10);
}


Level.prototype.run = function(dt, contexto){
    this.tempo_corrido_depois_que_ultimo_inimigo_foi_criado += dt;

    contexto.font = "20px Arial";
    contexto.fillText("SCORE : " + this.pontos,5,20);

    if(this.tempo_corrido_depois_que_ultimo_inimigo_foi_criado >= this.tempo_entre_inimigos){
        var inimigo = new Sprite();
        inimigo.y = -50;
        inimigo.x = (Math.random() * 800);
        inimigo.width = 32;
        inimigo.height= 32;
        inimigo.image = this.image_meteor;
        this.inimigos.push(inimigo);
        this.tempo_corrido_depois_que_ultimo_inimigo_foi_criado = 0;
    }


    contexto.fillStyle = "#1C1C1C";
    for(var j = 0; j < this.torres.length; j++){
        var torre = this.torres[j];
        var desenha = true;
        for(var i1 = 0; i1 < this.inimigos.length; i1++){
            var inimigo1 = this.inimigos[i1];
            if(this.colidiu(torre, inimigo1)){
                if(torre.tag == "torre_mestre" || this.torres.length == 1){
                    this.fim_de_jogo = true;
                    desenha = false;
                }else{
                    this.torres.splice(j,1);
                    this.inimigos.splice(i1,1);
                }
                this.vidas -= 1;
            }
        }
        if(desenha){
            torre.desenha(contexto);
        }
    }

    for(var i = 0; i < this.inimigos.length; i++){
        var inimigo = this.inimigos[i];
        var desenha = true;
        for(var t1 = 0; t1 < this.tiros.length; t1++){
            var tiro1 = this.tiros[t1];
            if(this.colidiu(inimigo, tiro1)){
                this.tiros.splice(t1,1);
                this.inimigos.splice(i,1);
                desenha = false;
                this.pontos += 100;
            }
        }

        if(desenha){
            inimigo.mover(dt);
            inimigo.desenha(contexto);
        }
    }

    for(var t = 0; t < this.tiros.length; t++){
        var tiro = this.tiros[t];
        tiro.mover(dt);
        tiro.desenha(contexto);
    }

    this.check();
}

Level.prototype.colidiu = function (objeto1, objeto2) {
    if(objeto1.x + objeto1.width < objeto2.x) return false;
    if(objeto1.x > objeto2.x + objeto2.width) return false;
    if(objeto1.y + objeto1.height < objeto2.y) return false;
    if(objeto2.y + objeto2.height < objeto1.y) return false;
    return true;
}

Level.prototype.disparaTiro = function(){
    console.log(this.fim_de_jogo);
   if(this.fim_de_jogo === false){
       var tiro = new Tiro();
       var dist_x = player.x - 390;
       var dist_y = player.y - 477;
       var distancia = (Math.sqrt(Math.pow(dist_x,2) + Math.pow(dist_y,2))).toFixed(0);

       var dxh = dist_x / distancia;
       var dyh = dist_y/ distancia;

       tiro.x_clicado = dxh.toFixed(2);
       tiro.y_clicado = dyh.toFixed(2);

       tiro.image = this.image_tiro;
       tiro.tag   = "tiro";
       this.tiros.push(tiro);
   }
}

Level.prototype.check = function(){
    for(var i = 0; i < this.inimigos.length; i++){
        var inimigo = this.inimigos[i];
        if(inimigo.y > 615){
            this.inimigos.splice(i,1);
        }
    }

    for(var t = 0; t < this.tiros.length; t++){
        var tiro = this.tiros[t];
        if(tiro.y > 615 || tiro.y < -5 || tiro.x < 0 || tiro.x > 800){
            this.tiros.splice(t,1);
        }
    }
}