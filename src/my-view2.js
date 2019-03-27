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

import { formData, cardMapping } from './store/store.js';

import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-radio-button/paper-radio-button.js';
import '@polymer/paper-radio-group/paper-radio-group.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';


class MyView2 extends PolymerElement {
	constructor() {
		super();
		this.formData = formData;
	}
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
					display: block;
          padding: 10px;
        }

        .card {
          width: 30%;
          margin: 60px auto;
				}
				
				.d-flex {
					display: flex;
				}

				paper-input {
					margin: 10px;
				}

        .centered {
          width: 80%;
          margin: 0 auto;
				}
				
				.proceed-button {
					margin-top: 50px;
					display: flex;
					justify-content: center;
				}

				paper-item {
					cursor: pointer;
				}
      </style>
      <div class="card">
			<form>
			
				<div class="centered">
					<paper-radio-group selected="food">
						<paper-radio-button name="food" on-change="changePurpose">Food</paper-radio-button>
						<paper-radio-button name="petrol" on-change="changePurpose">Petrol</paper-radio-button>
						<paper-radio-button name="other" on-change="changePurpose">Other</paper-radio-button>
					</paper-radio-group>
					<paper-input always-float-label label="Inifno Card Number" name="cardnumber" on-change="change" value="{{formData.cardnumber}}"></paper-input>
					<div class="d-flex">
						<paper-input label="CVV" name="cvv" on-change="change" value="{{formData.cvv}}"></paper-input>
						<paper-input label="Expiry" name="expiry" on-change="change" value="{{formData.expiry}}"></paper-input>
					</div>
					<paper-input always-float-label auto-validate allowed-pattern="[0-9]" label="Amount" name="amount" type="number" on-change="change" value="{{formData.amount}}">
						<div slot="prefix">Rs. </div>
					</paper-input>
					<div class="proceed-button">
							<paper-button on-click="send">Proceed</paper-button>
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
	
	change(e) {
		formData[e.target.name] = e.target.value;
		console.log(formData);

	}

	changePurpose(e) {
		let purpose = e.target.name;
		console.log("Purpose: ", purpose);
		switch (purpose) {
			case 'food':
				formData.outlet = cardMapping.food;
				formData.label = 'food';
				break;
			case 'petrol':
				formData.card = "My Favourite Card";
				formData.outlet = cardMapping.petrol;
				formData.label = 'petrol';
				break;
			case 'other': 
				formData.card = "Platinum Kotak Card";
				formData.outlet = cardMapping.other;
				formData.label = 'other';
				break;
			default:
				formData.card = "Blah Blah";
		}
	}

	send() {
		let { card, ...sendData } = formData;
		console.log("Sending data")
		console.log(sendData);
		function postData(url = ``, data = {}) {
			// Default options are marked with *
				return fetch(url, {
						method: "POST",
						mode: "cors",
						cache: "no-cache",
						headers: {
								'Access-Control-Allow-Methods':'POST',
								'Access-Control-Allow-Headers':'application/json',
								"Content-Type": "application/json"
								// "Content-Type": "application/x-www-form-urlencoded",
						},
						redirect: "follow", // manual, *follow, error
						body: JSON.stringify(data), // body data type must match "Content-Type" header
				})
				.then(response => response.json()); // parses response to JSON
		}
		postData('https://dev275faik-test.serveo.net/initpayment', sendData)
		.then(res => console.log(res));
			
	}
}

window.customElements.define('my-view2', MyView2);
