function loadPage(page) {
  document.getElementById('content').innerHTML = '<object type="text/html" data="' + page + '.html"></object>';
}

document.querySelectorAll('input[name="tab"]').forEach(function(radioButton) {
  radioButton.addEventListener('change', function(event) {
      if (event.target.checked) {
          loadPage(event.target.value);
      }
  });
});

loadPage(document.querySelector('input[name="tab"]:checked').value);

