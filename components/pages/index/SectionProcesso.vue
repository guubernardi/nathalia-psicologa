<template>
  <section class="processo" id="processo">
    <div class="conteudo">
      <div class="midia revela-esq" v-revelar>
        <div class="foto">
          <NuxtImg src="/imagens/nathalia-cerebro.png" alt="Nathalia, psicóloga clínica, segurando um modelo anatômico de cérebro" width="921" height="1152" sizes="400px lg:560px" format="webp" loading="lazy" draggable="false" />
        </div>

        <div class="selo">
          <SvgIcone nome="cerebro" :tamanho="15" />
          <p>Abordagem baseada em evidências</p>
        </div>
      </div>

      <div class="texto revela-dir" v-revelar="120">
        <div class="etiqueta">O processo</div>

        <h2>O que <span>a gente constrói</span> ao longo do processo</h2>

        <ul>
          <li v-for="(item, i) in itens" :key="item.titulo">
            <SvgIcone nome="check-redondo" :tamanho="19" class="icone-revela" v-revelar="i * 80 + 320" />
            <p><span>{{ item.titulo }}.</span> {{ item.texto }}</p>
          </li>
        </ul>

        <div class="nota">
          <p>Atendimento online, exclusivo para adultos, em sessões de 50 minutos. Psicólogo não realiza prescrição medicamentosa. Quando necessário, faço o encaminhamento para acompanhamento psiquiátrico.</p>
        </div>

        <a href="#agendar" class="botao">
          <SvgIcone nome="agenda" :tamanho="16" />
          <p>Agendar primeira sessão</p>
        </a>
      </div>
    </div>

    <ElementosOnda direcao="descendo" cor-frente="var(--cor-azul-claro)" cor-atras="var(--cor-azul-suave)" />
  </section>
</template>

<script setup>
const itens = [
  {
    titulo: 'Entender a sua ansiedade',
    texto: 'Descobrir o que dispara, como ela se mantém e quais ferramentas funcionam para você no dia a dia.'
  },
  {
    titulo: 'Recuperar energia e clareza',
    texto: 'Sair dos ciclos de desânimo e voltar a se conectar com o que faz sentido para você.'
  },
  {
    titulo: 'Escutar os sinais do corpo',
    texto: 'Reconhecer a tensão que ele acumula muito antes de você perceber, e cuidar dela a tempo.'
  },
  {
    titulo: 'Colocar limites com firmeza',
    texto: 'Se comunicar sem culpa e sem o medo constante de decepcionar quem está por perto.'
  },
  {
    titulo: 'Suavizar a autocrítica',
    texto: 'Construir uma relação mais gentil e realista consigo, no lugar da cobrança que paralisa.'
  },
  {
    titulo: 'Atravessar mudanças e perdas',
    texto: 'Contar com apoio, no seu tempo e sem precisar pular etapas do processo.'
  }
]
</script>

<style lang="sass" scoped>
section.processo
  position: relative
  display: flex
  align-items: center
  justify-content: center
  width: 100%
  padding: 130px 40px 190px 40px
  background-color: var(--cor-branco)

.conteudo
  display: grid
  grid-template-columns: 0.85fr 1fr
  align-items: center
  gap: 90px
  width: 100%
  max-width: var(--largura)

.midia
  position: relative
  width: 100%
  max-width: 560px

  &::before
    content: ''
    position: absolute
    top: 26px
    left: -26px
    z-index: 0
    width: 100%
    height: 100%
    border: 1px solid var(--cor-azul-suave)
    border-radius: 280px 280px 32px 32px / 200px 200px 32px 32px
    pointer-events: none

.selo
  position: absolute
  z-index: 2
  right: -24px
  bottom: 13%
  display: flex
  align-items: center
  gap: 9px
  padding: 11px 18px
  border-radius: 100px
  border: 1px solid var(--cor-branco)
  background-color: rgba(255, 255, 255, 0.86)
  box-shadow: 0 10px 30px rgba(31, 58, 95, 0.14)
  -webkit-backdrop-filter: blur(14px)
  backdrop-filter: blur(14px)
  color: var(--cor-azul)

  p
    font-family: var(--bold)
    font-size: var(--f1)
    white-space: nowrap
    color: var(--cor-azul)

.foto
  position: relative
  z-index: 1
  display: flex
  align-items: flex-end
  justify-content: center
  width: 100%
  aspect-ratio: 1 / 1.24
  border-radius: 280px 280px 32px 32px / 200px 200px 32px 32px
  overflow: hidden
  background-color: var(--cor-azul-escuro)

  img
    width: 100%
    height: 100%
    object-fit: cover
    object-position: 50% 4%

.texto
  display: flex
  flex-direction: column
  align-items: flex-start

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

  h2
    max-width: 620px
    margin: 24px 0 0 0
    font-family: var(--light)
    font-size: var(--f9)
    line-height: 1.2
    letter-spacing: -0.8px
    text-wrap: balance
    color: var(--cor-azul-medio)

    span
      font-family: var(--bold)
      color: var(--cor-azul)

ul
  display: flex
  flex-direction: column
  align-items: flex-start
  gap: 22px
  margin: 40px 0 0 0

  li
    display: flex
    align-items: flex-start
    gap: 14px
    max-width: 680px
    list-style: none
    color: var(--cor-azul)

    .edusites-icone
      margin: 4px 0 0 0

    p
      font-family: var(--light)
      font-size: var(--f2)
      line-height: 1.55
      text-wrap: pretty
      color: var(--cor-cinza)

      span
        font-family: var(--bold)
        color: var(--cor-azul)

.nota
  margin: 38px 0 0 0
  padding: 18px 22px
  max-width: 660px
  border-radius: 16px
  border: 1px solid var(--cor-azul-suave)
  background-color: var(--cor-azul-claro)

  p
    font-family: var(--light)
    font-size: var(--f1)
    line-height: 1.6
    color: var(--cor-azul-medio)

.botao
  display: flex
  align-items: center
  gap: 10px
  margin: 34px 0 0 0
  padding: 16px 28px
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

@media screen and (max-width: 1000px)
  section.processo
    padding: 70px 20px 110px 20px

  .conteudo
    grid-template-columns: 1fr
    gap: 44px

  .midia
    max-width: 400px
    margin: 0 auto

    &::before
      top: 16px
      left: -16px

  .selo
    right: -10px


  ul
    gap: 16px
    margin: 30px 0 0 0

  .nota
    margin: 30px 0 0 0

  .botao
    justify-content: center
    width: 100%
    margin: 28px 0 0 0
</style>
