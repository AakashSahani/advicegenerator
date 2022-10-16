import { createContext, useState } from 'react';

const AdviceContext = createContext();

export const AdviceProvider = ({ children }) => {
	const [advice, setAdvice] = useState({});
	const getAdvice = async function () {
		await fetch('https://api.adviceslip.com/advice')
			.then((res) => res.json())
			.then((data) => {
				setAdvice(data.slip);
			});
	};
	return (
		<AdviceContext.Provider value={{ advice, getAdvice }}>
			{children}
		</AdviceContext.Provider>
	);
};

export default AdviceContext;
