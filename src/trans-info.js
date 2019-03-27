import { PolymerElement, html } from '@polymer/polymer/polymer-element';

import '@vaadin/vaadin-grid/vaadin-grid.js';
import { transDemo } from './store/store';

class TransInfo extends PolymerElement {
	constructor() {
		super();
		
	}
	ready() {
		super.ready();
		function postData(url = ``, data = {}) {
			// Default options are marked with *
				return fetch(url, {
						method: "POST",
						mode: "cors",
						cache: "no-cache",
						headers: {
								// 'Access-Control-Allow-Credentials' : true,
								// 'Access-Control-Allow-Origin':'*',
								'Access-Control-Allow-Methods':'POST',
								'Access-Control-Allow-Headers':'application/json',
								"Content-Type": "application/json"
								// "Content-Type": "application/x-www-form-urlencoded",
						},
						redirect: "manual", // manual, *follow, error
						body: JSON.stringify(data), // body data type must match "Content-Type" header
				})
				.then(response => response.json()) // parses response to JSON
		}

		postData('https://faik.localhost.run/getdata', { email: "johndoe@email.com"})
			.then(res => res.data)
			.then(res => JSON.parse(res))
			.then(res => {
				let bodyArr = [];
				console.log(res.transacdata);
				res.transacdata.map(elem => {
					let dataBody = {};
					dataBody.status = elem.status == 'true' ? 'Success' : 'Failed';
					dataBody.purpose = elem.paidat;
					dataBody.amount = elem.amount / 100;
					bodyArr.push(dataBody);

				});
				this.shadowRoot.getElementById('table').items = bodyArr;
			})
		
	}

	static get template() {
			return html`
			<style>
				vaadin-grid {
					margin: 20px;
				}
			</style>
			<vaadin-grid id="table">
				<vaadin-grid-column path="status" header="Status"></vaadin-grid-column>
				<vaadin-grid-column path="amount" header="Amount"></vaadin-grid-column>
				<vaadin-grid-column path="purpose" header="Purpose"></vaadin-grid-column>
			</vaadin-grid>
			`;
	}
}

window.customElements.define('trans-info', TransInfo);