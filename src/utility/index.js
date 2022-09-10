export default function reducer(reducers, states) {
  return (state = states, { type, payload, ...rest }) => {
    const reduce = reducers[type]

    if (!reduce) {
      return state
    }

    return reduce(state, { type, payload, ...rest })
  }
}
