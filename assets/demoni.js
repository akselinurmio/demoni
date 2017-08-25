var body = document.body;
var html = document.documentElement;
var logo = document.getElementById('footer-logo');

logo.onclick = function() {
  if (body.className.search(/\bbrutal\b/ig) !== -1) {
    body.classList.remove('brutal');
  } else {
    body.className += 'brutal';
  }
}
