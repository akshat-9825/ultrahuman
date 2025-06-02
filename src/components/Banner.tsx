import React from 'react';
import styles from './Banner.module.css';
import cn from 'classnames';
import { Button } from './ui/button';

const Banner: React.FC = () => {
  return (
    <div
      className={cn(
        styles.banner,
        'mx-4 mt-6 flex h-[730px] flex-col items-center justify-center rounded-2xl'
      )}
    >
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-center text-sm font-medium text-white uppercase">
          World's most comfortable sleep tracker
        </p>
        <p className="text-center text-[48px] leading-[70px] font-[500] tracking-[-0.04em] text-white">
          Ultrahuman Ring AIR
        </p>
        <p className="max-w-[335px] text-center text-xs break-all text-[#7b7b7b]">
          Accurately tracks sleep, HRV, temperature, and movement with daily actionable health
          insights.
        </p>
        <Button
          className="cursor-pointer rounded-[40px] bg-black px-8 py-5 text-white uppercase"
          variant="secondary"
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default Banner;
