$(document).ready(function(){ 
    var p=0;
    
// Glavna funckija//
    $('#button').click(function(){
     
       if ($('input').val() !== '') {
       	var toAdd=$('input[name=checkListItem]').val();
     
       $(".list").append('<p class="item">' + toAdd + '<input type="checkbox" name="pero"></input>'+'</p>');
        p+=1;}
        $('input').val('');
    return false;
        });
    
    $('form').submit(function () {

if ($('input').val() !== '') {
    	var toAdd=$('input[name=checkListItem]').val();
     
        $(".list").append('<div class="item">' + toAdd +'<input class="check" type="checkbox" ></input>'+'</div>');
        p+=1;
        
        }
      $('input').val('');
    return false;
});

    
    //brisanje na click itema
    //$(document).on('click','.item',function(){$(this).remove()});

    
    
//brisanje svega
    $(document).on('click','#button2',function(){ 

       for (i=0;i<p;i++){$('.item').remove();}

    });

  //brisanje onog kliknutoga
  
function cleanup() {

    $('.item > .check ').each( function(idx, el) {

        if( $(el).prop('checked') ) {

            $(el).parent().detach();

        }

    });

}
$('#button3').click(function() {
    cleanup();

});

 

});
    