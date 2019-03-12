import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

import { cardMapping } from './store/store.js';

import '@vaadin/vaadin-accordion/vaadin-accordion.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';

class PayMethods extends PolymerElement {
	constructor() {
		super();
		this.cardMapping = cardMapping;
	}
    static get template() {
        return html`
        
        <style include="shared-styles app-grid-style">
            :host {
                --app-grid-columns: 2;
                --app-grid-gutter: 10px;
            }
            .food-card, .petrol-card, .other-card {
                display: inline-block;
                width: 20%;
            }
            .card img {
                width: 105px;
            }
            .container {
                display: inline-block;
                width: 100%;
						}
						paper-item {
							cursor: pointer;
						}
    
        </style>
        <div class="container">
					<div class="card main-card">
					<vaadin-accordion>
					<vaadin-accordion-panel>
						<div slot="summary">For Food</div>
						<vaadin-vertical-layout>
							<paper-listbox selected="0">
								<paper-item on-click="changeFood" data-name="C1">HDFC</paper-item>
								<paper-item on-click="changeFood" data-name="C2">Kotak</paper-item>
								<paper-item on-click="changeFood" data-name="C3">Fav</paper-item>
							</paper-listbox>
						</vaadin-vertical-layout>
					</vaadin-accordion-panel>
					<vaadin-accordion-panel>
						<div slot="summary">For Petrol</div>
						<vaadin-vertical-layout>
						<paper-listbox selected="1">
							<paper-item on-click="changePetrol" data-name="C1">HDFC</paper-item>
							<paper-item on-click="changePetrol" data-name="C2">Kotak</paper-item>
							<paper-item on-click="changePetrol" data-name="C3">Fav</paper-item>
						</paper-listbox>
						</vaadin-vertical-layout>
					</vaadin-accordion-panel>
					<vaadin-accordion-panel>
						<div slot="summary">For Other</div>
						<vaadin-vertical-layout>
						<paper-listbox selected="2">
							<paper-item on-click="changeOther" data-name="C1">HDFC</paper-item>
							<paper-item on-click="changeOther" data-name="C2">Kotak</paper-item>
							<paper-item on-click="changeOther" data-name="C3">Fav</paper-item>
						</paper-listbox>
						</vaadin-vertical-layout>
					</vaadin-accordion-panel>
				</vaadin-accordion>
        </div>
        </div>
        `;
		}

		changeFood(e) {
			cardMapping.food = e.target.dataset.name;
			console.log(cardMapping)
		}

		changePetrol(e) {
			cardMapping.petrol = e.target.dataset.name;
			console.log(cardMapping)
		}

		changeOther(e) {
			cardMapping.other = e.target.dataset.name;
			console.log(cardMapping)
		}
		
		static get properties() {
			return {
				cardMapping: Object
			};
		}
}

window.customElements.define('pay-methods', PayMethods)