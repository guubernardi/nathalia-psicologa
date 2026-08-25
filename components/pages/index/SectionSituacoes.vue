<template>
  <section class="situacoes" id="situacoes">
    <div class="bloco">
      <div class="cabecalho revela" v-revelar>
        <Svgs nome="logo" />
        <h2>Talvez você se reconheça em alguma destas situações</h2>
      </div>

      <div class="cards">
        <div class="card revela" v-for="(situacao, i) in situacoes" :key="situacao.titulo" v-revelar="i * 80">
          <div class="icone icone-revela" v-revelar="i * 80 + 220">
            <SvgIcone :nome="situacao.icone" :tamanho="28" />
          </div>
          <h3>{{ situacao.titulo }}</h3>
          <p>{{ situacao.texto }}</p>
        </div>
      </div>

      <p class="fecho revela" v-revelar>Terapia não é virar outra pessoa. É <span>entender o que acontece dentro de você</span> e recuperar espaço para escolher.</p>
    </div>

    <ElementosOnda direcao="subindo" cor-frente="var(--cor-branco)" cor-atras="var(--cor-azul-medio)" />
  </section>
</template>

<script setup>
const situacoes = [
  {
    icone: 'balao-pensamento',
    titulo: 'Ansiedade que não desliga',
    texto: 'A cabeça acelera, antecipa problemas que ainda nem existem e volta sempre para o pior cenário possível, mesmo quando está tudo bem.'
  },
  {
    icone: 'lua',
    titulo: 'Dificuldade para descansar',
    texto: 'Você deita para dormir e o pensamento continua. O corpo guarda a tensão de um dia que nunca parece terminar de verdade.'
  },
  {
    icone: 'chuva',
    titulo: 'Desânimo e falta de sentido',
    texto: 'O que antes dava prazer perdeu a graça. Falta energia até para as coisas simples, e o dia vira uma sequência de obrigações.'
  },
  {
    icone: 'usuarios',
    titulo: 'Conflitos nos relacionamentos',
    texto: 'Dificuldade de dizer não, medo constante de decepcionar e a sensação de precisar se anular para manter a relação em paz.'
  },
  {
    icone: 'alvo',
    titulo: 'Autocrítica que paralisa',
    texto: 'Uma cobrança interna tão alta que qualquer decisão vira dúvida, e nada do que você faz chega perto de parecer suficiente.'
  },
  {
    icone: 'bussola',
    titulo: 'Momentos de transição',
    texto: 'Um término, uma perda, uma virada de carreira. Fases que reorganizam a vida inteira e deixam você sem saber por onde começar.'
  }
]
</script>

<style lang="sass" scoped>
section.situacoes
  position: relative
  display: flex
  align-items: center
  justify-content: center
  width: 100%
  padding: 30px 40px 180px 40px
  background-color: var(--cor-azul)
  background-image: radial-gradient(46% 40% at 50% 62%, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0) 70%)

.bloco
  position: relative
  display: flex
  flex-direction: column
  align-items: center
  width: 100%
  max-width: var(--largura)

.cabecalho
  display: flex
  flex-direction: column
  align-items: center
  text-align: center

  svg
    width: 40px
    min-width: 40px
    fill: var(--cor-branco)
    opacity: 0.55

  h2
    max-width: 700px
    margin: 26px 0 0 0
    font-family: var(--light)
    font-size: var(--f9)
    line-height: 1.24
    letter-spacing: -0.5px
    text-wrap: balance
    color: var(--cor-branco)

.cards
  display: flex
  align-items: stretch
  justify-content: center
  flex-wrap: wrap
  gap: 24px
  width: 100%
  margin: 60px 0 0 0

.card
  position: relative
  display: flex
  flex-direction: column
  align-items: center
  flex: 0 1 calc(33.333% - 16px)
  padding: 44px 34px 40px 34px
  border-radius: 24px
  border: 1px solid rgba(255, 255, 255, 0.14)
  background-color: rgba(255, 255, 255, 0.05)
  overflow: hidden
  text-align: center
  transition: all 0.4s

  &::before
    content: ''
    position: absolute
    top: -48px
    left: -48px
    width: 132px
    height: 132px
    border-radius: 100px
    background-color: rgba(255, 255, 255, 0.055)

  &::after
    content: ''
    position: absolute
    right: -64px
    bottom: -64px
    width: 190px
    height: 190px
    border-radius: 100px
    background-color: rgba(255, 255, 255, 0.038)

  &:hover
    border-color: rgba(255, 255, 255, 0.3)
    background-color: rgba(255, 255, 255, 0.09)

  &:hover .icone
    transform: scale(1.08)
    background-color: rgba(255, 255, 255, 0.16)

.icone
  position: relative
  z-index: 1
  display: flex
  align-items: center
  justify-content: center
  width: 68px
  min-width: 68px
  height: 68px
  border-radius: 100px
  border: 1px solid rgba(255, 255, 255, 0.12)
  background-color: rgba(255, 255, 255, 0.09)
  transform-origin: center
  color: var(--cor-branco)

.icone.revelado
  transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.4s

.card h3
  position: relative
  z-index: 1
  margin: 26px 0 0 0
  font-family: var(--bold)
  font-size: var(--f4)
  line-height: 1.3
  text-wrap: balance
  color: var(--cor-branco)

.card p
  position: relative
  z-index: 1
  margin: 14px 0 0 0
  font-family: var(--light)
  font-size: var(--f2)
  line-height: 1.62
  text-wrap: pretty
  color: rgba(255, 255, 255, 0.68)

.fecho
  max-width: 740px
  margin: 62px 0 0 0
  font-family: var(--light)
  font-size: var(--f3)
  line-height: 1.6
  text-align: center
  color: rgba(255, 255, 255, 0.72)

  span
    font-family: var(--bold)
    color: var(--cor-branco)

@media screen and (max-width: 1000px)
  section.situacoes
    padding: 20px 20px 110px 20px

  .cabecalho svg
    width: 34px
    min-width: 34px

  .cabecalho h2
    margin: 20px 0 0 0

  .cards
    gap: 16px
    margin: 40px 0 0 0

  .card
    flex: 1 1 100%
    padding: 34px 24px 30px 24px

  .fecho
    margin: 40px 0 0 0
</style>
