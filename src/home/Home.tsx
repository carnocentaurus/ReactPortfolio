import ProfilePic from "./ProfilePic.png";

function Home() {
  return (
    <main className="flex justify-center flex-col items-center">
      <img 
        src={ProfilePic} 
        className="w-1/5 rounded-full drop-shadow-[2px_2px_1px_#4c4c4c]"
        alt="Profile Pic"
      />

      <p className="font-poppins text-[#333]">Eric John Mercolino</p>
    </main>
  );
}

export default Home;