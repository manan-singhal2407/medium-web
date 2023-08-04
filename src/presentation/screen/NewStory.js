import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import React, { useState, useEffect } from 'react';
import TopNavBarEditor from '../components/TopAppBarEditor';

const NewStory = () => {
    const [title, setTitle] = useState('');
    const [data, setData] = useState('');
    const [lastEdited, setLastEdited] = useState(null);

    const handleEditorChange = (e, editor) => {
        setData(editor.getData());
        setLastEdited(new Date());
    };

    const sendDataToDatabase = () => {
        console.log('API Called');
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (lastEdited && new Date() - lastEdited >= 4000 && new Date() - lastEdited <= 8000) {
                sendDataToDatabase();
            }
        }, 4000);

        return () => {
            clearInterval(interval);
        };
    }, [lastEdited]);

    return (
        <div className="flex flex-col h-screen w-screen">
            <TopNavBarEditor />
            <div style={{ width: '800px' }} className='mx-auto h-screen mt-4'>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => { setTitle(e.target.value); setLastEdited(new Date()); }}
                    placeholder="Title"
                    style={{ width: '800px' }}
                    className="outline-none bg-transparent border-none text-6xl mb-4"
                />
                <CKEditor
                    editor={ClassicEditor}
                    data={data}
                    onChange={(e, editor) => { handleEditorChange(e, editor) }}
                />
            </div>
        </div>
    );
};

export default NewStory;