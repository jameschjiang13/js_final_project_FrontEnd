
document.addEventListener("DOMContentLoaded", e => {

 
  //flipping cards 
  const baseUrl = "http://localhost:3000/cards"
  //const cards = document.querySelectorAll('.memory-card')
  
  const game = document.querySelector("body > section")
  
  let hasFlippedCard = false
  let firstCard 
  game.addEventListener('click', e => {
    //console.log("hello")   
    console.log(e.target.parentNode.className)   
    if(e.target.parentNode.className === 'memory-card' || e.target.parentNode.className === "back-face") {
       console.log("howdy")   
      if(e.target.parentNode.className === "memory-card"){
            e.target.parentNode.className = "back-face"
            console.log("hey")
          const id = e.target.parentNode.dataset.id
          fetch(`http://localhost:3000/cards/${id}`)
          .then(response => response.json())
          .then(card => {
              e.target.src = card.image_url
          })
         
          } else {
            e.target.parentNode.className = "memory-card"
            e.target.src =  "https://media.giphy.com/media/l0Iy3pJrd1BFzx8S4/giphy.gif" 

          }
    }
  })

  

  
  //flipCard(e.target.parentNode)
  //console.log(e.target.parentNode)


  //flipping cards 
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
      cards.dataset.id = card.id
      cards.dataset.title = card.title
      cards.className = "memory-card"
     // cards.classList = ("memory-card front-face")
      game.appendChild(cards)
      // //image front seen on page refresh
      const imgPic = document.createElement('img')
      
      imgPic.src = "https://media.giphy.com/media/l0Iy3pJrd1BFzx8S4/giphy.gif" 
      //      // console.log(imgFront)
      cards.appendChild(imgPic)
           
      // const img = document.createElement('img')
       
      //    img.src = card.image_url
      //    cards.appendChild(img)
      // //console.log(cards)
 
  }



     const flipCard = card => {
    
    //this refers to the element that sets off the event 

    //  card.classList.toggle('flip')
    //  //this.classList.add('flip')
    //  if(!hasFlippedCard) {
    //     hasFlippedCard = true
    //     firstCard = card.dataset.title
        
    //   }
      //console.log(card)
    }
     
        
    // const cardObj = {
    //      title: title,
    //      img: "img_url",
    //      imgFront: "img_url"
    //     }
    //     console.log(this.title)
    
      

})