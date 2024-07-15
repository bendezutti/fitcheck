//useState manages the DOM updates, 
//useEffect manages the state change
import React, { useRef, useState, useEffect } from 'react'
import './ImageUpload.css'


const ImageUpload = props => {
    //We have a file to manage
//3 states we are managing: 
    const [file, setFile] = useState();
    const [previewUrl, setPreviewUrl] = useState();
    const [isValid, setIsValid] = useState(true);

    //Allows us to simulate a file picker
    //Stores a value that establishes a connection to the DOM element
    const filePickerRef = useRef()

    //When we pick the file, we want to run a function
    useEffect(() => { 

        //No file picked
        if(!file){ 
            //if we don't have a file, we cannot generate a preview
            return;
        } 

        //This is an API built into the browser 
        //Helps us to READ files and PARSE files
        //We can also use this to convert file (binary data) 
        //  into a readable IMAGE URL
        const fileReader = new FileReader();

        //This will execute after the reading of the file is complete
        fileReader.onload = () => { 
            setPreviewUrl(fileReader.result)
        };

        fileReader.readAsDataURL(file)
        //file is a dependency
    }, [file])

    //This will be our handler AFTER the user chooses a file
    const pickedHandler = e => {
        //Goal is to generate something that helps us preview the file
        // console.log(e.target)
        let pickedFile;
        let fileIsValid = isValid;
        
        //If we have a file and we have only ONE file
        if(e.target.files && e.target.files.length === 1) { 
            //extract the picked file
            pickedFile = e.target.files[0]
            setFile(pickedFile)
            setIsValid(true)
            fileIsValid = true;
        } else { 
            setIsValid(false);
            fileIsValid = false;
        }
        
        //Want to forward the ID and picked file if exists
        props.onInput(props.id,pickedFile,fileIsValid);
    }

    //Need a handler that will trigger when USER clicks the BUTTON
    const pickImageHandler = () => {
        filePickerRef.current.click();
    }

    return (
        <div className='form-control'>
            <input
                type='file'
                ref={filePickerRef}
                id={props.id}
                style={{ display: 'none' }}
                accept='.jpg,.png,jpef'
                onChange={pickedHandler}
            />

            <div className={`image-upload ${props.center && 'center'}`}>
                <div className='image-upload__preview'>
                    {previewUrl && <img src = {previewUrl} alt='Preview'/>}
                    {!previewUrl && <p> Please choose an image! </p>}
                </div>
                <button type="button" onClick={pickImageHandler}> Choose Image </button>
            </div>
            {!isValid && <p> Select a valid image! </p>}
        </div>
    )
}

export default ImageUpload