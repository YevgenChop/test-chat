import { ComponentPropsWithoutRef } from 'react';
import './IconButton.css';

interface IconButtonProps extends ComponentPropsWithoutRef<'button'> {}

export const IconButton = (props: IconButtonProps) => {
  return <button className="icon-button" {...props} />;
};
