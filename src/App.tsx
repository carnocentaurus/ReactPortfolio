import { Routes, Route } from "react-router-dom";

// Layout
import Layout from "./layout/Layout";

// Pages
import Home from "./home/Home";
import About from "./home/About";
import Projects from "./home/Projects";
import Contact from "./home/Contact";

// Individual Projects
import Pokedex from "./projects/Pokedex/Pokedex";
import Calculator from "./projects/Calculator/Calculator";
import RockPaperScissors from "./projects/RockPaperScissors/RockPaperScissors";
import NumberGuessingGame from "./projects/NumberGuessingGame/NumberGuessingGame";
import Randomizer from "./projects/Randomizer/Randomizer";
import ImageViewer from "./projects/ImageViewer/ImageViewer";
import ClockAndCalendar from "./projects/ClockAndCalendar/ClockAndCalendar";
import MultiplicationTable from "./projects/MultiplicationTable/MultiplicationTable";
import AgeCalculator from "./projects/AgeCalculator/AgeCalculator";
import RandomJokeGenerator from "./projects/RandomJokeGenerator/RandomJokeGenerator";
import ToDoList from "./projects/ToDoList/ToDoList";
import WeatherSystem from "./projects/WeatherSystem/WeatherSystem";
import GradeInterpreter from "./projects/GradeInterpreter/GradeInterpreter";
import ResumeCreator from "./projects/ResumeCreator/ResumeCreator";
import CountdownTimer from "./projects/CountdownTimer/CountdownTimer";

import {type FC} from "react";

const App: FC = () => {
  return (
    <Routes>
      {/* Layout wrapper */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />

        {/* Sub-routes under projects */}
        <Route path="projects/pokedex" element={<Pokedex />} />
        <Route path="projects/calculator" element={<Calculator />} />
        <Route path="projects/rockpaperscissors" element={<RockPaperScissors />} />
        <Route path="projects/numberguessinggame" element={<NumberGuessingGame />} />
        <Route path="projects/randomizer" element={<Randomizer />} />
        <Route path="projects/imageviewer" element={<ImageViewer />} />
        <Route path="projects/clockandcalendar" element={<ClockAndCalendar />} />
        <Route path="projects/multiplicationtable" element={<MultiplicationTable />} />
        <Route path="projects/agecalculator" element={<AgeCalculator />} />
        <Route path="projects/randomjokegenerator" element={<RandomJokeGenerator />} />
        <Route path="projects/todolist" element={<ToDoList />} />
        <Route path="projects/weathersystem" element={<WeatherSystem />} />
        <Route path="projects/gradeinterpreter" element={<GradeInterpreter />} />
        <Route path="projects/resumecreator" element={<ResumeCreator />} />
        <Route path="projects/countdowntimer" element={<CountdownTimer />} />
      </Route>
    </Routes>
  );
}

export default App;