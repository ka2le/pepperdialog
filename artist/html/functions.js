


function onload(){
	print("functions.js is loaded")
	  
}
function print(text){
	document.getElementById("container").innerHTML += "<br>" +text;
}
function old(){
	
	session.socket().on('connect', function () {
  print('QiSession connected!');
  // now you can start using your QiSession
}).on('disconnect', function () {
  print('QiSession disconnected!');
});
}
function newConnect(){
	QiSession(function (session) {
  print("connected!");
  // you can now use your QiSession
}, function () {
  print("disconnected");
});

}
function newConnect2(){
	/*QiSession.connect(function (session) {
	  session.service("ALTextToSpeech").then(function (tts) {
		// tts is a proxy to the ALTextToSpeech service
	  }, function (error) {
		print("An error occurred:", error);
	  });
	}, ...);*/
}
function tts(){
	tts.getLanguage().then(function (lang) {
	  print("I speak " + lang);
	}, function (error) {
	  print("An error occurred: " + error);
	});

}
 
//signal kod  
 
var signalLink;
var serviceDirectory;
function runService(){
	var id = document.getElementById("sId").value;
	var name = document.getElementById("sName").value;
	onServiceAdded(id,name);
}
function onServiceAdded(serviceId, serviceName)
{
  print("New service", serviceId, serviceName);
  serviceDirectory.serviceAdded.disconnect(signalLink);
}

function signal(){
session.service("ServiceDirectory").done(function (sd) {
  serviceDirectory = sd;
  serviceDirectory.serviceAdded.connect(onServiceAdded).done(function (link) {
    signalLink = link;
  }).fail(function (error) {
    print("An error occurred: " + error);
  });
});
}

function test(){
	//alert("Hello");
	print("test");
}
// -------------------------------------------------------- PHP Kod 
/* $.post( "php/php.php",   { 
		value: "test", 
		value2: "test2"
		},
	function( data ) {
		console.log(data);
		
	}); */