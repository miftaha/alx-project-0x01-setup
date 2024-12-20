import { UserProps } from '@/interfaces'
const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  address,
  phone,

  company,
}) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg  hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <h2 className="text-lg font-bold mb-2">{name}</h2>
        <p className="text-sm text-gray-500 mb-4">@{username}</p>

        <div className="text-sm">
          <p className="font-semibold">Email:</p>
          <p>{email}</p>
        </div>

        <div className="text-sm mt-4">
          <p className="font-semibold">Address:</p>
          <p>
            {address.suite}, {address.street}, {address.city}, {address.zipcode}
          </p>
        </div>

        <div className="text-sm mt-4">
          <p className="font-semibold">Phone:</p>
          <p>{phone}</p>
        </div>

        <div className="text-sm mt-4">
          <p className="font-semibold">Company:</p>
          <p>{company.name}</p>
          <p className="italic">&quot;{company.catchPhrase}&quot;</p>
          <p>{company.bs}</p>
        </div>
      </div>
    </div>
  )
}
export default UserCard
