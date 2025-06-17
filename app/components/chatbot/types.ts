export type Message = {
  text: string
  isUser: boolean
  links?: {
    name: string
    url: string
  }[]
}

export type Template = {
  q: string
  a: string
  links?: {
    name: string
    url: string
  }[]
}
