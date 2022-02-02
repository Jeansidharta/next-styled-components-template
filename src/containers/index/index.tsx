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
import { useFetchTodos } from '../../api/todos';

const Main = styled.div`
	min-height: 100vh;
	padding: 16px;
	display: flex;
	flex-direction: column;
	row-gap: 24px;
`;

const PostContainer = styled.p`
	padding: 8px;
	border-radius: 4px;
	box-shadow: ${props => props.theme.shadows.button.medium.normal};
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
	const [fetchTodos, { data, status }] = useFetchTodos();

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
				<Button isLoading={status === 'LOADING'} onClick={() => fetchTodos()}>
					Fetch Todos
				</Button>
				{status === 'DONE' && (
					<>
						<h1>TODOs</h1>
						{data!.map(post => (
							<PostContainer key={post.id}>{post.title}</PostContainer>
						))}
					</>
				)}
			</Main>
			<Footer />
		</>
	);
}
