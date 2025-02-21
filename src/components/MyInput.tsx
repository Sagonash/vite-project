import { Input } from '../components/ui/input';
import { Label } from '@/components/ui/label'

const MyInput = ({label, ...props}) => {
    return (
        <div className='mt-[6px] space-y-[6px]'>
            <Label className="block font-customFont text-sm font-medium text-left text-slate-900">{label}</Label>
            <Input {...props}></Input>
        </div>
    );
};

export default MyInput;