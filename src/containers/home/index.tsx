import Head from 'next/head'
import styled from 'styled-components';
import Navbar from '../../components/layout/navbar';
import Footer from '../../components/layout/footer';

const Main = styled.div`
	width: 100%;
	height: 100%;
	font-size: 32px;
	overflow-y: auto;
`;

export default function Home() {
	return (
		<>
			<Head>
				<title>My Home Page Title</title>
			</Head>
			<Navbar />
			<Main>
				<h1>Hello!</h1>
			</Main>
			<Footer />
		</>
	)
}
