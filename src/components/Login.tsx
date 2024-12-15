import * as React from 'react';
import {Button} from '@/components/ui/button.tsx';
import {Label} from '@/components/ui/label.tsx';
import {Input} from '@/components/ui/input.tsx';
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <div>
            <div className="flex min-h-screen flex-col justify-center items-center">
                <div>
                    <h4 className="mt-0 mb-4 font-customFont text-baseColor text-xl font-semibold">Войти</h4>
                    <div className="mb-4">
                        <Label className="block font-customFont text-sm font-medium text-left text-baseColor">Почта</Label>
                        <Input type="email" placeholder="Введите почту" className="block w-96 h-10 p-0 rounded border-borderColor border-solid pt-2 pb-2 pl-3"></Input>
                    </div>
                    <div className="mb-4">
                        <Label className="block font-customFont text-sm font-medium text-left text-baseColor">Пароль</Label>
                        <Input type="password" placeholder="Введите пароль" className="block w-96 h-10 p-0 rounded border-borderColor border-solid pt-2 pb-2 pl-3"></Input>
                    </div>
                    <div className="mb-4">
                        <Button className='w-96 h-10 font-customFont bg-baseColor text-sm font-medium rounded' asChild>
                            <Link to="/Reader_post">Войти</Link>
                        </Button>
                    </div>
                    <div>
                        Нет аккаунта?
                        <Link className='text-linkColor' to="/Registration">Создать аккаунт</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;