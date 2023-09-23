$(document).ready(function() {

    $("#bin").on("input", function (v) {
        let val = v.target.value;

        if (val == "") {
            $("#hex").val("");
            $("#dec").val("");
            return;
        }

        v.target.value = val.replace(/[^0-1]/g, '').trim();
        $("#hex").val(Convertor.BinToHex(val));
        $("#dec").val(Convertor.BinToDec(val));
    });

    $("#dec").on("input", function (v) {
        let val = v.target.value;

        if (val == "") {
            $("#hex").val("");
            $("#bin").val("");
            return;
        }

        v.target.value = val.replace(/[^0-1]/g, '').trim();
        $("#hex").val(Convertor.DecToHex(val));
        $("#bin").val(Convertor.DecToBin(val));
    });

    $("#hex").on("input", function (v) {
        let val = v.target.value;
        
        if (val == "") {
            $("#dec").val("");
            $("#bin").val("");
            return;
        }

        v.target.value = val.replace(/[^a-fA-F0-1]+/g, '').trim();
        $("#dec").val(Convertor.HexToDec(val));
        $("#bin").val(Convertor.HexToBin(val));
    });
});