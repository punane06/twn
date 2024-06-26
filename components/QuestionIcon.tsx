import React from 'react'

const QuestionIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 24 24"   fill="currentColor" {...props} xmlns="http://www.w3.org/2000/svg">
        <path className="question" fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM11 15C11 13.1787 11.9421 12.4566 12.7704 11.8217C13.4202 11.3236 14 10.8792 14 10C14 8.9 13.1 8 12 8C10.9 8 10 8.9 10 10H8C8 7.79 9.79 6 12 6C14.21 6 16 7.79 16 10C16 11.2829 15.21 11.9733 14.4408 12.6455C13.711 13.2833 13 13.9046 13 15H11ZM13 16.5V18.5H11V16.5H13Z"/>
    </svg>
  )
}

export default QuestionIcon