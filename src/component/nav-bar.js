class NavBar extends HTMLElement {
	// constructor() {
	// 	super();
	// 	this.shadowDOM = this.attachShadow({ mode: "open" });
	// }
	connectedCallback() {
		this.render();
	}
	render() {
		this.innerHTML = `<nav>CovidStat</nav>`;
	}
}
customElements.define("nav-bar", NavBar);
