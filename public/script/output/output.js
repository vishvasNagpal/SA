
$(function(){

    $('.hamburg').click(function(){
        handleHeader();

    });
    $('.tab .tabHead').click(function(){
        var retDate = $('input[name=retDate]');
        $('.tabHead').removeClass('selected');
        $(this).addClass('selected');
        if($(this).hasClass('one')){
            retDate.prop('disabled', true);
            $('.returnDate').addClass('disabled');
        }else{
            retDate.prop('disabled', false);
            $('.returnDate').removeClass('disabled');
        }

    });
    $('.flightSubmit').submit(function(e){
        e.preventDefault();
        var originCity = $('input[name=originCity]');
        var originCityVal = originCity.val();
        var destCity = $('input[name=destCity]');
        var destCityVal = destCity.val();
        var depDate = $('input[name=depDate]');
        var depDateVal = depDate.val();
        var retDate = $('input[name=retDate]');
        var retDateVal = retDate.val();

        var required = '<span>required</span>';
        if(!originCityVal){
            originCity.prev().append(required)
        }
        if(!depDateVal){
            depDate.prev().append(required)
        }
        if(!destCityVal){
            destCity.prev().append(required)
        }
        if(!retDateVal && !$('.returnDate').hasClass('disabled')){
            retDate.prev().append(required)
        }


        if(originCityVal && destCityVal && depDateVal ){
            var value = $(this).serialize();
            $.ajax({
                type: 'POST',
                url: '/home?' + value,
                success:function(data){
                    $(".placeHtml").empty();
                    if(data.err){
                        $(".placeHtml").append('<div class="error">'+ data.err +'</div>');
                    }
                    $(".placeHtml").append(data);
                    handleHeader()
                },
                error: function () {
                    //send err logs to server so it can be reported
                }
            })
        }

    })
});

function handleHeader(){
    var leftNav = $('.leftNav');
    if(leftNav.hasClass('open')){
        leftNav.animate({
            top:'-800px'
        });
    }else{
        leftNav.animate({
            top:'61px'

        });
    }
    leftNav.toggleClass('open');
}