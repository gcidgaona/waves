import React from 'react'
import * as Unicons from '@iconscout/react-unicons';
import { openGitHub, openLinkedin, openMail } from '../../helpers/globalHelpers';
import footerStr from './constants/footerStr';

const SIZE_ICON = 20
const COLOR_ICON = '#475569'

export const Footer = () => {

  const {
    NAME_LINKEDIN,
    USER_GITHUB,
    USER_EMAIL
  } = footerStr
  return (
    <div className='w-full flex justify-center bg-slate-200 h-auto'>
      <div className='w-11/12 sm:w-8/12 md:w-7/12 py-4 grid grid-cols-2 text-xs gap-2 md:gap-1 items-center'>
        <div className='flex flex-col gap-1'>
          <div className='flex gap-2 flex-row items-center hover:cursor-pointer transform transition-transform hover:scale-105' onClick={openGitHub}>
            <Unicons.UilGithub  size={SIZE_ICON} color={COLOR_ICON} className='mt-1'/>
            <h3 className='font-semibold'>
                {USER_GITHUB}
            </h3>
          </div>
          <div className='flex gap-2 flex-row items-center hover:cursor-pointer transform transition-transform hover:scale-105' onClick={openLinkedin}>
            <Unicons.UilLinkedin  size={SIZE_ICON} color={COLOR_ICON} className='mt-1'/>
            <h3 className='font-semibold'>
                {NAME_LINKEDIN}
            </h3>
          </div>
          <div className='flex gap-2 flex-row items-center hover:cursor-pointer transform transition-transform hover:scale-105' onClick={openMail}>
            <Unicons.UilEnvelopeAlt  size={SIZE_ICON} color={COLOR_ICON} className='mt-1'/>
            <h3 className='font-semibold'>
                {USER_EMAIL}
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
