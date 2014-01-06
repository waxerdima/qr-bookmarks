(function() {
var script = document.createElement('script');
script.src = '//goo.gl/uJfzA';
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
  div.style.backgroundColor = '#FFF';
  div.style.border = '1px solid #999';
  div.style.borderRadius = '30px';
  div.style.padding = '40px';
  div.onclick = function() {
    this.parentNode.removeChild(this);    
  };
  document.documentElement.appendChild(div);  
	return id; 
}
})();
