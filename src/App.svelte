<script>
  import Header from './lib/Header.svelte'
</script>

<Header />
<main />

<style>
  :global(:root) {
    --clr-primary: hsl(37, 95%, 56%);
    --clr-secondary: hsl(0, 0%, 25%);
  }

  main {
    max-width: 60rem;
    margin-inline: auto;
  }
</style>
