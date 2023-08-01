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

export default function Share({ data }) {
  const shareUrl = `http://localhost:3000/posts/${data.id}`;

  const handleCopy = async (url) => {
    await navigator.clipboard.writeText(url);
    // Set Timeout for clipboard modal message
  };

  return (
    <section
      // Set with for all other screen sizes
      className='flex justify-around py-3 sm:w-1/5 md:w-2/3'
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
      <CopyShare
        onClick={() => handleCopy(shareUrl)}
        className='h-6 w-6 cursor-pointer'
      />
    </section>
  );
}
