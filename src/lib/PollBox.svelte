<script>
  import { createEventDispatcher } from 'svelte'
  import { tweened } from 'svelte/motion'
  import { cubicOut } from 'svelte/easing'
  import Button from './components/Button.svelte'
  import Card from './components/Card.svelte'
  export let poll

  const dispatch = createEventDispatcher()

  // reactive values
  $: totalVotes = poll.votesA + poll.votesB

  // find bar length
  const percent = (votes) => {
    if (votes === 0) {
      return 0
    }
    const percentage = votes / totalVotes

    return percentage
  }

  $: lengthA = percent(poll.votesA)
  $: lengthB = percent(poll.votesB)

  // tweens
  const tweenedA = tweened(0, {
    duration: 300,
    easing: cubicOut,
  })
  const tweenedB = tweened(0, {
    duration: 300,
    easing: cubicOut,
  })

  $: tweenedA.set(lengthA)
  $: tweenedB.set(lengthB)
</script>

<Card>
  <div class="poll">
    <h3 class="poll__question">{poll.question}</h3>
    <p class="poll__total">Total votes: {totalVotes}</p>
    <div
      class="answer"
      on:click={() => {
        poll.votesA++
      }}
    >
      <div class="percent percent-a" style="--percent: {$tweenedA}" />
      <span>{poll.answerA} ({poll.votesA})</span>
    </div>
    <div
      class="answer"
      on:click={() => {
        poll.votesB++
      }}
    >
      <div class="percent percent-b" style="--percent: {$tweenedB}" />
      <span>{poll.answerB} ({poll.votesB})</span>
    </div>
  </div>
  <Button
    bgColor="var(--clr-primary)"
    on:click={() => {
      dispatch('delete')
    }}>Delete</Button
  >
</Card>

<style>
  .poll {
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
  }

  .poll__question {
    font-weight: bold;
    font-size: 1.5em;
    margin-bottom: 0.5em;
    color: var(--clr-secondary);
  }

  .poll__total {
    font-size: 0.9em;
    color: var(--clr-neutral-400);
    margin-bottom: 1em;
  }

  .answer {
    cursor: pointer;
    padding: 0.75em;
    background-color: var(--clr-neutral-100);
    margin-bottom: 0.5em;
    margin-inline: 1em;
    position: relative;
  }

  .answer:hover,
  .answer:focus {
    opacity: 0.5;
  }

  .answer span {
    position: relative;
    z-index: 2;
  }

  .percent {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    transform-origin: 0 50%;
    transform: scaleX(var(--percent));
    opacity: 0.75;
    /* transition: transform 300ms ease-in-out; */
  }

  .percent-a {
    background-color: var(--clr-accent);
  }
  .percent-b {
    background-color: var(--clr-error);
  }
</style>
