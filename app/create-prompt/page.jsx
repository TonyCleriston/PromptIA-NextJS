"use client";
import {useState} from 'react'
import { useRouter } from 'next/navigation';
import Form from '@components/Form'

const CreatePrompt = () => {
    const [submitting, setSubmitting] = useState(false)
    const [post, setPost] = useState({
        prompt: "",
        tag: '',
    })
    const createPrompt = async (e) => {
      e.preventDefault()
      setSubmitting(true)
      try {
        
      } catch (error) {
        
      }
        
    }
  return (
    <Form
    type="Cri"
    post={post}
    setPost={setPost}
    submitting={submitting}
    handleSubmit={createPrompt}
    
    />
  )
}

export default CreatePrompt