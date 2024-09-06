function toggleInfo() {
  const monthInfo = document.getElementById('monthInfo');
  const yearInfo = document.getElementById('yearInfo');

  const isMonthSelected = document.getElementById('month').checked;
  const isYearSelected = document.getElementById('year').checked;

  if (isMonthSelected) {
    monthInfo.classList.add('active');
    yearInfo.classList.remove('active');
  } else if (isYearSelected) {
    yearInfo.classList.add('active');
    monthInfo.classList.remove('active');
  }
}
 function openNav() {
   document.getElementById('mySidebar').style.width = '250px';
   document.getElementById('main').style.marginLeft = '250px';
 }

 function closeNav() {
   document.getElementById('mySidebar').style.width = '0';
   document.getElementById('main').style.marginLeft = '0';
 }