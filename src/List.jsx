


 function SimpleList() {
  const fruits = ['apple', 'orange', 'banana', 'ginger']
  const listItems = fruits.map((fruit) => {<li>{fruit}</li>})

  return (
    <div><ul>{listItems}</ul></div>
  )
}


// rendering a list
export default function List() {




  return (
    <div>
      <SimpleList />


    </div>
  )
}
