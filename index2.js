$(document).ready(function(){
    // var creatures = $('#animals').find('.creature'); // массив всех кого нашел
    // console.log(creatures, typeof creatures);

    //first last next prev
    // var cats = $('.creature .category').children().contains('Cats')
    var mammal = $(':contains(Cats)').last().parent()
     // [1,2,3,4].next
    //.first().next();
    console.log(mammal);

});