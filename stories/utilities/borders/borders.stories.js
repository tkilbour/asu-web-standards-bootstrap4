import { document, console } from 'global';
import { storiesOf } from '@storybook/html';

storiesOf('Utilities/Borders', module)
  .addParameters({
    happo: false,
  })

  .add('Additive', () => `<span class="border"></span>
  <span class="border-top"></span>
  <span class="border-right"></span>
  <span class="border-bottom"></span>
  <span class="border-left"></span>`)

  .add('Subtractive', () => `<span class="border-0"></span>
  <span class="border-top-0"></span>
  <span class="border-right-0"></span>
  <span class="border-bottom-0"></span>
  <span class="border-left-0"></span>`)

  .add('Border color', () => ``)

  .add('Border-radius', () => ``)

  .add('Sizes', () => ``);
