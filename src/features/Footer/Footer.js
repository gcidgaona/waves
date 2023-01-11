import React from 'react'
import * as Unicons from '@iconscout/react-unicons';

const SIZE_ICON = 20
const COLOR_ICON = '#475569'
export const Footer = () => {

  const openGitHub = () => {
    window.open('https://github.com/gcidgaona', '_blank', 'noreferrer');
  }
  const openLinkdin = () => {
    window.open('https://www.linkedin.com/in/gabriel-emilio-cid-gaona/', '_blank', 'noreferrer');
  }
  const openMail = () => {
    window.open('mailto:gabrielcid8@gmail.com?subject=Cotizacion Proyecto Web', '_blank', 'noreferrer');
  }
  return (
    <div className='w-full flex justify-center bg-slate-200 h-auto'>
      <div className='w-8/12 md:w-7/12 py-4 grid grid-cols-2 text-xs gap-2 md:gap-1 items-center'>
        <div className='flex flex-col gap-1'>
          <div className='flex gap-2 flex-row items-center hover:cursor-pointer transform transition-transform hover:scale-105' onClick={openGitHub}>
            <Unicons.UilGithub  size={SIZE_ICON} color={COLOR_ICON} className='mt-1'/>
            <h3 className='font-semibold'>
                @gcidgaona
            </h3>
          </div>
          <div className='flex gap-2 flex-row items-center hover:cursor-pointer transform transition-transform hover:scale-105' onClick={openLinkdin}>
            <Unicons.UilLinkedin  size={SIZE_ICON} color={COLOR_ICON} className='mt-1'/>
            <h3 className='font-semibold'>
                Gabriel Cid Gaona
            </h3>
          </div>
          <div className='flex gap-2 flex-row items-center hover:cursor-pointer transform transition-transform hover:scale-105' onClick={openMail}>
            <Unicons.UilEnvelopeAlt  size={SIZE_ICON} color={COLOR_ICON} className='mt-1'/>
            <h3 className='font-semibold'>
                gabrielcid8@gmail.com
            </h3>
          </div>
        </div>
        <div className='justify-self-center'>
          <div>
            <a target="_blank" href="https://icons8.com/icon/aRMbtEpJbrOj/coraz%C3%B3n-con-pulso" className='link'>Corazón con pulso</a> icon by <a target="_blank" href="https://icons8.com" className='link'>Icons8</a>
          </div>
          <div>
            <a href="https://www.freepik.com/free-vector/people-working-with-technology-isometric-design_4831948.htm#query=isometric&position=1&from_view=keyword" className='link'>Image by pikisuperstar</a> on Freepik
          </div>
        </div>
      </div>
    </div>
  )
}
