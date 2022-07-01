"use strict";
const input = document.querySelector('.input');
const submitButton = document.querySelector('.submit');
const allGradesOut = document.querySelector('.all-grades-out');
const out = document.querySelector('.out');
submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener('click', function () {
    const inputValue = input === null || input === void 0 ? void 0 : input.value;
    let result = compile(inputValue);
    allGradesOut.textContent = inputValue;
    out.textContent = result;
});
function stringToArrayPreparation(durtyGrades) {
    let cleanGrades = durtyGrades.split(',');
    return cleanGrades;
}
function average(array) {
    let fullGrade = 0;
    for (let i = 0; i < array.length; i++) {
        fullGrade += +array[i];
    }
    let result = fullGrade / array.length;
    return result;
}
function compile(GradesValue) {
    let cleanGradesArray = stringToArrayPreparation(GradesValue);
    let result = average(cleanGradesArray);
    return result.toFixed(1);
}
