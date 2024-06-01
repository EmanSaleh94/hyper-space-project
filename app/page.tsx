import Image from "next/image";
import WelcomePage from  './home/page';
import HomePage from "./newfinal/page";
import NewHome from "./home/page";
import Btns from "./components/Btn";
import Modal from "./components/Modal";



export default function Home() {
  return (
    <main className="h-screen relative flex justify-center items-center" >
      <Modal/>
      <Btns name="Let's Move On" path='/google'/>
      

      <NewHome/>
    </main>
  );
}
