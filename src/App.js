import './App.css';
import { useState } from 'react';
import { Landing } from './pages/Landing';
import { EmojiProvider, Emoji } from "react-apple-emojis"
import { Toaster } from 'react-hot-toast';
import emojiData from "react-apple-emojis/src/data.json"
import ViewContext from './helpers/context/ViewContext';
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {

  const [actualView, setActualView] = useState('home')

  return (

    <Router>
      <ViewContext.Provider value={{actualView, setActualView}}>
        <EmojiProvider data={emojiData}>
          <Landing />
          <Toaster />
        </EmojiProvider>
      </ViewContext.Provider>
    </Router>
  );
}

export default App;
