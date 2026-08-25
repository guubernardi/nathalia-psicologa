// Um unico IntersectionObserver para a pagina inteira, em vez de um por elemento
let observador = null

function obterObservador() {
  if (observador) return observador

  observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) return
        entrada.target.classList.add('revelado')
        observador.unobserve(entrada.target)
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -70px 0px' }
  )

  return observador
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('revelar', {
    mounted(el, binding) {
      if (typeof IntersectionObserver === 'undefined') {
        el.classList.add('revelado')
        return
      }

      const atraso = Number(binding.value) || 0
      if (atraso) el.style.transitionDelay = `${atraso}ms`

      obterObservador().observe(el)
    },

    unmounted(el) {
      observador?.unobserve(el)
    }
  })
})
