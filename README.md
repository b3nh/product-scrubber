# ProductScrubber

https://www.npmjs.com/package/product-scrubber

![example](https://github.com/b3nh/product-scrubber/blob/master/src/stories/assets/example.gif?raw=true)

![example](https://github.com/b3nh/product-scrubber/blob/master/src/stories/assets/example-grid.gif?raw=true)

## Installation

```
yarn
```

## Usage

```
yarn storybook
```

![example](https://github.com/b3nh/product-scrubber/blob/master/src/stories/assets/storybook.png?raw=true)

Here is a quick example to get started:

```ts
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

const onClickProductScrubber = (data: string) => {
  console.log(data);
};

<ProductScrubber
  onClickItem={onClickProductScrubber}
  data={exampleData}
  width={350}
/>;
```
