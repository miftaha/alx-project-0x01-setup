import { UserData, UserModalProps } from '@/interfaces'
import { useState } from 'react'

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    id: 1,
    username: '',
    name: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      go: {
        lat: '',
        lng: '',
      },
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: '',
    },
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target

    if (name.includes('.')) {
      const keys = name.split('.')
      setUser((prevUser) => {
        const parent = prevUser[keys[0] as keyof typeof prevUser]

        // Ensure `parent` is treated as an object
        if (typeof parent === 'object' && parent !== null) {
          return {
            ...prevUser,
            [keys[0]]: {
              ...parent,
              [keys[1]]: value,
            },
          }
        }

        return prevUser // Fallback if parent is not an object
      })
    } else {
      setUser((prevUser) => ({ ...prevUser, [name]: value }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(user)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center overflow-y-auto">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md max-h-screen overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
        <form onSubmit={handleSubmit}>
          {/* ID */}
          <div className="mb-4">
            <label
              htmlFor="id"
              className="block text-gray-700 font-medium mb-2"
            >
              ID
            </label>
            <input
              type="number"
              id="id"
              name="id"
              value={user.id}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Username */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-medium mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={user.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Name */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Address */}
          <div className="mb-4">
            <h3 className="font-medium text-gray-700 mb-2">Address</h3>
            <input
              type="text"
              name="address.street"
              value={user.address.street}
              onChange={handleChange}
              placeholder="Street"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
            />
            <input
              type="text"
              name="address.suite"
              value={user.address.suite}
              onChange={handleChange}
              placeholder="Suite"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
            />
            <input
              type="text"
              name="address.city"
              value={user.address.city}
              onChange={handleChange}
              placeholder="City"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
            />
            <input
              type="text"
              name="address.zipcode"
              value={user.address.zipcode}
              onChange={handleChange}
              placeholder="Zipcode"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Geo */}
          <div className="mb-4">
            <h3 className="font-medium text-gray-700 mb-2">Geo</h3>
            <input
              type="text"
              name="address.geo.lat"
              value={user.address.go.lat}
              onChange={handleChange}
              placeholder="Latitude"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
            />
            <input
              type="text"
              name="address.geo.lng"
              value={user.address.go.lng}
              onChange={handleChange}
              placeholder="Longitude"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Phone */}
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-700 font-medium mb-2"
            >
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Website */}
          <div className="mb-4">
            <label
              htmlFor="website"
              className="block text-gray-700 font-medium mb-2"
            >
              Website
            </label>
            <input
              type="text"
              id="website"
              name="website"
              value={user.website}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Company */}
          <div className="mb-4">
            <h3 className="font-medium text-gray-700 mb-2">Company</h3>
            <input
              type="text"
              name="company.name"
              value={user.company.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
            />
            <input
              type="text"
              name="company.catchPhrase"
              value={user.company.catchPhrase}
              onChange={handleChange}
              placeholder="CatchPhrase"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
            />
            <input
              type="text"
              name="company.bs"
              value={user.company.bs}
              onChange={handleChange}
              placeholder="BS"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Buttons */}
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserModal
