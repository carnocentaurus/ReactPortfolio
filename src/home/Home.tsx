import ProfilePic from "./ProfilePic.png";

function Home() {
  return (
    <main className="flex justify-center flex-col items-center">
      <img 
        src={ProfilePic} 
        className="w-1/5 rounded-full mt-17 mb-5"
        alt="Profile Pic"
      />

      <p className="text-[#f4f4f4]  text-base font-poppins font-semibold">ERIC JOHN MERCOLINO</p>
    </main>
  );
}

export default Home;