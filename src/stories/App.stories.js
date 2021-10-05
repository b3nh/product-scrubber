/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  ProductScrubber,
} from '../components';

import './story-container.css';

import side from './assets/side.jpg';
import top from './assets/top.jpg';
import front from './assets/front.jpg';
import back from './assets/back.jpg';

const patterns = storiesOf('Patterns', module);

const onClickProductScrubber = (activeName) => {
  alert(activeName);
  console.log(activeName);
};

const mockData = [
  {
    id: 'SKU-EXAMPLE-001: side',
    name: 'MEN\'S SPEED LACE-UP SNEAKER IN BLACK',
    default: true,
    imagePath: side
  },
  {
    id: 'SKU-EXAMPLE-001: front',
    name: 'MEN\'S SPEED LACE-UP SNEAKER IN BLACK',
    imagePath: front
  },
  {
    id: 'SKU-EXAMPLE-001: back',
    name: 'MEN\'S SPEED LACE-UP SNEAKER IN BLACK',
    imagePath: back
  },
  {
    id: 'SKU-EXAMPLE-001: top',
    name: 'MEN\'S SPEED LACE-UP SNEAKER IN BLACK',
    imagePath: top
  }
];

const mockDataLong = [
  {
    id: 'SKU-EXAMPLE-001: side',
    name: 'MEN\'S SPEED LACE-UP SNEAKER IN BLACK',
    default: true,
    imagePath: side
  },
  {
    id: 'SKU-EXAMPLE-001: front',
    name: 'MEN\'S SPEED LACE-UP SNEAKER IN BLACK',
    imagePath: front
  },
  {
    id: 'SKU-EXAMPLE-001: back',
    name: 'MEN\'S SPEED LACE-UP SNEAKER IN BLACK',
    imagePath: back
  },
  {
    id: 'SKU-EXAMPLE-001: top',
    name: 'MEN\'S SPEED LACE-UP SNEAKER IN BLACK',
    imagePath: top
  },
  {
    id: 'SKU-EXAMPLE-001: side1',
    name: 'MEN\'S SPEED LACE-UP SNEAKER IN BLACK',
    default: true,
    imagePath: side
  },
  {
    id: 'SKU-EXAMPLE-001: front1',
    name: 'MEN\'S SPEED LACE-UP SNEAKER IN BLACK',
    imagePath: front
  },
  {
    id: 'SKU-EXAMPLE-001: back1',
    name: 'MEN\'S SPEED LACE-UP SNEAKER IN BLACK',
    imagePath: back
  },
  {
    id: 'SKU-EXAMPLE-001: top1',
    name: 'MEN\'S SPEED LACE-UP SNEAKER IN BLACK',
    imagePath: top
  }
];

const mockDataExtraLong = [
  {
    id: 'SKU-EXAMPLE-001: side',
    name: 'MEN\'S SPEED LACE-UP SNEAKER IN BLACK',
    default: true,
    imagePath: side
  },
  {
    id: 'SKU-EXAMPLE-001: front',
    name: 'MEN\'S SPEED LACE-UP SNEAKER IN BLACK',
    imagePath: front
  },
  {
    id: 'SKU-EXAMPLE-001: back',
    name: 'MEN\'S SPEED LACE-UP SNEAKER IN BLACK',
    imagePath: back
  },
  {
    id: 'SKU-EXAMPLE-001: top',
    name: 'MEN\'S SPEED LACE-UP SNEAKER IN BLACK',
    imagePath: top
  },
  {
    id: 'SKU-EXAMPLE-001: side1',
    name: 'MEN\'S SPEED LACE-UP SNEAKER IN BLACK',
    default: true,
    imagePath: side
  },
  {
    id: 'SKU-EXAMPLE-001: front1',
    name: 'MEN\'S SPEED LACE-UP SNEAKER IN BLACK',
    imagePath: front
  },
  {
    id: 'SKU-EXAMPLE-001: back1',
    name: 'MEN\'S SPEED LACE-UP SNEAKER IN BLACK',
    imagePath: back
  },
  {
    id: 'SKU-EXAMPLE-001: top1',
    name: 'MEN\'S SPEED LACE-UP SNEAKER IN BLACK',
    imagePath: top
  },
  {
    id: 'SKU-EXAMPLE-001: side2',
    name: 'MEN\'S SPEED LACE-UP SNEAKER IN BLACK',
    default: true,
    imagePath: side
  },
  {
    id: 'SKU-EXAMPLE-001: front2',
    name: 'MEN\'S SPEED LACE-UP SNEAKER IN BLACK',
    imagePath: front
  },
  {
    id: 'SKU-EXAMPLE-001: back2',
    name: 'MEN\'S SPEED LACE-UP SNEAKER IN BLACK',
    imagePath: back
  },
  {
    id: 'SKU-EXAMPLE-001: top2',
    name: 'MEN\'S SPEED LACE-UP SNEAKER IN BLACK',
    imagePath: top
  }
];


const mockDataShort = [
  {
    id: 'SKU-EXAMPLE-001: side',
    name: 'MEN\'S SPEED LACE-UP SNEAKER IN BLACK',
    default: true,
    imagePath: side
  }
];

patterns.add('ProductScrubber - mockData(4)', () => (
  <div className="story-container">
    <ProductScrubber
      onClickItem={onClickProductScrubber}
      data={mockData}
    />
  </div>
));

patterns.add('ProductScrubber - showHoverGrid', () => (
  <div className="story-container">
    <ProductScrubber
      onClickItem={onClickProductScrubber}
      data={mockData}
      showHoverGrid
    />
  </div>
));

patterns.add('ProductScrubber - mockDataLong(8)', () => (
  <div className="story-container">
    <ProductScrubber
      onClickItem={onClickProductScrubber}
      data={mockDataLong}
    />
  </div>
));

patterns.add('ProductScrubber - mockDataLong(12)', () => (
  <div className="story-container">
    <ProductScrubber
      onClickItem={onClickProductScrubber}
      data={mockDataExtraLong}
    />
  </div>
));

patterns.add('ProductScrubber - mockDataShort(1)', () => (
  <div className="story-container">
    <ProductScrubber
      onClickItem={onClickProductScrubber}
      data={mockDataShort}
    />
  </div>
));

patterns.add('ProductScrubber - hideName and hideId', () => (
  <div className="story-container">
    <ProductScrubber
      onClickItem={onClickProductScrubber}
      data={mockData}
      hideName
      hideId
    />
  </div>
));

patterns.add('ProductScrubber - custom overlay', () => (
  <div className="story-container">
    <ProductScrubber
      onClickItem={onClickProductScrubber}
      data={mockData}
    >
      <div style={{
        position: 'absolute',
        width: 55,
        height: 200,
        backgroundColor: '#000',
        top: 100,
        marginLeft: 15,
        color: 'red',
        padding: 15,
        textAlign: 'center'
      }}>Custom Overlay Example</div>
    </ProductScrubber>
  </div>
));

