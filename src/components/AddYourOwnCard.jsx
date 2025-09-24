import { FaPlusCircle } from "react-icons/fa";

export default function AddYourOwnCard() {
  return (
    <div className="bg-blue-50 px-5 py-5  sm:px-[100px] sm:py-[100px] ">
      <div className=" border rounded-2xl p-6  flex flex-col items-center sm:items-start text-center bg-white ">
        <div className="flex items-center gap-3">
          <FaPlusCircle className="text-cyan-600 text-5xl" />
          <h2 className="text-xl font-bold ">Add your own</h2>
        </div>
        <p className="text-gray-600 mt-3 text-sm sm:text-lg">
          Are you a teacher or expert? Do you sell or rent out equipment, venue
          or event tickets? Or, you know someone who should be on hobbycue? Go
          ahead and Add your Own page
        </p>
        <button className="mt-5 border w-full sm:w-30 border-purple-400 text-purple-500 font-medium px-6 py-2 rounded-lg ">
          Add new
        </button>
      </div>
    </div>
  );
}
