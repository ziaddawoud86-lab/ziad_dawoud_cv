function showSection(id) {
  var sections = document.querySelectorAll('section');
  sections.forEach(function(sec) {
    sec.classList.add('hidden');
  });

  document.getElementById(id).classList.remove('hidden');
}
