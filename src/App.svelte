<script>
  import { v4 as uuidv4 } from 'uuid'
  import Header from './lib/Header.svelte'
  import Footer from './lib/Footer.svelte'
  import PollShowCase from './lib/PollShowCase.svelte'
  import CreatePoll from './lib/CreatePoll.svelte'
  import Tabs from './lib/components/Tabs.svelte'

  // tabs
  let tabs = ['Current Polls', 'Add New Polls']
  let activeTab = 'Current Polls'

  // polls
  let polls = [
    {
      id: uuidv4(),
      question: 'Python or Javascript?',
      answerA: 'Python',
      answerB: 'Javascript',
      votesA: 9,
      votesB: 15,
    },
  ]
</script>

<Header />

<main>
  <Tabs {tabs} {activeTab} on:changeTab={(e) => (activeTab = e.detail)} />
  {#if activeTab === 'Current Polls'}
    <PollShowCase />
  {:else if activeTab === 'Add New Polls'}
    <CreatePoll
      on:addPoll={(e) => {
        activeTab = 'Current Polls'
      }}
    />
  {/if}
</main>

<Footer />

<style>
  :global(:root) {
    --clr-primary: hsl(37, 95%, 56%);
    --clr-secondary: hsl(0, 0%, 25%);
    --clr-accent: hsl(153, 96%, 38%);
    --clr-error: hsl(345, 71%, 49%);
    --clr-neutral-100: hsl(36, 100%, 97%);
    --clr-neutral-400: hsl(0, 0%, 59%);
  }

  main {
    margin-bottom: 3em;
    max-width: 60rem;
    margin-inline: auto;
    border-top: 2px solid var(--clr-secondary);
  }
</style>
