import type React from "react"
import { FaBell, FaUserCircle } from "react-icons/fa"
import ThemeToggle from "../ui/ThemeToggle"
import Dropdown from "../ui/DropDown"

interface TopNavProps {
  theme: string
  setTheme: (theme: string) => void
}

const TopNav: React.FC<TopNavProps> = ({ theme, setTheme }) => {
  return (
    <header className="p-4 flex justify-between items-center shadow-md">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg flex items-center justify-center shadow">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        </div>
        <h1 className="text-xl font-bold text-blue-700 dark:text-white">
          Student Directory
        </h1>
      </div>

      <div className="flex items-center space-x-6">
        <ThemeToggle theme={theme} setTheme={setTheme} />

        <Dropdown buttonContent={<FaBell className="text-2xl cursor-pointer" />}>
          <div className="p-3 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-sm font-semibold">Notifications</h3>
          </div>
          <ul className="max-h-64 overflow-y-auto">
            <li className="px-4 py-3 text-center">No new notifications</li>
          </ul>
        </Dropdown>

        <div>
          <FaUserCircle className="text-2xl" />
        </div>
      </div>
    </header>
  )
}

export default TopNav

