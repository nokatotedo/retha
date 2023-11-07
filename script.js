function init() {
  const cards = document.querySelectorAll('img')
  const text = document.querySelectorAll('p')
  cards.forEach((card, index) => {
    card.src = "card.jpg"
  
    card.addEventListener('click', () => {
      setTimeout(() => {
        if(card.src === `http://127.0.0.1:5500/image_${index+1}.jpeg`) {
          text[index].classList.remove('text-hover')
          card.src = "card.jpg"
        } else {
          text[index].classList.add('text-hover')
          card.src = `image_${index+1}.jpeg`
        }
        card.style.transform = 'scaleX(1)'
      }, 200);

      card.style.transform = 'scaleX(0)'
    })
  })
}

init()