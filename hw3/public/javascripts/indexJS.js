//Anabel Hilerio

$(document).ready(function() {
    $('#result').hide();
    $('#form').show();
    
    $("#monthSelector").hover(function() {
        $(this).children("ul").slideToggle();
    });
});

function order(){
    var notes = $('#notes').val();
    var quantity = $("#quantity option:selected").val();
    var toppings = $("input[name='topping']:checked").val();
    
    if (notes.includes("vegan")){
        alert("Cheesecake contains dairy");
    }
    else{
        $("#finalQuantity").text(quantity);
        $("#finalTopping").text(toppings);
        $("#special").text(notes);
        $('#form').hide();
        $('#result').show();
    }
}

function selectMonth(monthVal){
    $("#shownMonth").text(monthVal);
}
