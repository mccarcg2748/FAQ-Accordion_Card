let acc = document.querySelectorAll('.accordion');
let panel = document.getElementsByClassName('panel');
let arrow = document.querySelectorAll('.arrow');

for(const a of acc){
  a.addEventListener('click', () =>{
    a.classList.toggle("active");
    let panel = a.nextElementSibling;
    if(panel.style.display === "block") {
      panel.classList.add('unselect')
    } 
    else {
      panel.style.display = "block";
    }
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } 
    else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
