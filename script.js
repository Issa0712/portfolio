function myFunction(x) {
    x.classList.toggle("change");
  }

  const input = document.querySelector('header .overlay #mobile-nav')


  let mobileMenu = document.querySelector('.header_nav .mobile_menu');

  mobileMenu.addEventListener('click', () => {
    let burger =  document.querySelectorAll('.header_nav .mobile_menu .burger')
      burger[0].classList.toggle("change")
      burger[1].classList.toggle("change")
      burger[2].classList.toggle("change")

      input.checked = true

      
  })

  const mobileNavLinks = document.querySelectorAll('.mobile-nav ul li');

  mobileNavLinks.forEach((li) => {

    li.addEventListener('click', () => {
      console.log('click')
     
      input.checked = false
    })
    
  })

  // mobileNavLinks.forEach()


  //   mobileNavLinks[0].addEventListener('click', () => {
  //     console.log('click')
     
  //     input.checked = false
  //   })
  
  

  


  //navbar changes color when it hits the sections with white background

  const navbar = document.querySelector('.header_nav')

  window.onscroll = function() {
    let top = window.scrollY
    if (top >= 668) {
      navbar.style.backgroundColor = 'rgba(0,0,0,.8)'
    } else {
      navbar.style.backgroundColor = 'transparent'
    }
  }