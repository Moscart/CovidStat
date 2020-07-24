class DataCovid extends HTMLElement {
	// constructor() {
	// 	super();
	// 	this.shadowDOM = this.attachShadow({ mode: "open" });
	// }
	connectedCallback() {
		this.global = this.getAttribute("global") || null;
		this.global = this.global ? "Global " : "";
		this.render();
	}
	render() {
		this.innerHTML = `
		<div class="dataConfirmed">
            <div class="title">
                ${this.global}Confirmed
            </div>
            <div class="content">
                0
            </div>
        </div>
        <div class="dataRecovered">
            <div class="title">
                ${this.global}Recovered
            </div>
            <div class="content">
                0
            </div>
        </div>
        <div class="dataDeaths">
            <div class="title">
                ${this.global}Deaths
            </div>
            <div class="content">
                0
            </div>
        </div>
        <div class="lastUpdate">
            <div class="title">
                Last Update
            </div>
            <div class="content">
                0
            </div>
        </div>`;
	}
}
customElements.define("data-covid", DataCovid);
