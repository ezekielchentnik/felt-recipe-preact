// Import Preact and the DummyComponent.
import { h, render } from 'preact'
import { DummyComponent } from './components/dummy-component.jsx'

// Define the root element.
const root = document.querySelector('main')

// Append the DummyComponent instance to the root element.
render(<DummyComponent />, root)
