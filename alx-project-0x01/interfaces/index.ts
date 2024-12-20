// const modalProp = [
//   'onClose: () => void;',
//   'onSubmit: (post: PostData) => void;',
// ]

// const postProps = [
//   'userId: number',
//   'title: string',
//   'body: string',
//   'id: number',
// ]

// const userDataProps = [
//   'id: number;',
//   'username: string;',
//   'street: string;',
//   'catchPhrase: string;',
// ]

// const interfaceData = ['userId: number;', 'title: string;', 'body: string;']

export interface PostData {
  id?: number
  userId: number
  title: string
  body: string
}

export interface PostProps {
  userId: number
  title: string
  body: string
  id: number
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

export interface PostModalProps {
  onClose: () => void
  onSubmit: (post: PostData) => void
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
