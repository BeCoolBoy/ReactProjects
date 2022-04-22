import React, { useState } from 'react';

const Todos = ({setshowForm,submitData,EditId,SetsubmitData})=>{
    const [name,Setname] = useState(submitData[EditId].name);
    const [email,Setemail] = useState(submitData[EditId].email);
    const [number,Setnumber] = useState(submitData[EditId].number);
    const [project,Setproject] = useState(submitData[EditId].project);
    const [description,Setdescription] = useState(submitData[EditId].description);
    const [startDate,SetstartDate] = useState(submitData[EditId].startDate);
    const [endDate,SetendDate] = useState(submitData[EditId].endDate);
    const [status,Setstatus] = useState(submitData[EditId].status);

    const submitHandler = (e)=>{
        e.preventDefault();
       const newValues = [...submitData];
       newValues[EditId] = {
            name:name,
            email:email,
            number:number,
            project:project,
            description:description,
            startDate:startDate,
            endDate:endDate,
            status:status
       }
       SetsubmitData([...newValues])
       setshowForm(false);
    }
    const columGaps = {
        columnGap:'15px'
    }

  return <>
            <form method='post' onSubmit={submitHandler}>
                <div className='mb-3'>
                    <label className='form-label'>Name</label>
                    <input type='text' placeholder='Enter person name' className='form-control rounded-0' value={name}
                    onChange={(e)=>{Setname(e.target.value)}}
                    />
                </div>
                <div className='mb-3 d-flex' style={columGaps}>
                    <div className='w-100'>
                        <label className='form-label'>Email</label>
                        <input type='text' placeholder='Enter valid email' className='form-control rounded-0' value={email}
                        onChange={(e)=>{Setemail(e.target.value)}}
                        />
                    </div>
                    <div className='w-100'>
                        <label className='form-label'>Mobile</label>
                        <input type='text' placeholder='Enter mobile' className='form-control rounded-0' value={number}
                        onChange={(e)=>{Setnumber(e.target.value)}}
                        />
                    </div>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Project name</label>
                    <input type='text' placeholder='Enter project name' className='form-control rounded-0' value={project}
                    onChange={(e)=>{Setproject(e.target.value)}}
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Description</label>
                    <input type='text' placeholder='Enter task description' className='form-control rounded-0' value={description}
                    onChange={(e)=>{Setdescription(e.target.value)}}
                    />
                </div>
                <div className='mb-3 d-flex' style={columGaps}>
                    <div className='w-100'>
                        <label className='form-label'>Start Date</label>
                        <input type='date' className='form-control rounded-0' value={startDate}
                        onChange={(e)=>{SetstartDate(e.target.value)}}
                        />
                    </div>
                    <div className='w-100'>
                        <label className='form-label'>End Date</label>
                        <input type='date' className='form-control rounded-0' value={endDate}
                        onChange={(e)=>{SetendDate(e.target.value)}}
                        />
                    </div>
                </div>
                <div className='mb-3 d-flex' style={columGaps}>
                    <div className='w-100'>
                        <label className='form-label'>Task status</label>
                    </div>
                    <div className='w-100 d-flex align-items-center'  style={columGaps}>
                        <input type='radio' className='form-radio-input rounded-0' value='In-Progress'
                        onChange={(e)=>{Setstatus('In-Progress')}}
                        />
                        <label className='form-label m-0'>Planned</label>
                    </div>
                    <div className='w-100 d-flex align-items-center'  style={columGaps}>
                        <input type='radio' className='form-radio-input rounded-0'  value='In-Progress'
                        onChange={(e)=>{Setstatus('In-Progress')}}
                        />
                        <label className='form-label m-0'>In-Progress</label>
                    </div>
                    <div className='w-100 d-flex align-items-center'  style={columGaps}>
                        <input type='radio' className='form-radio-input rounded-0'  value='Done'
                        onChange={(e)=>{Setstatus('Done')}}
                        />
                        <label className='form-label m-0'>Done</label>
                    </div>
                </div>
                <input type="submit" className='btn btn-success rounded-0 form-control'/>
            </form>
  </>;
}
export default Todos;
