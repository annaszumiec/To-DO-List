$('button').addClass('red');
$('button').addClass('text--white');

$('button').click(
    function(){
        let toAdd = $('#input').val();
         if($('#input').val() ===''){
            alert("Write item to add to the list")
         }else{
            $('ol').append('<li>' + toAdd + '</li>');
         }

         $('#input[type="text"]').val('');

    });

$('ol').sortable();  


$('ol').on('click','li', function(){
    $(this).toggleClass('strike');    
  });

$('ol').on('dblclick','li', function(){
     $(this).toggleClass('strike').fadeOut('slow');  
  });

  $('.crossOutButton').append('<li>x</li>')
  deleteButton.append(document.createTextNode('X'));



