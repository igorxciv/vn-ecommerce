import StyleVariables from './export.module.scss';

export const ScreenSizes = {
	Small: parseInt(StyleVariables['screen-size__small']),
	Medium: parseInt(StyleVariables['screen-size__medium']),
	Large: parseInt(StyleVariables['screen-size__large']),
	ExtraLarge: parseInt(StyleVariables['screen-size__xlarge']),
};
