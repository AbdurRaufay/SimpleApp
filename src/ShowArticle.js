import React, { useState, useEffect } from 'react'
import axios from "axios"
//import Edit from './Edit'
import {useHistory} from 'react-router-dom';
const ShowArticle = () => {
  const [row,setRow]=useState({})
  const [article, setArticle] = useState([])
  const [token,setToken]=useState()
  const history=useHistory()
  useEffect(() => {
    const getData = async () => {
      try{
        setToken(history.location.state)
      const { data } = await axios.get("http://localhost:3001/article",{
        headers:{
          token:token
        }
      })
      setArticle(data)
    }catch(err){
      console.log(err)
    }  
    };
    getData();
  }, [article,token])

  const handleEdit=(row)=>{
    history.push({
      pathname:"/edit",
      state:row
      
  })
     //console.log(row)
  }
  const handleDelete = async (id) => {
     try {
      const articleDeleted = await axios.delete("http://localhost:3001/article/"+id,{
        headers:{
          token:token
        }
      });
    // console.log(articleDeleted)
        if (articleDeleted) {
        alert(`the ${articleDeleted.data.title} was deleted successfully`)
      }
    }
    catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div>
      <table className="ui celled table">
        <thead>
          <tr><th>title</th>
            <th>author</th>
            <th>details</th>
            <th>Action</th>
          </tr></thead>
        <tbody>
          {
            article.length==0 ? <tr colSpan='3'
             style={{ textAlign: 'center', color: 'red' }}>
               <td>No articles found</td></tr>: 
            article.map((row, key) => {
              return <tr key={key}>
                <td data-label="Name">{row.title}</td>
                <td data-label="Age">{row.author}</td>
                <td data-label="Job">{row.details}</td>
                <td>
                  <button onClick={e=>handleEdit(row)}>Edit</button>
                  <button onClick={(e)=>handleDelete(row._id)}>Delete</button>
                </td>
              </tr>
            })      
          }
        </tbody>
      </table>
    </div>
  )
}
export default ShowArticle;