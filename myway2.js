document.addEventListener("DOMContentLoaded", e => {

    //flipping cards 
    const baseUrl = "http://localhost:3000/cards"
    //const cards = document.querySelectorAll('.memory-card')
    
    const game = document.querySelector("body > section")

    let hasFlippedCard = false
    let firstCard 
    
    fetch(baseUrl)
    .then(response => response.json())
    //.then(console.log)
    .then(card => {
      renderCards(card)
    })

    const renderCards = cards => {
        cards.forEach(card => {
            renderCard(card)
        })
    }    

    const renderCard = card => {
      const cards = document.createElement('div')
      cards.dataset.title = card.title
      cards.classList.add("memory-card","back-face")
      game.appendChild(cards)
      //image front seen on page refresh
      const imgFront = document.createElement('img')
            imgFront.className = "front-face"
            imgFront.src = "https://media.giphy.com/media/l0Iy3pJrd1BFzx8S4/giphy.gif" 
           // console.log(imgFront)
            cards.appendChild(imgFront)
           
      const img = document.createElement('img')
        imgFront.className = "back-face"
         img.src = card.image_url
         cards.appendChild(img)
      //console.log(cards)
 
  }



     const flipCard = card => {

    //this refers to the element that sets off the event 

     card.classList.toggle('flip')
     //this.classList.add('flip')
     if(!hasFlippedCard) {
        hasFlippedCard = true
        firstCard = card.dataset.title
        
      }
      //console.log(card)
    }
     
        
    // const cardObj = {
    //      title: title,
    //      img: "img_url",
    //      imgFront: "img_url"
    //     }
    //     console.log(this.title)
      
    game.addEventListener('click', e => {
      if(e.target.className = 'memory-card')
      flipCard(e.target.parentNode)
      //console.log(e.target.parentNode)
    })
    //flipping cards 

})