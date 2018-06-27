import * as $ from "jquery";
$("#submit").click(function(){
    let o={};
    o["o1"]=$("input[name='radio1']:selected").val();
    o["o2"]=$("input[name='radio2']:selected").val();
    $.ajax({
        url:"/k",
        type:"post",
        dataType:"json",
        contentType:"application/json",
        success: function (data) {
            $('#target').html(data);
        },
        data:JSON.stringify(o)
    })
});