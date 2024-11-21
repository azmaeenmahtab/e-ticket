// get innertext of element
function innerTextOfTheElement(elementId) {
    let textValue = document.getElementById(elementId).innerText
    return textValue;
}
// get number value of element
function valueOfTheElement(elementId) {
    let numValue = parseInt(document.getElementById(elementId).innerText)
    return numValue;
}
// set element value
function setElementValue(elementId, providedValue) {
    return document.getElementById(elementId).innerText = providedValue;

}
// add class to element
function addClassToElement(elementId, classname) {
    document.getElementById(elementId).classList.add(classname)
}
// remove  class to element
function removeClassFromElement(elementId, classname) {
    document.getElementById(elementId).classList.remove(classname)
}
// selecting seat
function selectingSeat() {
    document.getElementById(event.target.id).classList.add('bg-[#1DD100]')
    document.getElementById(event.target.id).classList.add('selected')
}
// no seat selection function
function noSeatWillSelected() {
    // undo color 
    document.getElementById(event.target.id).classList.remove('bg-[#1DD100]')
    document.getElementById(event.target.id).classList.remove('notselected')
    // selected seat number fix
    setElementValue('selectedSeatNum', 4)
}