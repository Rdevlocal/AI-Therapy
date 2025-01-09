import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'
import { Roboto_Mono } from 'next/font/google'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import { BatteryCharging } from 'lucide-react'
import { ModeToggle } from './mode-toggle'
import Container from './container'

const roboto = Roboto_Mono({ subsets: ['latin'], weight: '700' })

const Navbar = () => {
  return (
    <nav className='py-2 border-b border-b-primary/10 fixed w-full'>
      <Container>
        <div className='flex justify-between items-center gap-2'>
          <Link href='/'>
            <h1
              className={cn(
                'font-bold text-2xl text-primary/80',
                roboto.className
              )}
            >
              AI Therapist
            </h1>
          </Link>
          <div className='flex items-center gap-2'>
            <ModeToggle />
            <UserButton afterSignOutUrl='/' />
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
