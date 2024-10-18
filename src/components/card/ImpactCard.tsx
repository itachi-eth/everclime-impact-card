import React, { useState } from 'react';
import { RiCoupon2Fill } from 'react-icons/ri';
import { mappingSlugToIcon, type mockCardData } from '../../config/config';
import cx from 'classnames';
import styles from './Card.module.css';

const ImpactCard: React.FC<{
  data: (typeof mockCardData)[number];
  selectedIndex: number;
}> = ({ data, selectedIndex }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const outerCardContainerClassName = cx({
    [styles.outerCardContainer]: true,
    [`bg-[var(--card-color)]`]: true,
    ['opacity-30']: selectedIndex !== data.id,
  });

  const innerCardContainerClassName = cx(
    styles.innerCardContainer,
    `bg-[var(--card-color)] border-[var(--card-color)]`,
  );

  const cardWrapperClassName = cx(
    styles.cardWrapper,
    'before:from-[var(--card-color)] before:to-[var(--card-color-transparent)]',
  );

  const handleTouch = (isTouch: boolean) => {
    if (selectedIndex == data.id) {
      setIsTooltipVisible(isTouch);
    }
  };

  return (
    <div
      className={outerCardContainerClassName}
      style={
        {
          '--card-color': data.color,
        } as React.CSSProperties
      }
    >
      <div className={innerCardContainerClassName}>
        <div
          className={cx({
            ['flex flex-col relative']: true,
            [innerCardContainerClassName]: true,
          })}
        >
          <div
            className={cardWrapperClassName}
            style={
              {
                backgroundImage: `url(${data.imageUrl})`,
                '--card-color-transparent': `${data.color}30`, // 30 is hex for 19% opacity
              } as React.CSSProperties
            }
          ></div>
          <div className={styles.cardOutline} />
          <div className={styles.cardLogoWrapper}>
            <img
              src={data.logoUrl}
              alt="logo"
              className="w-[110px] h-[110px] lg:w-[120px] lg:h-[120px] rounded-full"
            />
          </div>
        </div>
        <div className="flex flex-col px-3 py-2 text-white">
          <div className="relative">
            <div
              className="text-xl font-bold mb-2 line-clamp-2 overflow-hidden min-h-[40px]"
              onTouchStart={() => handleTouch(true)}
              onTouchEnd={() => handleTouch(false)}
              onMouseEnter={() => handleTouch(true)}
              onMouseLeave={() => handleTouch(false)}
            >
              {data.title}
            </div>
            {isTooltipVisible && (
              <div className={styles.tooltip}>{data.title}</div>
            )}
          </div>
          <div className="py-5 my-1 border-t-[1px] border-gray-100 border-solid border-b-[1px]">
            <div className="grid grid-cols-3 gap-2 items-start">
              {data.volume.map((item, index) => {
                const IconComponent = mappingSlugToIcon[item.type.slug];
                return (
                  <div
                    key={index}
                    className="col-span-1 flex flex-col items-center justify-center gap-1"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <IconComponent size={20} />
                      <span className="text-lg font-bold">{item.volume}</span>
                    </div>
                    <div className="text-sm">{item.type.unit}</div>
                  </div>
                );
              })}
              <div className="col-span-1 flex flex-col items-center justify-center gap-1">
                <img
                  src={data.logoUrl}
                  alt="logo"
                  className="w-[28x] h-[28px] rounded-full"
                />
                <div className="text-sm text-center">{data.sponsor}</div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 mt-3 mb-2">
            <img
              src={data.logoUrl}
              alt="logo"
              className="w-[28x] h-[28px] rounded-full"
            />
            <div className="text-sm text-center max-w-[150px] sm:max-w-full">
              Made Possible By <strong>{data.sponsor}</strong>
            </div>
          </div>
        </div>
        <div className={styles.rewardsContainer}>
          <div className={styles.rewardsCount}>1/200</div>
          <div className={styles.rewardsWrapper}>
            <div className={styles.rewardsLabel}>Rewards</div>
            <div className={styles.rewardsIconWrapper}>
              <RiCoupon2Fill size={20} />
              {data.rewards > 0 && (
                <div
                  className={cx(styles.rewardsBadge, `bg-[var(--card-color)]`)}
                >
                  {data.rewards}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactCard;
