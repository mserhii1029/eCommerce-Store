/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter, FiMail } from 'react-icons/fi';

// Creates the social links for the footer
const Socials = () => {
  return (
    <>
      <a href='https://github.com/mserhii1029' target='_blank' rel='noreferrer'>
        <FiGithub className='social-footer animation' size='1.5em' color='#2b2b2b' />
      </a>
      <a href='#' target='_blank' rel='noreferrer'>
        <FiLinkedin className='social-footer animation' size='1.5em' color='#2b2b2b' />
      </a>
      <a href='mailto:mserhii1029@gmail.com'>
        <FiMail className='social-footer animation' size='1.6em' color='#2b2b2b' />
      </a>
      <a href='#' target='_blank' rel='noreferrer'>
        <FiInstagram className='social-footer animation' size='1.5em' color='#2b2b2b' />
      </a>
      <a href='#' target='_blank' rel='noreferrer'>
        <FiTwitter className='social-footer animation' size='1.5em' color='#2b2b2b' />
      </a>
    </>
  );
};

export default Socials;
