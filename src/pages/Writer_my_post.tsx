import Logo from '@/images/logo.svg'
import { Avatar, AvatarFallback} from "@/components/ui/avatar"
import Adv from '@/images/adv.png'
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Button } from '@/components/ui/button'
import Post from '@/components/Post'
import { Upload, Trash2, CircleX } from 'lucide-react'
import React, { useRef, useState } from 'react'
import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar'
import { client } from '@/components/api'
import MyInput from '@/components/MyInput'

const Writer_my_post = () => {

    const [posts, setPosts] = useState([]);
    const [draftPosts, setDraftPosts] = useState([]);
    const [mail, SetMail] = useState('')
    const [btnState, SetBtnState] = useState('hidden')
    const [btnsState, SetBtnsState] = useState('')
    const [postListState, SetPostListState] = useState('posts')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    React.useEffect(() => {
        setPosts([])
        setDraftPosts([])
        client.get(`${client.defaults.baseURL}/users/me`)
        .then(response => {
            SetMail(response.data.email)
            if (response.data.role === 'Reader'){
                menuBarRef.current.style.display = "none";
                createBtnRef.current.style.display = "none";
                SetBtnsState('hidden');
            }
        })
        client.get(`${client.defaults.baseURL}/posts`)
        .then(response => {
            response.data.forEach(num => {
                if (num.status === "draft") {
                    setDraftPosts(prev => ([...prev, num]))
                }
                else {
                    setPosts(prev => ([...prev, num]))
                }
            })
        })
    }, [])

    function makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
            counter += 1;
        }
        return result;
    }

    const btnRef = useRef();
    const popupRef = useRef();
    const placeRef = useRef();
    const menuBarRef = useRef();
    const createBtnRef = useRef();

    const btnChange = () => {
        btnRef.current.style.display = "none";
        placeRef.current.style.display = "flex";
    }

    const WinClose = (e) => {
        btnRef.current.style.display = "flex";
        placeRef.current.style.display = "none";
        popupRef.current.style.display = "none";
        if (e.currentTarget.name === undefined) return
        const key = makeid(20)
        client.post(`${client.defaults.baseURL}/posts`,{
            title: title,
            content: content,
            idempotencyKey: key
        })
        .then(response => {
            if (e.currentTarget.name === "draft"){
                setDraftPosts(prev => ([...prev, response.data]))
            }
            else {
                setPosts(prev => ([...prev, response.data]))
            }
        })
        .catch(error => {
            console.log(error)
        })
    }

    const WinOpen = () => {
        popupRef.current.style.display = "flex";
    }

    const postsBtn = () => {
        SetBtnState('hidden')
        createBtnRef.current.style.display = "block"
        SetPostListState('posts')
    }
    const draftBtn = () => {
        SetBtnState('')
        createBtnRef.current.style.display = "none"
        SetPostListState('draftPosts')
    }

    // const tmp = () => {
        
    // }

    return(
        <div className='w-full h-full bg-slate-50'>
            <header className='flex justify-between items-center h-20 w-3/4 m-auto mb-12'>
                <img src={Logo} alt="Logo"></img>
                <div className='flex items-center'>
                    <p className='font-normal leading-6 text-sm text-baseColor mr-3'>{mail}</p>
                    <Avatar><AvatarFallback className='font-customFont'>CN</AvatarFallback></Avatar>
                </div>
            </header>
            {/* <Button onClick={tmp}>asdf</Button> */}
            <section className='w-3/4 m-auto flex flex-row justify-center space-x-8'>
                <SidebarProvider className='w-52 sticky top-0 h-screen'>
                    <AppSidebar />
                </SidebarProvider>
                <div className='space-y-6'>
                    <Menubar ref={menuBarRef} className='w-[206px] h-10 rounded-[6px]'>
                        <MenubarMenu>
                            <MenubarTrigger onClick={postsBtn} className='cursor-pointer font-customFont text-sm font-medium py-[6px] w-[100px] h-8 ml-0 hover:bg-zinc-100 rounded-[6px] text-center'>
                                Мои посты
                            </MenubarTrigger>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger onClick={draftBtn} className='cursor-pointer font-customFont text-sm font-medium py-[6px] w-[92px] h-8 ml-0 hover:bg-zinc-100 rounded-[6px] text-center'>
                                Черновики
                            </MenubarTrigger>
                        </MenubarMenu>
                    </Menubar>
                    <Button ref={createBtnRef} className='w-[768px] h-10  bg-baseColor font-customFont text-sm leading-6 font-medium rounded-[6px]'
                        onClick={WinOpen}>
                        Создать пост
                    </Button>
                    {postListState === 'posts' ? (
                        posts?.map(post => 
                            <Post post={post} btn={`${btnState}`} btns={`${btnsState}`}/>
                        )
                    ) : (
                        draftPosts?.map(post => 
                            <Post post={post} btn={`${btnState}`} btns={`${btnsState}`}/>
                        )
                    )}
                </div>
                <img className='h-36 ml-[32px] mt-[72px]' src={Adv} alt='Advert'></img>
            </section>
            <div ref={popupRef} className='bg-[#00000052] opacity-100 fixed min-w-full min-h-full z-10 top-0 left-0 hidden'>
                <div className='relative text-baseColor w-[544px] bg-white m-auto rounded-xl'>
                    <div className='absolute top-4 left-[512px] cursor-pointer hover:text-red-500' onClick={WinClose}><CircleX/></div>
                    <h4 className='font-customFont text-xl font-semibold tracking-[-0.005em] ml-4 my-4'>Создать пост</h4>
                    <MyInput label={"Заголовок"} className='mt-[6px] rounded-[6px] w-[512px]' type='text' placeholder='Введите заголовок' onChange={e => setTitle(e.currentTarget.value)}></MyInput>
                    <Button ref={btnRef} onClick={btnChange} id='add' className='ml-4 mt-4 rounded-[6px] font-customFont font-medium text-sm leading-6'><Upload/>
                        Добавить картинку
                    </Button>
                    <div ref={placeRef} className='hidden w-[512px] h-[288px] rounded-[6px] bg-slate-300 ml-4 mt-4 hover:bg-[#00000052] group'>
                        <Trash2 className='text-white ml-[472px] mt-4 hidden group-hover:flex'/>
                    </div>
                    <MyInput label={"Контент"} className='rounded-[6px] w-[512px] h-20' type='text' placeholder='Введите контент' onChange={e => setContent(e.currentTarget.value)}></MyInput>
                    <div className='ml-4 mt-4 pb-4'>
                        <Button className="bg-baseColor rounded-[6px] font-customFont mr-2" name='publish' onClick={WinClose}>Опубликовать пост</Button>
                        <Button className="bg-slate-100 rounded-[6px] font-customFont text-baseColor hover:bg-slate-200" name='draft' onClick={WinClose}>Отправить в черновики</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Writer_my_post;