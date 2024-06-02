import Btns from "./components/Btn";
import Modal from "./components/Modal";
import NewHome from "./home/page";



export default function Home() {
  return (
    <main className="h-screen relative flex justify-center items-center" >
      <Modal/>
      <Btns name="Let's Move On" path='/animation' btnPosition={ 'bottom-5 right-5' }/>
      <NewHome/>
   
    </main>
  );
}
