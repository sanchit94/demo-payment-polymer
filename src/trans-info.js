import { PolymerElement, html } from '@polymer/polymer/polymer-element';

import '@vaadin/vaadin-grid/vaadin-grid.js';
import { transDemo } from './store/store';

class TransInfo extends PolymerElement {
	constructor() {
		super();
		
	}
	ready() {
		super.ready();
		this.shadowRoot.getElementById('table').items = transDemo;
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