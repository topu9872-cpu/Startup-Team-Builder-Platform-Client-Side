import NavBar from "@/MainComponents/NavBar/NavBar";

const MainLayout = ({children}) => {
  return (
    <div>
        <NavBar/>
        {children}
    </div>
  );
};

export default MainLayout;