import * as React from 'react'
import { Button as ChakraButton, ButtonProps } from '@chakra-ui/core'

export const Dummy = () => {
  return <div>dummy 2</div>
}

export const Button = (props: ButtonProps) => {
  return <ChakraButton size="sm" colorScheme="blue" {...props} />
}

const run = (foo: string) => {
  return { ok: true, name: 'dummy', foo }
}

export default run
