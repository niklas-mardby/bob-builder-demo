import DropDown from "./components/DropDown/DropDown";
import WorkerInfoBox from "./components/WorkerInfoBox/WorkerInfoBox";
import OrderedList from "./components/OrderedList/OrderedList";
import animalsArray from "./assets/json/animals.json";

function App() {
	return (
		<main>
			<h1>bob-builder-demo</h1>
			<DropDown />
			<WorkerInfoBox />
			<OrderedList animals={animalsArray} />
		</main>
	);
}

export default App;
