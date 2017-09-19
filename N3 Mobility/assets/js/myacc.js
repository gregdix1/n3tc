// JavaScript source code
function openPageAcc(href) {
    var idref2 = href;
   // alert(idref2);
   
    var str = idref2;
    var n = str.includes("profile.html");

    if (n === true) {
       
      //  populateProfileForm();
    };
    window.location = idref2;

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

///populate profile form
function populateProfileForm() {
   // alert("pop..orm() start");
    //populate form with local storage
    var FullName = localStorage.getItem("myName") + ' ' + localStorage.getItem("mySname");
    var MyMail = localStorage.getItem("myEmail");
    var userName = localStorage.getItem("myUserName");
    var myMobile = localStorage.getItem("myMobile");
    var UID = localStorage.getItem("myUserID");

    document.getElementById("FullName").value = FullName;
    document.getElementById("userEmail").value = MyMail;
    document.getElementById("UserName").value = userName;
    document.getElementById("Cell").value = myMobile;
    document.getElementById("UserID").value = UID;

   //  alert("populateProfileForm() done");


};
