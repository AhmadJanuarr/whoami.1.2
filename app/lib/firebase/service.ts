import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore"
import { app } from "./init"
import { AbilityType } from "@/types/ability"
import { ProjectsType } from "@/types/projects"
import { SoftwareType } from "@/types/software"

const firestore = getFirestore(app)

export async function retriveData(collectionName: string) {
  const snapshot = await getDocs(collection(firestore, collectionName))

  const ability: AbilityType[] = []
  const projects: ProjectsType[] = []
  const softwareApp: SoftwareType[] = []

  snapshot.docs.forEach((doc) => {
    const data = doc.data()

    // Map Ability
    if (data.name && data.url && data.icon && data.color) {
      ability.push({
        id: doc.id,
        name: data.name,
        url: data.url,
        icon: data.icon,
        color: data.color,
      } as AbilityType)
    }

    // Map Projects
    if (data.title && data.description && data.star && data.date && data.image && data.color && data.status && data.technologies) {
      projects.push({
        id: doc.id,
        title: data.title,
        description: data.description,
        star: data.star,
        date: data.date,
        image: data.image,
        color: data.color,
        status: data.status,
        technologies: data.technologies,
      } as ProjectsType)
    }

    // Map Software
    if (data.name && data.icon && data.color && data.url) {
      softwareApp.push({
        id: doc.id,
        name: data.name,
        icon: data.icon,
        color: data.color,
        url: data.url,
      } as SoftwareType)
    }
  })

  return { ability, projects, softwareApp }
}

export async function retriveDataByName(collectionName: string, title: string) {
  try {
    const collectionRef = collection(firestore, collectionName)
    const q = query(collectionRef, where("title", "==", title))
    const querySnapshot = await getDocs(q)

    if (!querySnapshot.empty) {
      const data = querySnapshot.docs.map((doc) => doc.data())
      return data
    } else {
      return null
    }
  } catch (error) {
    console.error("Error fetching document:", error)
    throw error
  }
}
