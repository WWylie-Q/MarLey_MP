import {useState, useEffect} from 'react';
import Player from './components/Player';

function App() {
  const [songs] = useState([
    {
      title: "Mambo No. 5",
      artist: "Lou Bega",
      img_src: "./images/5.jpg",
      src: "./music/mambono5.mp3",
    },
    {
      title: "As It Was",
      artist: "Harry Styles",
      img_src: "./images/harry.jpg",
      src: "./music/asitwas.mp3",
    },
    {
      title: "Case 143",
      artist: "Stray Kids",
      img_src: "./images/143.jpg",
      src: "./music/case143.mp3",
    },
    {
      title: "Fovever 1",
      artist: "Girls Generation",
      img_src: "./images/girls.jpg",
      src: "./music/forever1.mp3",
    },
    {
      title: "Life Goes On",
      artist: "BTS",
      img_src: "./images/bts.jpg",
      src: "./music/lifegoeson.mp3",
    },
    {
      title: "Love Me More",
      artist: "Mitski",
      img_src: "./images/mitski.jpg",
      src: "./music/lovememore.mp3",
    },{
      title: "Maniac",
      artist: "Stray Kids",
      img_src: "./images/stray.jpg",
      src: "./music/maniac.mp3",
    },
    {
      title: "Pink Venom",
      artist: "Black Pink",
      img_src: "./images/pink.jpg",
      src: "./music/pinkvenom.mp3",
    },
    {
      title: "Talk That Talk",
      artist: "Twice",
      img_src: "./images/twice.jpg",
      src: "./music/talkthattalk.mp3",
    },
    {
      title: "Tomboy",
      artist: "(G)I-DLE",
      img_src: "./images/tomboy.jpg",
      src: "./music/tomboy.mp3"
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default App;
