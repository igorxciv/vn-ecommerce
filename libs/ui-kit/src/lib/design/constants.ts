import StyleVariables from './export.module.scss';

export const ScreenSizes = {
	Small: parseInt(StyleVariables['screen-size__small']),
	Medium: parseInt(StyleVariables['screen-size__medium']),
	Large: parseInt(StyleVariables['screen-size__large']),
	ExtraLarge: parseInt(StyleVariables['screen-size__xlarge']),
};

export const TransitionDuration = {
	MobileMenuOpen: parseInt(StyleVariables['mobile-menu__transition-duration']),
	NavigationMenuSideItems: parseInt(StyleVariables['navigation-menu__side-items-transition-duration']),
	HeaderCollapse: parseInt(StyleVariables['header__collapse-transition-duration']),
	SelectAppear: parseInt(StyleVariables['select__appear-transition-duration']),
};
