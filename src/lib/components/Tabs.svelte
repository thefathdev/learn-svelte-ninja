<script>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  export let tabs
  export let activeTab
</script>

<nav>
  <ul>
    {#each tabs as tab}
      <li
        class:active={activeTab === tab}
        on:click={() => dispatch('changeTab', tab)}
      >
        {tab}
      </li>
    {/each}
  </ul>
</nav>

<style>
  nav {
    margin-top: 2em;
    margin-bottom: 2em;
  }
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1em;
  }
  li {
    cursor: pointer;
    font-family: sans-serif;
    padding: 1em;
    color: var(--clr-secondary);
  }

  li:hover {
    color: var(--clr-primary);
  }
  .active {
    color: var(--clr-primary);
    outline: 0.1em solid var(--clr-primary);
    border-radius: 12px;
  }
</style>
