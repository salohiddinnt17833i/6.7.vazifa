import Header from './components/header'

import './App.css'
import Api from './components/Api/api'
import Card from './components/Card/card'
import { useEffect, useState } from 'react'

function App() {

  const [phones, setPhones] = useState([])

  useEffect(() => {
    fetch(`https://auth-rg69.onrender.com/api/products/all`, {
      method: "GET"
    })
      .then(res => {
        return res.json()
      })
      .then(data => {
        setPhones(data)
      })
      .catch(err => [
        console.log(err)
      ])
  }, [])
  return (
    <>
      <Header />
      <Api />
      <div className='container card-wrapper d-flex flex-wrap gap-3 justify-content-center'>
       {/* {
        phones && phones.map((el, in) => {
          <Card key={in} phone={el}></Card>
        })
       } */}
      </div>

    </>
  )
}

export default App
