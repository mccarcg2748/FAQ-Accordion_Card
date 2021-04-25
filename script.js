let acc = document.getElementsByClassName('accordion');
let panel = document.getElementsByClassName('panel');
let arrow = document.querySelectorAll('.arrow');


for(const acc of accordion){
  acc.addEventListener('click', () =>{
    console.log(acc);
    acc.classList.toggle("active");
    let panel = acc.nextElementSibling;
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
