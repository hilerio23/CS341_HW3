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
    $.post("/orders", {
        "month" : monthVal
    },
    function(data, status){
        var orderArray = JSON.parse(data);
        var textInfo = "";
        for(let i = 0; i < orderArray.length; i++){
            textInfo += "<li>" + orderArray[i].topping + " " + orderArray[i].quantity + "</li>";
        }
        $("#orderDetails").html(textInfo);
    });
}
