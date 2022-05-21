$(document).ready(main);
$(document).ready(menuHide);

var contador = 1;

function main(){
    $('.menu_bar').click(
        function()
    {
        //$('nav').toggle();
        if(contador == 1){
            $('nav').animate({
                left:'0%'
            });
            contador = 0;
        }else{
            $('nav').animate({
                left:'-100%'
            });
            contador = 1
        }
    }); 
}

function menuHide(){
    $('.subtema').click( 
        function ()
        {
            if(contador == 1){
                $('nav').animate({
                    left:'0%'
                });
                contador = 0;
            }else{
                $('nav').animate({
                    left:'-100%'
                });
                contador = 1
            }
        });
}


   
