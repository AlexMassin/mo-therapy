'use client'

import { useState, useEffect } from 'react'
import { X, Link, Check } from 'lucide-react'
import { SiFacebook, SiX, SiThreads } from 'react-icons/si'

type Props = {
  isOpen: boolean
  onClose: () => void
  url: string
  category: string
}

export default function ShareModal({ isOpen, onClose, url, category }: Props) {
  const [clicked, setClicked] = useState<string | null>(null)
  const [show, setShow] = useState(isOpen)

  useEffect(() => {
    if (isOpen) {
      setShow(true)
    } else {
      const t = setTimeout(() => setShow(false), 200)
      return () => clearTimeout(t)
    }
  }, [isOpen])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleKey)
    }
    return () => document.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  const handleClick = async (platform: string, href?: string) => {
    setClicked(platform)
    if (href) window.open(href, '_blank', 'noopener,noreferrer')
    if (platform === 'copy') {
      await navigator.clipboard.writeText(url)
    }
    setTimeout(() => setClicked(null), 1000)
  }

    const shareText = `I found this interesting blog post about ${category.toLowerCase()}:\n\n${url}`
    const shareLinks = [
    {
        name: 'facebook',
        icon: SiFacebook,
        href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(shareText)}`,
        color: 'bg-[#1877F2] text-white'
    },
    {
        name: 'x',
        icon: SiX,
        href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`,
        color: 'bg-black text-white'
    },
    {
        name: 'threads',
        icon: SiThreads,
        href: `https://www.threads.net/intent/post?text=${encodeURIComponent(shareText)}`,
        color: 'bg-black text-white'
    },
    {
        name: 'copy',
        icon: Link,
        color: 'bg-gray-200 text-gray-800'
    }
    ]



  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 
      ${isOpen ? 'bg-black/80 opacity-100' : 'opacity-0'} 
      transition-opacity duration-200`}
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm relative transform
            ${isOpen ? 'animate-pop-in' : 'animate-pop-out'}`}
        onClick={(e) => e.stopPropagation()}
        >
        <button
          onClick={onClose}
          className='absolute top-3 right-3 text-gray-400 hover:text-gray-600'
        >
          <X size={20} />
        </button>

        <h2 className='text-xl font-semibold text-center mb-1 text-gray-900'>Thanks for Reading!</h2>
        <p className='text-gray-600 text-center mb-4'>Share this article</p>

        <div className='flex justify-center gap-4'>
          {shareLinks.map(({ name, icon: Icon, href, color }) => (
            <button
              key={name}
              onClick={() => handleClick(name, href)}
              className={`w-12 h-12 rounded-full flex items-center justify-center hover:opacity-80 transition relative overflow-hidden ${color}`}
            >
              {clicked === name ? (<Check className='animate-fade-check w-6 h-6 text-green-500' />) : (<Icon className='w-6 h-6' />)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
