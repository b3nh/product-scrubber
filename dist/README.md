# ProductScrubber

https://www.npmjs.com/package/product-scrubber

![example](https://github.com/b3nh/product-scrubber/blob/master/src/stories/assets/example.gif?raw=true)

![example](https://github.com/b3nh/product-scrubber/blob/master/src/stories/assets/example-grid.gif?raw=true)

## Installation

<hr />

```
npm i product-scrubber --save
```

OR

```
yarn add product-scrubber --save
```

## Usage

<hr />
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
