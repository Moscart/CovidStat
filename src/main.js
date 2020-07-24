import "regenerator-runtime";
import "./styles/style.css";
import "./component/nav-bar.js";
import "./component/data-covid.js";
import "./component/search-box.js";

const buttonSubmit = document.querySelector(".buttonSubmit");
const inputCountry = document.querySelector(".inputCountry");
const countryList = document.querySelector("#countryList");
const dataCountry = document.querySelector(".dataCountry");
const error = document.querySelector(".error");
const baseUrl = "https://covid19.mathdro.id/api";
const date = ((d) => new Date(d.setDate(d.getDate() - 1)))(new Date());

dataCountry.style.display = "none";
error.style.display = "none";

fetch(`${baseUrl}/countries`)
	.then((response) => {
		return response.json();
	})
	.then((responseJson) => {
		responseJson.countries.map((i) => {
			const optionList = document.createElement("Option");
			optionList.setAttribute("value", i.name);
			countryList.appendChild(optionList);
		});
	})
	.catch((error) => {
		console.log(error);
	});

fetch(`${baseUrl}`)
	.then((response) => {
		return response.json();
	})
	.then((responseJson) => {
		document.querySelector(
			".dataGlobal .dataConfirmed .content"
		).innerHTML = changedNumber(responseJson.confirmed.value);
		document.querySelector(
			".dataGlobal .dataRecovered .content"
		).innerHTML = changedNumber(responseJson.recovered.value);
		document.querySelector(
			".dataGlobal .dataDeaths .content"
		).innerHTML = changedNumber(responseJson.deaths.value);
		const d = new Date(responseJson.lastUpdate);
		document.querySelector(".dataGlobal .lastUpdate .content").innerHTML = `
			${d.getDate()}-${
			d.getMonth() + 1
		}-${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
	})
	.catch((error) => {
		console.log(error);
	});

buttonSubmit.addEventListener("click", function () {
	dataCountry.style.display = "none";
	error.style.display = "none";
	const country = inputCountry.value;
	if (country != "") {
		fetch(`${baseUrl}/countries/${country}`)
			.then((response) => {
				return response.json();
			})
			.then((responseJson) => {
				if (!responseJson.error) {
					dataCountry.style.display = "";
					document.querySelector(
						".dataCountry .dataConfirmed .content"
					).innerHTML = changedNumber(responseJson.confirmed.value);
					document.querySelector(
						".dataCountry .dataRecovered .content"
					).innerHTML = changedNumber(responseJson.recovered.value);
					document.querySelector(
						".dataCountry .dataDeaths .content"
					).innerHTML = changedNumber(responseJson.deaths.value);
					const d = new Date(responseJson.lastUpdate);
					document.querySelector(
						".dataCountry .lastUpdate .content"
					).innerHTML = dateFormat(d);
				} else {
					error.style.display = "";
					document.querySelector(
						".error .content"
					).innerHTML = `Country "${country}" not found`;
				}
			})
			.catch((error) => {
				console.log(error);
			});
	} else {
		return;
	}
});

function changedNumber(number) {
	return number.toLocaleString().replace(/\,/g, ".");
}

function dateFormat(d) {
	return `${d.getDate()}-${
		d.getMonth() + 1
	}-${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
}
