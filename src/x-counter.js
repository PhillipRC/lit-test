import { LitElement, html, property } from 'lit';

class XCounter extends LitElement {
  static get properties() {
    return {
      value: { type: Number }
    };
  }

  constructor() {
    super();
    this.value = 0;
  }

  render() {
    return html`
      <style>
        button,
        p {
          display: inline-block;
        }
      </style>
      <button @click="${() => this.decrement()}" aria-label="decrement">
        -
      </button>
      <p>${this.value}</p>
      <button @click="${() => this.increment()}" aria-label="increment">
        +
      </button>
    `;
  }

  decrement() {
    this.value--;
    this._valueChanged();
  }

  increment() {
    this.value++;
    this._valueChanged();
  }

  _valueChanged() {
    // Fire a custom event for others to listen to
    this.dispatchEvent(new CustomEvent('valueChange', { detail: this.value }));
  }
}

customElements.define('x-counter', XCounter);