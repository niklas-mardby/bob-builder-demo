const OrderedList = ({ animals }) => {
	return (
		<>
			<h2>Animals from animals.json</h2>
			<ol>
				{animals.map((animal) => {
					return <li>{animal}</li>;
				})}
			</ol>
		</>
	);
};

export default OrderedList;
