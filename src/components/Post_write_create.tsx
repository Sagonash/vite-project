import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback} from "@/components/ui/avatar"
import CommentButtons from "@/components/CommentButtons"

const Post_write_create = () => {
    return(
        <div className='w-[768px] h-[780px] bg-white hover:bg-slate-200 rounded-xl space-x-4 space-y-4'>
            <div className='flex items-center justify-start ml-4 pt-4'>
                <Avatar><AvatarFallback className='font-customFont'>CN</AvatarFallback></Avatar>
                <div className='flex-col ml-2'>
                    <div className='font-customFont text-sm font-normal leading-6'>pochta@gmail.com</div>
                    <div className='font-customFont text-slate-400 text-xs font-medium leading-5'>31 октября</div>
                </div>
            </div>
            <h4 className='font-customFont text-xl font-semibold'>Заголовок</h4>
            <div className='w-[736px] h-[432px] bg-slate-300 rounded-[6px]'></div>
            <p className='font-customFont text-sm font-normal leading-6 text-baseColor'>
                Повседневная практика показывает, что социально-экономическое развитие способствует подготовке и реализации распределения внутренних резервов и ресурсов. Предварительные выводы неутешительны: перспективное планирование не даёт нам иного выбора, кроме определения экономической целесообразности принимаемых решений.
            </p>
            <Button className="bg-slate-100 rounded-[6px] font-customFont text-baseColor hover:bg-slate-200">Редактировать</Button>
            <CommentButtons/>
        </div>
    )
}

export default Post_write_create;