import { useEffect, useRef, useState } from 'react'
import styles from './api.module.css'


function Api() {
    const [data, setData] = useState('')
    const [API, setAPI] = useState(`https://auth-rg69.onrender.com/api/products`)

    const nameRef = useRef('')
    const priceRef = useRef(0)
    const descref = useRef('')
    const statusRef = useRef('active')


    function handleSave(e) {
        e.preventDefault()
        const phone = {
            name: nameRef.current.value,
            price: priceRef.current.value,
            description: descref.current.value,
            status: statusRef.current.value,
            category_id: 2
        }

        fetch(`${API}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(phone)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            })
    }
    // useEffect(() => {
    //     console.log('Hello');
    // }, [])

    // useEffect(()=> {
    //     console.log('Berilgan statselardan ilatgan 1 tasi ozgarganda shu  useEfect ishlaydi');
    // },[counter])
    return (
        <div className={styles.wrapper}>
            <form className='mt-5'>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input ref={nameRef} type="text" className="form-control" id="name" placeholder='Enter Name' />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input ref={priceRef} type="text" className="form-control" id="price" placeholder='Enter Price' />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <textarea ref={descref} type="text" className="form-control" id="desc" placeholder='Enter description'></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="status" className="form-label">Description</label>
                    <select ref={statusRef} className='form-control' id="status">
                        <option value="avtive">Active</option>
                        <option value="inAvtive">In Active</option>
                    </select>
                </div>

                <button onClick={handleSave} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Api