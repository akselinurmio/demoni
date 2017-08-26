// ADD BRUTALISM
var body = document.body;
var html = document.documentElement;
var logo = document.getElementById('footer-logo');

logo.onclick = function() {
  if (body.className.search(/\bbrutal\b/ig) !== -1) {
    sessionStorage.removeItem('brutal');
    body.classList.remove('brutal');
  } else {
    sessionStorage.setItem('brutal', 'true');
    body.className += 'brutal';
  }
}

if (sessionStorage.getItem('brutal') && body.className.search(/\bbrutal\b/ig) == -1) {
  body.className += 'brutal';
}
