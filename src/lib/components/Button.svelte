<script>
  export let bgColor = 'var(--clr-secondary)'
</script>

<button on:click style="--btn-clr: {bgColor};">
  <slot />
</button>

<style>
  button {
    cursor: pointer;
    background-color: var(--btn-clr);
    margin: 1em 0;
    align-self: center;
    padding: 1em 1.5em;
    color: white;
    border-radius: 12px;
    font-family: sans-serif;
    font-weight: bold;
    letter-spacing: 0.05em;
    transition: transform 300ms ease-in-out, opacity 300ms ease-in-out;
  }

  button:hover,
  button:focus {
    transform: translateY(10%);
  }

  button:active {
    transform: translateY(10%) scale(0.9);
    opacity: 0.7;
  }
</style>
