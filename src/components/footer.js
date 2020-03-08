import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default () => (
    <div className='hero-foot'>
        <div className='content has-text-centered'>
            <button className='button is-medium'>
                <span className='icon'>
                    <FaGithub />
                </span>
                <span>GitHub</span>
            </button>
            <button className='button is-medium'>
                <span className='icon'>
                    <FaLinkedin />
                </span>
                <span>LinkedIn</span>
            </button>
        </div>
    </div>
)