
var droneId = 'drone1'
var secret = 'dr0neRulez2A5T7U'

var confirmaButton = document.getElementById("confirmaButton");
confirmaButton.style.visibility = "hidden";
var myCommand = "empty"

function sendCommand(){
  var xmlhttp = new XMLHttpRequest();
  var url = "https://3vkeycenej.execute-api.us-east-1.amazonaws.com/prod/CIAB-2018-DroneCommandQueue?operation=PUSH&secret=" + secret + "&droneId=" + droneId + "&command=" + myCommand;
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4) {
      var jsonObject = null;
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

function commandPressed(command){
  confirmaButton.style.visibility = 'visible';
  myCommand = command;
}

function getStatus(){
  var xmlhttp = new XMLHttpRequest();
  var urlPeekStatus = "https://3vkeycenej.execute-api.us-east-1.amazonaws.com/prod/CIAB-2018-DroneCommandQueue?droneId=status&operation=PEEK&secret=dr0neRulez2A5T7U"
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 ) {
      document.getElementById('statusText').innerHTML=xmlhttp.responseText;
    }
  };

  xmlhttp.open("GET", urlPeekStatus, true);
  xmlhttp.send();

  setTimeout(getStatus, 1000);

}

getStatus()
