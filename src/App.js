import './App.css';
import { Landing } from './pages/Landing';
import { EmojiProvider } from "react-apple-emojis"
import { Toaster } from 'react-hot-toast';
import emojiData from "react-apple-emojis/src/data.json"
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <EmojiProvider data={emojiData}>
        <Landing />
        <Toaster />
      </EmojiProvider>
    </Router>
  );
}

export default App;
