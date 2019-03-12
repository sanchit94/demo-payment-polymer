import { PolymerElement, html } from '@polymer/polymer/polymer-element';
import './infino-card';
import './pay-method';

import '@polymer/app-layout/app-grid/app-grid-style.js';

class UserInfo extends PolymerElement {
    static get template() {
        return html`
            <style include="app-grid-style">
                
            </style>
            <div class="app-grid">
                <infino-card></infino-card>
                <pay-methods></pay-methods>
            </div>
        
        `
    }
}

window.customElements.define('user-info', UserInfo);

