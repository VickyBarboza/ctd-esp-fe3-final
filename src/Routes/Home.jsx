import React from 'react'
import Card from '../Components/Card'
import {useGlobalStates} from '../Components/utils/global.context'

// "No dejes que lo que no puedes hacer interfiera con lo que puedes hacer" (John R. Wooden) :)
//Entregable final realizado por: Victoria Barboza


const Home = () => {
  const{data}=useGlobalStates()

  let [fav, setFav] = useState([])

  useEffect(() => {
      localStorage.setItem('favs', JSON.stringify(fav))
  }, [fav])
  
  const addFav = (name,username,id)=>{
      if(fav.find(item=>item.id===id)){
        alert('Odontologo '+ name+ ' already on favs')
      }else{
        setFav([...fav,{name,username,id} ])
        alert('Odontologo '+ name + ' added to favs')
      }
  }
  return (
    <main className="" >
      
      <h1>Home</h1>
      <div className='card-grid'>
        {data?.map(item => (
              <Card name={item.name} username={item.username} key={item.id} id={item.id} 
              addFav={addFav} />
          ))}
      </div>
      
    </main>
  )
}

export default Home
