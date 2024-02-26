const UnorderedList = ({ setColor }) => {
	const arr = ["hotpink", "rebeccapurple", "limegreen"];

	const handleClick = (e) => {
		setColor(e.target.innerHTML);
	};

	return (
		<section className="unorderedList">
			<ul>
				{arr.map((c) => {
					return (
						<li onClick={handleClick} key={c}>
							{c}
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default UnorderedList;
