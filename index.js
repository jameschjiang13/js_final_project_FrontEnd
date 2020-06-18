


document.addEventListener("DOMContentLoaded", e => {

  const name = prompt("What's your name?")
  const welcome = document.querySelector("body > div > h2")
  welcome.innerHTML =  `Hey ${name}, Welcome to`

    //flipping cards 
    const baseUrl = "http://localhost:3000/cards"
    //const cards = document.querySelectorAll('.memory-card')
    
    const game = document.querySelector("body > section")

    let hasFlippedCard = false
 
    let firstCard = "empty"
    let secondCard = "empty"
    let score = 0
    
    function makeCards(){
      fetch(baseUrl)
      .then(response => response.json())
    //.then(console.log)
    .then(cards => {
      renderCards(cards)
    })}
    
    makeCards()
    
    const renderCards = cards => {
      cards.forEach(card => {
        renderCard(card)
      })
    }    
    
    const renderCard = card => {
      const memCard = document.createElement('div')
      memCard.className = "memory-card" 
      memCard.dataset.title = card.title
      memCard.dataset.id = card.id
      const cardFront = document.createElement('div')
      cardFront.classList = "card__face front-face"
      const cardBack = document.createElement('div')
      cardBack.classList = "card__face back-face"
      memCard.appendChild(cardFront)
      memCard.appendChild(cardBack)
      const imgFront = document.createElement('img')
      imgFront.src = "https://media.giphy.com/media/l0Iy3pJrd1BFzx8S4/giphy.gif" 
      // console.log(imgFront)
      cardFront.appendChild(imgFront)
      
      const imgBack = document.createElement('img')
      imgBack.src = card.image_url
      cardBack.appendChild(imgBack)
      
      game.appendChild(memCard)
      //image front seen on page refresh
      //console.log(cards)
      
    }

    function createCard(cardObj){
      const div = document.createElement("div")
      div.className = "your-gif"
      const home = document.querySelector("body > div")
      div.innerHTML = `
      <h2>Nice Work!</h2>
      <h3>Your Scored Gifs</h3>
      <img class="your-img" src=${cardObj.image_url}>`

      home.appendChild(div)
    }


    game.addEventListener('click', e => {
      console.log(e.target.parentNode.className)

      if(e.target.className === "card__face front-face") {
        e.target.parentNode.classList.toggle('flip')
        
        if(firstCard === "empty"){
          firstCard = e.target
        } else {
          secondCard = e.target
        }

        if(firstCard.parentNode.dataset.title === secondCard.parentNode.dataset.title){
          console.log("matched")
          const scoreBoard = document.querySelector("body > div > h4")
          const id = e.target.parentNode.dataset.id
          fetch(`${baseUrl}/${id}`)
          .then(response => response.json())
          .then(cardObj => createCard(cardObj))

          setTimeout(() => {  
            
            firstCard.parentNode.innerHTML = " "
            secondCard.parentNode.innerHTML = " "
            
            score = score + 1
            
            scoreBoard.innerText = `You have ${score} points`

            
            if(score === 6) {
              alert("You win!");
            }

            firstCard = "empty"
            secondCard = "empty"


          }, 2000)
        } else {
          console.log("unmatched")
          setTimeout(() => {  
            firstCard.parentNode.classList.toggle('flip')
            secondCard.parentNode.classList.toggle('flip')
            firstCard = "empty"
            secondCard = "empty"
          }, 2000)
          
        }
       

      }

      

    })

    


  //    const flipCard = card => {

  //   //this refers to the element that sets off the event 
  //     console.log(card.children)
  //    card.classList.toggle('flip')
  //   //  //this.classList.add('flip')
  //    if(!hasFlippedCard) {
  //       hasFlippedCard = true
  //       //matchCard()
  //   //    // firstCard = card.dataset.title
        
  //     }
  //     //console.log(card)
  //  }
      
    //flipping cards 

})