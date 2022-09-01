<script>
  import { fade } from 'svelte/transition'
  import { flip } from 'svelte/animate'
  import PollStore from './stores/stores'
  import PollBox from './PollBox.svelte'

  const handleDelete = (index) => {
    const polls = $PollStore
    polls.splice(index, 1)

    PollStore.update(() => {
      return polls
    })
  }
</script>

<div class="polls">
  {#each $PollStore as poll, i (poll.id)}
    <div in:fade out:fade|local animate:flip={{ duration: 500 }}>
      <PollBox
        {poll}
        on:delete={() => {
          handleDelete(i)
        }}
      />
    </div>
  {/each}
</div>

<style>
  .polls {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.5em;
  }
</style>
