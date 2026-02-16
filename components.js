
// components.js
// Custom reusable card element using <slot>

class MyCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    shadow.innerHTML = `
      <style>
        .card {
          border: 2px solid #16a085;
          border-radius: 12px;
          padding: 16px;
          background: #f5f9fc;
          box-shadow: 0 4px 6px rgba(15, 52, 96, 0.08);
          color: #1a2e42;
        }
        ::slotted(h2) {
          color: #0f3460;
          margin-top: 0;
          border-bottom: 2px solid #00d4ff;
          padding-bottom: 8px;
        }
        ::slotted(p) {
          color: #1a2e42;
        }
        ::slotted(a) {
          color: #16a085;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }
        ::slotted(a:hover) {
          color: #00d4ff;
          text-decoration: underline;
        }
      </style>
      <div class="card">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define("my-card", MyCard);
