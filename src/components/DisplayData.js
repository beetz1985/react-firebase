import styles from './displaydata.module.css'


export default function DisplayData(props) {

    const {title, author, releaseDate, price} = props.data
   

    function handleClick(e) {
        props.deleteData(props.id)
    }

    return (
        <section className={styles.container}>
            <h1>{title}</h1>
            <p>{author}</p>
            <p>{releaseDate}</p>
            <p>£{price}</p>
            <button onClick={handleClick}>Delete</button>
        </section>
    )

}