import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from '@/components/ui/label'

const Registration = () => {

    const [state, setState] = useState('/Reader_post'); 

    const handleClick = (e) => {
        const changeColorBlock = document.querySelectorAll('.tabs');
        for (let elem of changeColorBlock) {
            elem.style.backgroundColor = "#F1F5F9";
        }
        e.currentTarget.style.backgroundColor = "#FFFFFF";
        if (e.currentTarget.id === "Reader"){
            setState("/Reader_post");
        }
        else setState("/Writer_post");
    };

    return (
        <div className='flex min-h-screen flex-col justify-center items-center'>
            <div>
                <h4 className="mt-0 mb-4 font-customFont text-baseColor text-xl font-semibold">Создать аккаунт</h4>
                <div className='mb-4'>
                    <Label className="block font-customFont text-sm font-medium text-left text-baseColor">Почта</Label>
                    <Input type='email' placeholder='Введите почту' className="block w-96 h-10 p-0 rounded border-borderColor border-solid pt-2 pb-2 pl-3"></Input>
                </div>
                <div className='mb-4'>
                    <Label className="block font-customFont text-sm font-medium text-left text-baseColor">Пароль</Label>
                    <Input type='password' placeholder='Введите пароль' className="block w-96 h-10 p-0 rounded border-borderColor border-solid pt-2 pb-2 pl-3"></Input>
                </div>
                <div className='mb-4'>
                    <Label className="block font-customFont text-sm font-medium text-left text-baseColor">Повторите пароль</Label>
                    <Input type='password' placeholder='Повторите пароль' className="block w-96 h-10 p-0 rounded border-borderColor border-solid pt-2 pb-2 pl-3"></Input>
                </div>
                <div className='mb-4'>
                    <Label className="block font-customFont text-sm font-medium text-left text-baseColor">Выберите роль</Label>
                    <div className='overflow-hidden w-40 h-10 bg-tabsColor flex justify-center items-center rounded'>
                        <Button id='Reader' className='tabs bg-white float-left cursor-pointer font-customFont text-sm font-medium rounded text-baseColor hover:bg-white pt-1.5 pb-1.5 pl-3 pr-3 outline-none border-none shadow-none'
                            onClick={handleClick}>
                            Читатель
                        </Button>
                        <Button id='Writer' className='tabs bg-tabsColor float-left cursor-pointer font-customFont text-sm font-medium rounded text-baseColor hover:bg-white pt-1.5 pb-1.5 pl-3 pr-3 outline-none border-none shadow-none'
                            onClick={handleClick}>
                            Автор
                        </Button>
                    </div>
                </div>
                <div className='mb-4'>
                    <Button className='w-96 h-10 font-customFont bg-baseColor text-sm font-medium rounded' asChild>
                        <Link to={state}>Создать аккаунт</Link>
                    </Button>
                </div>
                <div>
                    Уже есть аккаунт?
                    <Link className='text-linkColor' to="/Login">Войти</Link>
                </div>
            </div>
        </div>
    );
};

export default Registration;