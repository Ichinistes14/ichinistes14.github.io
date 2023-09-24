$(document).ready(function() {
    // Convertion Bin,Dec,Hex
    $("#bin").on("input", function (v) {
        v.target.value = v.target.value.replace(/[^0-1]/g, '').trim();
        let val = v.target.value;

        if (val == "") {
            $("#hex").val("");
            $("#dec").val("");
            return;
        }

        $("#hex").val(Convertor.BinToHex(val));
        $("#dec").val(Convertor.BinToDec(val));
    });

    $("#dec").on("input", function (v) {
        v.target.value = v.target.value.replace(/[^0-1]/g, '').trim();
        let val = v.target.value;

        if (val == "") {
            $("#hex").val("");
            $("#bin").val("");
            return;
        }

        $("#hex").val(Convertor.DecToHex(val));
        $("#bin").val(Convertor.DecToBin(val));
    });

    $("#hex").on("input", function (v) {
        v.target.value = v.target.value.replace(/[^a-fA-F0-9]+/g, '').toUpperCase().trim();
        let val = v.target.value;
        
        if (val == "") {
            $("#dec").val("");
            $("#bin").val("");
            return;
        }

        $("#dec").val(Convertor.HexToDec(val));
        $("#bin").val(Convertor.HexToBin(val));
    });

    //Resistance
    $("#r1").on("input", function () {
        let R1 = $("#r1").val();
        let R2 = $("#r2").val();
        let R3 = $("#r3").val();

        $("#rResult").html(`Résultat :<br>${Resistor.Resolve(R1, R2, R3)}Ω`);
    });

    $("#r2").on("input", function () {
        let R1 = $("#r1").val();
        let R2 = $("#r2").val();
        let R3 = $("#r3").val();

        $("#rResult").html(`Résultat :<br>${Resistor.Resolve(R1, R2, R3)}Ω`);
    });

    $("#r3").on("input", function () {
        let R1 = $("#r1").val();
        let R2 = $("#r2").val();
        let R3 = $("#r3").val();

        $("#rResult").html(`Résultat :<br>${Resistor.Resolve(R1, R2, R3)}Ω`);
    });
});