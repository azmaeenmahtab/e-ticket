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


        let parentSeatList = document.getElementById('seat-class-fare')
        parentSeatList.removeChild(li)


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


            let parentSeatList = document.getElementById('seat-class-fare')
            // creating the full li 
            let li = document.createElement('li')
            li.classList.add('flex', 'justify-between', 'text-sm', 'mb-2')

            let span1 = createElemenT('span')
            let elementText = innerTextOfTheElement(event.target.id)
            span1.innerText = elementText
            li.appendChild(span1)

            let span2 = createElemenT('span')
            span2.innerText = 'Economy'
            li.appendChild(span2)

            let span3 = createElemenT('span')
            span3.innerText = 550
            li.appendChild(span3)

            parentSeatList.appendChild(li)
        }
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