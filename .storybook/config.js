import { configure } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import '../src/app/lib/globalStyles';

const req = require.context('../src/app', true, /\.stories\.jsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
