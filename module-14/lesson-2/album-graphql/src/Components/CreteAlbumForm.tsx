import exp from "constants";
import { useState } from "react";

const CreateAlbumForm: React.FC = () => {

    const [albumName, setAlbumName] = useState<string>('');
    const [albumDescription, setAlbumDescription] = useState<string>('');
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(albumName, albumDescription);
    }
    
    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Album Name"
            value={albumName}
            onChange={(e) => setAlbumName(e.target.value)}
        />
        <input
            type="text"
            placeholder="Album Description"
            value={albumDescription}
            onChange={(e) => setAlbumDescription(e.target.value)}
        />
        <button type="submit">Create Album</button>
        </form>
    );
}

export default CreateAlbumForm;