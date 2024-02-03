// @ts-nocheck
import '@testing-library/jest-dom'
import { render } from "@testing-library/react"
import App from '../../src/App'

// COMPONENTS
import Edit from '../../src/components/Edit'
import Input from '../../src/components/Input'
import List from '../../src/components/List'

describe('App homepage', () => {
  beforeEach(() => {
    fetchMock.resetMocks()
  })

  it("renders the main page", () => {
    render(<App />)
    expect(true).toBeTruthy()
  })

  it("renders the Edit component", () => {
    render(<Edit />)
    expect(true).toBeTruthy()
  })

  it("renders the Input component", () => {
    render(<Input />)
    expect(true).toBeTruthy()
  })

  it("renders the List component", () => {
    render(<List />)
    expect(true).toBeTruthy()
  })
})

