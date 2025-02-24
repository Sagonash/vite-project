import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label'
import MyInput from '@/components/MyInput'
import axios from 'axios';
import { client } from '@/components/api'
// import Posts from './Posts';

const Registration = () => {

    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [PasswordRepeat, setPasswordRepeat] = useState('')
    const [Role, setRole] = useState('reader')

    const handleClick = (e) => {
        e.preventDefault();
        const changeColorBlock = document.querySelectorAll('.tabs');
        for (let elem of changeColorBlock) {
            elem.style.backgroundColor = "#F1F5F9";
        }
        e.currentTarget.style.backgroundColor = "#FFFFFF";
        if (e.currentTarget.id === "reader"){
            setRole('reader')
        }
        else setRole('author')
    };

    React.useEffect(() => {
        client.get('https://cpt-stage-2.duckdns.org/api/users/me')
        .then(response => {
            window.location = '/Posts'
        })
        .catch(function(error){
            console.log(error);
        })
    }, [])

    const register = (e) => {
        e.preventDefault()
        if (Password !== PasswordRepeat) return;
        axios.post('https://cpt-stage-2.duckdns.org/api/auth/register',{
            email: Email,
            password: Password,
            role: Role
        })
        .then(function(response){
            localStorage.setItem("accessToken", response.data.accessToken);
            localStorage.setItem("refreshToken", response.data.refreshToken);
            window.location = '/Posts'
            // redirect(Posts)
        })
        .catch(function(error){
            console.log(error);
        })
    };

    return (
        <div className='flex min-h-screen flex-col justify-center items-center bg-slate-50'>
            <div className='bg-white w-[416px] h-[486px] rounded-xl space-y-4 space-x-4'>
                <h4 className="font-customFont text-slate-900 text-xl font-semibold mt-4 ml-4">Создать аккаунт</h4>
                <MyInput className='rounded-[6px]' label={"Почта"} placeholder={"Введите почту"} type={"email"} name={'Reg_mail'} onChange={e => setEmail(e.currentTarget.value)}/>
                <MyInput className='rounded-[6px]' label={"Пароль"} placeholder={"Введите пароль"} type={"password"} name={'Reg_password'} onChange={e => setPassword(e.currentTarget.value)}/>
                <MyInput className='rounded-[6px]' label={"Повторите пароль"} placeholder={"Повторите пароль"} type={"password"} name={'Reg_password_repeat'} 
                onChange={e => setPasswordRepeat(e.currentTarget.value)}/>
                <div className='space-y-[6px]'>
                    <Label className="block font-customFont text-sm font-medium text-left text-slate-900">Выберите роль</Label>
                    <div className='overflow-hidden w-[166px] h-[42px] bg-tabsColor flex justify-center items-center rounded-[6px]'>
                        <Button id='reader' className='tabs w-[89px] h-8 bg-white float-left cursor-pointer font-customFont text-sm font-medium rounded-[3px]
                         text-slate-900 hover:bg-white py-1.5 px-3 outline-none border-none shadow-none'
                            onClick={handleClick}>
                            Читатель
                        </Button>
                        <Button id='writer' className='tabs w-[67px] h-8 bg-tabsColor float-left cursor-pointer font-customFont text-sm font-medium rounded-[3px]
                         text-slate-900 hover:bg-white py-1.5 px-3 outline-none border-none shadow-none'
                            onClick={handleClick}>
                            Автор
                        </Button>
                    </div>
                </div>
                <Button type='submit' className='w-96 h-10 font-customFont bg-slate-900 text-sm font-medium rounded-[6px]' onClick={register}>
                    Создать аккаунт
                </Button>
                <div className='font-customFont text-slate-900'>
                    Уже есть аккаунт?
                    <Link className='text-indigo-500 font-customFont' to="/Login"> Войти</Link>
                </div>
            </div>
        </div>
    );
};

export default Registration;