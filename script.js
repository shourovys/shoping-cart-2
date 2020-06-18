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
    for (let i = 0; i < cartItems.length + 1; i++) {
        const cartItem = cartItems[i];
        if (cartItems.length > 0) {
            const elementPrice = cartItem.getElementsByClassName("element-price")[i].innerHTML;
            const elementPriceInt = parseFloat(elementPrice);




            let totalPrices = document.getElementsByClassName("Total-prices")
            for (let j = 0; j < totalPrices.length; j++) {
                const totalPrice = totalPrices[j]
                totalPrice.innerHTML = "$" + elementPriceInt
            }
        }
        else {
            let totalPrices = document.getElementsByClassName("Total-prices")
            for (let j = 0; j < totalPrices.length; j++) {
                const totalPrice = totalPrices[j]
                totalPrice.innerHTML = "$" + 0
                alert("Are you went to remove all product")
            }

        }


    }
}
