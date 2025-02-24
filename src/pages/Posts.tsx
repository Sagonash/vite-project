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
import { Input } from '@/components/ui/input'

const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [draftPosts, setDraftPosts] = useState([]);
    const [mail, setMail] = useState('')
    const [btnState, setBtnState] = useState('hidden')
    const [btnsState, setBtnsState] = useState('')
    const [postListState, setPostListState] = useState('posts')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [titleRedact, setTitleRedact] = useState('')
    const [contentRedact, setContentRedact] = useState('')
    const [idRedact, setIdRedact] = useState('')
    const [imagesRedact, setImagesRedact] = useState([])

    React.useEffect(() => {
        client.get(`${client.defaults.baseURL}/users/me`)
        .then(response => {
            setMail(response.data.email)
            if (response.data.role === 'Reader'){
                menuBarRef.current.style.display = "none";
                createBtnRef.current.style.display = "none";
                setBtnsState('hidden');
            }
        })
        distribute_Posts()
    }, [])

    const distribute_Posts = () => {
        setPosts([])
        setDraftPosts([])
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
    }
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

    const popupRef = useRef();
    const menuBarRef = useRef();
    const createBtnRef = useRef();
    const popupRedactRef = useRef();

    const WinOpen = () => {
        popupRef.current.style.display = "flex";
    }

    const WinClose = (e) => {
        popupRef.current.style.display = "none";
        const name = e.currentTarget.name;
        if (name === undefined) return
        const key = makeid(20)
        client.post(`${client.defaults.baseURL}/posts`,{
            title: title,
            content: content,
            idempotencyKey: key
        })
        .then(response => {
            console.log(response)
            if (name === "publish"){
                client.patch(`${client.defaults.baseURL}/posts/${response.data.id}/status`,{
                    status: "published"
                })
                .then(function(){
                    setPosts(prev => ([...prev, response.data]))
                })
                .catch(errorStatus => {
                    console.log(errorStatus)
                })
            }
            else setDraftPosts(prev => ([...prev, response.data]))
        })
        .catch(error => {
            console.log(error)
        })
    }

    const postsBtn = () => {
        setBtnState('hidden')
        createBtnRef.current.style.display = "block"
        setPostListState('posts')
    }
    const draftBtn = () => {
        setBtnState('')
        createBtnRef.current.style.display = "none"
        setPostListState('draftPosts')
    }

    const addImage = (data) => {
        console.log(data)
        client.post(`${client.defaults.baseURL}/posts/${idRedact}/images`, {image: data}, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then(response => {
            console.log('addImage then')
            console.log(response)
        })
        .catch(error => {
            console.log('addImage catch')
            console.log(error)
        })
    }

    const WinRedactOpen = (id, title, content, images) => {
        popupRedactRef.current.style.display = "flex"
        document.getElementById('imgUpload').value = null
        setIdRedact(id)
        setTitleRedact(title)
        setContentRedact(content)
        setImagesRedact(images)
    }

    const WinRedactClose = (e) => {
        popupRedactRef.current.style.display = "none";
        const name = e.currentTarget.name;
        if (name === undefined) return;
        const fileUploader = document.getElementById('imgUpload');
        for (let curElem = 0; curElem < fileUploader?.files.length; curElem++) {
            console.log(fileUploader?.files[curElem]);
            addImage(fileUploader?.files[curElem])
        }
        client.put(`${client.defaults.baseURL}/posts/${idRedact}`, {
            title: titleRedact,
            content: contentRedact,
        })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
        setTimeout(distribute_Posts, 1000)
    }

    const deleteImage = (image, e) => {
        client.delete(`${client.defaults.baseURL}/posts/${idRedact}/images/${image.id}`)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
        setImagesRedact(currentState => currentState.filter(item => item.id !== image.id));
    }

    return(
        <div className='w-full h-full bg-slate-50'>
            <header className='flex justify-between items-center h-20 w-[1248px] m-auto mb-12'>
                <img src={Logo} alt="Logo"></img>
                <div className='flex items-center'>
                    <p className='font-normal leading-6 text-sm text-baseColor mr-3'>{mail}</p>
                    <Avatar><AvatarFallback className='font-customFont'>CN</AvatarFallback></Avatar>
                </div>
            </header>
            <section className='w-[1248px] m-auto flex flex-row justify-center space-x-8'>
                <SidebarProvider className='w-52 sticky top-0 h-screen'>
                    <AppSidebar />
                </SidebarProvider>
                <div className='space-y-6 w-[768px]'>
                    <Menubar ref={menuBarRef} className='w-[206px] h-10 rounded-[6px]'>
                        <MenubarMenu>
                            <MenubarTrigger onClick={postsBtn} className='cursor-pointer font-customFont text-sm font-medium py-[6px] w-[100px] h-8 ml-0 hover:bg-zinc-100 focus:bg-zinc-100 rounded-[6px] text-center'>
                                Мои посты
                            </MenubarTrigger>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger onClick={draftBtn} className='cursor-pointer font-customFont text-sm font-medium py-[6px] w-[92px] h-8 ml-0 hover:bg-zinc-100 focus:bg-zinc-100 rounded-[6px] text-center'>
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
                            <Post post={post} btn={`${btnState}`} btns={`${btnsState}`} redact={WinRedactOpen} close={WinRedactClose}/>
                        )
                    ) : (
                        draftPosts?.map(post => 
                            <Post post={post} btn={`${btnState}`} btns={`${btnsState}`} distribute={distribute_Posts} redact={WinRedactOpen} close={WinRedactClose}/>
                        )
                    )}
                </div>
                <img className='h-36 ml-[32px] mt-[72px]' src={Adv} alt='Advert'></img>
            </section>
            <div ref={popupRef} className='bg-[#00000052] opacity-100 fixed min-w-full min-h-full z-10 top-0 left-0 hidden overflow-scroll'>
                <div className='relative text-baseColor w-[544px] bg-white m-auto rounded-xl space-x-4'>
                    <div className='absolute top-4 left-[512px] cursor-pointer hover:text-red-500' onClick={WinClose}><CircleX/></div>
                    <h4 className='font-customFont text-xl font-semibold tracking-[-0.005em] ml-4 my-4'>Создать пост</h4>
                    <MyInput label={"Заголовок"} className='w-[512px] rounded-[6px]' type='text' placeholder='Введите заголовок' onChange={e => setTitle(e.currentTarget.value)}></MyInput>
                    <label for="image_file" className='my-4 ml-4 w-[180px] py-2 pl-2 rounded-[6px] font-customFont font-medium text-sm leading-6 flex bg-baseColor hover:bg-zinc-900/90 text-white cursor-pointer'><Upload/> Добавить картинку</label>
                    <Input className='hidden' type="file" accept=".jpg, .png, .jpeg" id='image_file' multiple></Input>
                    <MyInput label={"Контент"} className='w-[512px] rounded-[6px] h-20' type='text' placeholder='Введите контент' onChange={e => setContent(e.currentTarget.value)}></MyInput>
                    <div className='ml-4 mt-4 pb-4'>
                        <Button className="bg-baseColor rounded-[6px] font-customFont mr-2" name='publish' onClick={WinClose}>Опубликовать пост</Button>
                        <Button className="bg-slate-100 rounded-[6px] font-customFont text-baseColor hover:bg-slate-200" name='draft' onClick={WinClose}>Отправить в черновики</Button>
                    </div>
                </div>
            </div>
            <div ref={popupRedactRef} className='bg-[#00000052] opacity-100 fixed min-w-full min-h-full z-10 top-0 left-0 hidden'>
                <div className='overflow-y-auto m-auto max-h-screen'>
                    <div className='relative overflow-auto top-0 text-baseColor w-[544px] bg-white m-auto rounded-xl space-x-4'>
                        <div className='absolute top-4 left-[512px] cursor-pointer hover:text-red-500' onClick={WinRedactClose}><CircleX/></div>
                        <h4 className='font-customFont text-xl font-semibold tracking-[-0.005em] ml-4 my-4'>Редактировать</h4>
                        <MyInput label={"Заголовок"} className='rounded-[6px] w-[512px]' type='text' placeholder='Введите заголовок' value={`${titleRedact}`} onChange={e => setTitleRedact(e.currentTarget.value)}></MyInput>
                        {imagesRedact.map(image =>
                            <div className='flex'>
                                <img className='ml-4 mt-4' src={image.imageUrl} alt='asf'></img>
                                <Trash2 onClick={(e) => {deleteImage(image, e)}} className='absolute right-4 text-gray mt-4 hover:text-red-600 cursor-pointer'></Trash2>
                            </div>
                        )}
                        <label for="imgUpload" className='my-4 ml-4 w-[180px] py-2 pl-2 rounded-[6px] font-customFont font-medium text-sm leading-6 flex bg-baseColor hover:bg-zinc-900/90 text-white cursor-pointer'><Upload/> Добавить картинку</label>
                        <Input className='hidden' type="file" accept=".jpg, .png, .jpeg" id='imgUpload' multiple></Input>
                        <MyInput label={"Контент"} className='rounded-[6px] w-[512px] h-20' type='text' placeholder='Введите контент' value={`${contentRedact}`} onChange={e => setContentRedact(e.currentTarget.value)}></MyInput>
                        <div className='ml-4 mt-4 pb-4'>
                            <Button className="bg-baseColor rounded-[6px] font-customFont mr-2" name='change' onClick={WinRedactClose}>Принять изменения</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Posts;