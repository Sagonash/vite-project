import { Newspaper, Phone, LogOut, } from "lucide-react"
 
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function AppSidebar() {
    return (
        <Sidebar collapsible="none" className="h-screen sticky">
          <SidebarContent className="sticky">
            <SidebarGroup className="p-0">
              <SidebarGroupContent>
                <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton className="hover:text-slate-900 text-slate-400" asChild>
                        <a href="#">
                          <Newspaper/>
                          <span className="font-customFont">Посты</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton className="hover:text-slate-900 text-slate-400" asChild>
                        <a href="#">
                          <Phone/>
                          <span className="font-customFont">Контакты</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter className="sticky p-0">
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton className="hover:text-slate-900 text-slate-400" asChild>
                        <a href='/Login'>
                            <LogOut></LogOut>
                            <span className="font-customFont">Выйти</span>
                        </a>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
      )
}