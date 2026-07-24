if (location.protocol !== 'file:' && location.pathname.endsWith('/index.html')) {
  const hash = location.hash === '#inicio' ? '' : location.hash
  history.replaceState(null, '', location.pathname.slice(0, -10) + location.search + hash)
}

const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)')
let animation

document.addEventListener('click', event => {
  const link = event.target.closest('a[href^="#"]')
  if (!link || link.classList.contains('skip-link') || reducedMotion.matches) return

  const target = document.getElementById(link.hash.slice(1))
  if (!target) return

  event.preventDefault()
  cancelAnimationFrame(animation)

  const start = scrollY
  const end = target.getBoundingClientRect().top + start
  const started = performance.now()

  const scroll = now => {
    const progress = Math.min((now - started) / 360, 1)
    const easing = 1 - Math.pow(1 - progress, 3)
    scrollTo(0, start + (end - start) * easing)

    if (progress < 1) animation = requestAnimationFrame(scroll)
    else {
      history.pushState(null, '', link.hash)
      const focusTarget = target.querySelector('h1, h2') || target
      focusTarget.tabIndex = -1
      focusTarget.focus({ preventScroll: true })
    }
  }

  animation = requestAnimationFrame(scroll)
})
