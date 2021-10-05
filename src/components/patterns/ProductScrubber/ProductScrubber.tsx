import React, { useEffect, useState } from 'react';

import './product-scrubber.scss';

type dataType = {
  id: string,
  name: string,
  default?: boolean,
  imagePath: string,
}

type ProductScrubberTypes = {
  children?: any,
  onClickItem?: (activeId: string) => void;
  data: Array<dataType>,
  showHoverGrid?: boolean,
  hideName?: boolean,
  hideId?: boolean,
} & typeof defaultProps;

const defaultProps = {
  children: <></>,
  onClickItem: ():any => void (0),
  showHoverGrid: false,
  hideName: false,
  hideId: false,
};

const ProductScrubber = (props: ProductScrubberTypes) => {
  const {
    children,
    onClickItem,
    data,
    showHoverGrid,
    hideName,
    hideId,
  } = props;

  const [loading, setLoading] = useState(true);
  const [activeId, setActiveId] = useState('');
  const [activeName, setActiveName] = useState('');
  const [activeImagePath, setActiveImagePath] = useState('');

  const onHoverItem = (item: dataType) => {
    if (loading) return;
    const { id, name, imagePath } = item;
    setActiveId(id);
    setActiveName(name);
    setActiveImagePath(imagePath);
  };

  const setDefault = () => {
    if (data && data.length) {
      let defaultIndex = data.map((item) => item.default).indexOf(true);
      if (defaultIndex === -1) defaultIndex = 0;
      const { id, name, imagePath } = data[defaultIndex];
      setActiveId(id);
      setActiveName(name);
      setActiveImagePath(imagePath);
    }
  };

  useEffect(() => {
    setDefault();

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`product-scrubber-container ${loading ? 'product-scrubber-container-loading' : 'product-scrubber-container-active'}`}>
      <div className="child-container">
        {children}
      </div>

      {!hideName && <h4>{activeName}</h4>}
      {!hideId && <span>{activeId}</span>}

      {data && data.length > 1
        ? (
          <div className="location">
            {!loading && data.map((item: dataType, i: number) => (
              <div
                key={`item-preview-${i}`}
                className={`item-preview ${item.id === activeId ? 'item-preview-active' : 'item-preview-default'}`}
                style={{ backgroundImage: `url(${item.imagePath})` }}
                onClick={() => onHoverItem(item)}
                onKeyUp={() => onHoverItem(item)}
                aria-hidden
              />
            ))}
          </div>
        ) : null}

      <ul
        onClick={() => onClickItem(activeId)}
        onKeyUp={() => onClickItem(activeId)}
        aria-hidden
      >
        {data && data.length > 1 ? data.map((item: dataType, i: number) => (
          <li
            className={showHoverGrid ? 'show-grid' : 'hide-grid'}
            key={`product-scrubber-image-${i}`}
            onMouseEnter={() => onHoverItem(item)}
            aria-hidden
          />
        )) : null}
      </ul>
      <div
        className={`hover-active-image ${loading ? 'loading' : 'loading-complete'}`}
        style={{ backgroundImage: `url(${activeImagePath})` }}
      />
    </div>
  );
};

ProductScrubber.defaultProps = defaultProps;

export default ProductScrubber;
