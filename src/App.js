import AdviceCard from './components/AdviceCard';
import { AdviceProvider } from './components/context/AdviceContext';
import Header from './components/Header';

function App() {
	return (
		<AdviceProvider>
			<div className="container">
				{/* <Header /> */}
				<AdviceCard />
			</div>
		</AdviceProvider>
	);
}

export default App;
