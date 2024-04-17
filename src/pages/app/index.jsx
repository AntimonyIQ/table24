import Button from "../../components/button";


export default function AppPage() {
    
    return (
        <div className="text-[40px]">
            Table24 App (A workbook for student)
            
            <Button
                message={'Click Me'} 
                background={'bg-[#ff0000]'}
                color={'text-[#00ff00]'}/>
            <Button message={'Cancle'} />
        </div>
    );
}