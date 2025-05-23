import { PiYoutubeLogo, PiInstagramLogo, PiFacebookLogo, PiChatDots, PiGithubLogo, PiLinkedinLogo } from "react-icons/pi"
import { IconType } from "react-icons"

interface IconItem {
  id: number
  name: string
  src: IconType | string
  link: string
}

export const ICON_LIST: IconItem[] = [
  {
    id: 1,
    name: "youtube",
    src: PiYoutubeLogo,
    link: "https://www.youtube.com/@JOJO-dc3wm",
  },
  {
    id: 2,
    name: "instagram",
    src: PiInstagramLogo,
    link: "https://www.instagram.com/madds.ar",
  },
  {
    id: 3,
    name: "Facebook",
    src: PiFacebookLogo,
    link: "https://www.facebook.com/madds.ar",
  },
  {
    id: 4,
    name: "Gmail",
    src: PiChatDots,
    link: "https://mail.google.com/mail/u/0/#inbox",
  },
  {
    id: 5,
    name: "GitHub",
    src: PiGithubLogo,
    link: "https://github.com/AhmadJanuarr",
  },
  {
    id: 6,
    name: "Linkedin",
    src: PiLinkedinLogo,
    link: "https://www.linkedin.com/in/ahmad-januar-a96515221/",
  },
]

export const HARDWARE_LIST = [
  {
    name: "Notion",
    icon: "/assets/icons/notion.png",
    href: "https://www.notion.so/",
  },
  {
    name: "Figma",
    icon: "/assets/icons/figma.png",
    href: "https://www.figma.com/",
  },
  {
    name: "Visual Studio Code",
    icon: "/assets/icons/vscode.png",
    href: "https://code.visualstudio.com/",
  },
  {
    name: "Cursor",
    icon: "/assets/icons/cursor.png",
    href: "https://www.cursor.com/",
  },
  {
    name: "Postman",
    icon: "/assets/icons/postman.png",
    href: "https://www.postman.com/",
  },
  {
    name: "Supabase",
    icon: "/assets/icons/supabase.png",
    href: "https://supabase.com/",
  },
  {
    name: "Spotify",
    icon: "/assets/icons/spotify.png",
    href: "https://www.spotify.com/",
  },
  {
    name: "Google Chrome",
    icon: "/assets/icons/chrome.png",
    href: "https://www.google.com/chrome/",
  },
  {
    name: "Discord",
    icon: "/assets/icons/discord.png",
    href: "https://discord.com/",
  },
  {
    name: "Inkscape",
    icon: "/assets/icons/inkscape.png",
    href: "https://inkscape.org/",
  },
  {
    name: "Gimp",
    icon: "/assets/icons/gimp.png",
    href: "https://www.gimp.org/",
  },
  {
    name: "Android Studio",
    icon: "/assets/icons/android.png",
    href: "https://developer.android.com/",
  },
  {
    name: "Obsidian",
    icon: "/assets/icons/obsidian.png",
    href: "https://obsidian.md/",
  },
  {
    name: "Trello",
    icon: "/assets/icons/trello.png",
    href: "https://trello.com/",
  },
  {
    name: "Clockify",
    icon: "/assets/icons/clockify.png",
    href: "https://clockify.me/",
  },
  {
    name: "Docker",
    icon: "/assets/icons/docker.png",
    href: "https://www.docker.com/",
  },
]

export const HARDWARE_ITEMS = [
  {
    title: "Notebook HP 240 G7",
    description: "8 Core CPU, Intel i5-8256U @ 3.90 GHZ, 16GB Memory, 1TB HDD 500SSD Storage",
    link: "https://support.hp.com/id-en/document/c062650",
  },
  {
    title: "OS Specification",
    description: "Fedora Linux 42 (KDE Plasma Desktop Edition), KDE Plasma 6.3.5",
    link: "https://fedoraproject.org/",
  },
  {
    title: "Peripherals",
    description: "Logitech MX Master 3, Royal Kludge R65 Keyboard, Benq24",
    link: "#",
  },
  {
    title: "Audio Setup",
    description: "Logitech Z120, Blue Yeti USB Microphone",
    link: "#",
  },
  {
    title: "Mobile Devices",
    description: "Samsung Galaxy A16 5G 256GB",
    link: "#",
  },
  {
    title: "Backup Setup",
    description: "2TB External SSD, Cloud Storage (Google Drive, Dropbox)",
    link: "#",
  },
]

export const SKILL_LIST = [
  {
    name: "Visual Studio Code",
    icon: "/assets/icons/vscode.png",
    href: "https://code.visualstudio.com/",
  },
  {
    name: "HTML",
    icon: "/assets/icons/html.png",
    href: "https://www.w3schools.com/html/",
  },
  {
    name: "CSS",
    icon: "/assets/icons/css.png",
    href: "https://www.w3schools.com/css/",
  },
  {
    name: "JavaScript",
    icon: "/assets/icons/js.png",
    href: "https://www.javascript.com/",
  },
  {
    name: "TypeScript",
    icon: "/assets/icons/typescript.png",
    href: "https://www.typescriptlang.org/",
  },
  {
    name: "React",
    icon: "/assets/icons/reactjs.png",
    href: "https://react.dev/",
  },
  {
    name: "Next.js",
    icon: "/assets/icons/nextjs.png",
    href: "https://nextjs.org/",
  },
  {
    name: "Tailwind CSS",
    icon: "/assets/icons/tailwindcss.png",
    href: "https://tailwindcss.com/",
  },
  {
    name: "GitHub",
    icon: "/assets/icons/github.png",
    href: "https://github.com/",
  },
  {
    name: "Firebase",
    icon: "/assets/icons/firebase.png",
    href: "https://firebase.google.com/",
  },
  {
    name: "Supabase",
    icon: "/assets/icons/supabase.png",
    href: "https://supabase.com/",
  },
  {
    name: "Node.js",
    icon: "/assets/icons/node.png",
    href: "https://nodejs.org/",
  },
  {
    name: "MongoDB",
    icon: "/assets/icons/mongodb.png",
    href: "https://www.mongodb.com/",
  },
  {
    name: "PostgreSQL",
    icon: "/assets/icons/postgresql.png",
    href: "https://www.postgresql.org/",
  },
  {
    name: "PHP",
    icon: "/assets/icons/php.png",
    href: "https://www.php.net/",
  },
  {
    name: "Express.js",
    icon: "/assets/icons/express.png",
    href: "https://expressjs.com/",
  },
]
