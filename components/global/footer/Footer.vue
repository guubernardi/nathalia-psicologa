<template>
  <footer>
    <ElementosOnda posicao="topo" direcao="subindo" cor-frente="var(--cor-branco)" cor-atras="var(--cor-azul)" />

    <div class="conteudo">
      <div class="sobre">
        <div class="marca">
          <Svgs nome="logo" />
          <div class="identificacao">
            <p>Nathalia</p>
            <span>Psicóloga clínica · CRP 23/2742</span>
          </div>
        </div>

        <p class="descricao">Atendimento psicológico online para adultos, em sessões de 50 minutos. Terapia Cognitivo-Comportamental, DBT e ACT.</p>

        <a href="#agendar" class="botao">
          <SvgIcone nome="agenda" :tamanho="15" />
          <p>Agendar primeira sessão</p>
        </a>
      </div>

      <div class="coluna">
        <h3>Navegação</h3>
        <a v-for="link in links" :key="link.id" :href="'#' + link.id">{{ link.nome }}</a>
      </div>

      <div class="coluna">
        <h3>Atendimento</h3>
        <span v-for="item in atendimento" :key="item">
          <SvgIcone :nome="item.icone" :tamanho="14" />
          {{ item.texto }}
        </span>
      </div>

      <div class="coluna">
        <h3>Documentos</h3>
        <NuxtLink to="/documentos/politicas">Política de privacidade</NuxtLink>
        <NuxtLink to="/documentos/termos">Termos de uso</NuxtLink>
      </div>
    </div>

    <div class="direitos">
      <p>© {{ ano }} Nathalia · Psicóloga Clínica · Todos os direitos reservados</p>

      <a href="https://gustavobernardi.com" target="_blank" rel="noopener noreferrer" class="dev">
        <span>Desenvolvido por</span>
        <Svgs nome="dev" />
        <span class="nome">Gustavo Bernardi</span>
      </a>
    </div>
  </footer>
</template>

<script setup>
const links = [
  { id: 'inicio', nome: 'Início' },
  { id: 'processo', nome: 'Processo' },
  { id: 'como-funciona', nome: 'Como Funciona' },
  { id: 'perguntas', nome: 'Perguntas' },
  { id: 'agendar', nome: 'Agendar' }
]

const atendimento = [
  { icone: 'relogio', texto: 'Sessões de 50 minutos' },
  { icone: 'laptop', texto: '100% online' },
  { icone: 'usuarios', texto: 'Exclusivo para adultos' },
  { icone: 'cadeado', texto: 'Sigilo profissional' }
]

const ano = new Date().getFullYear()
</script>

<style scoped lang="sass">
footer
  position: relative
  display: flex
  flex-direction: column
  align-items: center
  width: 100%
  padding: 0 40px
  background-color: var(--cor-azul-escuro)
  background-image: radial-gradient(60% 70% at 12% 0%, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0) 70%)

.conteudo
  display: grid
  grid-template-columns: 1.6fr 1fr 1fr 1fr
  align-items: flex-start
  gap: 60px
  width: 100%
  max-width: var(--largura)
  padding: 168px 0 64px 0

.sobre
  display: flex
  flex-direction: column
  align-items: flex-start
  max-width: 460px

.marca
  display: flex
  align-items: center
  gap: 14px

  svg
    width: 42px
    min-width: 42px
    fill: var(--cor-branco)

.identificacao p
  font-family: var(--bold)
  font-size: var(--f3)
  line-height: 1.2
  color: var(--cor-branco)

.identificacao span
  display: block
  margin: 5px 0 0 0
  font-family: var(--light)
  font-size: var(--f1)
  color: rgba(255, 255, 255, 0.6)

.descricao
  margin: 26px 0 0 0
  font-family: var(--light)
  font-size: var(--f2)
  line-height: 1.65
  text-wrap: pretty
  color: rgba(255, 255, 255, 0.68)

.botao
  display: flex
  align-items: center
  gap: 10px
  margin: 30px 0 0 0
  padding: 15px 26px
  border-radius: 100px
  background-color: var(--cor-branco)
  color: var(--cor-azul)
  transition: all 0.4s

  p
    font-family: var(--bold)
    font-size: var(--f1)
    color: var(--cor-azul)
    white-space: nowrap

  &:hover
    background-color: var(--cor-azul-claro)

.coluna
  display: flex
  flex-direction: column
  align-items: flex-start
  gap: 16px

  h3
    margin: 0 0 6px 0
    font-family: var(--bold)
    font-size: var(--f0)
    letter-spacing: 1.4px
    text-transform: uppercase
    color: rgba(255, 255, 255, 0.45)

  a
    font-family: var(--light)
    font-size: var(--f2)
    color: rgba(255, 255, 255, 0.78)
    transition: all 0.3s

    &:hover
      color: var(--cor-branco)

  > span
    display: flex
    align-items: center
    gap: 10px
    font-family: var(--light)
    font-size: var(--f2)
    color: rgba(255, 255, 255, 0.68)

    .edusites-icone
      color: rgba(255, 255, 255, 0.45)

.direitos
  display: flex
  align-items: center
  justify-content: space-between
  flex-wrap: wrap
  gap: 18px
  width: 100%
  max-width: var(--largura)
  padding: 24px 0 28px 0
  border-top: 1px solid rgba(255, 255, 255, 0.12)

  > p
    font-family: var(--light)
    font-size: var(--f1)
    color: rgba(255, 255, 255, 0.5)

.dev
  display: flex
  align-items: center
  gap: 10px
  color: rgba(255, 255, 255, 0.5)
  transition: all 0.3s

  svg
    width: 17px
    min-width: 17px
    height: auto

  span
    font-family: var(--light)
    font-size: var(--f1)
    color: rgba(255, 255, 255, 0.5)
    transition: all 0.3s

  .nome
    font-family: var(--bold)
    color: rgba(255, 255, 255, 0.78)

  &:hover
    color: var(--cor-branco)

  &:hover span
    color: var(--cor-branco)

@media screen and (max-width: 1100px)
  .conteudo
    grid-template-columns: 1fr 1fr
    gap: 44px

  .sobre
    grid-column: 1 / -1
    max-width: 100%

@media screen and (max-width: 1000px)
  footer
    padding: 0 20px

  .conteudo
    grid-template-columns: 1fr
    gap: 36px
    padding: 110px 0 44px 0

  .botao
    justify-content: center
    width: 100%

  .direitos
    flex-direction: column
    align-items: flex-start
    gap: 14px
    padding: 22px 0 26px 0
</style>
