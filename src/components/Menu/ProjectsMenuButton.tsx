"use client"

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import {
  GitFork,
  Github,
  Instagram,
  Linkedin,
  HeartPulse,
  ShoppingBag,
  Layers
} from 'lucide-react'
import { MenuButton } from './MenuButton'

const projectLinks = [
  {
    name: 'SurgoHealth',
    url: 'https://share.cleanshot.com/50lt69RW',
    icon: <HeartPulse size={14} />
  },
  {
    name: 'RFQ - Genesis',
    url: 'https://share.cleanshot.com/jx6gNXdZ',
    icon: <ShoppingBag size={14} />
  },
  {
    name: 'RTX - Genesis',
    url: 'https://share.cleanshot.com/34WDkXhV',
    icon: <Layers size={14} />
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