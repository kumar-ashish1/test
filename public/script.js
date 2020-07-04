const url = "wss://192.168.0.105:8000";
const connection = new WebSocket(url,"hello")

connection.onopen = () => {
  //onnection.send('hey')
  document.getElementById("msg").innerHTML = "Connection Success";
}

connection.onerror = (error) => {
  console.log(`WebSocket error: ${error}`)
  document.getElementById("msg").innerHTML = "Connection Error";
}

connection.onmessage = (e) => {
  console.log(e.data)
  document.getElementById("msg").innerHTML = e.data;
}
