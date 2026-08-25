<template>
  <section class="agendar" id="agendar">
    <div class="conteudo">
      <span class="marca revela" v-revelar>Nathalia</span>

      <div class="card revela" v-revelar="120">
        <div class="etiqueta">
          <SvgIcone nome="agenda" :tamanho="13" />
          Agende sua consulta
        </div>

        <h2>No dia em que você decidir começar, <span>eu vou estar aqui para ouvir</span></h2>

        <p>Não precisa ter certeza de nada, nem saber explicar direito o que está sentindo. Basta querer começar a olhar para isso.</p>
        <p class="destaque">É só me mandar uma mensagem. A gente encontra o melhor horário e marca a primeira conversa.</p>

        <a :href="linkAgendamento" class="botao">
          <SvgIcone nome="agenda" :tamanho="16" />
          <p>Quero agendar minha consulta</p>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
// TROCAR pelo destino real: link do WhatsApp, agenda online ou formulario
const linkAgendamento = '#agendar'
</script>

<style lang="sass" scoped>
section.agendar
  display: flex
  align-items: center
  justify-content: center
  width: 100%
  padding: 90px 40px 120px 40px
  overflow: hidden
  background-color: var(--cor-branco)

.conteudo
  position: relative
  display: flex
  flex-direction: column
  align-items: center
  width: 100%
  max-width: 1080px

.marca
  position: absolute
  top: 0
  left: 50%
  z-index: 0
  font-family: var(--light)
  font-size: clamp(4rem, 11vw, 10rem)
  line-height: 0.9
  letter-spacing: -5px
  white-space: nowrap
  transform: translateX(-50%)
  color: var(--cor-azul)
  opacity: 0.07
  pointer-events: none
  user-select: none

.card
  position: relative
  z-index: 1
  display: flex
  flex-direction: column
  align-items: center
  width: 100%
  margin: 92px 0 0 0
  padding: 62px 60px 58px 60px
  border-radius: 40px
  border: 1px solid var(--cor-azul-suave)
  background-color: var(--cor-azul-claro)
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

.card h2
  max-width: 760px
  margin: 26px 0 0 0
  font-family: var(--light)
  font-size: var(--f9)
  line-height: 1.2
  letter-spacing: -0.8px
  text-wrap: balance
  color: var(--cor-azul-medio)

  span
    display: block
    font-family: var(--bold)
    color: var(--cor-azul)

.card p
  max-width: 620px
  margin: 24px 0 0 0
  font-family: var(--light)
  font-size: var(--f2)
  line-height: 1.68
  text-wrap: pretty
  color: var(--cor-cinza)

.card p.destaque
  margin: 14px 0 0 0
  font-family: var(--bold)
  color: var(--cor-azul)

.botao
  display: flex
  align-items: center
  gap: 10px
  margin: 40px 0 0 0
  padding: 19px 34px
  border-radius: 100px
  background-color: var(--cor-azul)
  box-shadow: 0 12px 34px rgba(31, 58, 95, 0.22)
  color: var(--cor-branco)
  transition: all 0.4s

  p
    margin: 0
    font-family: var(--bold)
    font-size: var(--f2)
    color: var(--cor-branco)
    white-space: nowrap

  &:hover
    background-color: var(--cor-azul-escuro)

@media screen and (max-width: 1000px)
  section.agendar
    padding: 50px 20px 70px 20px

  .marca
    letter-spacing: -2px

  .card
    margin: 62px 0 0 0
    padding: 40px 24px 38px 24px
    border-radius: 28px

  .card h2
    font-size: var(--f7)

  .botao
    justify-content: center
    width: 100%
    margin: 32px 0 0 0
    padding: 18px 24px

    p
      font-size: var(--f1)
</style>
