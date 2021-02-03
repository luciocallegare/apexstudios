const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('lista')[0]
const menu = document.getElementsByClassName('menu')
const afuera= document.getElementById('cuerpo')



toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

for (link of menu) {
	link.addEventListener('click',()=>{
		navbarLinks.classList.toggle('active')
	})
}

