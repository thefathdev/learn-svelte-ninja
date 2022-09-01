<script>
  import PollStore from './stores/stores'
  import PollBox from './PollBox.svelte'
</script>

<div class="polls">
  {#each $PollStore as poll (poll.id)}
    <PollBox {poll} />
  {/each}
</div>

<style>
  .polls {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.5em;
  }
</style>
