const header= document.querySelector("header")

window.addEventListener("scroll", (eo) => {
  header.classList.toggle('sticky', this.window.scrollY > 0)
  
})

const menu= document.querySelector('#menu-icon')

const navmenu= document.querySelector('.navmenu')

menu.addEventListener("click", (eo) => {
  menu.classList.toggle('bx-x')
  navmenu.classList.toggle('open')
})