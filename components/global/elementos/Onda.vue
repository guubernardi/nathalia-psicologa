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

// pontos de controle colineares no encontro das duas béziers, senão vinca no meio
const CAMINHOS = {
  descendo: {
    atras: 'M0 120V14C240 4 480 20 720 38C960 56 1200 74 1440 66V120Z',
    frente: 'M0 120V38C240 28 480 44 720 62C960 80 1200 98 1440 90V120Z'
  },
  subindo: {
    atras: 'M0 120V72C240 82 480 66 720 48C960 30 1200 12 1440 20V120Z',
    frente: 'M0 120V96C240 106 480 90 720 72C960 54 1200 36 1440 44V120Z'
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
