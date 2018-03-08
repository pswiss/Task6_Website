var websocket = null; // websocket instance
var localhost = "192.168.1.65";
var btn = document.getElementById('btnWS');
var buttonClicked = false;
var time = document.getElementById('timestamp');

btn.addEventListener('click',updateButton);

function updateButton(){
    if(btn.textContent == 'Start'){
        btn.textContent = 'Stop';
        btn.title = 'Click to stop webcam';
        btn.disabled = false;
        //time.textContent = Math.floor(Date.now());
        var dt = new Date();
        time.textContent = dt.toUTCString();
    }
    else{
        btn.textContent = 'Start';
        btn.title = 'Click to start webcam';
        btn.disabled = false;

    }
}




/*
// Initialize the websocket
function init() {
	if(window.location.hostname != "") {
		localhost = window.location.hostname;
	}

	doConnect();
}

function doConnect() { // makes a connection and defines callbacks
	if (btn.innerText == "Start") {
		writeToScreen("Connecting to ws://" + localhost + "/stream ...");
		btn.disabled = true;
		websocket = new WebSocket("ws://" + localhost + "/stream");
		websocket.onopen = function(evt) {
			onOpen(evt)
		};
		websocket.onclose = function(evt) {
			onClose(evt)
		};
		websocket.onmessage = function(evt) {
			onMessage(evt)
		};
		websocket.onerror = function(evt) {
			onError(evt)
		};
	} else {
		writeToScreen("Disconnecting ...");
		websocket.close();
	}
}

function onOpen(evt) { // when handshake is complete:
	writeToScreen("Connected.");
	btn.innerText = 'Stop';
    btn.title = 'Click to stop webcam';
    btn.disabled = false;
	buttonClicked = false;
}

function onClose(evt) { // when socket is closed:
	writeToScreen("Disconnected. Error: " + evt);
	btn.innerText = 'Start';
    btn.title = 'Click to start webcam';
    btn.disabled = false;
    
    // If the user never actually clicked the button to stop the webcam, reconnect.
	if (buttonClicked == false) {
		doConnect();
	}
	buttonClicked = false;
}

function onMessage(msg) { // when client receives a WebSocket message because a new image is ready:
	time.textContent = Math.floor(Date.now());
	// Get the image just taken from WiFi chip's RAM.
	var image = document.getElementById('image');
	var reader = new FileReader();
	reader.onload = function(e) {
		var img_test = new Image();
		img_test.onload = function(){image.src = e.target.result;};
		img_test.onerror = function(){;};
		img_test.src = e.target.result;
	};
	reader.readAsDataURL(msg.data);
}

function onError(evt) { // when an error occurs
	websocket.close();
	writeToScreen("Websocket error");
	
	btn.innerText = 'Start';
    btn.title = 'Click to start webcam';
    btn.disabled = false;	
	
	buttonClicked = false;
}

// Set up event listeners
btn.addEventListener('click',newListener);
newListener(){
    btn.disabled = true;
    buttonClicked = false;
    if(websocket.onopen){
        doConnect();
    }
    else{
        websocket.close();
    }
}


// Function to display to the message box
 function writeToScreen(message)
  {
	document.getElementById("msg").innerHTML += message + "\n";
	document.getElementById("msg").scrollTop = document.getElementById("msg").scrollHeight;
  }

// Open Websocket as soon as page loads
window.addEventListener("load", init, false);



*/