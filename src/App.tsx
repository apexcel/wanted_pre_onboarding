import React from 'react';
import InputExample from './components/Input/Example';
import TabExample from './components/Tab/Example';
import SliderExample from './components/Slider/Example';
import SelectExample from './components/Select/Example';
import Toggler from './components/Toggler';

const App: React.FC = () => {
	return (
		<div>
			<Toggler text1='on' text2='off'/>
			<TabExample />
			<InputExample />
			<SliderExample />
			<SelectExample />
		</div>
	)
};

export default App;