import React, { useState } from 'react';
import {useForm} from 'react-hook-form'

const Form = ()=>{
    const {register,handleSubmit,formState:{errors},reset,trigger} = useForm();
    const [name,Setname] = useState('');
    const [email,Setemail] = useState('');
    const [number,Setnumber] = useState('');
    const [project,Setproject] = useState('');
    const [description,Setdescription] = useState('');
    const [startDate,SetstartDate] = useState('');
    const [endDate,SetendDate] = useState('');
    const [status,Setstatus] = useState('');

    const submitHandler = (e)=>{
        reset()
        console.log(name,email,number,project,description,startDate,endDate,status);
    }
    const columGaps = {
        columnGap:'15px'
    }
  return <>
    <div className='container pt-5'>
        <div className='row'>
            <div className='col-6 m-auto'>
                <div className='gutter-gap'>
                    <h2 className='text-center mb-5'>React Hook Form Validation</h2>
                    <form method='post' onSubmit={handleSubmit(submitHandler)}>
                        <div className='mb-3'>
                            <label className='form-label'>Name</label>
                            <input type='text' placeholder='Enter person name' className='form-control rounded-0'
                            {...register('name',{
                                required:'Required input field',
                                pattern:{
                                    value:/^[a-zA-Z\s]*$/,
                                    message:'Enter only alphabets'
                                },
                                minLength:{
                                    value:5,
                                    message:'Please enter least 5 character'
                                }
                            })}
                            onChange={(e)=>Setname(e.target.value)}
                            onKeyUp={()=>{trigger()}}
                            />
                            {errors.name && <span className='text-danger'>{errors.name.message}</span>}
                        </div>
                        <div className='mb-3 d-flex' style={columGaps}>
                            <div className='w-100'>
                                <label className='form-label'>Email</label>
                                <input type='text' placeholder='Enter valid email' className='form-control rounded-0'
                                {...register('email',{
                                    required:'Required input field',
                                    pattern:{
                                        value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message:'Please provide valid email'
                                    }
                                })}
                                onKeyUp={()=>{trigger()}}
                                onChange={(e)=>Setemail(e.target.value)}
                                />
                                {errors.email &&  <span className='text-danger'>{errors.email.message}</span>}
                            </div>
                            <div className='w-100'>
                                <label className='form-label'>Mobile</label>
                                <input type='text' placeholder='Enter mobile' className='form-control rounded-0'
                                {...register('number',{
                                    required:'Required input field',
                                    pattern:{
                                        value:/^[0-9]*$/,
                                        message:'Enter only numbers'
                                    },
                                    minLength:{
                                        value:4,
                                        message:'Please enter least 4 digits'
                                    },
                                    maxLength:{
                                        value:10,
                                        message:'Please enter max 10 digits'
                                    }
                                })}
                                onKeyUp={()=>{trigger()}}
                                onChange={(e)=>Setnumber(e.target.value)}
                                />
                                {errors.number &&  <span className='text-danger'>{errors.number.message}</span>}
                            </div>
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Project name</label>
                            <input type='text' placeholder='Enter project name' className='form-control rounded-0'
                            {...register('project',{
                                required:'Required input field'
                            })}
                            onKeyUp={()=>{trigger()}}
                            onChange={(e)=>Setproject(e.target.value)}
                            />
                            {errors.project &&  <span className='text-danger'>{errors.project.message}</span>}
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Description</label>
                            <input type='text' placeholder='Enter task description' className='form-control rounded-0'
                            {...register('description',{
                                required:'Required input field'
                            })}
                            onKeyUp={()=>{trigger()}}
                            onChange={(e)=>Setdescription(e.target.value)}
                            />
                            {errors.description &&  <span className='text-danger'>{errors.description.message}</span>}
                        </div>
                        <div className='mb-3 d-flex' style={columGaps}>
                            <div className='w-100'>
                                <label className='form-label'>Start Date</label>
                                <input type='date' className='form-control rounded-0'
                                {...register('startDate',{
                                    required:'Required input field'
                                })}
                                onKeyUp={()=>{trigger()}}
                                onChange={(e)=>SetstartDate(e.target.value)}
                                />
                                {errors.startDate &&  <span className='text-danger'>{errors.startDate.message}</span>}
                            </div>
                            <div className='w-100'>
                                <label className='form-label'>End Date</label>
                                <input type='date' className='form-control rounded-0'
                                {...register('endDate',{
                                    required:'Required input field'
                                })}
                                onKeyUp={()=>{trigger()}}
                                onChange={(e)=>SetendDate(e.target.value)}
                                />
                                {errors.endDate &&  <span className='text-danger'>{errors.endDate.message}</span>}
                            </div>
                        </div>
                        <div className='mb-3 d-flex' style={columGaps}>
                            <div className='w-100'>
                                <label className='form-label'>Task status</label>
                            </div>
                            <div className='w-100 d-flex align-items-center'  style={columGaps}>
                                <input type='radio' className='form-radio-input rounded-0' value='Planned'
                                {...register('status',{
                                    required:'Required input field'
                                })}
                                onKeyUp={()=>{trigger()}}
                                onChange={(e)=>Setstatus(e.target.value)}
                                />
                                <label className='form-label m-0'>Planned</label>
                            </div>
                            <div className='w-100 d-flex align-items-center'  style={columGaps}>
                                <input type='radio' className='form-radio-input rounded-0' value='In-Progress'
                                {...register('status',{
                                    required:'Required input field'
                                })}
                                onKeyUp={()=>{trigger()}}
                                onChange={(e)=>Setstatus(e.target.value)}
                                />
                                <label className='form-label m-0'>In-Progress</label>
                            </div>
                            <div className='w-100 d-flex align-items-center'  style={columGaps}>
                                <input type='radio' className='form-radio-input rounded-0' value='Done'
                                {...register('status',{
                                    required:'Required input field'
                                })}
                                onKeyUp={()=>{trigger()}}
                                onChange={(e)=>Setstatus(e.target.value)}
                                />
                                <label className='form-label m-0'>Done</label>
                            </div>
                        </div>
                        {errors.status &&  <span className='text-danger'>{errors.status.message}</span>}
                        <input type="submit" className='btn btn-success rounded-0 form-control'/>
                    </form>
                </div>
            </div>
        </div>
    </div>
  </>;
}
export default Form;
