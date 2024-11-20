function scrollDownToTicketBookingPage() {
    document.getElementById('ticket-booking-page').scrollIntoView({ behavior: 'smooth' })
}
function seatSelection(event) {
    // changing color
    console.log(event.target.id)
    document.getElementById(event.target.id).classList.add('bg-[#1DD100]')

    // decrease seat num
    let availableSeats = valueOfTheElement('available-seats')
    let newAvailableSeats = availableSeats - 1;
    setElementValue('available-seats', newAvailableSeats)

    // checking if one is not selecting more than 4 seats
    let selectedSeat = valueOfTheElement('selectedSeatNum');
    let newSelectedSeat = selectedSeat + 1;
    console.log(newSelectedSeat)
    setElementValue('selectedSeatNum', newSelectedSeat)

}
document.addEventListener('mousedown', seatSelection)
