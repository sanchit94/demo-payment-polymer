import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

import '@polymer/app-layout/app-grid/app-grid-style.js';

class InfinoCard extends PolymerElement {
    static get template() {
        return html`
        <style include="shared-styles app-grid-style">
        :host {
            --app-grid-columns: 3;
        }
        .container {
            display: inline-block;
        }
        </style>
        <div class="container">
            <div class="card">
                <h1>Infino</h1>
                <p>Card Number: 4633812848133466</p>
                <p>Expiry: 01/20</p>
                <p>CVV: 234</p>
                <p>PIN: 1221</p>
            </div>
        </div>
        `;
    }
}

window.customElements.define('infino-card', InfinoCard);