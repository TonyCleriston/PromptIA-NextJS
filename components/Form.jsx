import Link from "next/link"

const Form = ({type,handleSubmit,post,setPost,submitting}) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
<h1 className="head_text text_left">
  <span className="blue_gradient">{type}ar Post</span>
</h1>
<p className="desc text-left max-w-md">
  {type}e e compartilhe os melhores prompts do mundo
</p>
<form onSubmit={handleSubmit} className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism ">
  <label>
    <span className="font-satoshi font-semibold text-base text-gray-700">Seu AI Prompt</span>
    <textarea
    value={post.prompt}
    onChange={(e) => setPost({...post, prompt: e.target.value})}
 placeholder="Digite aqui seu prompt..."
  required
  className="form_textarea"
    />
  </label>
  <label>
    <span className="font-satoshi font-semibold text-base text-gray-700">
      Tag {'   '}
      <span className="text-stone-600 font-semibold">(#produto, #ideia, #desenvolvimentoWeb)</span>
    </span>
    <input
    value={post.tag}
    onChange={(e) => setPost({...post, tag: e.target.value})}
 placeholder="#tag"
  required
  className="form_input"
    />
  </label>
  <div className="flex-end mx-3 mb-5 gap-4">
    <Link href='/' className='text-gray-500 text-sm'>
    Cancelar
    </Link>
    <button type="submit" disabled={submitting} className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white">
      {submitting ? `${type}...` : type}

    </button>

  </div>

</form>
    </section>
  )
}

export default Form