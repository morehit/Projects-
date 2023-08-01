document.addEventListener('DOMContentLoaded' , function(){
    const allbuttons = document.querySelectorAll('.searchBtn') ; 
    const searchBar = document.querySelector('.searchBar') ; 
    const searchInput = document.getElementById('searchInput') ; 
    const searchClose = document.getElementById('searchClose') ; 
    
    for(var i = 0 ; i< allbuttons.length ; i++ ){

        allbuttons[i].addEventListener('click' , function(){
             searchBar.style.visibility = 'visible' ; 
             searchBar.classList.add('open'); 
             this.setAttribute('area-expanded' , 'true' ) ; 
             searchInput.focus() ; 
        }); 

        searchClose.addEventListener('click' , function(){
             searchBar.style.visibility = 'hidden' ; 
             searchBar.classList.remove('open'); 
             this.setAttribute('area-expanded' , 'false' ) ; 
        }); 
    }


}); 