import { createContext, useState } from 'react';

const AdviceContext = createContext();

export const AdviceProvider = ({ children }) => {
	const [text, setText] = useState('');
	const getAdvice = async function () {
		await fetch('https://api.adviceslip.com/advice')
			.then((res) => res.json())
			.then((data) => {
				setText(data.slip.advice);
			});
	};
	return (
		<AdviceContext.Provider value={{ text, getAdvice }}>
			{children}
		</AdviceContext.Provider>
	);
};

export default AdviceContext;
