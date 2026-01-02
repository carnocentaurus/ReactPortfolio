// About.tsx

import { AboutLabel, AboutText } from "../layout/SharedStyles";
import { useState, useEffect, type FC } from "react";

// Define the component using the FunctionComponent (FC) type
const About: FC = () => {
    const [ageDisplay, setAgeDisplay] = useState<number>(0);

    useEffect(() => {
        const birthYear: number = 2004;
        const birthMonth: number = 5;
        const birthDate: number = 19;

        const date: Date = new Date();

        const currentYear: number = date.getFullYear();
        // date.getMonth() returns 0-11, adding 1 makes it 1-12
        const currentMonth: number = date.getMonth() + 1; 
        const currentDate: number = date.getDate();

        let age: number = currentYear - birthYear;

        // if not birthday yet
        if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDate < birthDate)) {
            age--;
        }

        setAgeDisplay(age);

    }, []); // The empty dependency array [] ensures this runs only ONCE after the initial render.

    return(
        <main className="
          flex 
          flex-col
          bg-[#f4f4f4]
          border-[#333]
          rounded-xl
          px-6 sm:px-10 lg:px-7
          py-6 sm:py-10 lg:py-7
          mt-10 sm:mt-20 lg:mt-10
          pt-10 sm:pt-14 lg:pt-10
          w-70 sm:w-110 lg:w-85
          max-w-70 sm:max-w-110 lg:max-w-85
        "
        >
            <AboutLabel>Name</AboutLabel>
            <AboutText>Eric John Mercolino</AboutText>

            <AboutLabel>Age</AboutLabel>
            <AboutText>{ageDisplay}</AboutText>

            <AboutLabel>Country</AboutLabel>
            <AboutText>Philippines</AboutText>

            <AboutLabel>College</AboutLabel>
            <AboutText>Guimaras State University</AboutText>
        </main>
    );
}

export default About;