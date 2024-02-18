

type WriteToSessionStorageProps = {
    key: string;
    value: string
};

const WriteToSessionStorage: React.FC<WriteToSessionStorageProps> = ({})=>{
    
    const handleWriteToSessionStorage = (key: string, value: string) => {
        sessionStorage.setItem(key, value)
    }
    const handleReadFromSessionStorage = (key: string) => {
        console.log(sessionStorage.getItem(key))
    }
    const handleRemoveFromSessionStorage = (key: string) => {
        sessionStorage.removeItem(key)
    }
    return (
        <div>
            <button onClick={()=>handleWriteToSessionStorage('BOOTCAMP_INFO','This bootcampt is awesome')}>Write to session storage</button>
            <button onClick={()=>handleReadFromSessionStorage('BOOTCAMP_INFO')}>Read from session storage</button>
            <button onClick={()=>handleRemoveFromSessionStorage('BOOTCAMP_INFO')}>Remove from session storage</button>
        </div>
    );
}
export default WriteToSessionStorage;