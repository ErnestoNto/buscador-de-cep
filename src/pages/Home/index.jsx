import './home.css'
import { useState } from 'react'

import axios from 'axios'

const Buscador = () => {
    const [cep, setCep] = useState('')
    const [localidade, setLocalidade] = useState({})

    const handleBusca = async (e) => {
        e.preventDefault()
     
        axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then(cidade => {
            console.log(cidade.data);
            setLocalidade(cidade.data)
        })
    }

  return (
    <article className='container'>
        <h1>Buscador de CEP</h1>
      <form className='form' onSubmit={handleBusca}>
        <input 
        type="number"
        value={cep}
        onChange={e => setCep(e.target.value)}
        placeholder='Digite o CEP'
        />
        <button type='submit'>Buscar</button>
      </form>
      <div className='localidade'>
        <h3>Cidade: {localidade.localidade}/{localidade.uf}</h3>

        {localidade.bairro !== '' ? (
            <>
            <span>Logradouro: {localidade.logradouro}</span>
            <span>Bairro: {localidade.bairro}</span>
            </>
        ) : <span>Cidade</span>}
      </div>
    </article>
  )
}

export default Buscador
