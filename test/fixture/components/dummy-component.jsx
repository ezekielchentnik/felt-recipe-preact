// Import Preact.
import { h, Component } from 'preact'

export class DummyComponent extends Component {
  render () {
    return (
      <article>
        <h1>Hi from DummyComponent.</h1>
        <em>Now let{`'`}s play with Preact!</em>
      </article>
    )
  }
}
