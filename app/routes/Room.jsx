import NavBar from "../components/navigation/NavBar"
import HomePage from '../components/RoomPages/HomePage'
import PopularAttractions from '../components/RoomPages/PopularAttractions'
import GuestRooms from "../components/RoomPages/GuestRooms"
import Apartments from "../components/RoomPages/Apartments"
import FAQ from "../components/RoomPages/Faq"
import SubscriptionForm from '../components/HomePage/SubscriptionForm'
import Footer from "../components/Footer"
export default function Room(){
    return (
        <>
        <NavBar/>
      {/* <div>
           <img className='w-[100vw] rounded h-[75vh] object-cover object-[50%_35%]' src="homePage.png" alt="homeImg" />
      </div> */}
      <HomePage/>
      <PopularAttractions/>
      <GuestRooms/>
      <Apartments/>
      <FAQ/>
<SubscriptionForm/>
<Footer/>

        </>
    )
}