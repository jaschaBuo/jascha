setInterval(()=>{
  var now = new Date();
  date.innerText = now.toDateString()+" - "+now.toLocaleTimeString();
},500);
