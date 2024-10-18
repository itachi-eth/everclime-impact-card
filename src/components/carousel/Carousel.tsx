import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { PrevButton, NextButton, NavButton } from './Buttons';
import styles from './Carousel.module.css';
import ImpactCard from '../card/ImpactCard';
import Autoplay from 'embla-carousel-autoplay';
import { mockCardData } from '../../config/config';
import cx from 'classnames';

const Carousel: React.FC = () => {
  const autoplay = Autoplay({
    delay: 5000,
    stopOnMouseEnter: true,
    stopOnInteraction: false,
  });
  const [viewportRef, embla] = useEmblaCarousel(
    {
      skipSnaps: false,
      loop: true,
    },
    [autoplay],
  );
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(
    (index: number) => embla && embla.scrollTo(index),
    [embla],
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on('select', onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <div className={styles.embla}>
      <div className={styles.emblaViewport} ref={viewportRef}>
        <div className={styles.emblaContainer}>
          {mockCardData.map((item, index) => (
            <div className={cx(styles.emblaSlide)} key={index}>
              <ImpactCard data={item} selectedIndex={selectedIndex} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.emblaControls}>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        {scrollSnaps.map((_, index) => (
          <NavButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
    </div>
  );
};

export default Carousel;
