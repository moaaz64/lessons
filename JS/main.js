
function search(){
    let searchBar = document.querySelector('.search_input').value.toUpperCase();
    let productList =  document.querySelector('.title');
    let product = document.querySelectorAll('.box');
    let productName = document.getElementsByTagName('h2');

    for (let i = 0; i<productName.length; i++) {

        if(productName[i].innerHTML.toUpperCase().indexOf(searchBar) >= 0){

           product[i].style.display = "";

        } else {

        
            product[i].style.display='none';
          

     }
   }
};

