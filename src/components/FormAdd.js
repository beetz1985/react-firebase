import React, {useState} from 'react'
import styles from './formadd.module.css'


export default function FormAdd(props) {



    const [form, setForm] = useState({
        title: "",
        author: "",
        releaseDate: "",
        price: ""
    })


    function onChange(e) {
        const {value, name} = e.target
        setForm(s=>({ ...s, [name]: value }))
    }

    
    function formSubmit(e) {
        e.preventDefault()
        props.setFetchData(form)
        setForm({
            title: "",
            author: "",
            releaseDate: "",
            price: ""
        })
    }
  
    function handleGetData(e) {
        e.preventDefault()
        props.getFetchData()
    }

    return (
        <form className={styles.form} onSubmit={formSubmit}>
            <label htmlFor="title">Title</label>
            <input onChange={onChange} name="title" type="text" value={form.title}/>
            <label htmlFor="author">Author</label>
            <input onChange={onChange} name="author" type="text" value={form.author}/>
            <label htmlFor="date">Release Date</label>
            <input onChange={onChange} name="releaseDate" type="date" value={form.releaseDate}/>
            <label htmlFor="price">Price</label>
            <input onChange={onChange} name="price" type="number" step={0.01} value={form.price}/>
            <button>Submit</button>
            <button onClick={handleGetData}>Fetch Books</button>
        </form>
    )
    
}