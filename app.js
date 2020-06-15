
var elements = document.getElementsByClassName("qun-plus");



for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function (params) {
        // get amount
        const currentAmount = params.target.parentElement.parentElement.nextElementSibling.children[0].innerHTML;
        // make amount Float
        const currentAmountInt = parseFloat(currentAmount);
        const addedAmount = currentAmountInt + currentAmountInt;
        // update amount
        params.target.parentElement.parentElement.nextElementSibling.children[0].innerHTML = addedAmount


        // get Qun
        const currentQun = params.target.parentElement.parentElement.children[1].value;
        // make Qun Float
        const currentQunInt = parseFloat(currentQun);
        const addedQun = currentQunInt + 1;
        // update Qun
        params.target.parentElement.parentElement.children[1].value = addedQun

    });

}


var element = document.getElementsByClassName("qun-minus");



for (var i = 0; i < element.length; i++) {
    element[i].addEventListener('click', function (params) {
        // get amount
        const currentAmount = params.target.parentElement.parentElement.nextElementSibling.children[0].innerHTML;
        // make amount Float
        const currentAmountInt = parseFloat(currentAmount);
        const addedAmount = currentAmountInt - currentAmountInt;
        // update amount
        params.target.parentElement.parentElement.nextElementSibling.children[0].innerHTML = addedAmount


        // get Qun
        const currentQun = params.target.parentElement.parentElement.children[1].value;
        // make Qun Float
        const currentQunInt = parseFloat(currentQun);
        const addedQun = currentQunInt - 1;
        // update Qun
        params.target.parentElement.parentElement.children[1].value = addedQun

    });
}









// .nextSibling.input.form - control.text - center.innerHTML