function scrollDownToTicketBookingPage() {
    document.getElementById('ticket-booking-page').scrollIntoView({ behavior: 'smooth' })
}
function seatSelection(event) {
    let seat = event.target;
    if (seat.classList.contains('selected')) {
        seat.classList.remove('selected');
        seat.classList.remove('bg-[#1DD100]');


    } else {
        seat.classList.add('selected');
        seat.classList.add('bg-[#1DD100]');

        let selectedSeatNumbers = valueOfTheElement('selectedSeatNum')
        let newSelectedSeatNumbers = selectedSeatNumbers + 1;
        console.log(newSelectedSeatNumbers)
        setElementValue('selectedSeatNum', newSelectedSeatNumbers)
    }
}

document.addEventListener('mousedown', seatSelection)
// // selecting seat
//     console.log(event.target.id)
//     document.getElementById(event.target.id).classList.add('bg-[#1DD100]')

//     // decrease seat num
//     let availableSeats = valueOfTheElement('available-seats')
//     let newAvailableSeats = availableSeats - 1;
//     setElementValue('available-seats', newAvailableSeats)

//     // checking if one is not selecting more than 4 seats
//     let selectedSeat = valueOfTheElement('selectedSeatNum');
//     let newSelectedSeat = selectedSeat + 1;
//     console.log(newSelectedSeat)
//     setElementValue('selectedSeatNum', newSelectedSeat)
//     if (valueOfTheElement('selectedSeatNum') === 4) {
//         document.addEventListener('mousedown', noSeatWillSelected)
//     }