import Header from "./Header"
import Footer from "./Footer"
import Card from "./Card"
import Students from "./Students"
import List from "./List"

function App() {
  
  return (
    <>
    <Header />
     <h1>Hello home</h1>
     <Card />
     <Students firstName ='Piper' age = {34}  isStudent ={false} />
     <Students firstName ='Vanexcel' age ={45} isStudent ={true} />

     <List />

     <Footer />
    </>
  )
}

export default App
