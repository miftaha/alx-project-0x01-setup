import Header from '@/components/layout/Header'
import UserCard from '@/components/common/UserCard'
import { UserProps } from '@/interfaces'
import { UserData } from '@/interfaces'
import UserModal from '@/components/common/UserModal'
import { useState } from 'react'

const Users: React.FC<UserProps[]> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [post, setPost] = useState<UserData | null>(null)

  const handleAddPost = (newPost: UserData) => {
    setPost({ ...newPost, id: posts.length + 1 })
  }
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className=" text-2xl font-semibold">User Content</h1>
          <button
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
            onClick={() => setModalOpen(true)}
          >
            Add User
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2 ">
          {posts.map(
            (
              {
                name,
                username,
                email,
                address,
                phone,
                website,
                company,
                id,
              }: UserProps,
              key: number
            ) => (
              <UserCard
                name={name}
                username={username}
                email={email}
                id={id}
                key={key}
                address={address}
                phone={phone}
                company={company}
                website={website}
              />
            )
          )}
        </div>
      </main>

      {isModalOpen && (
        <UserModal
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddPost}
        />
      )}
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const posts = await response.json()

  return {
    props: {
      posts,
    },
  }
}

export default Users
// ['export default Users;']
