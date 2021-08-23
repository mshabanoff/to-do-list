$(document).ready(function(){
    $('.input').on('keyup', function(value){
        if(value.keyCode == 13 && $('.input').val() != ''){
            var task = $("<div class='task'></div>").text($('.input').val());
            var del = $("<i class='fas fa-trash'></i>").click(function(){
                var parent = $(this).parent();
                parent.fadeOut(function(){
                    parent.remove();
                });
            });
            var check = $("<i class='fas fa-check'></i>").click(function(){
            var parent = $(this).parent();
            parent.fadeOut(function(){
                $('.completed').append(parent);
                parent.fadeIn();
                });
                $((this).remove());
            });
            task.append(del, check);
            $('.not-completed').append(task);
            $('.input').val('');
        }
    });
});