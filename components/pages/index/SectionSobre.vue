<template>
  <section class="sobre" id="sobre">
    <div class="faixa">
      <div class="trilho">
        <span v-for="volta in 2" :key="volta">
          <template v-for="(item, i) in trilho" :key="i">
            <b>{{ item }}</b>
            <i></i>
          </template>
        </span>
      </div>
    </div>

    <div class="conteudo">
      <div class="foto revela-esq" v-revelar>
        <div class="quadro">
          <Svgs nome="logo" />
          <NuxtImg src="/imagens/nathalia-palestra.jpeg" alt="Nathalia, psicóloga clínica, falando para uma plateia" width="1268" height="832" sizes="420px lg:560px" format="webp" quality="90" loading="lazy" />
        </div>

        <div class="selo um">
          <SvgIcone nome="cerebro" :tamanho="15" />
          <p>Psicóloga Clínica</p>
        </div>

        <div class="selo dois">
          <SvgIcone nome="certificado" :tamanho="15" />
          <p>CRP 23/2742</p>
        </div>

        <div class="selo tres">
          <SvgIcone nome="relogio" :tamanho="15" />
          <p>Sessões de 50 min</p>
        </div>
      </div>

      <div class="texto revela-dir" v-revelar="120">
        <div class="etiqueta">Sobre mim</div>

        <h2>Olá, eu sou a <span>Nathalia</span></h2>

        <p>Acredito que o vínculo entre psicóloga e paciente é o que sustenta qualquer mudança real. Antes de qualquer técnica, vem a escuta.</p>
        <p><b>Cada pessoa chega com uma história diferente</b>, e o trabalho é construído a partir dela. Não existe protocolo pronto que sirva para todo mundo.</p>
        <p>Se você procura um espaço para entender o que sente, com alguém que caminha junto sem julgar, é isso que eu ofereço. A gente pode começar quando você estiver pronta.</p>

        <div class="assinatura">
          <Svgs nome="logo" />
          <div class="nome">
            <p>Nathalia</p>
            <span>Psicóloga clínica · CRP 23/2742</span>
          </div>
        </div>
      </div>
    </div>

    <div class="formacao">
      <h3 class="revela" v-revelar>Formação e experiência</h3>

      <div class="credenciais">
        <div class="pilula revela" v-for="(credencial, i) in credenciais" :key="credencial" v-revelar="i * 70">
          <SvgIcone nome="selo" :tamanho="15" />
          <p>{{ credencial }}</p>
        </div>
      </div>

      <a href="#agendar" class="botao revela" v-revelar="220">
        <SvgIcone nome="agenda" :tamanho="16" />
        <p>Agendar uma conversa</p>
      </a>
    </div>

    <ElementosOnda direcao="descendo" cor-frente="var(--cor-azul)" cor-atras="var(--cor-azul-suave)" />
  </section>
</template>

<script setup>
const faixa = ['Psicóloga Clínica', 'CRP 23/2742', 'Terapia Cognitivo-Comportamental', 'Atendimento Online']

// cada metade da trilha precisa ser mais larga que a tela, senao abre vao no fim do ciclo
const trilho = Array.from({ length: 5 }, () => faixa).flat()

const credenciais = [
  'Psicóloga clínica registrada sob o CRP 23/2742',
  'Graduada em Psicologia pela USP',
  'Pós-graduação em Terapia Comportamental Dialética (DBT)',
  'Formação em Terapia de Aceitação e Compromisso (ACT)',
  'Formação em Terapia Cognitivo-Comportamental (TCC)',
  'Atendimento clínico voltado para adultos, em sessões de 50 minutos'
]
</script>

<style lang="sass" scoped>
section.sobre
  position: relative
  display: flex
  flex-direction: column
  align-items: center
  width: 100%
  background-color: var(--cor-fundo)
  background-image: radial-gradient(46% 40% at 10% 26%, rgba(62, 95, 133, 0.09) 0%, rgba(62, 95, 133, 0) 70%), radial-gradient(52% 42% at 90% 80%, rgba(62, 95, 133, 0.07) 0%, rgba(62, 95, 133, 0) 70%)

.faixa
  width: 100%
  padding: 15px 0
  overflow: hidden
  background-color: var(--cor-azul)

.trilho
  display: flex
  align-items: center
  width: max-content
  animation: correndo 100s linear infinite

  > span
    display: flex
    align-items: center

  b
    font-family: var(--bold)
    font-size: var(--f1)
    letter-spacing: 1.2px
    text-transform: uppercase
    white-space: nowrap
    color: var(--cor-branco)

  i
    display: block
    width: 6px
    min-width: 6px
    height: 6px
    margin: 0 26px
    border-radius: 1px
    transform: rotate(45deg)
    background-color: var(--cor-azul-medio)

.conteudo
  display: grid
  grid-template-columns: 0.85fr 1fr
  align-items: center
  gap: 90px
  width: 100%
  max-width: calc(var(--largura) + 80px)
  padding: 120px 40px 90px 40px

.foto
  position: relative
  width: 100%
  max-width: 560px

  &::before
    content: ''
    position: absolute
    right: -24px
    bottom: -24px
    z-index: 0
    width: 72%
    height: 60%
    border: 1px solid var(--cor-azul-suave)
    border-radius: 34px
    pointer-events: none

.quadro
  position: relative
  z-index: 1
  display: flex
  align-items: flex-end
  justify-content: center
  width: 100%
  aspect-ratio: 1 / 0.8
  border-radius: 32px
  overflow: hidden
  background-image: linear-gradient(150deg, var(--cor-azul-claro) 0%, var(--cor-azul-suave) 100%)

  svg
    position: absolute
    top: 50%
    left: 50%
    z-index: 0
    width: 78%
    transform: translate(-50%, -50%)
    fill: var(--cor-azul)
    opacity: 0.07

  img
    position: relative
    z-index: 1
    width: 100%
    height: 100%
    object-fit: cover
    object-position: 50% 50%

.selo
  position: absolute
  z-index: 2
  display: flex
  align-items: center
  gap: 9px
  padding: 11px 18px
  border-radius: 100px
  border: 1px solid var(--cor-branco)
  background-color: rgba(255, 255, 255, 0.82)
  box-shadow: 0 10px 30px rgba(31, 58, 95, 0.12)
  -webkit-backdrop-filter: blur(14px)
  backdrop-filter: blur(14px)
  color: var(--cor-azul)

  p
    font-family: var(--bold)
    font-size: var(--f1)
    white-space: nowrap
    color: var(--cor-azul)

.selo.um
  top: 14%
  left: -34px

.selo.dois
  top: 44%
  right: -30px

.selo.tres
  bottom: 12%
  left: -26px

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

.texto h2
  margin: 24px 0 0 0
  font-family: var(--light)
  font-size: var(--f9)
  line-height: 1.2
  letter-spacing: -0.8px
  color: var(--cor-azul-medio)

  span
    font-family: var(--bold)
    color: var(--cor-azul)

.texto p
  max-width: 640px
  margin: 22px 0 0 0
  font-family: var(--light)
  font-size: var(--f2)
  line-height: 1.68
  text-wrap: pretty
  color: var(--cor-cinza)

  b
    font-family: var(--bold)
    color: var(--cor-azul)

.assinatura
  display: flex
  align-items: center
  gap: 16px
  width: 100%
  max-width: 640px
  margin: 40px 0 0 0
  padding: 26px 0 0 0
  border-top: 1px solid var(--cor-cinza-claro)

  svg
    width: 38px
    min-width: 38px
    fill: var(--cor-azul)

.nome p
  margin: 0
  font-family: var(--bold)
  font-size: var(--f3)
  line-height: 1.2
  color: var(--cor-azul)

.nome span
  display: block
  margin: 5px 0 0 0
  font-family: var(--light)
  font-size: var(--f1)
  color: var(--cor-cinza)

.formacao
  display: flex
  flex-direction: column
  align-items: center
  width: 100%
  max-width: calc(var(--largura) + 80px)
  padding: 20px 40px 190px 40px

  // fio que conduz o olho ate o titulo
  &::before
    content: ''
    display: block
    width: 1px
    height: 52px
    margin: 0 0 30px 0
    background-image: linear-gradient(180deg, rgba(31, 58, 95, 0) 0%, var(--cor-azul-suave) 100%)

  h3
    font-family: var(--light)
    font-size: var(--f7)
    letter-spacing: -0.5px
    text-align: center
    color: var(--cor-azul)

.credenciais
  display: flex
  align-items: center
  flex-wrap: wrap
  justify-content: center
  gap: 12px
  width: 100%
  max-width: 1080px
  margin: 34px 0 0 0

.pilula
  display: flex
  align-items: center
  gap: 10px
  padding: 13px 22px
  border-radius: 100px
  border: 1px solid var(--cor-cinza-claro)
  background-color: var(--cor-branco)
  color: var(--cor-azul)

  p
    font-family: var(--light)
    font-size: var(--f1)
    color: var(--cor-azul-medio)

.botao
  display: flex
  align-items: center
  gap: 10px
  margin: 46px 0 0 0
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

@media (prefers-reduced-motion: reduce)
  .trilho
    animation: none

@media screen and (max-width: 1000px)
  .conteudo
    grid-template-columns: 1fr
    gap: 54px
    padding: 60px 20px 50px 20px

  .foto
    max-width: 400px
    margin: 0 auto

  .selo.um
    left: -10px

  .selo.dois
    right: -10px

  .selo.tres
    left: -10px

  .assinatura
    margin: 32px 0 0 0

  .texto h2
    font-size: var(--f7)

  .formacao
    padding: 10px 20px 110px 20px

    h3
      font-size: var(--f6)

  .credenciais
    gap: 10px
    margin: 26px 0 0 0

  .pilula
    padding: 11px 18px

  .botao
    justify-content: center
    width: 100%
    margin: 34px 0 0 0
</style>
