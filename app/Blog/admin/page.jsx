import React from 'react'
import Nav from '@/components/nav'
import { OutlinedInput } from '@mui/material'

const page = () => {
  return (
    <div>
        <Nav/>
        <div className='p-10'>
        <h1 className="heading font-sans text-6xl p-30">
            Create Blog
          </h1>
        </div>

        <div className="p-7">
      <div className="container bg-black rounded-3xl mx-auto   p-5 m-50   ">
        <div className="box p-10 flex flex-col gap-3">
          <h1 className="heading font-sans text-4xl text-white mx-auto ">
            Push Blog
          </h1>
          <h1 className="heading font-sans text-xl text-white mx-auto ">
            Only for admins
          </h1>

          <div className="text-fields flex flex-col gap-3 mt-10">
            
            <OutlinedInput
              className="input bg-white rounded-xl text-blue placeholder:text-white placeholder:capitalize p-2 "
              label="Outlined"
              placeholder="Heading"
            />
            <OutlinedInput
              className="input bg-white rounded-xl text-blue placeholder:text-white placeholder:capitalize h-96   "
              label="Text"
              multiline="true"
              
              
              placeholder="Address"
            />
            
          </div>

          <div className="button">
            <div className="button-contact   bg-white p-5 text-white  rounded-full px-10 text-center">
              <a
                href=""
                className="button-contact-text text-black mx-2 p-2 font-sans"
              >
                Publish{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default page
