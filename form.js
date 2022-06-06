// function addNum(num1 = 1, num2 = 1) {
//     return (num1 + num2);
// };

// console.log(addNum());

const button = document.querySelector('#btn');

button.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.border').style.background = 'red';
    document.querySelector('body').style.background = 'royalblue';
    document.querySelector('body').classList.add('.border-gray-300');
});