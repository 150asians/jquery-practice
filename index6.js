$('document').ready(function(){
    $('.info-link').on('click', function(){
        // $(this).parent().next().slideToggle(500);
        $('.more-info').show().animate(
            {
                opacity: 0.5,
                color: "red",
                "margin-top": "20px"
            }, 
            900,
            function(){
                console.log('animted che pacany anime')
            }
        )
    })

    $('.buttonSubmit').on('submit', function(e) {
        e.preventDefault();
        console.log(e.target) // Astana
    })

})