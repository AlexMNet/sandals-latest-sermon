import Link from 'next/link'

export default function Footer() {
  return (
    <div className="absolute bottom-0 flex h-16 w-full items-center justify-center overflow-hidden bg-black text-white">
      <p>Sandals Church &copy; {new Date().getFullYear()}</p>
    </div>
  )
}
