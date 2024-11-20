function scrollDownToTicketBookingPage() {
    document.getElementById('ticket-booking-page').scrollIntoView({ behavior: 'smooth' })
}
function seatSelection(event) {
    // changing color
    console.log(event.target.id)
    document.getElementById(event.target.id).classList.add('bg-[#1DD100]')

}
document.addEventListener('mousedown', seatSelection)
