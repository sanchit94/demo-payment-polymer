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
                <div class="circle">1</div>
                <h1>Infino</h1>
                <p>Ut labores minimum atomorum pro. Laudem tibique ut has.</p>
            </div>
        </div>
        `;
    }
}

window.customElements.define('infino-card', InfinoCard);