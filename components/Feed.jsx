"use client"
import PromptCard from "./PromptCard"
import { useState, useEffect } from "react"



const Feed = () => {
  const [searchText, setsearchText] = useState('')
  const handleSearchChange = (e) => {
    
  }
  return (
    <section className="feed">
      <form  className="relative w-full flex-center">
        <input type="text" placeholder="Pesquisar por tag ou usuario" value={searchText} onChange={handleSearchChange} required className="search_input peer" />
        

      </form>
      <div className="mt-16 prompt_layout ">
      <PromptCard 
      post="Suponha que você seja um especialista em desenvolvimento de chatbot e me responda de maneira técnica e aprofundada sobre como funciona um fluxo com IA"
      username="Tony Cleriston"
      email="tonycleriston@gmail.com"
      tag='#webdevelopment'
      />
      <PromptCard 
      post="Crie uma mensagem de boas-vindas para meus clientes. A mensagem deve ter um tom amigável, alegre e útil."
      username="Alice Lima"
      email="aliceLima@gmail.com"
      tag='#ideia'
      />
      <PromptCard 
      post="Imagine que você é um CEO ou diretor de marketing que precisa desenvolver uma estratégia totalmente diferenciada e revolucionária para geração de leads e vendas. Descreva como seria sua estratégia e por que essa abordagem geraria mais visibilidade e autoridade para sua marca."
      username="Tom Jesus"
      email="tomJesus@gmail.com"
      tag='#text'
      />

    </div>

    </section>
  )
}

export default Feed