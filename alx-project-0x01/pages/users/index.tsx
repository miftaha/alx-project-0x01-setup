import Header from '@/components/layout/Header'
import UserCard from '@/components/common/UserCard'
import { UserProps } from '@/interfaces'

interface UsersPageProps {
  posts: UserProps[]
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  console.log(posts)
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className=" text-2xl font-semibold">User Content</h1>
          <button className="bg-blue-700 px-4 py-2 rounded-full text-white">
            Add User
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2 ">
          {posts?.map((post) => (
            <UserCard key={post.id} {...post} />
          ))}
        </div>
      </main>
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
