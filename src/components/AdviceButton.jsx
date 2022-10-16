import icon from '../assets/icon-dice.svg';
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
				<img src={icon} alt="Icon" />
			</button>
		</div>
	);
}

export default AdviceButton;
