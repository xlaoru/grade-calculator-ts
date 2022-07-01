const input = (<HTMLInputElement>document.querySelector('.input'))
const submitButton = document.querySelector('.submit')
const allGradesOut = (<HTMLDivElement>document.querySelector('.all-grades-out'))
const out = (<HTMLDivElement>document.querySelector('.out'))

submitButton?.addEventListener('click', function () {
    const inputValue: string = input?.value
    let result: string = compile(inputValue)
    allGradesOut.textContent = inputValue
    out.textContent = result
})

function stringToArrayPreparation(durtyGrades: string) {
    let cleanGrades: string[] = durtyGrades.split(',')
    return cleanGrades
}

function average(array: string[]) {
    let fullGrade: number = 0

    for (let i = 0; i < array.length; i++) {
        fullGrade += +array[i]
    }

    let result: number = fullGrade / array.length
    return result
}

function compile(GradesValue: string) {
    let cleanGradesArray = stringToArrayPreparation(GradesValue)
    let result: number = average(cleanGradesArray)
    return result.toFixed(1)
}