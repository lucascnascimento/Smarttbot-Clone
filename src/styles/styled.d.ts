import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      warning: string;
      white: string;
      gray1: string;
      gray2: string;
      gray3: string;
      gray4: string;
      green1: string;
      green2: string;
      background: string;
    };

    media: {
      small: string;
      tablet: string;
      desktop: string;
      widescreen: string;
      tabletOnly: string;
      desktopOnly: string;
      widescreenOnly: string;
      mobileAndTabletOnly: string;
    };

    width: {
      small: number;
      tablet: number;
      desktop: number;
      widescreen: number;
    };
  }
}
