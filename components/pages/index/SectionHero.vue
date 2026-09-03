<template>
  <section class="hero" id="inicio">
    <div class="conteudo">
      <div class="texto">
        <h1>Um lugar para colocar em palavras o que <span>você sente.</span></h1>
        <h2>Atendimento psicológico online para adultos, em sessões de 50 minutos. Um espaço reservado para falar sobre o que atravessa o seu dia a dia.</h2>

        <div class="botoes">
          <a href="#agendar" class="principal">
            <SvgIcone nome="agenda" :tamanho="16" />
            <p>Agendar</p>
          </a>

          <a href="#como-funciona" class="secundario">
            <SvgIcone nome="cerebro-ia" :tamanho="16" />
            <p>Como funciona a terapia online</p>
          </a>
        </div>
      </div>

      <div class="foto">
        <div class="forma"></div>
        <NuxtImg src="/imagens/nathalia.png" alt="Nathalia, psicóloga, sentada em uma poltrona" width="1400" height="1123" sizes="400px lg:620px" format="webp" preload draggable="false" />
      </div>
    </div>

    <div class="credenciais">
      <div class="item" v-for="item in credenciais" :key="item.titulo">
        <div class="icone">
          <SvgIcone :nome="item.icone" :tamanho="19" />
        </div>
        <div class="info">
          <h3>{{ item.titulo }}</h3>
          <p>{{ item.valor }}</p>
        </div>
      </div>
    </div>

    <ElementosOnda direcao="descendo" cor-frente="var(--cor-azul)" cor-atras="var(--cor-azul-suave)" />
  </section>
</template>

<script setup>
const credenciais = [
  { icone: 'certificado', titulo: 'Registro Profissional', valor: 'CRP 23/2742' },
  { icone: 'cerebro', titulo: 'Abordagem', valor: 'Cognitivo-Comportamental' },
  { icone: 'videochamada', titulo: 'Atendimento', valor: 'Online' }
]
</script>

<style lang="sass" scoped>
section.hero
  position: relative
  display: flex
  flex-direction: column
  align-items: center
  width: 100%
  padding: 150px 40px 150px 40px
  background-color: var(--cor-fundo)
  background-image: radial-gradient(70% 60% at 78% 36%, rgba(62, 95, 133, 0.10) 0%, rgba(62, 95, 133, 0) 68%), radial-gradient(55% 50% at 16% 86%, rgba(62, 95, 133, 0.07) 0%, rgba(62, 95, 133, 0) 70%), linear-gradient(180deg, rgba(228, 237, 249, 0) 50%, var(--cor-azul-claro) 100%)

.conteudo
  display: grid
  grid-template-columns: 1fr 1fr
  align-items: center
  gap: 60px
  width: 100%
  max-width: var(--largura)

.texto
  display: flex
  flex-direction: column
  align-items: flex-start

  h1
    max-width: 580px
    font-family: var(--light)
    font-size: var(--f11)
    line-height: 1.16
    letter-spacing: -1px
    color: var(--cor-azul-medio)

    span
      display: block
      font-family: var(--bold)
      color: var(--cor-azul)

  h2
    max-width: 500px
    margin: 26px 0 0 0
    font-family: var(--light)
    font-size: var(--f2)
    line-height: 1.65
    color: var(--cor-cinza)

.botoes
  display: flex
  align-items: center
  flex-wrap: wrap
  gap: 12px
  margin: 38px 0 0 0

  a
    display: flex
    align-items: center
    gap: 10px
    padding: 15px 26px
    border-radius: 100px
    transition: all 0.4s

    p
      font-family: var(--bold)
      font-size: var(--f2)
      white-space: nowrap

  a.principal
    background-color: var(--cor-azul)
    color: var(--cor-branco)

    p
      color: var(--cor-branco)

    &:hover
      background-color: var(--cor-azul-escuro)

  a.secundario
    background-color: var(--cor-branco)
    border: 1px solid var(--cor-cinza-claro)
    color: var(--cor-azul-medio)

    p
      font-family: var(--light)
      color: var(--cor-azul-medio)

    &:hover
      border-color: var(--cor-azul-medio)

.foto
  position: relative
  display: flex
  align-items: flex-end
  justify-content: center
  width: 100%
  max-width: 720px
  margin: 0 0 0 auto

  img
    position: relative
    z-index: 1
    width: 86%
    height: auto
    margin: 0 7% 0 0
    -webkit-mask-image: linear-gradient(to bottom, #000 80%, transparent 100%)
    mask-image: linear-gradient(to bottom, #000 80%, transparent 100%)

.forma
  position: absolute
  z-index: 0
  top: 16%
  right: 0
  bottom: 0
  left: 0
  border-radius: 50% 50% 36px 36px / 52% 52% 36px 36px
  background-image: linear-gradient(180deg, var(--cor-azul-claro) 0%, var(--cor-cinza-claro) 100%)

.texto h1,
.texto h2,
.botoes,
.foto,
.credenciais
  animation: subindo 0.7s ease both

.texto h1
  animation-delay: 0.05s

.foto
  animation-delay: 0.1s

.texto h2
  animation-delay: 0.15s

.botoes
  animation-delay: 0.25s

.credenciais
  animation-delay: 0.35s

@media (prefers-reduced-motion: reduce)
  .texto h1,
  .texto h2,
  .botoes,
  .foto,
  .credenciais
    animation: none

.credenciais
  display: grid
  grid-template-columns: repeat(3, 1fr)
  width: 100%
  max-width: var(--largura)
  margin: 70px 0 0 0
  padding: 30px 40px
  border-radius: 26px
  border: 1px solid rgba(255, 255, 255, 0.85)
  background-color: rgba(255, 255, 255, 0.5)
  box-shadow: 0 10px 40px rgba(31, 58, 95, 0.07)
  -webkit-backdrop-filter: blur(22px) saturate(170%)
  backdrop-filter: blur(22px) saturate(170%)

.item
  display: flex
  align-items: center
  justify-content: center
  gap: 18px
  padding: 6px 20px

  &:hover .icone
    transform: scale(1.12)
    background-color: var(--cor-azul-suave)

  & + .item
    border-left: 1px solid rgba(31, 58, 95, 0.1)

.icone
  display: flex
  align-items: center
  justify-content: center
  width: 46px
  min-width: 46px
  height: 46px
  border-radius: 100px
  background-color: var(--cor-azul-claro)
  color: var(--cor-azul)
  transition: all 0.4s

.info
  display: flex
  flex-direction: column
  align-items: flex-start

  h3
    font-family: var(--bold)
    font-size: var(--f0)
    letter-spacing: 1.2px
    text-transform: uppercase
    color: var(--cor-cinza)

  p
    margin: 6px 0 0 0
    font-family: var(--bold)
    font-size: var(--f3)
    line-height: 1.2
    color: var(--cor-azul)

@media screen and (max-width: 1000px)
  section.hero
    padding: 110px 20px 100px 20px

  .conteudo
    grid-template-columns: 1fr
    gap: 44px

  .texto
    align-items: center
    order: 2
    text-align: center


    h2
      margin: 20px 0 0 0

  .botoes
    justify-content: center
    margin: 30px 0 0 0
    width: 100%

    a
      justify-content: center
      width: 100%

  .foto
    order: 1
    max-width: 460px
    margin: 0 auto

  .credenciais
    grid-template-columns: 1fr
    margin: 44px 0 0 0
    padding: 8px 24px

  .item
    justify-content: flex-start
    padding: 18px 0

    & + .item
      border-left: 0
      border-top: 1px solid rgba(31, 58, 95, 0.1)
</style>
