
// components.js
// Custom reusable card element using <slot>
// note: added an extra JS file to the project in order to use the slot element.

class MyCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    shadow.innerHTML = `
      <style>
        .card {
          border: 2px solid #E8B923;
          border-radius: 12px;
          padding: 16px;
          background: #1f1f1f;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
          color: #ffffff;
        }
        ::slotted(h2) {
          color: #E8B923;
          margin-top: 0;
          border-bottom: 2px solid #E8B923;
          padding-bottom: 8px;
        }
        ::slotted(p) {
          color: #ffffff;
        }
        ::slotted(a) {
          color: #E8B923;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }
        ::slotted(a:hover) {
          color: #F5D876;
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
