import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h3 className="font-bold text-2xl">
          <Link href="/">Daily Contents</Link>
        </h3>
        <nav>
          <ul className="flex space-x-6">
            <li className="hover:underline">
              <Link href="/posts">Posts</Link>
            </li>
            <li className="hover:underline">
              {/* public/assets/images components/common/Button.tsx
              components/common/PostCard.tsx components/layout/Header.tsx
              components/layout/Footer.tsx pages/posts/index.tsx
              pages/users/index.tsx */}
              <Link href="/users">Users</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
