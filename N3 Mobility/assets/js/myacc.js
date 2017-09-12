// JavaScript source code
function openPageAcc(href) {

    var idref2 = href;
    window.location = idref2;

}

//get screen height
var sHeightF = '';
var frmHeightF = '';
function screenHeightF() {
    sHeightF = $(window).height();
    frmHeightF = sHeight - 51;
  //  $("#formFrm").attr("height", frmHeight);
    //alert(sHeight + 'px');

}
