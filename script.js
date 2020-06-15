// remove cart item

var cartItemRemoveBtns = document.getElementsByClassName("remove-item");
for (let i = 0; i < cartItemRemoveBtns.length; i++) {
    const cartItemRemoveBtn = cartItemRemoveBtns[i];
    cartItemRemoveBtn.addEventListener('click', function (event) {
        event.target.parentElement.parentElement.parentElement.remove()

        upDateTotalPrice()
    }
    )

}

// function for Update total price
function upDateTotalPrice() {
    let cartItems = document.getElementsByClassName("cart-items");
    for (let i = 0; i < cartItems.length; i++) {
        const cartItem = cartItems[i];

        const elementPrice = cartItem.getElementsByClassName("element-price")[0].innerHTML;
        const elementPriceInt = parseFloat(elementPrice);


        const elementQun = cartItem.getElementsByClassName("element-qun")[0].defaultValue
        const elementQunInt = parseFloat(elementQun);



        let totalPrices = document.getElementsByClassName("Total-prices")


        for (let j = 0; j < totalPrices.length; j++) {

            const i = document.getElementsByClassName("total-prices")[j].innerHTML //= elementPriceInt * elementQunInt

            console.log(i);

        }



    }

}
