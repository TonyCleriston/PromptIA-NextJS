import Feed from '@components/Feed'
import React from 'react'

const Home = () => {
  return (
    <section className="flex-col w-full flex-center">
        <h1 className='head_text text-center'>
            Descubra & Compartilhe
            <br className="max-md:hidden" />
            <span className='orange_gradient text_center'>AI-Powred Prompts</span>

        </h1>
        <p className='desc text-center'>
        PromptsAI é uma ferramenta de sugestão de IA de código aberto para o mundo moderno, que permite descobrir, criar e compartilhar sugestões criativas. 
        </p>
        <Feed />
    </section>
  )
}

export default Home