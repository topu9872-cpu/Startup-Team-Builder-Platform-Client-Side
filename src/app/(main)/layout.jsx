import Footer from "@/MainComponents/Footer/Footer";
import NavBar from "@/MainComponents/NavBar/NavBar";

const MainLayout = ({children}) => {
  return (
    <div>
        <NavBar/>
        {children}
        <Footer/>
    </div>
  );
};

export default MainLayout;