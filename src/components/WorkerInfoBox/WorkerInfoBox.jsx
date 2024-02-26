import "./WorkerInfoBox.css";

const WorkerInfoBox = ({ oneWorker }) => {
	return <section className="workerInfoBox">{oneWorker.lastname}</section>;
};

export default WorkerInfoBox;
