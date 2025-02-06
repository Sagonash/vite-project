import { Button } from '@/components/ui/button'
import { Heart, MessageCircle } from "lucide-react"

const CommentButtons = () => {
    return(
        <div className="space-x-3 pb-4">
            <Button className="bg-slate-50 text-slate-400 font-customFont font-medium text-xs leading-5 w-[60px] h-7 hover:bg-slate-50 rounded-[3px]">
                <Heart/>110
            </Button>
            <Button className="bg-slate-50 text-slate-400 font-customFont font-medium text-xs leading-5 w-[60px] h-7 hover:bg-slate-50 rounded-[3px]">
                <MessageCircle/>110
            </Button>
        </div>
    )
}

export default CommentButtons