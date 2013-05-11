(function() {
var script = document.createElement('script');
script.src = 'http://www.ispec.ru/qrcode.min.js';
document.documentElement.appendChild(script);   
script.onload = function() {
  var 
    id = createWindow(),
    qrcode = new QRCode(document.getElementById(id), {
      width: 200,
      height: 200
    });

  qrcode.makeCode(location.href);
}

function createWindow() {
  var 
    id = +(new Date()) + '-qrcode',
    div = document.createElement('div');

  div.id = id;
  div.style.top = '40%';
  div.style.left = '40%';
  div.style.width = '200px';
  div.style.height = '200px';
  div.style.position = 'fixed';
  div.style.zIndex = '999999999';
  div.onclick = function() {
    this.parentNode.removeChild(this);    
  };
  document.documentElement.appendChild(div);  
	return id; 
}
})();
