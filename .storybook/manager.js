import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'PayBark UI',
    brandUrl: 'https://www.paybark.com',
    brandImage: '/logo.png'
  })
});
