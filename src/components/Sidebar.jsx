import { UserRound } from "lucide-react";

function Sidebar() {
  return (
    <aside className={`h-full transition duration-500 w-60 `}>
      <nav className="h-full flex flex-col bg-white border-r border-gray-400">
        <div> <img className="p-3" src="https://gogoji.co.th/images/gogoji-logo.png" alt="" /></div>
        <ul className="flex-1 px-3">
          <li className="flex items-center gap-2 py-2 justify-center"><UserRound/>Customer List</li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
