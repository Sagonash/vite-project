import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback} from "@/components/ui/avatar"
import { Heart, MessageCircle } from "lucide-react"

const Post_write_create = () => {
    return(
        <div className='w-[768px] h-[780px] hover:bg-slate-200 rounded space-x-4 space-y-4'>
            <div className='flex items-center justify-start ml-4 mt-4'>
                <Avatar><AvatarFallback className='font-customFont'>CN</AvatarFallback></Avatar>
                <div className='flex-col ml-2'>
                    <div className='font-customFont text-sm font-normal leading-6'>pochta@gmail.com</div>
                    <div className='font-customFont text-slate-400 text-xs font-medium leading-5'>31 октября</div>
                </div>
            </div>
            <h4 className='font-customFont text-xl font-semibold'>Заголовок</h4>
            <div className='w-[736px] h-[432px] bg-slate-300'></div>
            <p className='font-customFont text-sm font-normal leading-6 text-baseColor'>
                Повседневная практика показывает, что социально-экономическое развитие способствует подготовке и реализации распределения внутренних резервов и ресурсов. Предварительные выводы неутешительны: перспективное планирование не даёт нам иного выбора, кроме определения экономической целесообразности принимаемых решений.
            </p>
            <Button className="bg-slate-100 rounded font-customFont text-baseColor hover:bg-slate-200">Редактировать</Button>
            <div>
                <Button className="bg-slate-50 text-slate-400 font-customFont font-medium text-xs leading-5 w-[60px] h-7 hover:bg-slate-50 mr-3">
                    <Heart/>110
                </Button>
                <Button className="bg-slate-50 text-slate-400 font-customFont font-medium text-xs leading-5 w-[60px] h-7 hover:bg-slate-50">
                    <MessageCircle/>110
                </Button>
            </div>
        </div>
    )
}

export default Post_write_create;