const aPlay = document.querySelector('.aPlay')
const aPause = document.querySelector('.aPause')

const play = document.querySelector('.play')
const pause = document.querySelector('.pause')
const fecha = document.querySelector('.fecha')
const invitacion = document.querySelector('.invitacion')
const modalInvitacion = document.querySelector('.modalInvitacion')
const modalContador = document.querySelector('.modalContador')
const star = document.querySelector('.star')

const peach = document.querySelector('.peach')

const musicas = ['/audio/musica.mp3', '/audio/musica2.mp3', '/audio/musica3.mp3']
const musica = new Audio(musicas[Math.floor(Math.random() * musicas.length)])
const peaches = ['/audio/peach.mp3', '/audio/peach2.mp3']
const peachSound = new Audio(peaches[Math.floor(Math.random() * peaches.length)])

play.addEventListener('click', () => {
  musica.play()
  aPlay.classList.add('hidden')
  aPause.classList.toggle('hidden')
})

pause.addEventListener('click', () => {
  musica.pause()
  aPlay.classList.toggle('hidden')
  aPause.classList.toggle('hidden')
})

invitacion.addEventListener('click', () => {
  modalInvitacion.classList.toggle('hidden')
  modalContador.classList.add('hidden')
  star.classList.add('hidden')
})

fecha.addEventListener('click', () => {
  modalContador.classList.toggle('hidden')
  modalInvitacion.classList.add('hidden')
  star.classList.toggle('hidden')
})

peach.addEventListener('click', () => {
  peachSound.play()
  peach.classList.add('bounce-out-top')
})
