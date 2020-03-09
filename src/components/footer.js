import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default () => (
    <div className='footer is-transparent'>
        <div className='tabs is-centered has-text-centered'>
            <div className='container'>
                <ul>
                    <li>
                        <a href='https://www.github.com/chknwaffles'>
                            <span className='icon'>
                                <FaGithub />
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/wonsae-kim/'>
                            <span className='icon'>
                                <FaLinkedin />
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <br />
    </div>
)