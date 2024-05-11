
function removeOption(){
var select = document.getElementById('removeSelect');
select.remove(select.selectedIndex);
}

function modifystyle(){
var paragraph =document.getElementById('paragraph');
paragraph.style.color ='blue';
paragraph.style.fontSize = '20px';
paragraph.style.fontWeight ='bold';
}


function submitForm(){
var firstName =document.getElementById('firstName');
var lastName =document.getElementById('lastName');
var contactNumber =document.getElementById('contactNumber');
var emailId =document.getElementById('emailId');


document.write("Bhavesh" +firstName +"<br>");
document.write("Khandar" + lastName+"<br>");
document.write("8055244093" + contactNumber+"<br>");
document.write("bhavesh@gmail.com" + emailId+"<br>");
}

var words =document.getElementById("word");
var boldWords = word.getElementById("strong");
function myfunction(){
for(var i=0; i< boldWords.length;i++){
    boldWords[i].style.color ="blue"
}
}

function myfunction2() {
for (var i=0; i< boldWords.length;i++){
    boldWords[i].style.color ="white";
}
}

