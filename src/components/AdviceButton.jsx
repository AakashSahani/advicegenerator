import { FaSpider } from 'react-icons/fa';
import AdviceContext from './context/AdviceContext';
import { useContext } from 'react';

function AdviceButton() {
	const { getAdvice } = useContext(AdviceContext);
	const handleSubmit = () => {
		getAdvice();
	};
	return (
		<div className="btn">
			<button type="submit" onClick={handleSubmit}>
				<FaSpider size={30} />
			</button>
		</div>
	);
}

export default AdviceButton;
