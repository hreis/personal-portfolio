"use client"

import { ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { useOpenFiles } from '@/hooks/useOpenFiles';

interface FileProps extends LinkProps {
  children: ReactNode[];
  disabled?: boolean;
}

export function File({ disabled = false, ...props }: FileProps) {
  const { markFileAsOpen } = useOpenFiles();
  const pathName = usePathname();

  const isCurrentActive = pathName === props.href;

  const handleClick = (e: any) => {
    if (disabled) {
      e.preventDefault(); // Prevent navigation if disabled
      return; // Early return to skip any further action
    }
    markFileAsOpen(props.href.toString());
  };

  return (
    <Link
      data-active={isCurrentActive}
      onClick={handleClick}
      aria-disabled={disabled}
      className={`flex text-sm items-center gap-2 py-1 px-4 pl-10 hover:bg-[#2a273f] hover:text-[#E0DEF2] data-[active=true]:bg-[#2a273f] data-[active=true]:text-[#E0DEF2] ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      {...props}
    />
  );
}
