import NavBar from "../components/navigation/NavBar"
import Landing from "../components/carRent/landing"
import CarsPage from "../components/carRent/carsPage"
import FAQ from "../components/RoomPages/Faq"
import SubscriptionForm from '../components/HomePage/SubscriptionForm'
import Footer from "../components/Footer"
export default function Room(){
    return (
        <>
        <div className=" overflow-y-hidden">
        <NavBar/>
        <Landing/>
        <CarsPage/>
        <FAQ/>
        <SubscriptionForm/>
        <Footer/>
        </div>
       </>
    )
}