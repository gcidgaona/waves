import './App.css';
import { useState } from 'react';
import { Landing } from './pages/Landing';
import { EmojiProvider, Emoji } from "react-apple-emojis"
import { Toaster } from 'react-hot-toast';
import emojiData from "react-apple-emojis/src/data.json"
import ViewContext from './helpers/context/ViewContext';

function App() {

  const [actualView, setActualView] = useState('home')

  return (

    <ViewContext.Provider value={{actualView, setActualView}}>
      <EmojiProvider data={emojiData}>
        <Landing />
        <Toaster />
      </EmojiProvider>
    </ViewContext.Provider>
  );
}

export default App;
