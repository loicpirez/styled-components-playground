import React, { Component } from 'react'
import Wrapper from '../Wrapper'
import Title from '../Title'
import Input from '../Input'
import Button from '../Button'
import PasswordInput from '../PasswordInput'
import Rotate from '../Rotate'

class App extends Component {
  render () {
    return (
      <Wrapper>
        <Title>
          Hello World, this is my first styled component!
        </Title>
        <Input placeholder="@mxstbr" type="text" />
        <Input value="@geelen" type="text" />
        <Button>Normal</Button>
        <Button primary>Primary</Button>
        <PasswordInput placeholder="A small text input" size="1em" />
        <PasswordInput placeholder="A bigger text input" size="2em" />
        <Rotate>&lt; ⏳ &gt;</Rotate>
      </Wrapper>
    )
  }
}

export default App
