document.addEventListener('DOMContentLoaded', function(){
    let dropdownHome = function (){
       let delivery__header = document.querySelectorAll('.h2__title')
   
       delivery__header.forEach(item => {
         item.addEventListener('click', active__dropdown)
       });
   
       function active__dropdown() {
         this.parentElement.classList.toggle('active__dropdown')
       }
     };
     dropdownHome();  
   });
   