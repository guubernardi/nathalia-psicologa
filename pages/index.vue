<template>
  <div id="index">
    <IndexSectionHero />
    <IndexSectionSituacoes />
    <IndexSectionProcesso />
    <IndexSectionComoFunciona />
    <IndexSectionBeneficios />
    <IndexSectionSobre />
    <IndexSectionPerguntas />
    <IndexSectionAgendar />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'web'
})

useHead({
  title: 'Nathalia | Psicóloga Online',
  meta: [
    { name: 'description', content: 'Atendimento psicológico online para adultos, em sessões de 50 minutos. Terapia Cognitivo-Comportamental com a psicóloga Nathalia, CRP 23/2742.' },
    { property: 'og:title', content: 'Nathalia | Psicóloga Online' },
    { property: 'og:description', content: 'Atendimento psicológico online para adultos, em sessões de 50 minutos. Terapia Cognitivo-Comportamental com a psicóloga Nathalia, CRP 23/2742.' }
  ]
})
</script>

<style lang="sass" scoped>
#index
  display: flex
  flex-direction: column
  align-items: flex-start
  width: 100%
</style>
