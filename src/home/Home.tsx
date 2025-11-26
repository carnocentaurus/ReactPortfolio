// Home.tsx

import ProfilePic from "./ProfilePic.png";

function Home() {
  return (
    <main className="
      flex 
      justify-center 
      flex-col 
      items-center 
      flex-1
      px-6 sm:px-8
      pt-12 sm:pt-16 lg:pt-0
      pb-8 sm:pb-12 lg:pb-16
      lg:-mt-16"
    >
      <img 
        src={ProfilePic} 
        className="
          w-40 sm:w-60 md:w-64 lg:w-64 xl:w-72
          rounded-full 
          mb-6 sm:mb-8"
        alt="Profile Pic"
      />

      <p className="
        text-[#f4f4f4] 
        text-sm sm:text-2xl lg:text-lg
        font-poppins 
        font-semibold
        text-center"
      >
        ERIC JOHN MERCOLINO
      </p>
    </main>
  );
}

export default Home;