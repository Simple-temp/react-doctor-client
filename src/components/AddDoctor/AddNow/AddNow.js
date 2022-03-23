import React, { useState } from 'react';

const AddNow = () => {

    const [info,setInfo] = useState({})
    const [file,setFile] = useState(null)

    const handleBlur = (e) =>{

        const newInfo = {...info}
        newInfo[e.target.name] = e.target.value
        setInfo(newInfo)
        console.log(newInfo)
    }

    const handleFile = (e) =>{

        const newFile = e.target.files[0]
        setFile(newFile)
    }

    const handleSubmit = () =>{

        const formData = new FormData()
        formData.append('file', file)
        formData.append('title', info.title)
        formData.append('email', info.email)
      
        fetch('https://react-doctors-client.herokuapp.com/addAdoctor', {
          method: 'POST',
          body: formData,
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.error(error)
        })

    }


    return (
        <div>
            <form onSubmit={handleSubmit} encType='multipart/form-data' className='w-100'>
                <div class="mb-3">
                    <label class="form-label">Email address</label>
                    <input onBlur={handleBlur} type="email" name="email" class="form-control w-100"  />
                </div>
                <div class="mb-3">
                    <label class="form-label">Title</label>
                    <input onBlur={handleBlur} type="text" name="title" class="form-control w-100" />
                </div>
                <div class="mb-3 ">
                    <input onChange={handleFile} name="file" type="file" className='w-100' />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default AddNow;