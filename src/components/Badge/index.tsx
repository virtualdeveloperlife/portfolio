
interface IBadge{
    text: string
}

export function Badge({text}:IBadge) {
    return (
        <div className="py-2 px-4 rounded-xl border border-[#2B303B]/50 
            text-center bg-[#15181E99]/60 
            "
        >
            {text}
        </div>
    )
}