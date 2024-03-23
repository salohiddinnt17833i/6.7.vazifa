import { useEffect } from 'react'
import styles from './api.module.css'


function Api() {
    // useEffect(()=> {
    //     console.log('Salom');
    // })
    useEffect(() => {
        console.log('Hello');
    }, [])
    return (
        <div className={styles.wrapper}>

        </div>
    )
}

export default Api