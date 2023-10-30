import 'styled-components';
import { ITheme } from '../adpters/dtos/themes/ITheme';

declare module 'styled-components' {
	export interface DefaultTheme extends ITheme {}
}