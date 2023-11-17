import { Message } from '../../types';
import { AudioMessage } from '../AudioMessage';
import { ReplyBlock } from '../ReplyBlock';
import './Chat.css';

const mockData: Message[] = [
  {
    audio: {
      src: 'file_example_MP3_2MG.mp3',
      transcript:
        'Hi there. Just checking in to see when the proposal will be ready.Please call me back when you have a chance. Thanks.',
    },
    user: {
      avatar: 'avatar3.png',
    },
    replies: [
      {
        text: 'Hey @Robert Mendez can you share an ETA with Angela?',
        emotions: [],
        user: {
          avatar: 'avatar1.png',
        },
      },
      {
        text: 'Hey @Mark Mendez can you share an ETA with Kira?',
        emotions: [],
        user: {
          avatar: 'avatar2.png',
        },
      },
    ],
  },
];

export const Chat = () => {
  const getChatMessage = ({ audio, replies, user }: Message) => {
    let message = null;
    let replyBlock = null;

    if (audio) {
      message = <AudioMessage key={audio.src} user={user} audio={audio} />;
    }

    if (replies?.length) {
      replyBlock = <ReplyBlock replies={replies} />;
    }

    return (
      <div className="chat-message-container">
        {message}
        {replyBlock}
      </div>
    );
  };

  return <div className="chat-container">{mockData.map(getChatMessage)}</div>;
};
