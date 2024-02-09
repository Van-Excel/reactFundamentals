
// rendering a list
export default function List() {
const fruits = ['apple', 'orange', 'banana', 'ginger']

const listItems = fruits.map((fruit) => {<li>{fruit}</li>})

  return (
    <>
    
    <SimpleList />
    </>
   
  )
}


function ObjectList() {

  const fruitList = [{id:1, name:'apple', calories: '20g'}, 
                    {id:2, name: 'orange', calories:'30g'},
                    {id:3, name: 'banana', calories:'50g'},
                    {id:4,name: 'pineapple', calories:'60g'},


];

//sorting out the array of fruit objects using the sort method.
//lexicographic sorting
fruitList.sort((a,b) => a.name.localeCompare(b.name))

//numeric sorting
//fruitList.sort((a,b) => a.calories - b.calories)

//revise array methods

// try to make it a reusable component by passing props.

const newList = fruitList.map(fruits => <li key={fruits.id}>{fruits.name}:<b>{fruits.calories}</b></li> )
  return(
    <>
    <ul>{newList}</ul>
    
    </>
  );
}









// rendering a list
export default function List() {




  return (
    <div>
      <SimpleList />
      <ObjectList />
    </div>
  )
}

//areas to revise
//array methods
//proptypes and default proptypes
//mutation
//objects
//array & object destructuring
//spread operator