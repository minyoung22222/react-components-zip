import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      whiteColor: string;
      blackColor: string;
    };
    mq: {
      desktop: string;
      mobile: string;
    };
  }
}
