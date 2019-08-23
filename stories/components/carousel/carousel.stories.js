import { document, console } from 'global';
import { storiesOf } from '@storybook/html';

storiesOf('Components/Carousel', module)
  .addParameters({
    happo: false,
  })

.add('Carousel slides only', () => `<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
<div class="carousel-inner">
  <div class="carousel-item active">
    <img class="d-block w-100" src="..." alt="First slide">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="..." alt="Second slide">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="..." alt="Third slide">
  </div>
</div>
</div>`)

.add('Carousel with controls', () => `<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
<div class="carousel-inner">
  <div class="carousel-item active">
    <img class="d-block w-100" src="..." alt="First slide">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="..." alt="Second slide">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="..." alt="Third slide">
  </div>
</div>
<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="sr-only">Next</span>
</a>
</div>
`)
.add('Carousel with indicators', () => `<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
<ol class="carousel-indicators">
  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
</ol>
<div class="carousel-inner">
  <div class="carousel-item active">
    <img class="d-block w-100" src="..." alt="First slide">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="..." alt="Second slide">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="..." alt="Third slide">
  </div>
</div>
<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="sr-only">Next</span>
</a>
</div>`)

.add('Carousel with captions', () => `<div class="carousel-item">
<img src="..." alt="...">
<div class="carousel-caption d-none d-md-block">
  <h5>...</h5>
  <p>...</p>
</div>
</div>
`)
;
