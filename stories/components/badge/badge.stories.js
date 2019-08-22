import { document, console } from 'global';
import { storiesOf } from '@storybook/html';

storiesOf('Components/Buttons', module)
  .addParameters({
    happo: false,
  })

.add('Standard button tags', () => `<span class="badge badge-pill badge-primary">Primary</span>
<span class="badge badge-pill badge-secondary">Secondary</span>
<span class="badge badge-pill badge-success">Success</span>
<span class="badge badge-pill badge-danger">Danger</span>
<span class="badge badge-pill badge-warning">Warning</span>
<span class="badge badge-pill badge-info">Info</span>
<span class="badge badge-pill badge-light">Light</span>
<span class="badge badge-pill badge-dark">Dark</span>`)



.add('Other color examples', () => `<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-program">Programs</button>
<button type="button" class="btn btn-rfi">Request Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>
<button type="button" class="btn btn-link">Link</button><hr>
<button type="button" class="btn btn-success">Alert: Success</button>
<button type="button" class="btn btn-danger">Alert: Danger</button>
<button type="button" class="btn btn-warning">Alert: Warning</button>
<button type="button" class="btn btn-info">Alert: Info</button>
`)
.add('Outline buttons', () => `<button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-outline-secondary">Secondary</button>
<button type="button" class="btn btn-outline-program">Programs</button>
<button type="button" class="btn btn-outline-rfi">Request Info</button>
<button type="button" class="btn btn-outline-info">Info</button>
<button type="button" class="btn btn-outline-light">Light</button>
<button type="button" class="btn btn-outline-dark">Dark</button><hr>
<button type="button" class="btn btn-outline-success">Alert: Success</button>
<button type="button" class="btn btn-outline-danger">Alert: Danger</button>
<button type="button" class="btn btn-outline-warning">Alert: Warning</button>
<button type="button" class="btn btn-outline-info">Alert: Info</button>`)

.add('Sizes', () => `<button type="button" class="btn btn-primary btn-lg">Large button</button>
<button type="button" class="btn btn-secondary btn-lg">Large button</button><hr/><button type="button" class="btn btn-primary btn-sm">Small button</button>
<button type="button" class="btn btn-secondary btn-sm">Small button</button><hr/><button type="button" class="btn btn-primary btn-lg btn-block">Block level button</button>
<button type="button" class="btn btn-secondary btn-lg btn-block">Block level button</button>`)

.add('Active state', () => `<a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Primary link</a>
<a href="#" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Link</a>`)

.add('Disabled state', () => `<button type="button" class="btn btn-lg btn-primary" disabled>Primary button</button>
<button type="button" class="btn btn-secondary btn-lg" disabled>Button</button><hr/><a href="#" class="btn btn-primary btn-lg disabled" tabindex="-1" role="button" aria-disabled="true">Primary link</a>
<a href="#" class="btn btn-secondary btn-lg disabled" tabindex="-1" role="button" aria-disabled="true">Link</a>`)

.add('Button plugin - toggle state', () => `<button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
  Single toggle
</button>`)

.add('Checkbox and radio buttons', () => `<div class="btn-group-toggle" data-toggle="buttons">
<label class="btn btn-secondary active">
    <input type="checkbox" checked autocomplete="off"> Checked
  </label>
</div><hr/><div class="btn-group btn-group-toggle" data-toggle="buttons">
  <label class="btn btn-secondary active">
    <input type="radio" name="options" id="option1" autocomplete="off" checked> Active
  </label>
  <label class="btn btn-secondary">
    <input type="radio" name="options" id="option2" autocomplete="off"> Radio
  </label>
  <label class="btn btn-secondary">
    <input type="radio" name="options" id="option3" autocomplete="off"> Radio
  </label>
</div>`);
