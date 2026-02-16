
// components.js
// Custom reusable card element using <slot>

class MyCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    shadow.innerHTML = `
      <style>
        .card {
          border: 1px solid #ccc;
          border-radius: 12px;
          padding: 16px;
          background: #ffffff;
        }
      </style>
      <div class="card">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define("my-card", MyCard);
