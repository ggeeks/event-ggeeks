import React, { Fragment } from 'react'
import Faq from 'react-faq-component'

export default function FAQ() {
  return (
    <div className='h-[60vh]'>
<div className="white-glassmorphism kdam  pl-3 pb-2 text-left">
      <Fragment>
        <Faq
          data={data}
          styles={{
            bgColor: 'transparent',
            titleTextColor: '#fc9803',
            titleTextSize: '50px',
            rowTitleColor: '#fff',
            rowTitleTextSize: 'Large',
            rowContentColor: '#d8eff2',
            rowContentPaddingRight: '0',
            rowContentTextSize: '16px',
            rowContentTextFontFamily: 'para-1',
            rowContentPaddingTop: '10px',
            rowContentPaddingBottom: '10px',
            rowContentPaddingLeft: '0px',
            rowContentPaddingRight: '10px',
            arrowColor: 'white',
          }}
          config={{
            animate: true,
          }}
        />
      </Fragment>
    </div>
    </div>
    
  )
}

const data = {
  title: 'FAQ',
  rows: [
    {
      title: 'How do I Register for the Event?',
      content: 'Click on the Register Button on the top of this page to Register for Gamer Days 2.0. ',
    },
    {
      title: 'Do I need to pay for the registration of the Event?',
      content:
        'No, It is free for everyone.',
    },
    {
      title: 'What is maximum number of games I can register for?',
      content:
        'You can Register for as many games as you want.',
    },
    
    {
      title: 'Have more questions?',
      content: "Feel free to contact us on our social media platforms or through the 'Contact Us' given above.",
    },
  ],
}
