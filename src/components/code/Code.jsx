import { useEffect, useState } from 'react'
import './code.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaCode } from 'react-icons/fa6'
import { MdContentPaste, MdFileCopy } from "react-icons/md";

function Code({ children }) {
  const [copied, setCopied] = useState(false);

  // Reset copied state after 1 second
  useEffect(() => {
    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }, [copied])

  return (
    <div className='code'>
      <div className='code-header'>
        <FaCode className='text-light code-icon' />
        <CopyToClipboard text={children} onCopy={() => setCopied(true)}>
          <button className='code-copy'>
            {copied ? <MdContentPaste className='text-light' /> : <MdFileCopy className='text-light' />}
          </button>
        </CopyToClipboard>
      </div>
      <SyntaxHighlighter language="javascript" style={materialDark}>{children}</SyntaxHighlighter>
    </div>
  )
}

export default Code