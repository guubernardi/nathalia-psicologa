<template>
  <nav :class="{ solido: rolou || menuAberto }">
    <div class="conteudo">
      <NuxtLink to="/" class="logo" aria-label="Nathalia Psicóloga, ir para o início">
        <Svgs nome="logo" />
      </NuxtLink>

      <div class="links" :class="{ abrir: menuAberto }">
        <div class="interno">
          <a v-for="link in links" :key="link.id" :href="'#' + link.id" @click="fecharMenu">{{ link.nome }}</a>
        </div>
      </div>

      <div class="acoes">
        <a href="#agendar" class="agendar" @click="fecharMenu">
          <SvgIcone nome="agenda" :tamanho="15" />
          <p>Agendar</p>
        </a>

        <button class="menu" :class="{ ativo: menuAberto }" @click="alternarMenu" :aria-label="menuAberto ? 'Fechar menu' : 'Abrir menu'">
          <SvgIcone :nome="menuAberto ? 'fechar' : 'menu'" :tamanho="16" />
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
const links = [
  { id: 'inicio', nome: 'Início' },
  { id: 'processo', nome: 'Processo' },
  { id: 'como-funciona', nome: 'Como Funciona' },
  { id: 'perguntas', nome: 'Perguntas' }
]

const rolou = ref(false)
const menuAberto = ref(false)

function aoRolar() {
  rolou.value = window.scrollY > 20
}

function alternarMenu() {
  menuAberto.value = !menuAberto.value
}

function fecharMenu() {
  menuAberto.value = false
}

onMounted(() => {
  window.addEventListener('scroll', aoRolar, { passive: true })
  aoRolar()
})

onUnmounted(() => {
  window.removeEventListener('scroll', aoRolar)
})
</script>

<style scoped lang="sass">
nav
  position: fixed
  top: 0
  left: 0
  z-index: 20
  display: flex
  align-items: center
  justify-content: center
  width: 100%
  padding: 24px 40px
  pointer-events: none

nav *
  pointer-events: auto

.conteudo
  display: flex
  align-items: center
  justify-content: space-between
  width: 100%
  max-width: var(--largura)
  padding: 0
  border: 1px solid transparent
  border-radius: 100px
  transition: max-width 0.5s, padding 0.5s, background-color 0.4s, border-color 0.4s, box-shadow 0.4s

nav.solido .conteudo
  max-width: calc(var(--largura) + 40px)
  padding: 9px 20px
  border-color: rgba(255, 255, 255, 0.75)
  background-color: rgba(255, 255, 255, 0.72)
  box-shadow: 0 10px 34px rgba(20, 41, 67, 0.14)
  -webkit-backdrop-filter: blur(18px) saturate(180%)
  backdrop-filter: blur(18px) saturate(180%)

.logo
  display: flex
  align-items: center

  svg
    width: 38px
    min-width: 38px
    fill: var(--cor-azul)
    transition: all 0.3s

  &:hover svg
    opacity: 0.65

.links
  display: flex
  align-items: center

.interno
  display: flex
  align-items: center
  gap: 36px

  a
    font-family: var(--light)
    font-size: var(--f2)
    color: var(--cor-azul-medio)
    transition: all 0.3s

    &:hover
      color: var(--cor-azul)

.acoes
  display: flex
  align-items: center
  gap: 12px

.agendar
  display: flex
  align-items: center
  gap: 10px
  padding: 13px 24px
  border-radius: 100px
  background-color: var(--cor-azul)
  color: var(--cor-branco)
  transition: all 0.4s

  p
    font-family: var(--bold)
    font-size: var(--f2)
    color: var(--cor-branco)
    white-space: nowrap

  &:hover
    background-color: var(--cor-azul-escuro)

.menu
  display: none
  align-items: center
  justify-content: center
  width: 44px
  min-width: 44px
  height: 44px
  border-radius: 100px
  background-color: var(--cor-azul-claro)
  color: var(--cor-azul)
  transition: transform 0.42s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.3s, color 0.3s

.menu.ativo
  transform: rotate(90deg)
  background-color: var(--cor-azul)
  color: var(--cor-branco)

@media screen and (max-width: 1000px)
  nav
    padding: 14px 20px

  .conteudo
    flex-wrap: wrap
    border-radius: 26px

  nav.solido .conteudo
    max-width: 100%
    padding: 10px 14px

  // logo e acoes dividem a primeira linha; o menu cai pra segunda.
  // sem a ordem explicita o .links (width 100%) quebraria a linha antes das acoes
  .logo
    order: 1

  .acoes
    order: 2

  // altura animada por max-height: display none nao transiciona.
  // o teto e folgado de proposito, so precisa passar da altura real da lista
  .links
    order: 3
    display: block
    width: 100%
    max-height: 0
    overflow: hidden
    transition: max-height 0.42s cubic-bezier(0.22, 1, 0.36, 1)

  .links.abrir
    max-height: 400px

  .interno
    flex-direction: column
    align-items: flex-start
    gap: 0
    width: 100%

    a
      width: 100%
      padding: 14px 0
      font-size: var(--f3)
      border-bottom: 1px solid var(--cor-cinza-claro)
      opacity: 0
      transform: translateY(-10px)
      transition: opacity 0.3s ease, transform 0.3s ease

      &:last-child
        border-bottom: 0

  .links.abrir .interno a
    opacity: 1
    transform: translateY(0)

  .links.abrir .interno a:nth-child(1)
    transition-delay: 0.1s

  .links.abrir .interno a:nth-child(2)
    transition-delay: 0.16s

  .links.abrir .interno a:nth-child(3)
    transition-delay: 0.22s

  .links.abrir .interno a:nth-child(4)
    transition-delay: 0.28s

  .agendar
    padding: 12px 20px

  .menu
    display: flex
</style>
