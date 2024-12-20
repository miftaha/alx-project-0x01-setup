export interface PostProps {
  userId: number
  title: string
  body: string
  id: number
}

export interface UserProps {
  id: number
  username: string
  name: string
  email: string
  address: address
  phone: string
  website: string
  company: company
}

export interface PostData {
  id?: number
  userId: number
  title: string
  body: string
}

export interface PostModalProps {
  onClose: () => void
  onSubmit: (post: PostData) => void
}

interface go {
  lat: string
  lng: string
}

interface address {
  street: string
  suite: string
  city: string
  zipcode: string
  go: go
}

interface company {
  name: string
  catchPhrase: string
  bs: string
}

export interface UserData {
  id: number
  username: string
  name: string
  email: string
  address: address
  phone: string
  website: string
  company: company
}

export interface UserModalProps {
  onSubmit: (post: UserData) => void
  onClose: () => void
}
