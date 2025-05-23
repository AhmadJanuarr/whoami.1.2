export interface ProjectsType {
    id: string
    title: string
    date: string
    color: string
    description: string
    demo: string
    github: string
    star: number
    image: string
    status?: string
    fullScreen?: string
    shots?: string[]
    technologies?: TechnologiesTypes[]
}

interface TechnologiesTypes {
    name: string
    icon: string
}
