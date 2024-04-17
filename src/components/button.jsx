
export default function Button({ 
    message,
    background,
    color,
    size,
}) {
    
    return (
        <button 
            className={`
                ${background ? background : 'bg-black'}
                ${color ? color : 'text-white'}
                ${size ? size : 'text-[16px]'}
                border rounded-lg p-2 
            `}>
            {message}
        </button>
    );
}