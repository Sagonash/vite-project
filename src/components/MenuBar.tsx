import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar'
import { Link } from 'react-router-dom'

const MenuBar = () => {
    return(
        <Menubar className='w-[307px] h-10 rounded-[6px]'>
            <MenubarMenu>
                <Link to="/Writer_post" className='font-customFont text-sm font-medium py-[6px] w-[96px] h-8 ml-0 hover:bg-zinc-100 rounded-[6px] text-center'>
                    Все посты
                </Link>
            </MenubarMenu>
            <MenubarMenu>
                <Link to="/Writer_my_post" className='font-customFont text-sm font-medium py-[6px] w-[100px] h-8 ml-0 hover:bg-zinc-100 rounded-[6px] text-center'>
                    Мои посты
                </Link>
            </MenubarMenu>
            <MenubarMenu>
                <Link to="/Writer_draft" className='font-customFont text-sm font-medium py-[6px] w-[92px] h-8 ml-0 hover:bg-zinc-100 rounded-[6px] text-center'>
                    Черновики
                </Link>
            </MenubarMenu>
        </Menubar>
    )
}

export default MenuBar