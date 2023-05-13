import React, {useState} from 'react';

import {Header} from "./components/Header/Header";
import {HomePage} from "./pages/HomePage";
import {MoviePage} from "./pages/MoviePage";
import {PageEnum} from "./constants/page.enum";

const App = () => {
    const [choice, setChoice] = useState<PageEnum>(PageEnum.HOME);
  return (
    <div>
        <Header setChoice={setChoice}/>
        {choice === PageEnum.HOME && <HomePage/>}
        {choice === PageEnum.MOVIE && <MoviePage/>}
    </div>
  );
}

export default App;


//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmFlMjI5NmQ1MDFiNmY3YWJjZDdkNTU5ZjU3Y2NiOCIsInN1YiI6IjY0NWU5MDZlZjkwYjE5MDE1NTQxODgzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EGOZr-UtwpSQSCuVR1mQQ9qAw-ALATXWWl7lZv53zmA