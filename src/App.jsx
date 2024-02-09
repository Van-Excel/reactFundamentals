import Header from "./Header"
import Footer from "./Footer"
import Card from "./Card"
import Students from "./Students"

function App() {
  
  return (
    <>
    <Header />
     <h1>Hello home</h1>
     <Card />
     <Students firstName ='Piper' age = {34}  isStudent ={false} />
     <Students firstName ='Vanexcel' age ={45} isStudent ={true} />
     
     <Footer />
    </>
  )
}

export default App
