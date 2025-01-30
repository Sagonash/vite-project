import React from 'react';
import { Input } from '../components/ui/input';
import { Label } from '@/components/ui/label'

const MyInput = ({label, ...props}) => {
    return (
        <div className='space-y-[6px]'>
            <Label className="block font-customFont text-sm font-medium text-left text-slate-900">{label}</Label>
            <Input {...props}
                className="block w-96 h-10 p-0 rounded-[6px] border-borderColor border-solid pt-2 pb-2 pl-3 placeholder:text-slate-400"
                >
            </Input>
        </div>
    );
};

export default MyInput;