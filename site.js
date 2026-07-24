const initialTarget = location.hash && document.getElementById(location.hash.slice(1))

addEventListener('load', () => requestAnimationFrame(() => {
  const path = location.protocol !== 'file:' && location.pathname.endsWith('/index.html')
    ? location.pathname.slice(0, -10)
    : location.pathname
  if (path !== location.pathname || location.hash) history.replaceState(null, '', path + location.search)
  if (initialTarget) {
    initialTarget.scrollIntoView()
    moveFocus(initialTarget)
  }
}))

const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)')
let animation

const moveFocus = target => {
  const focusTarget = target.querySelector('h1, h2') || target
  focusTarget.tabIndex = -1
  focusTarget.focus({ preventScroll: true })
}

document.addEventListener('click', event => {
  const link = event.target.closest('a[href^="#"]')
  if (!link) return

  const target = document.getElementById(link.hash.slice(1))
  if (!target) return

  event.preventDefault()
  cancelAnimationFrame(animation)

  if (link.classList.contains('skip-link') || reducedMotion.matches) {
    target.scrollIntoView()
    moveFocus(target)
    return
  }

  const start = scrollY
  const end = target.getBoundingClientRect().top + start
  const started = performance.now()

  const scroll = now => {
    const progress = Math.min((now - started) / 360, 1)
    const easing = 1 - Math.pow(1 - progress, 3)
    scrollTo(0, start + (end - start) * easing)

    if (progress < 1) animation = requestAnimationFrame(scroll)
    else moveFocus(target)
  }

  animation = requestAnimationFrame(scroll)
})
