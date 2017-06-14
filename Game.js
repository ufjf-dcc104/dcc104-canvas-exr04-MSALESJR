/**
 * Criado por Marcus em 10/05/2017.
 */
var tela     = null;
var contexto = null;
var player   = null;
var level    = null;
var atual    = new Date();
var anterior = new Date();
var dt       = 0;
var inicia_jogo = false;

function init(){

    tela = document.getElementById('tela');
    contexto = tela.getContext('2d');

    player = new Player();
    player.x  = 200;
    player.y  = 0;
    player.width  = 64;
    player.height = 64;
    player.desenha(contexto);

    level = new Level();
    level.init();
    initControls();
    requestAnimationFrame(drawFrame);
 }

 function drawFrame(){
    requestAnimationFrame(drawFrame);
    atual = new Date();
    dt = (atual  - anterior) / 1000 ;
    contexto.clearRect(0,0, tela.width, tela.height);

    if(inicia_jogo){
        if(level.fim_de_jogo){
            alert("Fim de Jogo");
            location.reload();
        }
        level.run(dt,contexto);
    }else{
        contexto.font = "50px Arial";
        contexto.strokeText("Misseis",330,250);
        player.x = 380;
        player.y = 280;
        contexto.font = "15px Arial";
        contexto.strokeText("Aperte ENTER para INICIAR",320,300);
    }

    player.update(dt);
    player.desenha(contexto);
    anterior = atual;
 }

function initControls(){
    tela.addEventListener('click', function(e){
        player.x = e.layerX - tela.offsetLeft;
        player.y = e.layerY - tela.offsetTop;
        level.disparaTiro();
    });

    document.addEventListener('keydown', function(e){
        switch(e.keyCode){
            case 13 :
                if(!inicia_jogo){
                    inicia_jogo = true;
                }
                break;
        }
    });
}