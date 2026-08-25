<template>
  <section class="documento">
    <div class="conteudo">
      <div class="cabecalho">
        <NuxtLink to="/" class="voltar">
          <SvgIcone nome="seta-esquerda" :tamanho="14" />
          Voltar para o início
        </NuxtLink>
        <h1>Termos de Uso</h1>
        <p class="atualizacao">Última atualização: 24 de agosto de 2026</p>
      </div>

      <p>Estes Termos de Uso regulam o acesso e a utilização deste site. Ao navegar por ele, você declara ter lido e concordado com as condições abaixo. Caso não concorde, pedimos que não utilize o site.</p>

      <h2>1. Sobre este site</h2>
      <p>Este site é mantido por <b>[NOME COMPLETO]</b>, psicóloga inscrita no Conselho Regional de Psicologia sob o registro CRP 23/2742, e tem finalidade exclusivamente informativa. Ele apresenta a atuação profissional e serve como canal para solicitar o agendamento de sessões.</p>

      <h2>2. Este site não é atendimento psicológico</h2>
      <p>O conteúdo publicado aqui é informativo e <b>não constitui consulta, avaliação, diagnóstico ou tratamento psicológico</b>. A leitura deste site não estabelece relação profissional entre você e a psicóloga, que se inicia apenas com a primeira sessão efetivamente agendada e realizada.</p>
      <p>Nenhuma informação deste site substitui a avaliação individual de um profissional de saúde qualificado.</p>

      <div class="alerta">
        <h2>3. Situações de emergência</h2>
        <p>Este site não atende urgências e as mensagens não são monitoradas em tempo real.</p>
        <p>Se você está em risco imediato, ou pensando em machucar a si mesma ou a outra pessoa, procure ajuda agora:</p>
        <ul>
          <li><b>CVV, Centro de Valorização da Vida:</b> ligue 188, 24 horas por dia, gratuito.</li>
          <li><b>SAMU:</b> 192.</li>
          <li><b>Emergência:</b> 190, ou dirija-se ao pronto-socorro mais próximo.</li>
        </ul>
      </div>

      <h2>4. Agendamento e atendimento</h2>
      <p>O envio de uma solicitação de agendamento por este site não garante, por si só, a reserva do horário. O agendamento se confirma apenas após retorno e acordo entre as partes.</p>
      <p>As sessões são realizadas por videochamada, têm duração de 50 minutos e são voltadas exclusivamente para pessoas maiores de 18 anos. O atendimento online segue a Resolução CFP nº 11/2018, que regulamenta a prestação de serviços psicológicos por meios de tecnologia da informação e comunicação.</p>
      <p>Condições de valor, pagamento, remarcação e cancelamento são combinadas diretamente com a psicóloga antes do início do acompanhamento.</p>

      <h2>5. Sigilo profissional</h2>
      <p>Tudo o que é tratado nas sessões está protegido pelo sigilo previsto no Código de Ética Profissional do Psicólogo. As exceções são estritamente aquelas admitidas pelo próprio Código, especialmente situações de risco à vida, e nesses casos você é informada sobre os passos necessários.</p>
      <p>Psicólogos não realizam prescrição de medicamentos. Quando o caso indicar, é feito o encaminhamento para acompanhamento médico.</p>

      <h2>6. Responsabilidades de quem usa o site</h2>
      <ul>
        <li>Fornecer informações verdadeiras ao entrar em contato.</li>
        <li>Não utilizar o site para fins ilícitos, ofensivos ou que violem direitos de terceiros.</li>
        <li>Não tentar acessar áreas restritas, comprometer a segurança ou interferir no funcionamento do site.</li>
        <li>Não enviar informações clínicas detalhadas pelos canais de contato, que não são destinados a esse fim.</li>
      </ul>

      <h2>7. Propriedade intelectual</h2>
      <p>Todo o conteúdo deste site, incluindo textos, imagens, identidade visual, marca e código, é protegido pela legislação de direitos autorais e de propriedade industrial.</p>
      <p>É permitido o compartilhamento de links para as páginas. Reprodução, adaptação ou uso comercial de qualquer parte do conteúdo depende de autorização prévia e por escrito.</p>

      <h2>8. Links para sites de terceiros</h2>
      <p>Este site pode conter links para páginas e serviços de terceiros, como aplicativos de mensagem e plataformas de videochamada. Esses serviços possuem termos e políticas próprios, e não há responsabilidade sobre o conteúdo, as práticas ou a disponibilidade deles.</p>

      <h2>9. Disponibilidade e limitação de responsabilidade</h2>
      <p>São feitos esforços para manter o site disponível e com informações corretas e atualizadas, sem que isso represente garantia de funcionamento ininterrupto ou livre de falhas.</p>
      <p>Não há responsabilidade por danos decorrentes de indisponibilidade temporária, de interpretação equivocada do conteúdo informativo ou de decisões tomadas com base apenas na leitura do site, sem avaliação profissional individual.</p>

      <h2>10. Privacidade</h2>
      <p>O tratamento de dados pessoais realizado a partir deste site está descrito na <NuxtLink to="/documentos/politicas">Política de Privacidade</NuxtLink>, que integra estes Termos de Uso.</p>

      <h2>11. Alterações destes termos</h2>
      <p>Estes Termos podem ser alterados a qualquer momento para refletir mudanças no serviço ou na legislação. A versão vigente é sempre a publicada nesta página, com a data da última atualização indicada no topo.</p>

      <h2>12. Legislação aplicável e foro</h2>
      <p>Estes Termos são regidos pelas leis brasileiras. Fica eleito o foro da comarca de <b>[CIDADE/ESTADO]</b> para dirimir eventuais controvérsias, com renúncia a qualquer outro, por mais privilegiado que seja.</p>

      <h2>13. Contato</h2>
      <p>Dúvidas sobre estes Termos de Uso podem ser enviadas para <b>[E-MAIL DE CONTATO]</b>.</p>
    </div>
  </section>
</template>

<script setup></script>

<style lang="sass" scoped>
section.documento
  display: flex
  align-items: flex-start
  justify-content: center
  width: 100%
  padding: 170px 40px 120px 40px
  background-color: var(--cor-branco)

.conteudo
  width: 100%
  max-width: 860px

.cabecalho
  display: flex
  flex-direction: column
  align-items: flex-start
  margin: 0 0 46px 0
  padding: 0 0 30px 0
  border-bottom: 1px solid var(--cor-cinza-claro)

.voltar
  display: flex
  align-items: center
  gap: 9px
  font-family: var(--light)
  font-size: var(--f1)
  text-decoration: none
  color: var(--cor-cinza)
  transition: all 0.3s

  &:hover
    color: var(--cor-azul)

.cabecalho h1
  margin: 20px 0 0 0
  font-family: var(--light)
  font-size: var(--f9)
  line-height: 1.2
  letter-spacing: -0.8px
  color: var(--cor-azul)

.atualizacao
  margin: 14px 0 0 0
  font-family: var(--light)
  font-size: var(--f1)
  color: var(--cor-cinza)

.alerta
  margin: 46px 0
  padding: 6px 32px 26px 32px
  border-radius: 20px
  border: 1px solid var(--cor-azul-suave)
  background-color: var(--cor-azul-claro)

  h2
    margin: 26px 0 14px 0

  p,
  li
    color: var(--cor-azul-medio)

.conteudo
  h2
    margin: 46px 0 16px 0
    font-family: var(--bold)
    font-size: var(--f4)
    line-height: 1.35
    text-wrap: balance
    color: var(--cor-azul)

  p
    margin: 0 0 16px 0
    font-family: var(--light)
    font-size: var(--f2)
    line-height: 1.75
    text-wrap: pretty
    color: var(--cor-cinza)

    b
      font-family: var(--bold)
      color: var(--cor-azul)

  ul
    margin: 0 0 16px 0
    padding: 0 0 0 22px

    li
      margin: 0 0 10px 0
      font-family: var(--light)
      font-size: var(--f2)
      line-height: 1.75
      color: var(--cor-cinza)

      &::marker
        color: var(--cor-azul-suave)

      b
        font-family: var(--bold)
        color: var(--cor-azul)

  a
    font-family: inherit
    color: var(--cor-azul)
    text-decoration: underline

@media screen and (max-width: 1000px)
  section.documento
    padding: 120px 20px 70px 20px

  .cabecalho
    margin: 0 0 34px 0


  .conteudo h2
    margin: 36px 0 14px 0

  .alerta
    margin: 34px 0
    padding: 4px 20px 20px 20px
</style>
