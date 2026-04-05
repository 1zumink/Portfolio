// букавки по бокам экрана
document.addEventListener('DOMContentLoaded', function () {
  let l = document.querySelector('.l')
  let a = document.querySelector('.a')
  let n = document.querySelector('.n')
  let g = document.querySelector('.g')
  let overlay = document.querySelector('.overlay')
  const centerContainer = document.querySelector('.center-container')
  const bgVideo = document.getElementById('bg-video')

  setTimeout(function () {
    l.classList.add('top-left')
    a.classList.add('top-right')
    n.classList.add('bottom-left')
    g.classList.add('bottom-right')
    overlay.style.opacity = '0'
  }, 1000)

  setTimeout(() => {
    centerContainer.classList.add('visible')
    bgVideo.style.opacity = '1'
  }, 2200)

  overlay.addEventListener('transitionend', function () {
    overlay.style.display = 'none'
  })
  const newsButton = document.getElementById('news-button')
  if (newsButton) {
    newsButton.addEventListener('click', function (e) {
      e.preventDefault()
      centerContainer.classList.add('fade-out')
      centerContainer.addEventListener(
        'transitionend',
        function () {
          const currentTime = bgVideo.currentTime
          window.location.href = `events.html?time=${currentTime}`
        },
        { once: true }
      )
    })
  }
})
