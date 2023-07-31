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
    <section aria-label='Social Share Buttons'>
      <EmailShareButton
        subject={data.title}
        body='I just found this super engaging article on Honeypot Blog!'
      >
        <Mail />
      </EmailShareButton>
      <RedditShareButton url={shareUrl} quote={data.title}>
        <Reddit />
      </RedditShareButton>
      <TwitterShareButton url={shareUrl} quote={data.title}>
        <Twitter />
      </TwitterShareButton>
      <FacebookShareButton url={shareUrl} quote={data.title}>
        <FB />
      </FacebookShareButton>
      <CopyShare onClick={() => handleCopy(shareUrl)} />
    </section>
  );
}
