<template>
  <section class="como-funciona" id="como-funciona">
    <div class="conteudo">
      <div class="cabecalho revela" v-revelar>
        <div class="etiqueta">Como funciona</div>
        <h2>Do primeiro contato até a alta</h2>
      </div>

      <div class="etapas">
        <div class="card revela" v-for="(etapa, i) in etapas" :key="etapa.titulo" v-revelar="i * 90">
          <div class="numero sobe-revela" v-revelar="i * 90 + 280">{{ String(i + 1).padStart(2, '0') }}</div>
          <h3>{{ etapa.titulo }}</h3>
          <p>{{ etapa.texto }}</p>
        </div>
      </div>

      <div class="acao revela" v-revelar="140">
        <a href="#agendar" class="botao">
          <SvgIcone nome="agenda" :tamanho="16" />
          <p>Ver horários disponíveis</p>
        </a>
        <div class="detalhes">
          <span v-for="detalhe in detalhes" :key="detalhe.texto">
            <SvgIcone :nome="detalhe.icone" :tamanho="15" />
            {{ detalhe.texto }}
          </span>
        </div>
      </div>
    </div>

    <ElementosOnda direcao="subindo" cor-frente="var(--cor-branco)" cor-atras="var(--cor-azul-suave)" />
  </section>
</template>

<script setup>
const detalhes = [
  { icone: 'relogio', texto: 'Sessões de 50 minutos' },
  { icone: 'laptop', texto: 'Atendimento online' },
  { icone: 'cadeado-aberto', texto: 'Sem fidelidade' }
]

const etapas = [
  {
    titulo: 'Primeira sessão',
    texto: 'Um espaço para você contar o que está acontecendo. Eu escuto, faço perguntas e a gente entende junto o que te trouxe até aqui.'
  },
  {
    titulo: 'Avaliação',
    texto: 'Mapeamos os padrões de pensamento, comportamento e emoção que se repetem, para enxergar como eles se sustentam na sua rotina.'
  },
  {
    titulo: 'Plano terapêutico',
    texto: 'Definimos objetivos claros e um ritmo que caiba na sua vida. O plano é seu, e vai sendo ajustado conforme você avança.'
  },
  {
    titulo: 'Autonomia e alta',
    texto: 'Conforme os recursos ficam mais firmes, as sessões vão se espaçando. A alta chega quando os objetivos combinados foram alcançados.'
  }
]
</script>

<style lang="sass" scoped>
section.como-funciona
  position: relative
  display: flex
  align-items: center
  justify-content: center
  width: 100%
  padding: 96px 40px 190px 40px
  background-color: var(--cor-azul-claro)

.conteudo
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

.etiqueta
  display: flex
  align-items: center
  gap: 9px
  padding: 9px 18px
  border-radius: 100px
  border: 1px solid var(--cor-azul-suave)
  background-color: var(--cor-branco)
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

.cabecalho h2
  max-width: 720px
  margin: 24px 0 0 0
  font-family: var(--light)
  font-size: var(--f9)
  line-height: 1.2
  letter-spacing: -0.8px
  text-wrap: balance
  color: var(--cor-azul)

.etapas
  display: grid
  grid-template-columns: repeat(4, 1fr)
  align-items: stretch
  gap: 24px
  width: 100%
  margin: 56px 0 0 0

.card
  position: relative
  display: flex
  flex-direction: column
  align-items: center
  padding: 44px 32px 40px 32px
  border-radius: 26px
  background-color: var(--cor-branco)
  box-shadow: 0 6px 26px rgba(31, 58, 95, 0.06)
  overflow: hidden
  text-align: center

  &::before
    content: ''
    position: absolute
    top: -52px
    left: -52px
    width: 138px
    height: 138px
    border-radius: 100px
    background-color: var(--cor-azul-claro)

  &::after
    content: ''
    position: absolute
    right: -68px
    bottom: -68px
    width: 198px
    height: 198px
    border-radius: 100px
    background-color: rgba(228, 237, 249, 0.55)

.numero
  position: relative
  z-index: 1
  display: flex
  align-items: center
  justify-content: center
  width: 68px
  min-width: 68px
  height: 68px
  border-radius: 100px
  border: 1px solid var(--cor-azul-suave)
  background-color: var(--cor-azul-claro)
  font-family: var(--bold)
  font-size: var(--f5)
  line-height: 1
  letter-spacing: -0.5px
  color: var(--cor-azul)

.card h3
  position: relative
  z-index: 1
  margin: 26px 0 0 0
  font-family: var(--bold)
  font-size: var(--f4)
  line-height: 1.25
  text-wrap: balance
  color: var(--cor-azul)

.card p
  position: relative
  z-index: 1
  margin: 14px 0 0 0
  font-family: var(--light)
  font-size: var(--f2)
  line-height: 1.6
  text-wrap: pretty
  color: var(--cor-cinza)

.acao
  display: flex
  flex-direction: column
  align-items: center
  margin: 64px 0 0 0

.botao
  display: flex
  align-items: center
  gap: 10px
  padding: 17px 30px
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

.detalhes
  display: flex
  align-items: center
  flex-wrap: wrap
  justify-content: center
  gap: 10px
  margin: 26px 0 0 0

  > span
    display: flex
    align-items: center
    gap: 9px
    padding: 9px 18px
    border-radius: 100px
    border: 1px solid var(--cor-branco)
    background-color: rgba(255, 255, 255, 0.6)
    font-family: var(--light)
    font-size: var(--f1)
    color: var(--cor-azul-medio)

    .edusites-icone
      color: var(--cor-azul)

@media screen and (max-width: 1280px)
  .etapas
    grid-template-columns: repeat(2, 1fr)

@media screen and (max-width: 1000px)
  section.como-funciona
    padding: 70px 20px 110px 20px

  .cabecalho h2
    font-size: var(--f7)

  .etapas
    grid-template-columns: 1fr
    gap: 16px
    margin: 40px 0 0 0

  .card
    padding: 34px 24px 30px 24px

  .acao
    width: 100%
    margin: 44px 0 0 0

  .botao
    justify-content: center
    width: 100%
</style>
