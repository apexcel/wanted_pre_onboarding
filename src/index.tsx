import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle, { theme } from './styles/GlobalStyles';
import App from './App';

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<StrictMode>
			<App />
		</StrictMode >
	</ThemeProvider>,
	document.getElementById('root')
);
