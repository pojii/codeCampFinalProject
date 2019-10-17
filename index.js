function addTalent() {
    var node = document.createElement("li");
    var textnode = document.createTextNode(document.getElementById("talent").value);
    node.appendChild(textnode);
    document.getElementById("talentList").appendChild(node);
    document.getElementById("talent").value = "";
}
function deleteTalent(deleteTalent) {
    var tarentList = $("talentList").children();
    console.log(tarentList)
    // var tarentList = document.getElementById("talentList");
    // for (var i = 0; i < tarentList.length; i++) {
    //     var talent = tarentList[i];
    //     if(talent.innerHTML == deleteTalent){
    //         talent = "";
    //     }
    // }
}
deleteTalent();
document.getElementById('talentForm').onsubmit = function (e) {
    e.preventDefault();
    addTalent();
    return false
}
document.getElementById('changeNameForm').onsubmit = function (e) {
    e.preventDefault();
    document.getElementById("name").innerHTML = document.getElementById("nameField").value;
    document.getElementById("surname").innerHTML = document.getElementById("surnameField").value;
    return false
}
document.getElementById('changeBG').onsubmit = function (e) {
    e.preventDefault();
    document.getElementsByTagName("body")[0].style = "background-color:" + document.getElementById("bgField").value;
    return false
}