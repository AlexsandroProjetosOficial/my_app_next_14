import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
}

html,
body {
	max-width: 100vw;
	overflow-x: hidden;
}

body {
	color: ${props => props.theme.colors.white};
	background: ${props => props.theme.colors.primary};
}

a {
	color: inherit;
	text-decoration: none;
}
`;