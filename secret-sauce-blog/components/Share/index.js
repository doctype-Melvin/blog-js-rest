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
      className='flex w-1/2 justify-around py-3'
      aria-label='Social Share Buttons'
    >
      <EmailShareButton
        subject={data.title}
        body='I just found this super engaging article on Honeypot Blog!'
      >
        <Mail className='h-6 w-6' />
      </EmailShareButton>
      <RedditShareButton url={shareUrl} quote={data.title}>
        <Reddit className='h-6 w-6' />
      </RedditShareButton>
      <TwitterShareButton url={shareUrl} quote={data.title}>
        <Twitter className='h-6 w-6' />
      </TwitterShareButton>
      <FacebookShareButton url={shareUrl} quote={data.title}>
        <FB className='h-6 w-6' />
      </FacebookShareButton>
      <CopyShare onClick={() => handleCopy(shareUrl)} className='h-6 w-6' />
    </section>
  );
}
