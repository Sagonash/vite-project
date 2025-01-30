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

  const clear = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }

    return (
        <Sidebar collapsible="none" className="h-screen sticky bg-slate-50">
          <SidebarContent className="sticky">
            <SidebarGroup className="p-0">
              <SidebarGroupContent>
                <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton className="hover:text-slate-900 text-slate-400 rounded-[8px]" asChild>
                        <a href="#">
                          <Newspaper/>
                          <span className="font-customFont">Посты</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton className="hover:text-slate-900 text-slate-400 rounded-[8px]" asChild>
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
          <SidebarFooter className="fixed bottom-0 w-52">
            <SidebarGroup className="p-0">
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                      <SidebarMenuButton onClick={clear} className="hover:text-slate-900 text-slate-400 rounded-[8px]" asChild>
                          <a href='/Registration'>
                              <LogOut></LogOut>
                              <span className="font-customFont">Выйти</span>
                          </a>
                      </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarFooter>
        </Sidebar>
      )
}