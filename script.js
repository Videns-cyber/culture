let element = document.getElementById('menu');
let mark = document.getElementById('mainMenu');
element.onclick = function(event){
//  console.log(event);
   
    
    if (element.className == '.icon'){
        event.target.classList.add(' responsive');
        }
    else 
          
        mark.classList.toggle('responsive');   
}

let element_footer = document.getElementById('menuFooter');
let mark_footer = document.getElementById('mainMenuFooter');
element_footer.onclick = function(event){
//  console.log(event);
   
    
    if (element_footer.className == '.icon-footer'){
        event.target.classList.add(' responsive');
        }
    else 
          
        mark_footer.classList.toggle('responsive');   
}