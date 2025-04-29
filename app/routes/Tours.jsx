import NavBar from "../components/navigation/NavBar"
import Landing from "../components/tours/Landing"
import TourSection from '../components/tours/TourSection'
import OtherTours from "../components/tours/OtherTours"
export default function Room(){
    return (
        <>
        <NavBar/>
        <Landing/>
        <TourSection/>
        <OtherTours/>
        </>
    )
}