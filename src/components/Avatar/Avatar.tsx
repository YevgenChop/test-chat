import { AvatarIcon } from '../icons/AvatarIcon';
import './Avatar.css';

type AvatarProps = {
  size: number;
  style?: Record<string, string | number>;
};

export const Avatar = ({ size, style }: AvatarProps) => (
  <div className="avatar-container" style={style || {}}>
    <AvatarIcon width={size} height={size} />
  </div>
);
