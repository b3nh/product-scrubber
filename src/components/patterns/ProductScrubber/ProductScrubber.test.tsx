/* eslint-disable no-undef */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductScrubber from './ProductScrubber';

const TestComponent = (testProps: any) => {
  const { data, onClickItem } = testProps;
  return <ProductScrubber data={data} onClickItem={onClickItem} />;
};

describe('ProductScrubber primary', () => {
  const testProps = {
    data:
      [
        {
          name: 'side',
          default: true,
          imagePath: '../../../stories/assets/side.jpg',
        },
        {
          name: 'front',
          default: false,
          imagePath: '../../../stories/assets/front.jpg',
        },
        {
          name: 'back',
          default: false,
          imagePath: '../../../stories/assets/back.jpg',
        },
        {
          name: 'top',
          default: false,
          imagePath: '../../../stories/assets/top.jpg',
        },
      ],
    onClickItem: jest.fn(),
  };

  // beforeEach(() => {
  //   render(TestComponent(testProps));
  // });

  it('should match snapshot', () => {
    expect(render(TestComponent(testProps))).toMatchSnapshot();
  });
});
