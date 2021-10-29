import Head from 'next/head';

export function Layout({ children }) {
	return (
		<main className="container py-4">
			<Head>
				<title>NextJS | Full-stack CRUD App</title>

				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
					rel="stylesheet"
					integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
					crossorigin="anonymous"
				/>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400&family=Zen+Kaku+Gothic+Antique:wght@300;400;500&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<div className="row m-0 justify-content-center">
				<div className="col-md-9">{children}</div>
			</div>
		</main>
	);
}
