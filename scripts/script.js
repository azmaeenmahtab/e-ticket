function scrollDownToTicketBookingPage() {
    document.getElementById('ticket-booking-page').scrollIntoView({ behavior: 'smooth' })
}
function seatSelection(event) {
    let seat = event.target;
    if (seat.classList.contains('selected')) {
        seat.classList.remove('selected');
        seat.classList.add('notselected');
        seat.classList.remove('bg-[#1DD100]');

        let selectedSeatNumbers = valueOfTheElement('selectedSeatNum')
        let decreasedSelectedSeatNumbers = selectedSeatNumbers - 1;
        console.log(decreasedSelectedSeatNumbers)
        setElementValue('selectedSeatNum', decreasedSelectedSeatNumbers)


        let currentfareSelectedSeat = valueOfTheElement('fare-selectedSeats')
        let newfareSelectedSeat = currentfareSelectedSeat - 1
        setElementValue('fare-selectedSeats', newfareSelectedSeat)


        let increasedAvailableSeat = valueOfTheElement('available-seats') + 1
        setElementValue('available-seats', increasedAvailableSeat)


        let previousTotal = valueOfTheElement('total-price')
        let changedTotal = previousTotal - 550
        setElementValue('total-price', changedTotal)
        let grandTotal = valueOfTheElement('grand-total')
        grandTotal = changedTotal
        setElementValue('grand-total', grandTotal)


    } else {
        if (seat.classList.contains('notselected') && valueOfTheElement('selectedSeatNum') < 4) {
            seat.classList.add('selected');
            seat.classList.remove('notselected');
            seat.classList.add('bg-[#1DD100]');

            let selectedSeatNumbers = valueOfTheElement('selectedSeatNum')
            let increasedSelectedSeatNumbers = selectedSeatNumbers + 1;
            console.log(increasedSelectedSeatNumbers)
            setElementValue('selectedSeatNum', increasedSelectedSeatNumbers)


            let decreasedAvailableSeat = valueOfTheElement('available-seats') - 1
            setElementValue('available-seats', decreasedAvailableSeat)


            let currentfareSelectedSeat = valueOfTheElement('fare-selectedSeats')
            let newfareSelectedSeat = currentfareSelectedSeat + 1
            setElementValue('fare-selectedSeats', newfareSelectedSeat)


            let previousTotal = valueOfTheElement('total-price')
            let changedTotal = previousTotal + 550
            setElementValue('total-price', changedTotal)
            let grandTotal = valueOfTheElement('grand-total')
            grandTotal = changedTotal
            setElementValue('grand-total', grandTotal)

        }
    }
}

document.addEventListener('mousedown', seatSelection)


function checkingCoupon() {
    let couponText = document.getElementById('coupon').value
    if (couponText === 'NEW15') {
        let changedTotal = valueOfTheElement('total-price')
        let discountedPrice = changedTotal * .15
        document.getElementById('discounted-price').innerText = discountedPrice
        let grandTotal = valueOfTheElement('grand-total')
        grandTotal = changedTotal - discountedPrice
        setElementValue('grand-total', grandTotal)
    }
    else if (couponText === 'Couple 20') {
        let changedTotal = valueOfTheElement('total-price')
        let discountedPrice = changedTotal * .2
        document.getElementById('discounted-price').innerText = discountedPrice
        let grandTotal = valueOfTheElement('grand-total')
        grandTotal = changedTotal - discountedPrice
        setElementValue('grand-total', grandTotal)
    }
}


// getting input fields
let nameInput = document.getElementById('name')
let phoneInput = document.getElementById('phone')
let emailInput = document.getElementById('email')
// adding eventlistener to the input fields
nameInput.addEventListener('input', checkField)
phoneInput.addEventListener('input', checkField)
emailInput.addEventListener('input', checkField)

function checkField() {
    if (document.getElementById('name').value.trim() !== '' && document.getElementById('phone').value.trim() !== '' && document.getElementById('email').value.trim() !== '') {
        document.getElementById('next-btn').classList.remove('btn-disabled')
    }
}



function showPopUp() {
    document.getElementById('last-popup').classList.remove('hidden')
    document.getElementById('ticket-booking-page').classList.add('hidden')
    document.getElementById('discount-page').classList.add('hidden')
    document.getElementById('banner-page').classList.add('hidden')
    document.getElementById('nav-page').classList.add('hidden')
}