import Link from 'next/link'
import React from 'react'
// import Link from 'next/link'

const Navbar = () => {
    const links = [
        {href: '/about' , label:"About" },
        {href: '/projects' , label:"projects"},
        {href: '/contact' , label:"Contact"},
    ]
 return (
    <nav className="flex gap-6 items-center justify-center p-4 border">
      {links.map((l) => (
        <Link key={l.href} href={l.href}>
          <div className="border px-4 py-2">{l.label}</div>
        </Link>
      ))}
    </nav>
  )
}

export default Navbar