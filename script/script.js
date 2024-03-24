
let button= document.querySelector('#email');
button.addEventListener('click',function () {
   document.querySelector('#email').innerHTML="<div class='container-fluid'><h1 class='text-danger text-decoration-underline'>WorkParadise12@proton.me</h1></div>";
  
});


let documents=document.querySelector('.modal-body').innerHTML=`

                  <h2>Only Bitcoin </h2>

<h2 class='text-danger fs-5'> Put Here Your Bitcoin Address </h2>

 `;

