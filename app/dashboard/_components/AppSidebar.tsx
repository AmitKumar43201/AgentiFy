'use client'
import React from 'react'
import { 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem, 
  SidebarProvider, 
  SidebarTrigger, 
  useSidebar 
} from '@/components/ui/sidebar'
import Image from 'next/image'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader, 
} from "@/components/ui/sidebar"
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const MenuOptions = [
    {name: 'Dashboard',url:'/dashboard', icon: '/dashboard.png'},
    {name: 'Data',url:'#', icon: '/database.png'},
    {name: 'Agent',url:'#', icon: '/ai.png'},
    {name: 'Profile',url:'#', icon: '/profile.png'}
  ]

function AppSidebar() {

  const {open} = useSidebar()
  const path = usePathname()

  return (
    <Sidebar collapsible='icon'>
      <SidebarHeader>
        <div className='flex gap-2 items-center' >
          <Image src={'/logo.svg'} alt='logo'width={35} height={35}/>
          {open && <h2 className='font-bold text-lg'>AgentiFy</h2>}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Appliction</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {MenuOptions.map((Menu,index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild size={open?"lg":'default'} isActive={path==Menu.url}>
                    <Link href={Menu.url} >
                    <Image src={Menu.icon} width={20} height={20} alt='logo'></Image>
                    <span>{Menu.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}

export default AppSidebar