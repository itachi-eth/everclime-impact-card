import React from 'react';
import cx from 'classnames';
import styles from './Carousel.module.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

type NavButtonProps = {
  selected: boolean;
  onClick: () => void;
};

type ButtonProps = {
  enabled: boolean;
  onClick: () => void;
};

export const NavButton: React.FC<NavButtonProps> = ({ selected, onClick }) => (
  <button
    className={cx(styles.navButton, { [styles.isSelected]: selected })}
    type="button"
    onClick={onClick}
  />
);

export const PrevButton: React.FC<ButtonProps> = ({ enabled, onClick }) => (
  <button className={cx(styles.button)} onClick={onClick} disabled={!enabled}>
    <FaArrowLeft />
  </button>
);

export const NextButton: React.FC<ButtonProps> = ({ enabled, onClick }) => (
  <button className={cx(styles.button)} onClick={onClick} disabled={!enabled}>
    <FaArrowRight />
  </button>
);
