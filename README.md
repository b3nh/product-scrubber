# ProductScrubber

A simple React component (written with Typescript) that allows users to scrub through product images by hovering their mouse.

- Can take a large amount of images, although recommend no more than 16
- Set `showHoverGrid` as `true` to show red image hover areas / edit mode
- Can adjust `width` &amp; `height`, otherwise default will expand to fix `100%` of parent container
- Hide product name &amp; id with `hideName` &amp; `hideId`
- Pass child components to overlay your own custom UI `<ProductScrubber> {...} </ProductScrubber>`

<p float="left">
  <img style='width: 320px' src='https://github.com/b3nh/product-scrubber/blob/master/src/stories/assets/example.gif?raw=true'>
  <img style='width: 320px' src='https://github.com/b3nh/product-scrubber/blob/master/src/stories/assets/example-grid.gif?raw=true'>
</p>

## Installation

If you just want to install the module for use within your React project, simply go to the <a href='https://www.npmjs.com/package/product-scrubber'>ProductScrubber npm page</a> or run one of the following commands:

```
npm i product-scrubber --save
```

OR

```
yarn add product-scrubber --save
```

<br />

Alternatively, the following instructions are for local development, contributions and publishing of the `ProductScrubber` module.

```
yarn
```

## Usage

```
yarn storybook
```

<p float="left">
  <img src='https://github.com/b3nh/product-scrubber/blob/master/src/stories/assets/storybook.png?raw=true'>
</p>

```ts
// types
type ProductScrubberTypes = {
  children?: any;
  onClickItem?: (activeId: string) => void; // required
  data: Array<dataType>; // required
  showHoverGrid?: boolean;
  hideName?: boolean;
  hideId?: boolean;
  width?: string | number;
  height?: string | number;
};
```

```ts
// example use
{
  <ProductScrubber
    onClickItem={onClickProductScrubber}
    data={exampleData}
    width={420}
    height={420}
  />;
}
```

Here is a quick example to get started:

```ts
// App.tsx

import React from 'react';
import { ProductScrubber } from 'product-scrubber';

const exampleData = [
  {
    id: 'EXAMPLE-ID-001: side',
    name: "MEN'S SPEED LACE-UP SNEAKER IN BLACK",
    default: true,
    imagePath:
      'https://github.com/b3nh/product-scrubber/blob/master/src/stories/assets/side.jpg?raw=true',
  },
  {
    id: 'EXAMPLE-ID-001: front',
    name: "MEN'S SPEED LACE-UP SNEAKER IN BLACK",
    imagePath:
      'https://github.com/b3nh/product-scrubber/blob/master/src/stories/assets/front.jpg?raw=true',
  },
  {
    id: 'EXAMPLE-ID-001: back',
    name: "MEN'S SPEED LACE-UP SNEAKER IN BLACK",
    imagePath:
      'https://github.com/b3nh/product-scrubber/blob/master/src/stories/assets/back.jpg?raw=true',
  },
  {
    id: 'EXAMPLE-ID-001: top',
    name: "MEN'S SPEED LACE-UP SNEAKER IN BLACK",
    imagePath:
      'https://github.com/b3nh/product-scrubber/blob/master/src/stories/assets/top.jpg?raw=true',
  },
];

function App() {
  const onClickProductScrubber = (id: string) => {
    alert(id);
    console.log(id);
  };

  return (
    <div className="App">
      <ProductScrubber
        onClickItem={onClickProductScrubber}
        data={exampleData}
        width={420}
        height={420}
      />
    </div>
  );
}

export default App;
```

## Deployment

```
yarn dist
cd dist
npm publish
```

## Testing

```
yarn test
```

```

```
