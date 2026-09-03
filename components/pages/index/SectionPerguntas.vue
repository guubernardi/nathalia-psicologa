<template>
  <section class="perguntas" id="perguntas">
    <div class="conteudo">
      <div class="cabecalho revela" v-revelar>
        <div class="etiqueta">
          <SvgIcone nome="duvida" :tamanho="13" />
          Perguntas frequentes
        </div>
        <h2>Ainda ficou alguma dúvida?</h2>
      </div>

      <div class="lista revela" v-revelar="120">
        <div class="item" :class="{ aberta: aberta === i }" v-for="(item, i) in perguntas" :key="item.pergunta">
          <button @click="alternar(i)" :aria-expanded="aberta === i" :aria-controls="`resposta-${i}`">
            <p>{{ item.pergunta }}</p>
            <span class="seta">
              <SvgIcone nome="chevron-baixo" :tamanho="14" />
            </span>
          </button>

          <div class="resposta" :id="`resposta-${i}`">
            <div>
              <p>{{ item.resposta }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="rodape revela" v-revelar>
        <p>Não encontrou o que procurava? A primeira sessão também serve para tirar dúvidas.</p>
        <a href="#agendar" class="botao">
          <SvgIcone nome="agenda" :tamanho="16" />
          <p>Agendar primeira sessão</p>
        </a>
      </div>
    </div>

    <ElementosOnda direcao="subindo" cor-frente="var(--cor-branco)" cor-atras="var(--cor-azul-medio)" />
  </section>
</template>

<script setup>
const perguntas = [
  {
    pergunta: 'Como funciona a terapia online?',
    resposta: 'As sessões acontecem por videochamada e duram 50 minutos. Você só precisa de um lugar reservado, onde consiga falar à vontade, e de uma conexão estável. O link é enviado antes de cada encontro.'
  },
  {
    pergunta: 'A terapia online tem o mesmo efeito da presencial?',
    resposta: 'Sim. O atendimento psicológico online é regulamentado pelo Conselho Federal de Psicologia desde a Resolução nº 11/2018, e a literatura mostra resultados equivalentes aos do formato presencial para a maior parte das demandas de adultos.'
  },
  {
    pergunta: 'Com que frequência acontecem as sessões?',
    resposta: 'Normalmente uma vez por semana, no mesmo dia e horário. Essa regularidade é o que sustenta a continuidade do trabalho. Conforme você avança, a gente pode espaçar os encontros.'
  },
  {
    pergunta: 'Quanto tempo dura o processo?',
    resposta: 'Não existe prazo fixo. Depende do que te trouxe, dos objetivos que a gente combinar e do seu ritmo. Isso é revisto junto com você ao longo do caminho, e não decidido de forma unilateral.'
  },
  {
    pergunta: 'O que é a Terapia Cognitivo-Comportamental?',
    resposta: 'É uma abordagem que investiga como pensamentos, emoções e comportamentos se influenciam. O trabalho é ativo e prático: além de entender o que acontece, você sai das sessões com recursos para usar no dia a dia.'
  },
  {
    pergunta: 'O que eu contar fica em sigilo?',
    resposta: 'Fica. O sigilo profissional é obrigação prevista no Código de Ética Profissional do Psicólogo. As poucas exceções são situações de risco à vida, e nesses casos você é informada antes de qualquer passo.'
  },
  {
    pergunta: 'Preciso ter um diagnóstico para começar?',
    resposta: 'Não. Você não precisa saber nomear o que está sentindo, nem ter passado por avaliação nenhuma. Sofrimento que atrapalha o seu dia a dia já é motivo suficiente para procurar ajuda.'
  },
  {
    pergunta: 'Você atende crianças e adolescentes?',
    resposta: 'No momento o atendimento é voltado exclusivamente para adultos. Se a demanda for de alguém mais novo, posso indicar profissionais que trabalham com esse público.'
  }
]

const aberta = ref(0)

function alternar(i) {
  aberta.value = aberta.value === i ? null : i
}

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: perguntas.map((item) => ({
          '@type': 'Question',
          'name': item.pergunta,
          'acceptedAnswer': { '@type': 'Answer', 'text': item.resposta }
        }))
      })
    }
  ]
})
</script>

<style lang="sass" scoped>
section.perguntas
  position: relative
  display: flex
  align-items: center
  justify-content: center
  width: 100%
  padding: 120px 40px 190px 40px
  background-color: var(--cor-azul)
  background-image: radial-gradient(46% 40% at 50% 62%, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0) 70%)

.conteudo
  display: flex
  flex-direction: column
  align-items: center
  width: 100%
  max-width: 980px

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
  border: 1px solid rgba(255, 255, 255, 0.18)
  background-color: rgba(255, 255, 255, 0.08)
  font-family: var(--bold)
  font-size: var(--f0)
  letter-spacing: 1.4px
  text-transform: uppercase
  color: var(--cor-branco)

.cabecalho h2
  max-width: 700px
  margin: 24px 0 0 0
  font-family: var(--light)
  font-size: var(--f9)
  line-height: 1.2
  letter-spacing: -0.8px
  text-wrap: balance
  color: var(--cor-branco)

.lista
  display: flex
  flex-direction: column
  align-items: stretch
  gap: 12px
  width: 100%
  margin: 56px 0 0 0

.item
  border-radius: 20px
  border: 1px solid rgba(255, 255, 255, 0.14)
  background-color: rgba(255, 255, 255, 0.05)
  overflow: hidden
  transition: background-color 0.4s, border-color 0.4s

  &.aberta
    border-color: rgba(255, 255, 255, 0.26)
    background-color: rgba(255, 255, 255, 0.09)

  button
    display: flex
    align-items: center
    justify-content: space-between
    gap: 22px
    width: 100%
    padding: 24px 28px
    background-color: transparent
    text-align: left

    p
      font-family: var(--bold)
      font-size: var(--f3)
      line-height: 1.35
      color: var(--cor-branco)

.seta
  display: flex
  align-items: center
  justify-content: center
  width: 34px
  min-width: 34px
  height: 34px
  border-radius: 100px
  border: 1px solid rgba(255, 255, 255, 0.18)
  background-color: rgba(255, 255, 255, 0.08)
  transition: transform 0.4s, background-color 0.4s
  color: var(--cor-branco)

.item.aberta .seta
  transform: rotate(180deg)
  background-color: rgba(255, 255, 255, 0.16)

.resposta
  display: grid
  grid-template-rows: 0fr
  transition: grid-template-rows 0.4s ease

  > div
    overflow: hidden

  p
    margin: 0
    padding: 0 76px 26px 28px
    font-family: var(--light)
    font-size: var(--f2)
    line-height: 1.68
    text-wrap: pretty
    color: rgba(255, 255, 255, 0.7)

.item.aberta .resposta
  grid-template-rows: 1fr

.rodape
  display: flex
  flex-direction: column
  align-items: center
  margin: 56px 0 0 0

  > p
    max-width: 520px
    font-family: var(--light)
    font-size: var(--f2)
    line-height: 1.6
    text-align: center
    text-wrap: pretty
    color: rgba(255, 255, 255, 0.68)

.botao
  display: flex
  align-items: center
  gap: 10px
  margin: 26px 0 0 0
  padding: 17px 30px
  border-radius: 100px
  background-color: var(--cor-branco)
  color: var(--cor-azul)
  transition: all 0.4s

  p
    font-family: var(--bold)
    font-size: var(--f2)
    color: var(--cor-azul)
    white-space: nowrap

  &:hover
    background-color: var(--cor-azul-claro)

@media (prefers-reduced-motion: reduce)
  .resposta,
  .seta
    transition: none

@media screen and (max-width: 1000px)
  section.perguntas
    padding: 70px 20px 110px 20px


  .lista
    gap: 10px
    margin: 38px 0 0 0

  .item button
    gap: 14px
    padding: 20px 20px


  .resposta p
    padding: 0 20px 22px 20px

  .rodape
    width: 100%
    margin: 40px 0 0 0

  .botao
    justify-content: center
    width: 100%
</style>
