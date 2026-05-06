function showSection(id) {
  // إخفاء جميع الأقسام
  var sections = document.querySelectorAll('section');
  sections.forEach(function(sec) {
    sec.classList.add('hidden');
  });

  // إظهار القسم المطلوب
  document.getElementById(id).classList.remove('hidden');
}
