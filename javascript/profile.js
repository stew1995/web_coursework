// Profile Javascript
//Right bar

function groupNext() {
  var hideWhoAdd = document.getElementById("hideWhoAdd").style;
  var groupNext = document.groupCreate.groupNext;
  var groupBox = document.getElementById("groupAdding").style;
  var saveGroup = document.getElementById("saveGroup").style;
  if(hideWhoAdd.display === "block" && groupBox.display === "block") {
    hideWhoAdd.display = "none";
    groupBox.display = "none";
    saveGroup.display = "none";
    groupNext.value = "Next";
  }
    else {
      hideWhoAdd.display = "block";
      groupBox.display = "block";
      saveGroup.display = "block";
      groupNext.value = "Close";
    }

  var name = document.getElementById("inputGroupName").value;
  var output = document.getElementById("groupNameValue");

  output.innerHTML = name;

}
var groupNextBtn = document.getElementById("groupNext");
groupNextBtn.addEventListener("click", groupNext);

function showCreatedGroups() {
  var groups = document.getElementById("createdGroups").style;

  if(groups.display === "block") {
    groups.display = "none";
  }
    else {
      groups.display = "block";
    }
};

var b = document.getElementById("showCreatedGroups");
b.addEventListener("click", showCreatedGroups);

function showCreatedGroupName(){
  var name = document.getElementById("inputGroupName").value;
  var output = document.getElementById("groupNameValue");

  name = output;
  document.write(output);
}

var groupNameShow = document.getElementById("group");


function putNameInField(){
  var input = document.getElementById(("groundFriendInput")).value;
  var field = document.getElementById("groupAdding").value;

  if(input != ""){
    document.housemateInGroup.groupAdding.value = input;
  }
}

var addHousemateGroup = document.getElementById("addHousemate");
addHousemateGroup.addEventListener("click", putNameInField);
//Notes section
//Need to check creating notes as it creates too many
function createNote(){
  for(var x=1;x<10;x++){
    var note = document.createElement("textarea");
    note.id= "profileNote"+ x;
    note.cols = 15;
    note.rows = 10;
    note.value = x;
    note.style.background = "#ffff99";
    note.style.maxWidth = "88%";
    note.style.maxHeight = "100px";
    //note.maxLength = 2000; max number of characters
    document.getElementById("notesOutput").appendChild(note);
  }
}
var createNoteBtn = document.getElementById("createNoteBtn");
createNoteBtn.addEventListener("click", createNote);

//Remove note
function removeNote(){
  var input = document.getElementById("removeNoteInput").value;
  var notes = document.getElementById("notesOutput");



    notes.removeChild(notes.childNodes[1]);

}

var removeNoteBtn = document.getElementById("removeNoteBtn");
removeNoteBtn.addEventListener("click", removeNote);
//Profile center

//Makes textarea readOnly and editable
//true and false

document.getElementById('editBio').onclick = function() {
   document.getElementById('inputBio').readOnly = false;
};

document.getElementById("doneBio").onclick = function() {
  document.getElementById("inputBio").readOnly = true;
};


//Profile side bar table
//Profile Picture

function showPictureUpload() {
  var upload = document.getElementById("uploadProfileImage").style;
  var btn = document.getElementById("changeProfilePicture");

  if(upload.display === "block"){
    upload.display = "none";
    btn.value = "Choose Profile Picture";
    btn.style.margin = "0 25%";
  } else {
    upload.display = "block";
    btn.value = "Back";
    btn.style.margin = "0 45%";
  }
}
var showPicUpload = document.getElementById("changeProfilePicture");
showPicUpload.addEventListener("click", showPictureUpload);

//Show Picture after upload

function loadImageFileAsURL() {
  var filesSelected = document.getElementById("inputFileToLoad").files;
    if (filesSelected.length > 0) {
    var fileToLoad = filesSelected[0];

    if (fileToLoad.type.match("image.*")) {
      var fileReader = new FileReader();
      fileReader.onload = function(fileLoadedEvent) {
      var imageLoaded = document.createElement("img");
      imageLoaded.width = 150;
      imageLoaded.height = 150;
      imageLoaded.src = fileLoadedEvent.target.result;
      document.getElementById("loadProfileImage").appendChild(imageLoaded);
    };
    fileReader.readAsDataURL(fileToLoad);
    }
  }
}

var pictureUpload = document.getElementById("inputFileToLoad");
pictureUpload.addEventListener("change", loadImageFileAsURL);


/*
//Show and hide table
function showTable() {
  var table = document.getElementById("myTable").style;

    if(table.display === "block") {
      table.display = "none";
    }
    else {
      table.display = "block";
    }
};

var e = document.getElementById("tableButton");
e.addEventListener("click", showTable);
*/


//Table Edits ----------------------
//Look into as this way doesnt work
/*
function editUsername() {
  var input = document.getElementsByName("usernameInput").readOnly;

  if(input === true) {
    input = false;
  }
  else {
    input = true;
  }
}

var e = document.getElementById("editUsername");
e.addEventListener("click", editUsername);
*/



//Change table content
//Edit Name
function editName() {
  var x = document.getElementById("myTable").rows[0].cells;
  var y = document.getElementById("nameChange").value;
    x[1].innerHTML = y;
};


var d = document.getElementById("editName");
d.addEventListener("click", editName);

//Edit Username

function editUsername() {
  var x = document.getElementById("myTable").rows[1].cells;
  var y = document.getElementById("usernameChange").value;

    x[1].innerHTML = y;
};

var e = document.getElementById("editUsername");
e.addEventListener("click", editUsername);

//Change Password
function editPassword() {
  var x = document.getElementById("myTable").rows[2].cells;
  var y = document.getElementById("passwordChange").value;

  x[1].innerHTML = y;
};

var f = document.getElementById("editPassword");
f.addEventListener("click", editPassword);


//Change Email
function editEmail() {
  var x = document.getElementById("myTable").rows[3].cells;
  var y = document.getElementById("passwordChange").value;

  x[1].innerHTML = y;
};

var g = document.getElementById("editEmail");
g.addEventListener("click", editEmail);


//Change Mobile

function changeMobile() {
  var x = document.getElementById("myTable").rows[4].cells;
  var y = document.getElementById("mobileChange").value;

  x[1].innerHTML = y;
};

var h = document.getElementById("editMobile");
h.addEventListener("click", changeMobile);

//Edit Home Number

function changeHome() {
  var x = document.getElementById("myTable").rows[5].cells;
  var y = document.getElementById("homeChange").value;

  x[1].innerHTML = y;
};

var i = document.getElementById("editHome");
i.addEventListener("click", changeHome);

//Change Address

function editAddress() {
  var x = document.getElementById("myTable").rows[6].cells;
  var y = document.getElementById("addressChange").value;

  x[1].innerHTML = y;
};

var j = document.getElementById("editAddress");
j.addEventListener("click", editAddress);

//Change Course

function editCourse() {
  var x = document.getElementById("myTable").rows[8].cells;
  var y = document.getElementById("courseChange").value;

  x[1].innerHTML = y;
};

var k = document.getElementById("editCourse");
k.addEventListener("click", editCourse);

//Edit Year of Study

function editYearStudy() {
  var x = document.getElementById("myTable").rows[9].cells;
  var y = document.getElementById("yearStudyChange").value;

  x[1].innerHTML = y;
};

var l = document.getElementById("editStudyYear");
l.addEventListener("click", editYearStudy);


//Edit Accomodation
function editAccomodation() {
  var x = document.getElementById("myTable").rows[10].cells;
  var y = document.getElementById("housingChange").value;

  x[1].innerHTML = y;
};

var m = document.getElementById("editHousing");
m.addEventListener("click", editAccomodation);


//Edit Hobbies
function editHobbies() {
  var x = document.getElementById("myTable").rows[12].cells;
  var y = document.getElementById("hobbieChange").value;

  x[1].innerHTML = y;
};

var n = document.getElementById("editHobbie");
n.addEventListener("click", editHobbies);

//Edit Interest
function editInterests() {
  var x = document.getElementById("myTable").rows[13].cells;
  var y = document.getElementById("interestChange").value;

  x[1].innerHTML = y;
};

var o = document.getElementById("editInterest");
o.addEventListener("click", editInterests);

//Edit Society
function editSocieties() {
  var x = document.getElementById("myTable").rows[14].cells;
  var y = document.getElementById("societyChange").value;

  x[1].innerHTML = y;
};

var p = document.getElementById("editSociety");
p.addEventListener("click", editSocieties);


function completeChangeBtn() {
  var name = document.getElementById("singleNameEdit").style;
  var username = document.getElementById("singleUsernameEdit").style;
  var password = document.getElementById("singlePasswordEdit").style;
  var email = document.getElementById("singleEmailEdit").style;
  var mobile = document.getElementById("singleMobileEdit").style;
  var home = document.getElementById("singleHomeEdit").style;
  var address = document.getElementById("singleAddressEdit").style;

  if(name.display === "block" && username.display === "block" &&
    password.display === "block" && email.display === "block" &&
    mobile.display === "block" && home.display === "block" &&
    address.display === "block") {
  name.display = "none";
  username.display = "none";
  password.display = "none";
  email.display = "none";
  mobile.display = "none";
  home.display = "none";
  address.display = "none";
  }
  var course = document.getElementById("singleCourseEdit").style;
  var year = document.getElementById("singleYearEdit").style;
  var housing = document.getElementById("singleHousingEdit").style;

  if(course.display === "block" && year.display === "block" && housing.display === "block") {
  course.display = "none";
  year.display = "none";
  housing.display = "none";
}
  var hobbies = document.getElementById("singleHobbieEdit").style;
  var interest = document.getElementById("singleInterestEdit").style;
  var society = document.getElementById("singleSocietyEdit").style;

  if(hobbies.display === "block" && interest.display === "block" &&
    society.display === "block") {
  hobbies.display = "none";
  interest.display = "none";
  society.display = "none";
}

  var doneBasic = document.getElementById("completeChangeBtn").style;
  var edit = document.getElementById("editProfileBtns").style;

  if(doneBasic.display === "block") {
    doneBasic.display = "none";
  } else if (edit.display === "block") {
      edit.display = "none";
  }

  var table = document.getElementById("myTable").style;;
  if(table.display === "none"){
    table.display = "block";
  }

}

var completeBtn = document.getElementById("completeChangeBtn");
completeBtn.addEventListener("click", completeChangeBtn);

//Edit only Basic Infomation
//See if this section can be simplified

function editBasicInfoShow() {
  var title = document.getElementById("basicTitle").style;
  var name = document.getElementById("singleNameEdit").style;
  var username = document.getElementById("singleUsernameEdit").style;
  var password = document.getElementById("singlePasswordEdit").style;
  var email = document.getElementById("singleEmailEdit").style;
  var mobile = document.getElementById("singleMobileEdit").style;
  var home = document.getElementById("singleHomeEdit").style;
  var address = document.getElementById("singleAddressEdit").style;

  var doneBasic = document.getElementById("completeChangeBtn").style;
  var table = document.getElementById("myTable").style;
  var edit = document.getElementById("editProfileBtns").style;

  if(name.display === "none" && username.display === "none" &&
    password.display === "none" && email.display === "none" &&
    mobile.display === "none" && home.display === "none" &&
    address.display === "none" && title.display === "none") {

    title.display = "block";
    name.display = "block";
    username.display = "block";
    password.display = "block";
    email.display = "block";
    mobile.display = "block";
    home.display = "block";
    address.display = "block";
    doneBasic.display = "block";
    table.display = "none";
    edit.display = "none";
  }
  else {
    title.display = "none";
    name.display = "none";
    username.display = "none";
    password.display = "none";
    email.display = "none";
    mobile.display = "none";
    home.display = "none";
    address.display = "none";
    doneBasic.display = "none";
  }
};

var editBasicBtn = document.getElementById("editBasicBtn");
 editBasicBtn.addEventListener("click", editBasicInfoShow);

 //Edit only Uni Info

 function editUniInfoShow() {
   var title = document.getElementById("uniTitle").style;
   var course = document.getElementById("singleCourseEdit").style;
   var year = document.getElementById("singleYearEdit").style;
   var housing = document.getElementById("singleHousingEdit").style;
   var doneBasic = document.getElementById("completeChangeBtn").style;
   var table = document.getElementById("myTable").style;
   var edit = document.getElementById("editProfileBtns").style;

   if(title.display === "none" && course.display === "none" &&
      year.display === "none" && housing.display === "none") {
       title.display = "block";
       course.display = "block";
       year.display = "block";
       housing.display = "block";
       doneBasic.display = "block";
       table.display = "none";
       edit.display = "none";
   }
   else {
     title.display = "none";
     course.display = "none";
     year.display = "none";
     housing.display = "none";
     doneBasic.display = "none";
   }
 }

 var editUniBtn = document.getElementById("editUniBtn");
  editUniBtn.addEventListener("click", editUniInfoShow);

  //Edit only About Yourself

  function editAboutInfoShow() {
    var hobbies = document.getElementById("singleHobbieEdit").style;
    var interest = document.getElementById("singleInterestEdit").style;
    var society = document.getElementById("singleSocietyEdit").style;
    var doneBasic = document.getElementById("completeChangeBtn").style;
    var table = document.getElementById("myTable").style;
    var edit = document.getElementById("editProfileBtns").style;
    var title = document.getElementById("aboutTitle").style;

    if(hobbies.display === "none" && interest.display === "none" &&
      society.display === "none" && title.display === "none") {
      title.display = "block";
      hobbies.display = "block";
      interest.display = "block";
      society.display = "block";
      table.display = "none";
      doneBasic.display = "block";
      edit.display = "none";
    }
    else {
      title.display = "none";
      hobbies.display = "none";
      interest.display = "none";
      society.display = "none";
      doneBasic.display = "none";
    }
  }

  var editAboutBtn = document.getElementById("editAboutBtn");
   editAboutBtn.addEventListener("click", editAboutInfoShow);



   // This needs to be done like the others have been

      function EditProfile() {
        var table = document.getElementById("myTable").style;
        var btn = document.getElementById("completeChangeBtn").style;
        var edit = document.getElementById("editProfileBtns").style;

         if(table.display === "block") {
             table.display = "none";
             showSingleName();
             showSingleUsername();
             showSinglePasseword();
             showSingleEmail();
             showSingleMobile();
             showSingleHome();
             showSingleAddress();
             showSingleCourse();
             showSingleYear();
             showSingleHousing();
             showSingleHobbie();
             showSingleInterest();
             showSingleSociety();
             btn.display = "block";
           }
           else {
             table.display = "block";
             showSingleName();
             showSingleUsername();
             showSinglePasseword();
             showSingleEmail();
             showSingleMobile();
             showSingleHome();
             showSingleAddress();
             showSingleCourse();
             showSingleYear();
             showSingleHousing();
             showSingleHobbie();
             showSingleInterest();
             showSingleSociety();
             btn.display = "none";
           }

      };

      var editBtn = document.getElementById("tableButton");
      editBtn.addEventListener("click", EditProfile);
   // Change Induvidual Profile Data

 function showSingleName () {
     //Basic Information
     var name = document.getElementById("singleNameEdit").style;
     //var table = document.getElementById("myTable").style;
        if(name.display === "none") {
          name.display = "block";
          //table.display = "none";
        } else {
          name.display = "none";
          //table.display = "block";
        }
   };

   var nameChange = document.getElementById("nameBtn");
   nameChange.addEventListener("click", showSingleName);


   function showSingleUsername() {
     var username = document.getElementById("singleUsernameEdit").style;
     //var table = document.getElementById("myTable").style;
        if(username.display === "none") {
          username.display = "block";
          //table.display = "none";
        } else {
          username.display = "none";
          //table.display = "block";
        }
   };

   var userChange = document.getElementById("usernameBtn");
   userChange.addEventListener("click", showSingleUsername);

   function showSinglePasseword() {
     var password = document.getElementById("singlePasswordEdit").style;
     //var table = document.getElementById("myTable").style;
        if(password.display === "none") {
          password.display = "block";
          //table.display = "none";
        } else {
          password.display = "none";
          //table.display = "block";
        }
   };

   var changePassword = document.getElementById("passwordBtn");
   changePassword.addEventListener("click", showSinglePasseword);

   function showSingleEmail() {
     var email = document.getElementById("singleEmailEdit").style;
     //var table = document.getElementById("myTable").style;
        if(email.display === "none") {
          email.display = "block";
          //table.display = "none";
        } else {
          email.display = "none";
          //table.display = "block";
        }
   };

   var changeEmail = document.getElementById("emailBtn");
   changeEmail.addEventListener("click", showSingleEmail);

   function showSingleMobile() {
     var mobile = document.getElementById("singleMobileEdit").style;
     //var table = document.getElementById("myTable").style;
        if(mobile.display === "none") {
          mobile.display = "block";
          //table.display = "none";
        } else {
          mobile.display = "none";
          //table.display = "block";
        }
   };

   var changeMobile = document.getElementById("mobileBtn");
   changeMobile.addEventListener("click", showSingleMobile);

   function showSingleHome() {
     var home = document.getElementById("singleHomeEdit").style;
     //var table = document.getElementById("myTable").style;
        if(home.display === "none") {
          home.display = "block";
          //table.display = "none";
        } else {
          home.display = "none";
          //table.display = "block";
        }
   };

   var changeHome = document.getElementById("homeBtn");
   changeHome.addEventListener("click", showSingleHome);

   function showSingleAddress() {
     var address = document.getElementById("singleAddressEdit").style;
     //var table = document.getElementById("myTable").style;
        if(address.display === "none") {
          address.display = "block";
          //table.display = "none";
        } else {
          address.display = "none";
          //table.display = "block";
        }
   };

   var changeAddress = document.getElementById("addressBtn");
   changeAddress.addEventListener("click", showSingleAddress);

   function showSingleCourse() {
     var course = document.getElementById("singleCourseEdit").style;

     //var table = document.getElementById("myTable").style;
        if(course.display === "none") {
          course.display = "block";
          //table.display = "none";
        } else {
          course.display = "none";
          //table.display = "block";
        }
   };

   var changeCourse = document.getElementById("courseBtn");
   changeCourse.addEventListener("click", showSingleCourse);

   function showSingleYear() {
     var year = document.getElementById("singleYearEdit").style;

     //var table = document.getElementById("myTable").style;
        if(year.display === "none") {
          year.display = "block";
          //table.display = "none";
        } else {
          year.display = "none";
          //table.display = "block";
        }
   };

   var changeYear = document.getElementById("yearBtn");
   changeYear.addEventListener("click", showSingleYear);

   function showSingleHousing() {
     var housing = document.getElementById("singleHousingEdit").style;

     //var table = document.getElementById("myTable").style;
        if(housing.display === "none") {
          housing.display = "block";
          //table.display = "none";
        } else {
          housing.display = "none";
          //table.display = "block";
        }
   };

   var changeHousing = document.getElementById("housingBtn");
   changeHousing.addEventListener("click", showSingleHousing);

   function showSingleHobbie() {
     var hobbie = document.getElementById("singleHobbieEdit").style;

     //var table = document.getElementById("myTable").style;
        if(hobbie.display === "none") {
          hobbie.display = "block";
          //table.display = "none";
        } else {
          hobbie.display = "none";
          //table.display = "block";
        }
   };

   var changeHobbie = document.getElementById("hobbieBtn");
   changeHobbie.addEventListener("click", showSingleHobbie);

   function showSingleInterest() {
     var interest = document.getElementById("singleInterestEdit").style;

     //var table = document.getElementById("myTable").style;
        if(interest.display === "none") {
          interest.display = "block";
          //table.display = "none";
        } else {
          interest.display = "none";
          //table.display = "block";
        }
   };

   var changeInterest = document.getElementById("interestBtn");
   changeInterest.addEventListener("click", showSingleInterest);

   function showSingleSociety() {
     var society = document.getElementById("singleSocietyEdit").style;

     //var table = document.getElementById("myTable").style;
        if(society.display === "none") {
          society.display = "block";
          //table.display = "none";
        } else {
          society.display = "none";
          //table.display = "block";
        }
   };

   var changeSociety = document.getElementById("societyBtn");
   changeSociety.addEventListener("click", showSingleSociety);