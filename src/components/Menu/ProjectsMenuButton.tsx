"use client"

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import {
  GitFork,
  Github,
  Instagram,
  Linkedin,
  Rocket,
  Twitter,
  User,
  Youtube
} from 'lucide-react'
import { MenuButton } from './MenuButton'

const projectLinks = [
  {
    name: 'github',
    url: 'https://github.com/hreis',
    icon: <Github size={14} />
  },
  {
    name: 'instagram',
    url: 'https://instagram.com/eihugoreis',
    icon: <Instagram size={14} />
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/dev-carvalho-h/',
    icon: <Linkedin size={14} />
  },
  {
    name: 'twitter',
    icon: <Twitter size={14} />
  },
  {
    name: 'youtube',
    icon: <Youtube size={14} />
  },
]

export function ProjectsMenuButton() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger aria-label="Projetos">
        <MenuButton icon={GitFork} />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content side='right' className="bg-[#2a273f] z-10 flex flex-col rounded-lg overflow-auto">
          {projectLinks.map(projectItem => {
            return (
              <DropdownMenu.Item key={projectItem.url} className="outline-none">
                <a
                  href={projectItem.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#E0DEF2] flex items-center gap-2 text-sm px-4 py-3 hover:bg-[#454066]"
                >
                  {projectItem.icon}
                  {projectItem.name}
                </a>
              </DropdownMenu.Item>
            )
          })}
          <DropdownMenu.Arrow className="fill-[#2a273f]" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}