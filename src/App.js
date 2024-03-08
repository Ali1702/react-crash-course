import PostsList from './components/PostsList';
import MainHeader from './components/MainHeader';
import { useState } from 'react';

function App() { 
  const [ modalIsVisible, setModalIsVisible ] = useState(false);

  function showModalHandler() {
    setModalIsVisible(true);
  }

  function closeModalHandler() {
    setModalIsVisible(false);
  }

    return (
      <>
        <MainHeader onCreatePost={ showModalHandler }/>
        <main>
          <PostsList 
            isPosting={ modalIsVisible } 
            onStopPosting={ closeModalHandler }
          />
        </main>
      </>
      
  );
}

export default App;