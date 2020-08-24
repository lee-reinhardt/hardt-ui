import * as React from 'react'

export const Dummy = () => {
  return <div>dummy 2</div>
}

const run = (foo: string) => {
  return { ok: true, name: 'dummy', foo }
}

export default run
