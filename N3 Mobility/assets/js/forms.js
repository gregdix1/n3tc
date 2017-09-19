// JavaScript source code

//old start
var mag = '';
function magSelect() {

    if (document.getElementById("processor").value != "") {
        
        $("#nextMag").removeAttr("disabled");
        $("#nextMag").removeClass("action-button-disabled");
       // $('#button_done').addClass('ui-icon-check ui-btn-icon-left ui-btn-b ui-btn-active');
        mag = document.getElementById("processor").value;
        // mag = $('#processor option:selected').innerHTML;
      //GBD  localStorage.setItem("myDistrict", mag);
        // alert(mag);
        //document.getElementById("Magisterial").value = mag;<br />
    }
   // else
      //  $('#nextMag').addClass('action-button-disabled');
    
}

///Get Acc nos and Set local
function setCurrentAcc() {
    var crntAcc = document.getElementById("selectAcc").value;
    
   //gbd localStorage.setItem("currentAccNo", crntAcc);
    
} 

function showhide() {
    if (document.getElementById("apptype").value == "Individual") {
        document.getElementById("coName").innerHTML = " ";
        document.getElementById("coReg").innerHTML = " ";
        document.getElementById("coName").setAttribute("type", "hidden");
        document.getElementById("coReg").setAttribute("type", "hidden");
        document.getElementById("coregl").style.display = "none";
        document.getElementById("conamel").style.display = "none";
    }
    else {
        document.getElementById("coName").setAttribute("type", "text");
        document.getElementById("coReg").setAttribute("type", "text");
        document.getElementById("coregl").style.display = "block";
        document.getElementById("conamel").style.display = "block";
    }

}
//get local
function PopulateCDA() {

    var firstname = localStorage.getItem("myName");
    var lastname = localStorage.getItem("mySname");
    document.getElementById("userName").value = firstname + " " + lastname;
    document.getElementById("userEmail").value = localStorage.getItem("myUserName");
    document.getElementById("userid").value = localStorage.getItem("myUserID");
    document.getElementById("coName").value = localStorage.getItem("myCompanyName");
    document.getElementById("coReg").value = localStorage.getItem("myCompanyReg");
    document.getElementById("cntCell").value = localStorage.getItem("myCell");
    document.getElementById("cntHome").value = localStorage.getItem("myHomeTel");
    document.getElementById("cntWrk").value = localStorage.getItem("myWorkTel");
    document.getElementById("cntFax").value = localStorage.getItem("myFax");
    document.getElementById("idNo").value = localStorage.getItem("myIdentityNo");
    document.getElementById("Magisterial").value = localStorage.getItem("myDistrict");
    document.getElementById("Physical").value = localStorage.getItem("myPhyadd");
    document.getElementById("Postal").value = localStorage.getItem("myPostal");

}

function linkBind() {
    var reg = document.getElementById("v1Registration").value;
    var usrId = document.getElementById("userid").value;
    document.getElementById("v1linkid").value = "http://n3tc100docx/_layouts/15/start.aspx#/Lists/VehiclesApplication/AllItems.aspx#InplviewHashfe2c0f45-61eb-4a5e-9b37-9331d721b540=FilterField1=ApplicationID-FilterValue1=" + usrId + reg;

}

function getItems() {
    //alert("func GetItems");	
    // $("#tbl1").append(titleRow); 


    //////////


    var ApplicationType = document.getElementById("apptype").value;
    User_id = document.getElementById("userid").value;
    var FullName = document.getElementById("userName").value;
    var CompanyName = document.getElementById("coName").value;
    var CompanyRegNo = document.getElementById("coReg").value;
    var ContactCell = document.getElementById("cntCell").value;
    var ContactHome = document.getElementById("cntHome").value;
    var ContactWork = document.getElementById("cntWrk").value;
    var Email = document.getElementById("userEmail").value;
    var Fax = document.getElementById("cntFax").value;
    var IdentityNumber = document.getElementById("idNo").value;
    var IdentityType = document.getElementById("idtype").value;
    var MagisterialDistrict = document.getElementById("Magisterial").value;

    var PhysicalAdd = document.getElementById("Physical").value;
    var PostalAdd = document.getElementById("Postal").value;

    FileAttachID = document.getElementById("attachmentFile").value;
    FileAttachIDCleaned = FileAttachID.replace("C:\\fakepath\\", "");

    FileAttachRes = document.getElementById("attachmentFile3").value;
    FileAttachResCleaned = FileAttachRes.replace("C:\\fakepath\\", "");


    //var CompanyRegNo = $(this).attr("ows_Company_x0020_Reg_x0020_No"); 
    var DocConfirm = document.getElementById("docConfirm").value;

    FileIDPath = "http://n3tc100docx/Shared%20Documents1/" + FileAttachID;
    FileIDPathCleaned = FileIDPath.replace("C:\\fakepath\\", "");
    //FileIDPath = FileIDPathCleaned;

    FileResPath = "http://n3tc100docx/Shared%20Documents1/" + FileAttachRes;
    FileRegPathCleaned = FileResPath.replace("C:\\fakepath\\", "");
    //FileResPath = FileRegPathCleaned; 


    ////


   // addRow = openjson + "applicationtype" + sepjson + ApplicationType + nextjson + "userid" + sepjson + User_id + nextjson + "fullname" + sepjson + FullName + nextjson + "companyname" + sepjson + CompanyName + nextjson + "companyregno" + sepjson + CompanyRegNo + nextjson + "contactcell" + sepjson + ContactCell + nextjson + "contacthome" + sepjson + ContactHome + nextjson + "contactwork" + sepjson + ContactWork + nextjson + "email" + sepjson + Email + nextjson + "Fax" + sepjson + Fax + nextjson + "IdentityNumber" + sepjson + IdentityNumber + nextjson + "magisterialdistrict" + sepjson + MagisterialDistrict + nextjson + "PhysicalAdd" + sepjson + PhysicalAdd + nextjson + "PostalAdd" + sepjson + PostalAdd + nextjson + "FileAttachID" + sepjson + FileAttachIDCleaned + nextjson + "fileIDPath" + sepjson + FileIDPathCleaned + nextjson + "FileResPath" + sepjson + FileRegPathCleaned + nextjson + "FileAttachRes" + sepjson + FileAttachResCleaned + nextjson + "IdentityType" + sepjson + IdentityType + nextjson + "DocConfirm" + sepjson + DocConfirm + "'}, ";

    document.getElementById("jsonTemp").innerHTML = addRow;
    //$("#tbl1").append(addRow);
    //ftpsend();
    ftpsendFormData();

}
//////
function docStatus() {
    var dStat = document.getElementById("docConfirm").value;
    document.getElementById("docStat").value = dStat;
}

//OLD END

///NEW SCRIPTS START

var validMail = false;
var validPass = false;
function validateEmail() {
    //  validMail = true;
    //  validPass = true;
    $(".info").html('');

    if (!$("#userEmail").val()) {
        $("#userEmail-info").html("(required)");
        $("#userEmail").css('background-color', '#FFFFDF');
        validMail = false;
    } else { validMail = true; }

    if (!$("#userEmail").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
        $("#userEmail-info").html("(invalid)");
        $("#userEmail").css('background-color', '#FFFFDF');
        validMail = false;
    } else { validMail = true; enableNext1(); }




}

var password = document.getElementById("password");
var confirm_password = document.getElementById("confirm_password");

function validatePassword() {
    if (password.value != confirm_password.value) {
        $("#confirm_password-info").html("(no match)");
        $("#confirm_password").css('background-color', '#FFFFDF');
        validPass = false;
        confirm_password.setCustomValidity("Passwords Don't Match");
        // alert("Passwords Don't Match");
    } else {
        confirm_password.setCustomValidity('');
        $("#confirm_password-info").html("");
        $("#confirm_password").css('background-color', '#fff');
        validPass = true;
        enableNext1();
    }

}

function enableNext1() {
    if (validMail === true && validPass === true) {
        $("#next1").removeAttr("disabled");
        $("#next1").removeClass("action-button-disabled");
        $("#userEmail").css('background-color', '#fff');
        $("#userEmail-info").html("");
    }
}

//password.onchange = validatePassword;
//confirm_password.onkeyup = validatePassword;


var validfname = false;
var validlname = false;
var mobileNo = false;
function validateNames() {
    if (!$("#fname").val()) {
        $("#fname-info").html("(required)");
        $("#fname").css('background-color', '#FFFFDF');
        validfname = false;
    } else { validfname = true; }


    validlname = true;




    enableNext2();
}


function validateMobile() {
    var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{2})[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!$("#mobileNo").val().match(phoneno)) {
        $("#mobileNo-info").html("(required)");
        $("#mobileNo").css('background-color', '#FFFFDF');
        mobileNo = false;
    } else {
        mobileNo = true;
        //alert("true");
    }



    enableNext2();
}


function enableNext2() {
    if (validlname === true && validfname === true && mobileNo === true) {
        $("#next2").removeAttr("disabled");
        $("#next2").removeClass("action-button-disabled");
        $("#mobileNo").css('background-color', '#fff');
        $("#mobileNo-info").html("");

        $("#lname").css('background-color', '#fff');
        $("#lname-info").html("");

        $("#fname").css('background-color', '#fff');
        $("#fname-info").html("");
    }
}

