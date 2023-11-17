import { Chat } from './components/Chat';
import './App.css';
import { Message } from './types';

const mockData: Message[] = [
  {
    id: 'as7d7df8asdas0',
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
        id: '234nd2323',
        text: 'Hey @Robert Mendez can you share an ETA with Angela?',
        emotions: [],
        user: {
          avatar: 'avatar1.png',
        },
      },
      {
        id: '234nd2s23',
        text: 'Hey @Mark Mendez can you share an ETA with Kira?',
        emotions: [],
        user: {
          avatar: 'avatar2.png',
        },
      },
    ],
  },
];

function App() {
  return (
    <div className="App">
      <Chat data={mockData} />
    </div>
  );
}

export default App;
