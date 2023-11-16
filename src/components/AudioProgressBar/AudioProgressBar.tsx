import { CSSProperties, ComponentPropsWithoutRef } from 'react';
import './AudioProgressBar.css';

interface ProgressCSSProps extends CSSProperties {
  '--progress-width': number;
  '--buffered-width': number;
}

interface AudioProgressBarProps extends ComponentPropsWithoutRef<'input'> {
  duration: number;
  currentProgress: number;
  buffered: number;
}

export const AudioProgressBar = ({
  duration,
  currentProgress,
  buffered,
  ...rest
}: AudioProgressBarProps) => {
  const progressBarWidth = isNaN(currentProgress / duration)
    ? 0
    : currentProgress / duration;
  const bufferedWidth = isNaN(buffered / duration) ? 0 : buffered / duration;

  const progressStyles: ProgressCSSProps = {
    '--progress-width': progressBarWidth,
    '--buffered-width': bufferedWidth,
  };

  return (
    <div className="progress-bar">
      <input
        className="input-range"
        type="range"
        name="progress"
        style={progressStyles}
        min={0}
        max={duration}
        value={currentProgress}
        {...rest}
      />
    </div>
  );
};
