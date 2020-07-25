class NavBar extends HTMLElement {
	connectedCallback() {
		this.render();
	}
	render() {
		this.innerHTML = `<nav>CovidStat</nav>`;
	}
}
customElements.define("nav-bar", NavBar);
