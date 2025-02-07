import { AlignJustify,LayoutGrid,Plus } from "lucide-react"
import Table from "../../components/Table"
import { useState } from "react"
import Card from "../../components/Card"

const user = [
    {id:1,name:'John Doe',address:'cat',email:'email',phone:'phone',bdate:'bdate'},
    {id:2,name:'John Doe',address:'cat',email:'email',phone:'phone',bdate:'bdate'},
    {id:3,name:'John Doe',address:'cat',email:'email',phone:'phone',bdate:'bdate'},
    {id:4,name:'John Doe',address:'cat',email:'email',phone:'phone',bdate:'bdate'},
]

function CustomerList() {
    const [show,setShow] = useState('Table')
  return (
    <div className="h-full bg-gray-200">
        <div className="flex justify-between px-4 mt-4">
            <div>
                <button className="flex py-2 px-1 bg-blue-400 rounded-xl text-white"><Plus/>Add Customer</button>
            </div>
            <div className="flex gap-2">
                <button className=" bg-white rounded-lg w-10 flex text-center justify-center items-center text-blue-400" 
                onClick = { () => {setShow('Table')}}
                ><AlignJustify/>
                </button>
                <button className=" bg-white rounded-lg w-10 flex text-center justify-center items-center text-blue-400" 
                onClick = { () => {setShow('Card')}}
                ><LayoutGrid />
                </button>
            </div>
        </div>
        {
            show === 'Table' 
            ?<Table user={user}/> 
            :<Card user={user}/>
        }
         
    </div>
  )
}

export default CustomerList