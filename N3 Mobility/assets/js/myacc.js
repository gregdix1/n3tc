// JavaScript source code
function openPageAcc(href) {
    var idref2 = href;
   // alert(idref2);
   
    var str = idref2;
    var n = str.includes("profile.html");
    if (n === true) {
       // popProfileDelay();
    }
    window.location = idref2;

}

function openPageProfile(href) {
   // var idref2 = href;
   // popProfileDelay();
   // window.location = idref2;

}

function logOut(href) {

    var idrefOut = href;
    AuthIs = 0;
    window.parent.document.getElementById('topHead').innerHTML = 'Mobility';
    localStorage.setItem("Authcheck", 0);
    window.location = idrefOut;

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


