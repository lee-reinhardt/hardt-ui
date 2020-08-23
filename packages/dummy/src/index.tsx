import * as React from 'react'

export const Dummy = () => {
  return <div>dummy</div>
}

const run = (foo: string) => {
  return { ok: true, name: 'dummy', foo }
}

export default run
