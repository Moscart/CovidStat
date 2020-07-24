class SearchBox extends HTMLElement {
	// constructor() {
	// 	super();
	// 	this.shadowDOM = this.attachShadow({ mode: "open" });
	// }
	connectedCallback() {
		this.render();
	}
	render() {
		this.innerHTML = `
        <input
            type="text"
            list="countryList"
            name="inputCountry"
            class="inputCountry"
            placeholder="Insert Country"
            autofocus
        />
        <datalist id="countryList"> </datalist>
        <button name="buttonSubmit" class="buttonSubmit">Find</button>`;
	}
}
customElements.define("search-box", SearchBox);
