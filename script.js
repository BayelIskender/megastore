/*const arr = document.querySelectorAll('input');
const link = document.querySelector('.link');

link.addEventListener('click', () => {
    console.log(arr.value);
})*/

const getInputValues = () => {
    const inputFields = document.querySelectorAll("input[type='text']");
    const inputValues = [];
    for (let i = 0; i < inputFields.length; i++) {
        inputValues.push(inputFields[i].value);
    }
    console.log(inputValues);
}

const link = document.querySelector('.link');

link.addEventListener('click', () => {
    getInputValues();
})