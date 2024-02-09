


// rendering a list
export default function List() {
const fruits = ['apple', 'orange', 'banana', 'ginger']

const listItems = fruits.map((fruit) => {<li>{fruit}</li>})

  return (
    <div><ul>{listItems}</ul></div>
  )
}
