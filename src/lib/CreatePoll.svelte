<script>
  import { v4 as uuidv4 } from 'uuid'
  import { createEventDispatcher } from 'svelte'
  import PollStore from './stores/stores'
  import Button from './components/Button.svelte'

  const dispatch = createEventDispatcher()

  let formFill = { question: '', answerA: '', answerB: '' }
  let errors = { question: '', answerA: '', answerB: '' }
  let valid = false

  const submitHandler = () => {
    valid = true

    if (formFill.question.trim().length < 5) {
      valid = false
      errors.question = `Question must be at least 5 characters long.`
    } else {
      errors.question = ''
    }

    if (formFill.answerA.trim().length < 1) {
      valid = false
      errors.answerA = `Answer A cannot be empty.`
    } else {
      errors.answerA = ''
    }

    if (formFill.answerB.trim().length < 1) {
      valid = false
      errors.answerB = `Answer B cannot be empty.`
    } else {
      errors.answerB = ''
    }

    if (valid) {
      const poll = { ...formFill, votesA: 0, votesB: 0, id: uuidv4() }
      $PollStore = [poll, ...$PollStore]
      dispatch('addPoll')
    }
  }
</script>

<form on:submit|preventDefault={submitHandler}>
  <div class="form-field">
    <label for="question">Question:</label>
    <input
      class:not-valid={Boolean(errors.question)}
      type="text"
      id="question"
      bind:value={formFill.question}
      placeholder="What do you think about svelte?"
    />
    <p class="error">{errors.question}</p>
  </div>
  <div class="form-field">
    <label for="answer-a">Answer A:</label>
    <input
      class:not-valid={Boolean(errors.answerA)}
      type="text"
      id="answer-a"
      bind:value={formFill.answerA}
      placeholder="Really great framewrok!"
    />
    <p class="error">{errors.answerA}</p>
  </div>
  <div class="form-field">
    <label for="answer-b">Answer B:</label>
    <input
      class:not-valid={Boolean(errors.answerB)}
      type="text"
      id="answer-b"
      bind:value={formFill.answerB}
      placeholder="Meh..."
    />
    <p class="error">{errors.answerB}</p>
  </div>
  <Button bgColor="var(--clr-accent)">add poll</Button>
</form>

<style>
  form {
    max-width: 30rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  .form-field {
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }

  .form-field input {
    padding: 0.5em;
    outline: 2px solid var(--clr-neutral-400);
    border-radius: 12px;
  }

  .error {
    color: var(--clr-error);
    font-size: 0.75rem;
    font-family: monospace;
  }

  input.not-valid {
    outline-width: 4px;
    outline-color: var(--clr-error);
  }
</style>
