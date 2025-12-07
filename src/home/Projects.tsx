// Projects.tsx

import {type FC} from "react";
import {ProjectAnchor} from "../layout/SharedStyles";

const Projects: FC = () => {
    return(
        <main className="
          flex
          flex-col
          bg-[#f4f4f4]
          border-3 sm:border-5 lg:border-3
          border-[#333]
          rounded-2xl
          gap-2 sm:gap-3 lg:gap-2
          py-5 sm:py-10 lg:py-7
          px-5 sm:px-10 lg:px-7
          mt-10 sm:mt-20 lg:mt-10
          max-h-115 sm:max-h-198 md:max-h-178 lg:max-h-110
          overflow-y-scroll
          scrollbar-hide
        ">
            <ProjectAnchor to="/projects/pokedex">Pokedex</ProjectAnchor>
            <ProjectAnchor to="/projects/calculator">Calculator</ProjectAnchor>
            <ProjectAnchor to="/projects/todolist">ToDoList</ProjectAnchor>
            <ProjectAnchor to="/projects/rockpaperscissors">RockPaperScissors</ProjectAnchor>
            <ProjectAnchor to="/projects/numberguessinggame">NumberGuessingGame</ProjectAnchor>
            <ProjectAnchor to="/projects/randomizer">Randomizer</ProjectAnchor>
            <ProjectAnchor to="/projects/imageviewer">ImageViewer</ProjectAnchor>
            <ProjectAnchor to="/projects/clockandcalendar">ClockAndCalendar</ProjectAnchor>
            <ProjectAnchor to="/projects/multiplicationtable">MultiplicationTable</ProjectAnchor>
            <ProjectAnchor to="/projects/agecalculator">AgeCalculator</ProjectAnchor>
            <ProjectAnchor to="/projects/randomjokegenerator">RandomJokeGenerator</ProjectAnchor>
            <ProjectAnchor to="/projects/weathersystem">WeatherSystem</ProjectAnchor>
            <ProjectAnchor to="/projects/gradeinterpreter">GradeInterpreter</ProjectAnchor>
            <ProjectAnchor to="/projects/resumecreator">ResumeCreator</ProjectAnchor>
            <ProjectAnchor to="/projects/countdowntimer">CountdownTimer</ProjectAnchor>
        </main>
    );
}

export default Projects;