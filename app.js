$(document).ready(function () {
  // Hamburger Menu
  $(".menu-hamburger").on("click", function () {
    $(".nav-links").toggleClass("mobile-menu");
    $(".container").toggleClass("display");
  });
  // Navbar
  $("#b-bin").on("click", function () {
    $(".dActive").toggleClass("dActive");
    $(".active").toggleClass("active");
    $("#convertion").toggleClass("dActive");
    $("#b-bin").parent().toggleClass("active");
  });
  $("#b-res").on("click", function () {
    $(".dActive").toggleClass("dActive");
    $(".active").toggleClass("active");
    $("#resistor").toggleClass("dActive");
    $("#b-res").parent().toggleClass("active");
  });
  $("#b-pre").on("click", function () {
    $(".dActive").toggleClass("dActive");
    $(".active").toggleClass("active");
    $("#premierD").toggleClass("dActive");
    $("#b-pre").parent().toggleClass("active");
  });
  $("#b-sec").on("click", function () {
    $(".dActive").toggleClass("dActive");
    $(".active").toggleClass("active");
    $("#secondD").toggleClass("dActive");
    $("#b-sec").parent().toggleClass("active");
  });
  $("#b-pui").on("click", function () {
    $(".dActive").toggleClass("dActive");
    $(".active").toggleClass("active");
    $("#puissance").toggleClass("dActive");
    $("#b-pui").parent().toggleClass("active");
  });
  $("#b-sys").on("click", function () {
    $(".dActive").toggleClass("dActive");
    $(".active").toggleClass("active");
    $("#system").toggleClass("dActive");
    $("#b-sys").parent().toggleClass("active");
  });
  // Convertion Bin,Dec,Hex
  $("#bin").on("input", function (v) {
    v.target.value = v.target.value.replace(/[^0-1]/g, "").trim();
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
    v.target.value = v.target.value.replace(/[^0-9]/g, "").trim();
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
    v.target.value = v.target.value
      .replace(/[^a-fA-F0-9]+/g, "")
      .toUpperCase()
      .trim();
    let val = v.target.value;

    if (val == "") {
      $("#dec").val("");
      $("#bin").val("");
      return;
    }

    $("#dec").val(Convertor.HexToDec(val));
    $("#bin").val(Convertor.HexToBin(val));
  });
  // Resistance
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
  // Équation Premier Deg
  $("#aP").on("input", function () {
    let A = $("#aP").val();
    let B = $("#bP").val();
    let C = $("#cP").val();

    $("#pResult").html(`${A}x+${B}=${C}<br>x=${Equation.Premier(A, B, C)}`);
  });
  $("#bP").on("input", function () {
    let A = $("#aP").val();
    let B = $("#bP").val();
    let C = $("#cP").val();

    $("#pResult").html(`${A}x+${B}=${C}<br>x=${Equation.Premier(A, B, C)}`);
  });
  $("#cP").on("input", function () {
    let A = $("#aP").val();
    let B = $("#bP").val();
    let C = $("#cP").val();

    $("#pResult").html(`${A}x+${B}=${C}<br>x=${Equation.Premier(A, B, C)}`);
  });
  // Équation Premier Deg
  $("#aS").on("input", function () {
    let A = $("#aS").val();
    let B = $("#bS").val();
    let C = $("#cS").val();
    let D = $("#dS").val();

    $("#sResult").html(`${Equation.Second(A, B, C, D)}`);
  });
  $("#bS").on("input", function () {
    let A = $("#aS").val();
    let B = $("#bS").val();
    let C = $("#cS").val();
    let D = $("#dS").val();

    $("#sResult").html(`${Equation.Second(A, B, C, D)}`);
  });
  $("#cS").on("input", function () {
    let A = $("#aS").val();
    let B = $("#bS").val();
    let C = $("#cS").val();
    let D = $("#dS").val();

    $("#sResult").html(`${Equation.Second(A, B, C, D)}`);
  });
  $("#dS").on("input", function () {
    let A = $("#aS").val();
    let B = $("#bS").val();
    let C = $("#cS").val();
    let D = $("#dS").val();

    $("#sResult").html(`${Equation.Second(A, B, C, D)}`);
  });
  // Puissance
  $("#num").on("input", function () {
    let num = $("#num").val();
    let expo = $("#expo").val();

    $("#puResult").html(`${num}^${expo} = ${Puissance.Resolve(num, expo)}`);
  });
  $("#expo").on("input", function () {
    let num = $("#num").val();
    let expo = $("#expo").val();

    $("#puResult").html(`${num}^${expo} = ${Puissance.Resolve(num, expo)}`);
  });
  // Système
  $("#a1").on("input", function () {
    let a1 = $("#a1").val();
    let a2 = $("#a2").val();
    let b1 = $("#b1").val();
    let b2 = $("#b2").val();
    let c1 = $("#c1").val();
    let c2 = $("#c2").val();

    $("#sysResult").html(Systeme.two(a1, b1, c1, a2, b2, c2));
  });
  $("#b1").on("input", function () {
    let a1 = $("#a1").val();
    let a2 = $("#a2").val();
    let b1 = $("#b1").val();
    let b2 = $("#b2").val();
    let c1 = $("#c1").val();
    let c2 = $("#c2").val();

    $("#sysResult").html(Systeme.two(a1, b1, c1, a2, b2, c2));
  });
  $("#c1").on("input", function () {
    let a1 = $("#a1").val();
    let a2 = $("#a2").val();
    let b1 = $("#b1").val();
    let b2 = $("#b2").val();
    let c1 = $("#c1").val();
    let c2 = $("#c2").val();

    $("#sysResult").html(Systeme.two(a1, b1, c1, a2, b2, c2));
  });
  $("#a2").on("input", function () {
    let a1 = $("#a1").val();
    let a2 = $("#a2").val();
    let b1 = $("#b1").val();
    let b2 = $("#b2").val();
    let c1 = $("#c1").val();
    let c2 = $("#c2").val();

    $("#sysResult").html(Systeme.two(a1, b1, c1, a2, b2, c2));
  });
  $("#b2").on("input", function () {
    let a1 = $("#a1").val();
    let a2 = $("#a2").val();
    let b1 = $("#b1").val();
    let b2 = $("#b2").val();
    let c1 = $("#c1").val();
    let c2 = $("#c2").val();

    $("#sysResult").html(Systeme.two(a1, b1, c1, a2, b2, c2));
  });
  $("#c2").on("input", function () {
    let a1 = $("#a1").val();
    let a2 = $("#a2").val();
    let b1 = $("#b1").val();
    let b2 = $("#b2").val();
    let c1 = $("#c1").val();
    let c2 = $("#c2").val();

    $("#sysResult").html(Systeme.two(a1, b1, c1, a2, b2, c2));
  });
});
