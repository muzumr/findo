import NavBar from "../components/navigation/NavBar"
import Landing from "../components/Blogs/Landing"
import BlogSection from '../components/Blogs/BlogSection'
import AddPage from "../components/Blogs/AddPage"
import FAQ from "../components/RoomPages/Faq"
import SubscriptionForm from '../components/HomePage/SubscriptionForm'
import Footer from "../components/Footer"
export default function Room(){
    return (
        <>
       <NavBar/>

       <Landing/>
       <AddPage/>
       <BlogSection/>
       <FAQ/>
       <SubscriptionForm/>
       <Footer/>
       </>
        
    )
}