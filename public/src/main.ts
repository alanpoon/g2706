import * as $ from "jquery";
$("#submit").click(function(){
    let o={};
    o["q1"]=$("input[name='radio1']:checked").val();
    o["q2"]=$("input[name='radio2']:checked").val();
    $(".loader").css("display","inline-display");
    $('#target').html("");
    console.log("o",o);
    $.ajax({
        url:"/endpoint",
        type:"POST",
        contentType:"application/json",
        dataType : 'json',
        success: function (data) {
            $(".loader").css("display","none");
            console.log("target data",data);
            $('#target').html("score: "+data.score.toString());
        },
        data:JSON.stringify(o)
    })
});