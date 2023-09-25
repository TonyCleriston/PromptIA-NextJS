"use client"
import { useState } from "react"
import Image from "next/image"

const PromptCard = ({post,username,tag,email}) => {
  const [copied, setCopied] = useState("")
  const handleCopy = () => {
    setCopied(post)
    navigator.clipboard.writeText(post)
    setTimeout(() => setCopied(''), 3000)
  }
  return (
    <div className="prompt_card">
      <div className="flex justify-between itens-start gap-5">
        <div className="flex-1 justify-start items-center gap-3 cursor-pointer">
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900 ">{username} </h3>
            <p className="font-inter text-sm text-gray-500">{email}</p>

          </div>
          
        </div>
        <div className="copy_btn " onClick={handleCopy}>
          <Image
            src={copied === post ? '/assets/icons/tick.svg' : '/assets/icons/copy.svg'}
            width={12}
            height={12}
          />

        </div>

      </div>
      <p className="my-4 font-satoshi text-sm text-gray-700">
        {post}
      </p>
      <p className="font-inter text-sm blue_gradient cursor-pointer">
        {tag}
      </p>
    </div>
  )
}

export default PromptCard