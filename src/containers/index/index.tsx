import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Navbar from '../../components/layout/navbar';
import Footer from '../../components/layout/footer';
import ImageURLs from '../../images/image-urls';
import Button from '../../components/reusable/button';
import { useModal } from '../../contexts/modal';
import TestModal from '../../components/modals/test-modal';
import { deployedURLHome } from '../../constants/deployed-url';

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
	"url": "${deployedURLHome}",
	"image": "${ImageURLs.logoPng}"
}`;

export default function Home() {
	const { openModal } = useModal();

	function handleTestModalClick() {
		openModal(<TestModal />);
	}

	return (
		<>
			<Head>
				<title>My Home Page Title</title>
				<link rel="canonical" href={deployedURLHome} />

				{/* This is json-ld with schema data */}
				<script type="application/ld+json">{JSONLD}</script>

				{/* TODO - Set custom page description */}
				<meta name="description" content="My personal description" />
			</Head>
			<Navbar />
			<Main>
				<h1>Hello!</h1>
				<Button onClick={handleTestModalClick}>Open test modal</Button>
			</Main>
			<Footer />
		</>
	);
}
