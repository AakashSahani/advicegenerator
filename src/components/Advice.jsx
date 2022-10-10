import { useContext } from 'react';
import AdviceContext from './context/AdviceContext';

function Advice() {
	const { text } = useContext(AdviceContext);

	if (text === '') {
		return <p>Click on the Advice Spider to get Advice</p>;
	} else {
		return <p>"{text}"</p>;
	}
}

export default Advice;
