import { AvatarIcon } from '../icons/AvatarIcon';
import './Avatar.css';

type AvatarProps = {
  size: number;
};

export const Avatar = ({ size }: AvatarProps) => (
  <div className="avatar-container">
    <div className="avatar-icon-bg" style={{ height: size, width: size }}>
      <AvatarIcon width={size} height={size} />
    </div>
  </div>
);
