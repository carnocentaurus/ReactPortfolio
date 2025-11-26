// About.tsx

import { AboutLabel, AboutText } from "../layout/SharedStyles";

function About() {
    return(
        <main className="
          flex 
          justify-center 
          items-center 
          px-6 sm:px-8
          pt-8 sm:pt-16 lg:pt-0
          pb-8 sm:pb-12 lg:pb-16
          lg:-mt-16"
        >
            <AboutLabel>Name</AboutLabel>
            <AboutText>Eric John Mercolino</AboutText>

            <label>Age</label>
            <p>21</p>

            <label>Country</label>
            <p>Philippines</p>

            <label>School</label>
            <p>Guimaras State University</p>
        </main>
    );
}

export default About;