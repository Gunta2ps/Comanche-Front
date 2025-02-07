import { BellDot, Settings } from 'lucide-react';

function Navbar() {
  return (
    <div className="bg-white h-10 px-4 flex items-center justify-between">
        <div>Customer</div>
        <div className="flex gap-4 justify-center items-center">
            <div><BellDot size={15}/></div>
            <div><Settings size={15}/></div>
            <div className="w-8 h-8 bg-blue-400 text-white text-center flex justify-center items-center rounded-full font-semibold">VJ</div>
        </div>
    </div>
  )
}

export default Navbar