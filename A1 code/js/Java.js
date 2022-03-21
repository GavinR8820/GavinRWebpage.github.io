var containsOnlyDigits = /^[a-z]+$/;
var QuanApple = 0, QuanPine = 0, QuanMango = 0, QuanDragon = 0, QuanBanana = 0;
function AddA(){
    QuanApple = prompt("Enter the amount you would like to purchase.");


    if (containsOnlyDigits.test(QuanApple)){
            QuanApple = prompt("Please enter a positive interger");
        }
        else{

            QuanApple = parseInt(QuanApple);
        }


}
function AddP(){
    QuanPine = prompt("Enter the amount you would like to purchase.");


    if (containsOnlyDigits.test(QuanPine)){
            QuanPine = prompt("Please enter a positive interger");
        }
        else{

            QuanPine = parseInt(QuanPine);
        }


}
function AddM(){
    QuanMango = prompt("Enter the amount you would like to purchase.");


    if (containsOnlyDigits.test(QuanMango)){
            QuanMango = prompt("Please enter a positive interger");
        }
        else{

            QuanMango = parseInt(QuanMango);
        }


}
function AddD(){
    QuanDragon = prompt("Enter the amount you would like to purchase.");


    if (containsOnlyDigits.test(QuanApple)){
            QuanDragon = prompt("Please enter a positive interger");
        }
        else{

            QuanDragon = parseInt(QuanDragon);
        }


}
function AddB(){
    QuanBanana = prompt("Enter the amount you would like to purchase.");


    if (containsOnlyDigits.test(QuanApple)){
            QuanBanana = prompt("Please enter a positive interger");
        }
        else{

            QuanBanana = parseInt(QuanBanana);
        }


}
function Checkout(){
    
    let Name = prompt('Enter your name');
    let BeforeTax = (QuanApple*4.99) + (QuanPine*6.99) 
    + (QuanMango*7.99) + (QuanDragon*7.99) + (QuanBanana*6.99);
    let Tax = 13 * BeforeTax/100;
    let totalPrice = BeforeTax + Tax;

    var myOutput = 'Thank you! <br>';
    myOutput += `
                Name            : ${Name} <br>
                Apple(s)        : ${QuanApple} = ${QuanApple*4.99}<br>
                Pineapple(s)    : ${QuanPine} = ${QuanPine*6.99}<br>
                Mango(s)        : ${QuanMango} = ${QuanMango*7.99}<br>
                Dragon Fruit(s) : ${QuanDragon} = ${QuanDragon*7.99}<br>
                Banana(s)       : ${QuanBanana}= ${QuanBanana*6.99} <br>
                Price Before Tax: $${BeforeTax.toFixed(2)} <br>
                Tax             : $${Tax.toFixed(2)} <br>
                Total Cost      : $${totalPrice.toFixed(2)}
        `;
        document.getElementById('Recipt').innerHTML = myOutput;
    
        
}