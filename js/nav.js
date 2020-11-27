document.addEventListener("DOMContentLoaded", () => {
  
  // get my mobile button with querySelector
  var mobileMenuButton = document.querySelector('.mobile-menu-button')
  
  // get my nav with querySelector
  var navigation = document.querySelector('.main-nav')
   
  // add click listener
  mobileMenuButton.addEventListener('click', () => {
    // play with css classes 
    mobileMenuButton.classList.toggle('active')
    navigation.classList.toggle('visible') 
  })
  
})