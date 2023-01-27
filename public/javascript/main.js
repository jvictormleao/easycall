// Abre e fecha a aba do menu
const menus = document.querySelectorAll('.menu .menu-r a')
const abas = document.querySelectorAll('main section')

for (const menu of menus) {
  for (const aba of abas) {
    menu.addEventListener('click', function () {
      if (menu.id === aba.id) {
        aba.classList.toggle('show')
      } else aba.classList.remove('show')
    })
  }
}
