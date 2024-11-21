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
// creating elemt
function createElemenT(elementname) {
    let newElement = document.createElement('elementname')
    return newElement
}