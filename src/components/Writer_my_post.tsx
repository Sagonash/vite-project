import Logo from '@/images/logo.svg'
import Adv from '@/images/adv.png'
import { Avatar, AvatarFallback} from "@/components/ui/avatar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar'
import { Button } from '@/components/ui/button'
import Post_write_create from './Post_write_create'
import { Link } from 'react-router-dom'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Upload } from 'lucide-react'

const Writer_my_post = () => {

    const WinClose = () => {
        document.getElementById('parent_popup').style.display='none';
    }

    const WinOpen = () => {
        document.getElementById('parent_popup').style.display='flex';
    }

    return(
        <div className='w-full h-full'>
            <header className='flex justify-between items-center h-20 w-3/4 m-auto'>
                <img src={Logo} alt="Logo"></img>
                <div className='flex items-center'>
                    <p className='font-normal leading-6 text-sm text-baseColor mr-3'>pochta@gmail.com</p>
                    <Avatar><AvatarFallback className='font-customFont'>CN</AvatarFallback></Avatar>
                </div>
            </header>
            <section className='w-3/4 m-auto flex flex-row justify-between'>
                <SidebarProvider className='w-52 sticky top-0 h-[872px]'>
                    <AppSidebar />
                </SidebarProvider>
                <div className='space-y-[24px]'>
                <Menubar className='w-[307px] h-10 rounded'>
                        <MenubarMenu>
                            <MenubarTrigger className='font-customFont text-sm font-medium py-[6px] w-[96px] h-8 ml-0'>
                                <Link to="/Writer_post">Все посты</Link>
                            </MenubarTrigger>
                            <MenubarTrigger className='font-customFont text-sm font-medium py-[6px] w-[100px] h-8 ml-0'>
                                <Link to="/Writer_my_post">Мои посты</Link>
                            </MenubarTrigger>
                            <MenubarTrigger className='font-customFont text-sm font-medium py-[6px] w-[92px] h-8 ml-0'>
                                <Link to="/Writer_draft">Черновики</Link>
                            </MenubarTrigger>
                        </MenubarMenu>
                    </Menubar>
                    <Button className='w-[768px] h-10  bg-baseColor font-customFont text-sm leading-6 font-medium rounded'
                        onClick={WinOpen}>
                        Создать пост
                    </Button>
                    <Post_write_create/>
                </div>
                <img className='h-36' src={Adv} alt='Advert'></img>
            </section>
            <div id="parent_popup" className='bg-[#00000052] opacity-90 fixed min-w-full min-h-full z-10 top-0 left-0 hidden'>
                <div id="popup" className='relative text-baseColor w-[544px] h-[370px] bg-white m-auto rounded'>
                    <h4 className='font-customFont text-xl font-semibold tracking-[-0.005em] ml-4 mt-4'>Создать пост</h4>
                    <Label className='font-customFont font-medium text-sm ml-4 mt-4'>Заголовок</Label>
                    <Input className='ml-4 mt-[6px] rounded w-[512px]' type='text' placeholder='Введите заголовок'></Input>
                    <Button id='add' className='ml-4 mt-4 rounded font-customFont font-medium text-sm leading-6'><Upload/>
                        Добавить картинку
                    </Button>
                    <Label className='font-customFont font-medium text-sm ml-4 mt-4 block'>Контент</Label>
                    <Input className='ml-4 mt-[6px] rounded w-[512px] h-20' type='text' placeholder='Введите контент'></Input>
                    <div className='ml-4 mt-4'>
                        <Button className="bg-baseColor rounded font-customFont mr-2" onClick={WinClose}>Опубликовать пост</Button>
                        <Button className="bg-slate-100 rounded font-customFont text-baseColor hover:bg-slate-200" onClick={WinClose}>Отправить в черновики</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Writer_my_post;