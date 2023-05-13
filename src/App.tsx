import React from 'react';

import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {MoviePage} from "./pages/MoviePage";
import {MovieDetailsPage} from "./pages/MovieDetailsPage";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'movies'}/>}/>
                <Route path={'movies'} element={<MoviePage/>}>
                    <Route path={':id'} element={<MovieDetailsPage/>}/>
                </Route>
            </Route>
        </Routes>
    );
}

export default App;











// import React, {useState} from 'react';
//
//
// // import {Header} from "./components/Header/Header";
// // import {HomePage} from "./pages/HomePage";
// // import {MoviePage} from "./pages/MoviePage";
// import {PageEnum} from "./constants/page.enum";
// import {Routes} from "react-router-dom";
//
// const App = () => {
//     // const [choice, setChoice] = useState<PageEnum>(PageEnum.HOME);
//   return (
//     <Routes>
//
//
//         {/*<Header setChoice={setChoice}/>*/}
//         {/*{choice === PageEnum.HOME && <HomePage/>}*/}
//         {/*{choice === PageEnum.MOVIE && <MoviePage/>}*/}
//     </Routes>
//   );
// }
//
// export default App;
//
//
// //eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmFlMjI5NmQ1MDFiNmY3YWJjZDdkNTU5ZjU3Y2NiOCIsInN1YiI6IjY0NWU5MDZlZjkwYjE5MDE1NTQxODgzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EGOZr-UtwpSQSCuVR1mQQ9qAw-ALATXWWl7lZv53zmA