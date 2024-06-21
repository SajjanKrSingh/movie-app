import SideNav from "./Templates/SideNav";

const Home = () => {
  document.title = "Movie App | Homepage";
  return (
    <>
      <SideNav />
      <div className="lg:w-[75%] w-[75%] h-full"></div>
    </>
  );
};

export default Home;
