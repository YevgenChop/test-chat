import { Reply } from '../../types';
import { IconButton } from '../IconButton';
import { DotsThreeGrayIcon } from '../icons/DotsThreeGrayIcon';
import { DotsThreeDarkIcon } from '../icons/DotsThreeDarkIcon';
import { ArrowCircleUpIcon } from '../icons/ArrowCircleUpIcon';
import { CheckCircle } from '../icons/CheckCircleIcon';
import { SmileIcon } from '../icons/SmileIcon';
import { ReplyMessage } from '../ReplyMessage';
import './ReplyBlock.css';

type ReplyBlockProps = {
  replies: Reply[];
};

export const ReplyBlock = ({ replies }: ReplyBlockProps) => {
  const firstReply = replies[0];

  const replyCommentsLabel = `${replies.length} comment${
    replies.length > 1 ? 's' : ''
  }`;

  return (
    <div className="reply-container">
      <div className="reply-thread-item" />
      <div className="reply-block rounded-shadow-corner">
        <div className="reply-header">
          <div className="reply-header-info">
            <div className="reply-header-avatars">
              <img
                src={firstReply.user.avatar}
                style={{ width: '14px' }}
                alt=""
              />
            </div>
            <div className="reply-header-title">{replyCommentsLabel}</div>
            <div className="label-text">Today, 9:38 AM</div>
          </div>
          <div className="reply-header-buttons">
            <IconButton style={{ padding: '4px' }} onClick={() => {}}>
              <CheckCircle />
            </IconButton>
            <IconButton style={{ padding: '4px' }} onClick={() => {}}>
              <DotsThreeGrayIcon />
            </IconButton>
          </div>
        </div>
        {replies.map((reply: Reply) => (
          <ReplyMessage key={reply.id} data={reply} />
        ))}
        <div className="reply-input-container">
          <input className="reply-input" type="text" />
          <div className="reply-input-buttons">
            <IconButton style={{ padding: '4px' }} onClick={() => {}}>
              <DotsThreeDarkIcon />
            </IconButton>
            <IconButton style={{ padding: '4px' }} onClick={() => {}}>
              <SmileIcon />
            </IconButton>
            <IconButton style={{ padding: '4px' }} onClick={() => {}}>
              <ArrowCircleUpIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};
