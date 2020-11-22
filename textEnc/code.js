$(document).ready(function () {
    $("#action").click(function () {

        var str = $("#textAction").val();

        var res = str.replace(/a/g, "@").replace(/i/g, "!").replace(/l/g, "1")
            .replace(/o/g, "0").replace(/s/g, "$").replace(/e/g, "3").replace(/A/g, "@")
            .replace(/I/g, "!").replace(/L/g, "1").replace(/O/g, "0").replace(/S/g, "$").replace(/E/g, "3");


        $("#resultAction").text(res);


    });


});
