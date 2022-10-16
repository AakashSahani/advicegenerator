import { useContext } from 'react';
import AdviceContext from './context/AdviceContext';

function Advice() {
	const { advice, getAdvice } = useContext(AdviceContext);

	if (Object.keys(advice).length === 0) {
		getAdvice();
	} else {
		return (
			<>
				<h3>ADVICE #{advice.id}</h3>
				<div className="advice-p">
					<p>"{advice.advice}"</p>
				</div>
				<div className="pattern"></div>
			</>
		);
	}
}

export default Advice;
