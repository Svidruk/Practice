export const ScreenWidth = {
  mobile: 725,
  desktop: 1087,
};

export const Breakpoints = {
  desktop: `@media (min-width: ${ScreenWidth.desktop}px)`,
  tablet: `@media (max-width: ${ScreenWidth.desktop - 1}px)`,
  mobile: `@media (max-width: ${ScreenWidth.mobile}px)`,
};
