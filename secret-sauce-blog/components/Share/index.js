'use client';

import {
  EmailShareButton,
  RedditShareButton,
  TwitterShareButton,
  FacebookShareButton,
} from 'react-share';
import {
  AiOutlineMail as Mail,
  AiOutlineReddit as Reddit,
} from 'react-icons/ai';
import { FiTwitter as Twitter, FiFacebook as FB } from 'react-icons/fi';
import { BsShare as CopyShare } from 'react-icons/bs';
import { useState, useEffect } from 'react';

export default function Share({ data }) {
  const shareUrl = `http://localhost:3000/posts/${data.id}`;
  const [copyLink, setCopyLink] = useState(false);

  const handleCopy = async (url) => {
    await navigator.clipboard.writeText(url);
    // Set Timeout for clipboard modal message
    setCopyLink(true);
  };

  useEffect(() => {
    setTimeout(() => setCopyLink(false), 1250);
  }, [copyLink]);

  return (
    <section
      // Set with for all other screen sizes
      className='relative flex justify-around py-3 sm:w-1/5 md:w-2/3'
      aria-label='Social Share Buttons'
    >
      <EmailShareButton
        subject={data.title}
        body='I just found this super engaging article on Honeypot Blog!'
      >
        <Mail className='h-6 w-6 cursor-pointer' />
      </EmailShareButton>
      <RedditShareButton url={shareUrl} quote={data.title}>
        <Reddit className='h-6 w-6 cursor-pointer' />
      </RedditShareButton>
      <TwitterShareButton url={shareUrl} quote={data.title}>
        <Twitter className='h-6 w-6 cursor-pointer' />
      </TwitterShareButton>
      <FacebookShareButton url={shareUrl} quote={data.title}>
        <FB className='h-6 w-6 cursor-pointer' />
      </FacebookShareButton>
      {copyLink && (
        <span className='absolute -top-5 right-0 rounded bg-black p-1 text-sm text-white'>
          Link Copied!
        </span>
      )}
      <CopyShare
        onClick={() => handleCopy(shareUrl)}
        className='h-6 w-6 cursor-pointer'
      />
    </section>
  );
}
