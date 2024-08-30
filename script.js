const toggleBtn = document.querySelector('.toggle-menu button i');
const navMenu = document.querySelector('.nav-menu ul');


toggleBtn.addEventListener('click',function() {
    navMenu.classList.toggle('show')
});

// <-----------------------------------------------------------------end-----------
const darkmodetoggle = document.querySelector('.dark-mode-toggle');
const body = document.querySelector('body');


darkmodetoggle.addEventListener('click', ()=>{
    body.classList.toggle('dark-mode');
    updateDarkmodeicon();
});

function updateDarkmodeicon() {
    const darkmodeicon = darkmodetoggle.querySelector('i');
    if(body.classList.contains('dark-mode')){
        darkmodeicon.classList.remove('fa-solid fa-moon');
        darkmodeicon.classList.add('fa-solid fa-bars');
        
    }
    else{
        darkmodeicon.classList.add('fa-solid fa-moon');
        darkmodeicon.classList.removr('fa-solid fa-bars');
        
    }
}

// ----------------------------------------Add to cart---------------------------------------



document.addEventListener('DOMContentLoaded', () => {
    const carticons = document.querySelectorAll('.section-3 .slide .images a');
    const cartcount = document.querySelector('.nav-icons .sp');
    const totalamount = document.querySelector('.nav-icons .total .total-amount'); 
    const orderbutton = document.querySelector('.nav-icons .Order-btn');

    carticons.forEach(icon => {
        icon.addEventListener('click', (event) => {
            event.preventDefault();  
            let count = parseInt(cartcount.textContent);
            count++;
            cartcount.textContent = count;
            
            // update total amount
            const price = parseFloat(icon.closest('.images').dataset.price);
            let total = parseFloat(totalamount.textContent);
            total += price;
            totalamount.textContent = total.toFixed(2);
        });
    });

    // Correctly add event listener to the order button
    orderbutton.addEventListener('click', () => {
        // reset the cart count and total amount
        cartcount.textContent = '0';
        totalamount.textContent = '0.00';
        // display thank you message
        alert('Thank you for your order! Have a good day!');
    });
});


// --------------------------start rating system----------------------------


document.addEventListener('DOMContentLoaded', function(){
    const stars = document.querySelectorAll('.rating i');
    const modal = document.getElementById('thankyoumodal');
    const messageElement = document.getElementById('thankyoumessage');
    const closemodal = document.getElementById('close');


    stars.forEach(star => {
        star.addEventListener('click', function(){
            const rating = this.getAttribute('data-rating');
            const parent = this.parentNode;

            parent.setAttribute('data-rating', rating);


            updatestars(parent,rating);
            displaythankyou(rating);
        });
    });

    function updatestars(parent, rating){

        const stars = parent.querySelectorAll('i');

        stars.forEach(star =>{
            if(star.getAttribute('data-rating') <= rating){
                star.classList.remove('fa-regular');
                star.classList.add('fa-solid');
            }else{
                star.classList.add('fa-regular');
                star.classList.remove('fa-solid');
            }
        });
    }

    function displaythankyou(rating) {

        let message = '';

        switch(rating){
            case '5':
              message = 'thanks for giving a 5-star rating'
              break; 
            case '4':
              message = 'thanks for giving a 4-star rating'
              break; 
            case '3':
              message = 'thanks for giving a 3-star rating'
              break; 
            case '2':
              message = 'thanks for giving a 2-star rating'
              break; 
            case '1':
              message = 'thanks for giving a 1-star rating'
              break; 
              default:
                message = '';
                break;
        }

        messageElement.textContent = message;
        modal.style.display = 'block';

    }

    closemodal.addEventListener('click', function(){
        modal.style.display = "none";
    });

});