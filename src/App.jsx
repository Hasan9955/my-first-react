
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './friends'
function App() {
  

  function handleClick(){
    alert('button clicked')
  }
  const butclick = () => {
    alert('button 2 clicked')
  }
  const four =(num) =>{
    alert(num + 5)
  }

  return (

    <>
    <Friends></Friends>
    <Users></Users>
        <Team></Team>
        <Counter></Counter>
       <h3>React-core-concept-part 2</h3>
       {/* step 1 */}
        <button onClick={handleClick}>Click Me</button>
        {/* step 2 */}
        <button onClick={butclick}>click button 2</button>
        <br></br>
        {/* step 3 */}
        <button onClick={()=>{
          alert('button 3 clicked')
        }}>click button 3</button>

        <button onClick={()=> four(7)}>button 4</button>
    </>
  )
}

export default App
