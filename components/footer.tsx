import { Card, Divider, Image } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='backdrop:blur-lg backdrop:saturate-150 bg-background/70 sticky bottom-0 px-10 pb-10 grid grid-cols-12'>
        <Card className='bg-transparent border-none shadow-none col-span-12 sm:col-span-5 items-center'>
            <Image src='/banjaara-star-logo.png' alt="Banjaara Logo" className="max-h-[170px] object-cover" />
            <div className="flex gap-4 items-center">
                <Link target='_blank' href="https://www.instagram.com/banjaara.ashoka?igsh=MWF0NGltZTJqNDRvOQ=="><Image src='/SocialMedia/instagram.svg' alt='Instagram Logo'></Image></Link>
                <Link target='_blank' href="https://twitter.com/BanjaaraAshoka"><Image src='/SocialMedia/twitterx.svg' alt='Twitter Logo'></Image></Link>
                <Link target='_blank' href="https://www.linkedin.com/company/banjaara-ashoka/about/"><Image src='/SocialMedia/linked-in.svg' alt='LinkedIn Logo'></Image></Link>
                <Link target='_blank' href="https://www.youtube.com/@banjaara-ashokauniversity6289/featured"><Image src='/SocialMedia/youtube.svg' alt='YouTube Logo'></Image></Link>
            </div>
        </Card>
        <Card className='bg-transparent border-none shadow-none col-span-1 items-center'>
        </Card>
        <Card className='pt-10 pr-8 bg-transparent border-none shadow-none col-span-12 sm:col-span-6'>
            <p className='font-bold pb-1'>Ashoka University:</p>
            <p className='pb-10 text-sm underline'><Link href="https://maps.app.goo.gl/TABtisqMhpMwJei17">Plot No. 2, Rajiv Gandhi Education City, National Capital Region P.O. Rai, Sonepat Haryana-131029 (India)</Link></p>
            <p className='font-bold pb-1'>Contact Us:</p>
            <p className='pb-2 text-sm'><span>EMAIL - <Link className='underline' target='_blank' href="https://mail.google.com/mail/?view=cm&fs=1&to=fest@ashoka.edu.in">fest@ashoka.edu.in</Link></span><span className='sm:pl-5 max-sm:hidden'>|</span><span className='max-sm:hidden sm:pl-5'>PHONE NO. - +91 98101 70090</span></p>
            <p className='sm:hidden text-sm'>PHONE NO. - +91 98101 70090</p>
        </Card>
    </div>
  )
}

export default Footer
