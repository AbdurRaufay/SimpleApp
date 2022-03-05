import axios from 'axios'
import React, { useState } from 'react'

const AddArticle = () => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [details, setDetails] = useState("")
    

    const handleChange = (e) => {
        if (e.target.name === "title") {
            setTitle(e.target.value);
        }
        else if (e.target.name === "author") {
            setAuthor(e.target.value);
        }
        else if (e.target.name === "details") {
            setDetails(e.target.value);
        }

    }
    const saveData = async (e) => {
        e.preventDefault();
        const data= {
            title: title,
            author: author,
            details: details
        }
        const res = await axios.post("http://localhost:3001/article", {
            title: title,
            author: author,
            details: details
        }
        )
        console.log(res)
    }
    return (
        <div>
            <form className="ui form" onSubmit={saveData}>
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
        </div>
    )
}

export default AddArticle




