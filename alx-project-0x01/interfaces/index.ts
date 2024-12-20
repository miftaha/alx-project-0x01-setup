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
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

export interface PostData {
  userId: number
  id?: number
  title: string
  body: string
}

export interface PostModalProps {
  onClose: () => void
  onSubmit: (post: PostData) => void
}
