import { injectGlobal } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

injectGlobal`
	html {
		height: 100%;
		font-size: 16px !important;
	}

	body {
		margin: 0;
		padding: 0;
		font-family: 'Open Sans', sans-serif !important;
		height: 100%;
		font-size: 16px !important;
	}

	#root {
		height: 100%;
	}
`

injectGlobal`
	ol.progtrckr {
		list-style-type: none;
		padding: 0 0 40px 0;
	}

	ol.progtrckr li {
		display: inline-block;
		text-align: center;
		line-height: 4.5rem;
		cursor: pointer;
		width: 180px;
	}

	ol.progtrckr li span {
		padding: 0 1.5rem;
		font-weight: 300;
	}

	ol.progtrckr li.progtrckr-doing span {
		font-weight: bold;
	}

	@media (max-width: 650px) {
		ol.progtrckr li {
			width: auto;
		}

		.progtrckr li span {
			display: none;
		}
	}

	.progtrckr em {
		display: none;
		font-weight: 700;
		padding-left: 1rem;
	}

	@media (max-width: 650px) {
		.progtrckr em {
			display: inline;
		}
	}

	ol.progtrckr li.progtrckr-todo {
		color: silver;
		border-bottom: 4px solid silver;
	}

	ol.progtrckr li.progtrckr-doing {
		color: black;
		border-bottom: 4px solid #5cb85c;
	}

	ol.progtrckr li.progtrckr-done {
		color: black;
		border-bottom: 4px solid #5cb85c;
	}

	ol.progtrckr li:after {
		content: "\\00a0\\00a0";
	}

	ol.progtrckr li:before {
		position: relative;
		bottom: -3.9rem;
		float: left;
		left: 50%;
	}

	ol.progtrckr li.progtrckr-todo:before {
		content: "\\039F";
		color: silver;
		background-color: white;
		width: 1.2em;
		line-height: 1.4em;
	}

	ol.progtrckr li.progtrckr-todo:hover:before {
		color: #ff4500;
	}

	ol.progtrckr li.progtrckr-doing:before {
		content: "\\2022";
		color: white;
		background-color: #5cb85c;
		width: 1.2em;
		line-height: 1.2em;
		border-radius: 1.2em;
	}

	ol.progtrckr li.progtrckr-doing:hover:before {
		color: #ff4500;
	}

	ol.progtrckr li.progtrckr-done:before {
		content: "\\2713";
		color: white;
		background-color: #5cb85c;
		width: 1.2em;
		line-height: 1.2em;
		border-radius: 1.2em;
	}

	ol.progtrckr li.progtrckr-done:hover:before {
		color: #333;
	}
`
