<template>
  <div id="documento">
    <DocumentosPoliticasSectionDocumento />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'web'
})

useHead({
  title: 'Política de Privacidade | Nathalia Psicóloga',
  meta: [
    { name: 'description', content: 'Como os dados pessoais de quem acessa este site são coletados, utilizados e protegidos, conforme a LGPD e o Código de Ética Profissional do Psicólogo.' },
    { name: 'robots', content: 'noindex, follow' },
    { property: 'og:title', content: 'Política de Privacidade | Nathalia Psicóloga' },
    { property: 'og:description', content: 'Como os dados pessoais de quem acessa este site são coletados, utilizados e protegidos, conforme a LGPD e o Código de Ética Profissional do Psicólogo.' }
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
