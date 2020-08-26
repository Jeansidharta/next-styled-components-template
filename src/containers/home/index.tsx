import Head from 'next/head'
import styled from 'styled-components';
import Navbar from '../../components/layout/navbar';
import Footer from '../../components/layout/footer';
import ImageURLs from '../../images';

const Main = styled.div`
	width: 100%;
	height: 100%;
	font-size: 32px;
	overflow-y: auto;
`;

/**
* Visit https://schema.org/docs/full.html for a list of all types to put here
*/
// TODO - change this
const JSONLD = `{
	"@context": "http://schema.org/",
	"@type": "Thing",
	"name": "your site thing",
	"image": "${ImageURLs.logoPng}"
}`;

export default function Home() {
	return (
		<>
			<Head>
				<title>My Home Page Title</title>
				{/* TODO - add real url */}
				<link rel="canonical" href="https://my-domain.com/home"/>

				{/* This is json-ld with schema data */}
				<script type='application/ld+json'>{JSONLD}</script>
			</Head>
			<Navbar />
			<Main>
				<h1>Hello!</h1>
			</Main>
			<Footer />
		</>
	)
}
