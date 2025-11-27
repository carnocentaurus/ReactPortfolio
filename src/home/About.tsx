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

    }, []); // 5. The empty dependency array [] ensures this runs only ONCE after the initial render.

    return(
        <main className="
          flex 
          flex-col
          justify-center 
          items-center 
          bg-[#f4f4f4]
          border-3
          border-[#333]
          rounded-3xl
          px-6 sm:px-8
          pt-8 sm:pt-16 lg:pt-10
          pb-6 sm:pb-10 lg:pb-5
          mt-10 sm:mt-20 
          lg:-mb-30"
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