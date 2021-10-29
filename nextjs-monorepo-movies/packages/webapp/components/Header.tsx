import Router from 'next/router';

export function Header(props) {
	const handleBack = () => {
		Router.push('/');
	};
	return (
		<header>
			{props.isHome ? (
				<h3>Movies List</h3>
			) : (
				<div>
					<h6 className="link-item" onClick={handleBack}>
						Go back
					</h6>
					<h3>Movies Details</h3>
				</div>
			)}
		</header>
	);
}
