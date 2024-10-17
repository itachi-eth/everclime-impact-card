import React, { useState } from 'react';
import type { mockCardData } from '../../config/config';
import styles from './Card.module.css';
import cx from 'classnames';
import { RiCoupon2Fill } from 'react-icons/ri';
import { mappingSlugToIcon } from '../../config/config';

const ImpactCard: React.FC<{ data: (typeof mockCardData)[number] }> = ({
  data,
}) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const outerCardContainerClassName = cx({
    [styles.outerCardContainer]: true,
    [`bg-[${data.color}]`]: true,
  });

  const innerCardContainerClassName = cx({
    [styles.innerCardContainer]: true,
    [`bg-[${data.color}] border-[${data.color}]`]: true,
  });

  const cardWrapperClassName = cx({
    [styles.cardWrapper]: true,
    [`before:from-[${data.color}]`]: true,
    [`before:to-[${data.color}]/[0.19]]`]: true,
  });

  return (
    <div className={outerCardContainerClassName}>
      <div className={innerCardContainerClassName}>
        <div
          className={cx({
            ['flex flex-col relative']: true,
            [innerCardContainerClassName]: true,
          })}
        >
          <div
            className={cardWrapperClassName}
            style={{
              backgroundImage: `url(${data.imageUrl})`,
            }}
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
              onMouseEnter={() => setIsTooltipVisible(true)}
              onMouseLeave={() => setIsTooltipVisible(false)}
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
            <div className="text-sm text-center">
              Made Possible By <strong>{data.sponsor}</strong>
            </div>
          </div>
        </div>
        <div className="bg-gray-600 bg-opacity-40 w-full h-[65px] flex px-5 items-center justify-between text-white">
          <div className="text-base font-bold">1/200</div>
          <div className="flex items-center justify-center gap-2">
            <div className="text-base font-bold">Rewards</div>
            <div className="flex items-center justify-center gap-1 w-10 h-10 bg-white bg-opacity-20 rounded-full relative">
              <RiCoupon2Fill size={20} />
              <div className="absolute top-[-5px] right-[-2px] w-4 h-4 text-white border-[1px] border-white rounded-full flex items-center justify-center text-xs bg-[#27a93b] font-bold">
                {data.rewards}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactCard;
