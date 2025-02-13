import {Button} from '@/components/ui/button.tsx';
import { Link } from "react-router-dom";
import MyInput from '@/components/MyInput'
import { useState } from 'react';
import axios from 'axios';
// import { client } from '@/components/api'

const Login = () => {
    
    const [Email, setMail] = useState("");
    const [Password, setPassword] = useState("");

    const login = (e) => {
        e.preventDefault();
        axios.post('https://cpt-stage-2.duckdns.org/api/auth/login',{
            email: Email,
            password: Password
        })
        .then(function(response){
            localStorage.setItem("accessToken", response.data.accessToken);
            localStorage.setItem("refreshToken", response.data.refreshToken);
            window.location = '/Writer_my_post'
        })
        .catch(function(error){
            console.log(error);
        })
    }

    // const getRole = () => {
    //     client.get(`${client.defaults.baseURL}/users/me`)
    //     .then(function(response){
    //         return response
    //     })
    //     .catch(function(error){
    //         console.log("getRole error");
    //         console.log(error)
    //     })
    // }

    // const tmp = () => {
    //     client.get(`${client.defaults.baseURL}/posts`).then(response => {
    //         console.log('posts response');
    //         console.log(response);
    //     })
    //     .catch(error => {
    //         console.log('posts error');
    //         console.log(error);
    //     })
    // }

    return (
        <div className="flex min-h-screen flex-col justify-center items-center bg-slate-50">
            <div className='bg-white w-[416px] h-[320px] rounded-xl space-y-4 space-x-4'>
                <h4 className=" font-customFont text-baseColor text-xl font-semibold ml-4 mt-4">Войти</h4>
                <form className='space-y-4'>
                    <MyInput className='rounded-[6px]' label={'Почта'} placeholder={'Введите почту'} type={'email'} name={'login_mail'} onChange={e => setMail(e.currentTarget.value)}/>
                    <MyInput className='rounded-[6px]' label={'Пароль'} placeholder={'Введите пароль'} type={'password'} name={'login_password'} onChange={e => setPassword(e.currentTarget.value)}/>
                    <Button type='submit' onClick={login} className='w-[400px] h-10 font-customFont bg-slate-900 text-sm font-medium rounded-[6px]'>
                        Войти
                    </Button>
                </form>
                <div className='font-customFont text-slate-900'>
                    Нет аккаунта?
                    <Link className='text-indigo-500 font-customFont' to="/Registration"> Создать аккаунт</Link>
                </div>
            </div>
            {/* <Button onClick={tmp}>asdf</Button> */}
        </div>
    );
};

export default Login;