import React from 'react'
import { ItenContainer } from './style'

function ItenRepo({ repo, handleRemoveRepo }) {
  return (
    <ItenContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} target='_blank' rel="noreferrer">
        Ver repositório
      </a>
      <br />
      <a href="#" onClick={() => handleRemoveRepo(repo.id)} className='remover'>
        Remover
      </a>
      <hr />
    </ItenContainer>
  )
}

export default ItenRepo;