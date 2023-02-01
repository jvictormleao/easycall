// Abre e fecha menu
const menu = document.querySelector('nav .icon-menu1')
const close = document.querySelector('nav .icon-close')
const nav = document.querySelector('nav ul.menu')
const items = document.querySelectorAll('nav ul li.items')

menu.addEventListener('click', function () {
  nav.classList.add('show')
  menu.classList.add('hidden')
  close.classList.add('show')
  for (const item of items) {
    item.classList.add('show')
  }
})

close.addEventListener('click', function () {
  nav.classList.remove('show')
  menu.classList.remove('hidden')
  close.classList.remove('show')
  for (const item of items) {
    item.classList.remove('show')
  }
})

const abas = document.querySelectorAll('main section')
//Abre e fecha abas do menu
for (const item of items) {
  for (const aba of abas) {
    item.addEventListener('click', function () {
      if (item.id === aba.id) {
        aba.classList.toggle('show')
        nav.classList.remove('show')
        close.classList.remove('show')
        menu.classList.remove('hidden')
      } else {
        aba.classList.remove('show')
        nav.classList.remove('show')
        close.classList.remove('show')
        menu.classList.remove('hidden')
      }
    })
  }
}
