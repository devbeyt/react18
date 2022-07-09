import React,{useState,useEffect,useTransition,startTransition} from 'react'
import Comments from './Comments'

const filteredBySearch = (entities,search)=>entities.filter(item=>item.name.concat(item.body).
                          includes(search))

function UseTransition() {
    const [isPending,startTransition]= useTransition()
    const [comments,setComments] = useState([])
    const [search,setSearch] = useState('')
    

      const limit = "?_start=0&_limit=4"
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments${limit}`).then(res=>res.json()).then(setComments)
    },[])

    const handleSearch =(e)=>{
      startTransition(()=>{
        setSearch(e.target.value)
      });
      
    }

  return (
    <div >
      <div className='text-center '>
      <input onChange={handleSearch} className="search_input" placeholder='search comments'/>
      {
        isPending && (
          <h2 className='red'>Rendering...</h2>
        )
      }
      </div> 
      <Comments entities={filteredBySearch(comments,search)}/>
    </div>
  )
}

export default UseTransition