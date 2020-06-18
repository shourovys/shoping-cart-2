
const plusElements = document.getElementsByClassName("qun-plus");



for (var i = 0; i < plusElements.length; i++) {
    plusElements[i].addEventListener('click', function (params) {
        // get amount
        const currentAmount = params.target.parentElement.parentElement.nextElementSibling.children[0].innerHTML;
        // make amount Float
        const currentAmountInt = parseFloat(currentAmount);

        // get Qun
        const currentQun = params.target.parentElement.parentElement.children[1].value;
        // make Qun Float + make upDate qun value
        const currentQunInt = parseFloat(currentQun);
        const addedQun = currentQunInt + 1;



        // get single element price
        const singleElementPrice = currentAmountInt / currentQunInt;
        console.log(singleElementPrice);

        // update Qun
        params.target.parentElement.parentElement.children[1].value = addedQun




        // update amount
        const addedAmount = currentAmountInt + singleElementPrice;
        params.target.parentElement.parentElement.nextElementSibling.children[0].innerHTML = addedAmount

    });

}


var element = document.getElementsByClassName("qun-minus");



for (var i = 0; i < element.length; i++) {
    element[i].addEventListener('click', function (params) {
        // get amount
        const currentAmount = params.target.parentElement.parentElement.nextElementSibling.children[0].innerHTML;
        // make amount Float
        const currentAmountInt = parseFloat(currentAmount);




        // get Qun
        const currentQun = params.target.parentElement.parentElement.children[1].value;
        // make Qun Float
        const currentQunInt = parseFloat(currentQun);
        if (currentQunInt > 1) {
            const addedQun = currentQunInt - 1;
            // update Qun
            params.target.parentElement.parentElement.children[1].value = addedQun

            // get single element price
            const singleElementPrice = currentAmountInt / currentQunInt;




            // update amount
            const addedAmount = currentAmountInt - singleElementPrice;
            params.target.parentElement.parentElement.nextElementSibling.children[0].innerHTML = addedAmount
        }



    });
}









// .nextSibling.input.form - control.text - center.innerHTML