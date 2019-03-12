/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

import { formData } from './store/store.js';

import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-radio-button/paper-radio-button.js';
import '@polymer/paper-radio-group/paper-radio-group.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';

class MyView3 extends PolymerElement {
  constructor() {
    super();
    this.formData = formData;
  }
  
  static get template() {
    return html`
      <style include="shared-styles">
        .card {
          width: 35%;
          margin: 60px auto;
        }
      </style>

      <div class="card">
			<form>
			
				<div class="centered">
					<paper-input always-float-label label="Inifno Card Number" value="{{formData.cardNum}}" disabled></paper-input>
          <paper-input label="Amount" value="{{formData.amount}}" disabled>
          </paper-input>
          <paper-input label="PIN" type="password"></paper-input>
          <h4>Card you selected</h4>
          <h3>[[formData.card]]</h3>
					<div class="proceed-button">
					<paper-button on-click="meta">Proceed</paper-button>
					</div>
				</div>

      <form>
      </div>
    `;
  }

  static get properties() {
    return {
      formData: Object
    };
  }
  meta() {
    console.log("This was clicked");
  };
}

window.customElements.define('my-view3', MyView3);
