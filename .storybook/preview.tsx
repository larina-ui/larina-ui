import type { Preview } from "@storybook/react";
import { ThemeProvider, theme } from '../src/components/ThemeProvider';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (<ThemeProvider theme={theme}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        {Story()}
      </ThemeProvider>)
  ],
};

export default preview;
