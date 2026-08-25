<template>
  <section class="beneficios" id="beneficios">
    <div class="texto revela-esq" v-revelar>
      <div class="etiqueta">Benefícios</div>

      <h2>A terapia abre espaço para você <span>viver com mais leveza</span></h2>

      <ul>
        <li v-for="(beneficio, i) in beneficios" :key="beneficio">
          <SvgIcone nome="check-circulo" :tamanho="19" class="icone-revela" v-revelar="i * 60 + 280" />
          <p>{{ beneficio }}</p>
        </li>
      </ul>
    </div>

    <div class="foto revela-dir" v-revelar="120">
      <NuxtImg src="/imagens/nathalia-leveza.png" alt="Nathalia, psicóloga clínica, sentada em uma poltrona" width="1448" height="1086" sizes="100vw lg:50vw" format="webp" loading="lazy" />
    </div>
  </section>
</template>

<script setup>
const beneficios = [
  'Lidar melhor com a ansiedade e o estresse do dia a dia',
  'Reconhecer e nomear o que você está sentindo',
  'Fortalecer a autoestima e a autoconfiança',
  'Estabelecer limites sem carregar culpa depois',
  'Recuperar a qualidade do sono e do descanso',
  'Tomar decisões com mais clareza e menos medo',
  'Construir relações mais leves e honestas',
  'Voltar a sentir prazer nas coisas simples',
  'Entender seus padrões e romper os que te travam'
]
</script>

<style lang="sass" scoped>
section.beneficios
  display: grid
  grid-template-columns: 1fr 1fr
  align-items: stretch
  width: 100%
  overflow: hidden
  background-color: var(--cor-branco)

.texto
  display: flex
  flex-direction: column
  align-items: flex-start
  justify-content: center
  padding: 120px 70px 120px max(40px, calc((100vw - var(--largura)) / 2))

.etiqueta
  display: flex
  align-items: center
  gap: 9px
  padding: 9px 18px
  border-radius: 100px
  border: 1px solid var(--cor-azul-suave)
  background-color: var(--cor-azul-claro)
  font-family: var(--bold)
  font-size: var(--f0)
  letter-spacing: 1.4px
  text-transform: uppercase
  color: var(--cor-azul-medio)

  &::before
    content: ''
    display: block
    width: 6px
    min-width: 6px
    height: 6px
    border-radius: 100px
    background-color: var(--cor-azul)

.texto h2
  max-width: 620px
  margin: 24px 0 0 0
  font-family: var(--light)
  font-size: var(--f9)
  line-height: 1.2
  letter-spacing: -0.8px
  color: var(--cor-azul-medio)

  span
    display: block
    font-family: var(--bold)
    color: var(--cor-azul)

ul
  display: flex
  flex-direction: column
  align-items: flex-start
  gap: 15px
  margin: 40px 0 0 0

  li
    display: flex
    align-items: center
    gap: 13px
    list-style: none
    color: var(--cor-azul)

    p
      font-family: var(--light)
      font-size: var(--f2)
      line-height: 1.45
      color: var(--cor-cinza)

.foto
  position: relative
  display: flex
  align-items: flex-end
  justify-content: center
  min-height: 660px
  border-radius: 44px 0 0 44px
  overflow: hidden
  background-image: linear-gradient(155deg, var(--cor-azul-claro) 0%, var(--cor-azul-suave) 100%)

  img
    position: absolute
    top: 0
    right: 0
    width: 128%
    max-width: none
    height: 100%
    object-fit: cover
    object-position: 50% 6%

  // moldura aberta na direita, que é o lado que sangra pra fora da tela
  &::after
    content: ''
    position: absolute
    top: 22px
    right: 0
    bottom: 22px
    left: 22px
    z-index: 1
    border: 1px solid rgba(255, 255, 255, 0.65)
    border-right: 0
    border-radius: 30px 0 0 30px
    pointer-events: none

@media screen and (max-width: 1000px)
  section.beneficios
    grid-template-columns: 1fr

  .texto
    order: 2
    padding: 60px 20px 70px 20px


  ul
    gap: 13px
    margin: 30px 0 0 0

  .foto
    order: 1
    min-height: 420px
    margin: 26px 20px 0 20px
    border-radius: 32px

    &::after
      top: 14px
      right: 14px
      bottom: 14px
      left: 14px
      border: 1px solid rgba(255, 255, 255, 0.65)
      border-radius: 22px
</style>
