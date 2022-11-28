import React, { useState, useEffect } from "react"
import FormAdd from "./components/FormAdd"
import DisplayData from "./components/DisplayData"
import styles from './app.module.css'

export default function App() {

    const [formData, setFormData] = useState([])

    async function getFetchData() {
        const response = await fetch(
            'https://react-backendtest-default-rtdb.firebaseio.com/movies.json'
            )

        const data = await response.json()
        setFormData(data)
    }

    async function setFetchData(book) {
        const response = await fetch(
            'https://react-backendtest-default-rtdb.firebaseio.com/movies.json', {
            method: 'POST',
            body: JSON.stringify(book),
            headers: { 'Content-Type': 'application/json' }
        })
    }

    const elements = Object.entries(formData).map((v, i)=>{
        return <DisplayData key={i} data={v[1]} />
    })

    return (
        <>
            <h1 className={styles.title}>Firebase CRUD test Application</h1>
            <FormAdd setFetchData={setFetchData} getFetchData={getFetchData} />
            <section>
                {elements}
            </section>
        </>
    )
}