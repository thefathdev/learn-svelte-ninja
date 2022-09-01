import { writable } from 'svelte/store'
import { v4 as uuidv4 } from 'uuid'

const PollStore = writable([
  {
    id: uuidv4(),
    question: 'Python or Javascript?',
    answerA: 'Python',
    answerB: 'Javascript',
    votesA: 9,
    votesB: 15,
  },
])

export default PollStore
