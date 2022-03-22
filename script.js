const quoteBtn = document.querySelector('.quote-btn')
const adviceID = document.querySelector('.advice-id')
const adviceMes = document.querySelector('.advice-message')

quoteBtn.onclick = () => {
  fetch('https://api.adviceslip.com/advice')
    .then((res) => res.json())
    .then((data) => {
      adviceID.innerHTML = `#${data.slip.id}`
      adviceMes.innerHTML = `<q class="advice-message">${data.slip.advice}</q>`
    })
}
