"use client";

import { useRef, useState } from "react";

/** The contact address; clicking it copies it. Falls back to selecting the text. */
export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const mail = useRef<HTMLButtonElement>(null);

  const copy = () => {
    const fallback = () => {
      if (!mail.current) return;
      const range = document.createRange();
      range.selectNodeContents(mail.current);
      const selection = getSelection();
      selection?.removeAllRanges();
      selection?.addRange(range);
    };
    try {
      navigator.clipboard.writeText(email).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      }, fallback);
    } catch {
      fallback();
    }
  };

  return (
    <button
      ref={mail}
      type='button'
      onClick={copy}
      title='Copy address'
      className='ul-grow inline-flex items-baseline gap-3 bg-transparent p-0 text-[16px] font-semibold text-white'
    >
      <span>{email}</span>
      <span aria-live='polite' className='mono text-[10px] text-blue-mist'>
        {copied ? "Copied ✓" : "Click to copy"}
      </span>
    </button>
  );
}
