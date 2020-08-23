import * as React from 'react'

interface DizzyProps {
  text: string
}

export const Dizzy = ({ text }: DizzyProps) => {
  return <div>dummy: {text}</div>
}

const run = () => {
  return { ok: true, name: 'dizzy' }
}

export default run
