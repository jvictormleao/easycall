const menu = document.querySelectorAll('.menu a')
const tabs = document.querySelectorAll('.menu .dropdown')

for (const menutabs of menu) {
  for (const tab of tabs) {
    menutabs.addEventListener('mouseover', function () {
      if (tab.id === menutabs.id) {
        tab.classList.toggle('show')
      }
    })
    /*menutabs.addEventListener('mouseout', function () {
      if (tab.id === menutabs.id) {
        tab.classList.toggle('show')
      }
    })*/
  }
}

const boxpesquisa = document.querySelector('#header .search')
const pesquisa = document.querySelector('#header .search input')

console.log(boxpesquisa)

pesquisa.addEventListener('focusin', function () {
  pesquisa.placeholder = ''
  boxpesquisa.classList.toggle('focus')
})
pesquisa.addEventListener('focusout', function () {
  boxpesquisa.classList.toggle('focus')
  pesquisa.placeholder = 'PESQUISE SUA PEÇA AQUI'
})
