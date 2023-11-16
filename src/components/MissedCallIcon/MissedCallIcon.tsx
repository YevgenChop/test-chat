import { PhoneXIcon } from '../icons/PhoneXIcon';
import './MissedCallIcon.css';

type MissedCallIconProps = {
  size: number;
};

export const MissedCallIcon = ({ size }: MissedCallIconProps) => (
  <div className="missed-call-icon-bg" style={{ height: size, width: size }}>
    <PhoneXIcon width={20} height={20} />
  </div>
);
