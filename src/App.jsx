import Header from "./Header"
import Footer from "./Footer"
import Card from "./Card"
import Students from "./Students"
import List from "./List"
import Counter from "./Counter"
import Forms from "./Forms"

function App() {
  
  return (
    <>
    <Header />
     <h1>Hello home</h1>
     <Card />
     <Students firstName ='Piper' age = {34}  isStudent ={false} />
     <Students firstName ='Vanexcel' age ={45} isStudent ={true} />

     <List />

     <Counter />
     <Forms />

     <Footer />
    </>
  )
}

export default App
