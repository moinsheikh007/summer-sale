const selectedProduct = document.getElementById('selectedProduct');
const totalPriceElement = document.getElementById('totalPrice');
const netTotalElement = document.getElementById('netTotal');
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', function() {
        const items = card.querySelector('h3');
        const li = document.createElement('li');
        li.innerHTML = items.innerHTML;
        selectedProduct.appendChild(li)
        const price = card.querySelector('span').innerText;
        const priceNumber = parseFloat(price);
        // console.log(priceNumber)
        const totalPriceValue = totalPriceElement.innerHTML;
        const totalPriceNumber = parseFloat(totalPriceValue);
        const totalPrice = totalPriceNumber + priceNumber;
        const totalPriceToFixed = totalPrice.toFixed(2)
        totalPriceElement.innerHTML = totalPriceToFixed;
        const netTotalNumberValue = parseFloat(netTotalElement.innerHTML);
        netTotalElement.innerHTML = totalPriceToFixed;
    })
})

document.getElementById('applyCoupon').addEventListener('click', function() {
    const couponInputElement = document.getElementById('couponInput');
    const totalPriceElementValue = parseFloat(totalPriceElement.innerHTML);
    const netTotalNumberValue = parseFloat(netTotalElement.innerHTML)
    const discountElement = document.getElementById('discount');
/* 
    console.log(discountElement)
    console.log(totalPriceElementValue) */
    if(couponInputElement.value === "SELL200" && totalPriceElementValue > 0) {
        const netTotal = totalPriceElementValue - (totalPriceElementValue * (10 / 100));
        const netTotalToFixed = netTotal.toFixed(2)
        console.log(netTotal)
        const discount = totalPriceElementValue - netTotal;
        const discountToFixed = discount.toFixed(2);
        console.log(discountToFixed);
        discountElement.innerHTML = discountToFixed;
        netTotalElement.innerHTML = netTotalToFixed;
    }
    else {
        alert('Please Enter Your Coupon Code! & You Must Buy SomeThing')
    }
});

document.getElementById('makePurchase').addEventListener('click', function() {
    const modal = document.querySelector('.modal');
    const closeModal = document.getElementById('closeModal');
    modal.classList.add('openModal')
    closeModal.addEventListener('click', function () {
        modal.classList.remove('openModal')
    })
})