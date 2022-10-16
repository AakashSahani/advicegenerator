import AdviceCard from './components/AdviceCard';
import { AdviceProvider } from './components/context/AdviceContext';

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
