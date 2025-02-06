import Logo from '@/images/logo.svg'
import { Avatar, AvatarFallback} from "@/components/ui/avatar"
import Adv from '@/images/adv.png'
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import Post_draft from '@/components/Post_draft'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Upload, Trash2, CircleX } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRef} from 'react'

const Writer_draft = () => {

    const btnRef = useRef();
    const bgRef = useRef();
    const placeRef = useRef();

    const btnChange = () => {
        btnRef.current.style.display = "none";
        placeRef.current.style.display = "flex";
        bgRef.current.style.height = "618px";
    }

    const WinClose = () => {
        btnRef.current.style.display = "flex";
        placeRef.current.style.display = "none";
        bgRef.current.style.height = "370px";
        document.getElementById('parent_popup').style.display='none';
    }

    return(
        <div className='bg-slate-50'>
            <header className='flex justify-between items-center h-20 w-3/4 m-auto mb-12'>
                <img src={Logo} alt="Logo"></img>
                <div className='flex items-center'>
                    <p className='font-normal leading-6 text-sm text-baseColor mr-3'>pochta@gmail.com</p>
                    <Avatar><AvatarFallback className='font-customFont'>CN</AvatarFallback></Avatar>
                </div>
            </header>
            <section className='w-3/4 m-auto flex flex-row justify-center space-x-8'>
                <SidebarProvider className='w-52 sticky top-0 h-screen'>
                    <AppSidebar />
                </SidebarProvider>
                <div className='space-y-6'>
                    <MenuBar/>
                    <Post_draft/>
                    <Post_draft/>
                </div>
                <img className='h-36 ml-[32px] mt-[72px]' src={Adv} alt='Advert'></img>
            </section>
            <div id="parent_popup" className='bg-[#00000052] opacity-100 fixed min-w-full min-h-full z-10 top-0 left-0 hidden'>
                <div ref={bgRef} className='relative text-baseColor w-[544px] h-[370px] bg-white m-auto rounded-xl'>
                    <div className='absolute top-4 left-[512px] cursor-pointer hover:text-red-500' onClick={WinClose}><CircleX/></div>
                    <h4 className='font-customFont text-xl font-semibold tracking-[-0.005em] ml-4 my-4'>Редактировать</h4>
                    <Label className='font-customFont font-medium text-sm ml-4'>Заголовок</Label>
                    <Input className='ml-4 mt-[6px] rounded-[6px] w-[512px]' type='text' placeholder='Введите заголовок'></Input>
                    <Button ref={btnRef} onClick={btnChange} id='add' className='ml-4 mt-4 rounded-[6px] font-customFont font-medium text-sm leading-6'><Upload/>
                        Добавить картинку
                    </Button>
                    <div ref={placeRef} className='hidden w-[512px] h-[288px] rounded-[6px] bg-slate-300 ml-4 mt-4 hover:bg-[#00000052] group'>
                        <Trash2 className='text-white ml-[472px] mt-4 hidden group-hover:flex'/>
                    </div>
                    <Label className='font-customFont font-medium text-sm ml-4 mt-4 block'>Контент</Label>
                    <Input className='ml-4 mt-[6px] rounded-[6px] w-[512px] h-20' type='text' placeholder='Введите контент'></Input>
                    <div className='ml-4 mt-4 space-x-2'>
                        <Button className="bg-baseColor rounded font-customFont" onClick={WinClose}>Опубликовать пост</Button>
                        <Button className="bg-slate-100 rounded font-customFont text-baseColor hover:bg-slate-200" onClick={WinClose}>Отправить в черновики</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Writer_draft;