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
          border-3
          border-[#333]
          rounded-2xl
          px-6 sm:px-8
          py-6 sm:py-8
          mt-10 sm:mt-20
          pt-10 sm:pt-14 lg:pt-12"
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