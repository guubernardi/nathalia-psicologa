<template>
  <div id="documento">
    <DocumentosTermosSectionDocumento />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'web'
})

useHead({
  title: 'Termos de Uso | Nathalia Psicóloga',
  meta: [
    { name: 'description', content: 'Condições de acesso e uso do site da psicóloga Nathalia, CRP 23/2742. Atendimento psicológico online para adultos.' },
    { name: 'robots', content: 'noindex, follow' },
    { property: 'og:title', content: 'Termos de Uso | Nathalia Psicóloga' },
    { property: 'og:description', content: 'Condições de acesso e uso do site da psicóloga Nathalia, CRP 23/2742. Atendimento psicológico online para adultos.' }
  ]
})
</script>

<style lang="sass" scoped>
#documento
  display: flex
  flex-direction: column
  align-items: flex-start
  width: 100%
</style>
