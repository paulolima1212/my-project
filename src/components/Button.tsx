interface ButtonProps {
    children: any
    className?: string
    color?: 'green' | 'blue' | 'gray' 
}

export default function Button(props: ButtonProps) {
    return (
        <button className={`
            bg-gradient-to-r from-blue-400 to-blue-700 text-white
            px-4 py-2 rounded-md 
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}