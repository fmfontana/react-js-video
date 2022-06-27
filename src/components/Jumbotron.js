export function Jumbotron({ title, content, btnTxt }) {
	return (
		<div className="container-fluid bg-light text-dark p-5">
			<div className="container bg-light p-5">
				<h1 className="display-4 fw-bold">{title}</h1>
				<hr />
				<p>{content}</p>
				<a href="#" className="btn btn-primary">
					{btnTxt}
				</a>
			</div>
		</div>
	);
}
