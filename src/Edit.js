import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
const Edit = () => {
    const history = useHistory()
    const [title, setTitle] = useState(history.location.state.title)
    const [author, setAuthor] = useState(history.location.state.author)
    const [details, setDetails] = useState(history.location.state.details)
    const [id, setid] = useState(history.location.state._id)
    const [token,setToken]=useState("")
    const handleChange = (e) => {
        if (e.target.name === "title") {
            setTitle(e.target.value);
        }
        else if (e.target.name === "author") {
            setAuthor(e.target.value);
        }
        else if (e.target.name === "details") {
            setDetails(e.target.value);
        };
    }
    const data={ 
        title:title,
        author:author,
        details:details
    }
    const handleUpdate = async (e) => {
        e.preventDefault()
        try {
            setToken(history.location.state)
            const update = await axios.patch("http://localhost:3001/article/" + id,data
                // {
                //     title: title,
                //     author: author,
                //     details: details,
                // });
                ,
                {
                    headers:{
                        token:token
                }}
        )
                history.push({
                    pathname:'/',
                    state:token
                })
        
            //console.log(update.data)
            alert(update.data)
        }
        catch (error) {
            console.log(error)
        }
    };
    return (
        <div>
            <form className="ui form" onSubmit={handleUpdate}>
                <div className="field">
                    <label>title</label>
                    <input type="text"
                        name="title"
                        value={title}
                        placeholder="title..."
                        onChange={e => handleChange(e)} />
                </div>
                <div className="field">
                    <label>Author</label>
                    <input type="text"
                        name="author"
                        value={author}
                        placeholder="author...."
                        onChange={e => handleChange(e)} />
                </div>
                <div className="field">
                    <label>details</label>
                    <input type="text"
                        name="details"
                        value={details}
                        placeholder="details........"
                        onChange={e => handleChange(e)} />
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
        </div>)

};
export default Edit;
