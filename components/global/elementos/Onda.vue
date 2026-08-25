<template>
  <div class="onda" :class="posicao" :style="estilo">
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path class="atras" :d="caminhos.atras" />
      <path class="frente" :d="caminhos.frente" />
    </svg>
  </div>
</template>

<script setup>
const props = defineProps({
  direcao: { type: String, default: 'descendo' },
  posicao: { type: String, default: 'fundo' },
  corFrente: { type: String, default: 'var(--cor-branco)' },
  corAtras: { type: String, default: 'transparent' },
  altura: { type: Number, default: 110 },
  alturaMobile: { type: Number, default: 62 }
})

// tangentes inclinadas nas duas pontas, senão a curva achata e vira listra na borda da tela.
// nos encontros os pontos de controle são colineares, senão vinca no meio
const CAMINHOS = {
  descendo: {
    atras: 'M0 120V-2C120 34 340 50.2 620 44C880 38.3 1060 2.2 1300 6C1370 7.1 1410 16 1440 26V120Z',
    frente: 'M0 150V22C120 58 340 74.2 620 68C880 62.3 1060 26.2 1300 30C1370 31.1 1410 40 1440 50V150Z'
  },
  subindo: {
    atras: 'M0 120V74C120 38 340 21.8 620 28C880 33.7 1060 69.8 1300 66C1370 64.9 1410 56 1440 46V120Z',
    frente: 'M0 150V98C120 62 340 45.8 620 52C880 57.7 1060 93.8 1300 90C1370 88.9 1410 80 1440 70V150Z'
  }
}

const caminhos = computed(() => CAMINHOS[props.direcao] || CAMINHOS.descendo)

const estilo = computed(() => ({
  '--onda-frente': props.corFrente,
  '--onda-atras': props.corAtras,
  '--onda-altura': `${props.altura}px`,
  '--onda-altura-mobile': `${props.alturaMobile}px`
}))
</script>

<style lang="sass" scoped>
.onda
  position: absolute
  bottom: -1px
  left: 0
  z-index: 2
  width: 100%
  line-height: 0
  pointer-events: none

  svg
    display: block
    width: 100%
    height: var(--onda-altura)
    // so a frente sangra pra fora da caixa. a crista para em 120, onde a
    // frente ja e opaca, senao as duas arestas antialiasadas se somam num fio claro
    overflow: visible

  path.atras
    fill: var(--onda-atras)

  path.frente
    fill: var(--onda-frente)

// no topo a onda espelha: a cor da frente passa a preencher o que fica acima da curva
.onda.topo
  top: -1px
  bottom: auto

  svg
    transform: scaleY(-1)

@media screen and (max-width: 1000px)
  .onda svg
    height: var(--onda-altura-mobile)
</style>
