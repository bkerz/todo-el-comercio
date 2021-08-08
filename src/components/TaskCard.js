export default function TaskCard({ title }) {
  return (
    <div className="border-t pt-5 px-3 pb-0 mt-3 text-center md:flex md:justify-between">
      <div className="text-left">
        <p>{title}</p>
      </div>
      <div className="flex pb-2">
        <img
          src="./edit.svg"
          alt="Edit icon"
          className="w-full mr-2 h-auto bg-icons p-2 rounded-md cursor-pointer"
        />
        <img
          src="./trash.svg"
          alt="Delete icon"
          className="w-full mr-2 h-auto bg-icons p-2 rounded-md cursor-pointer"
        />
      </div>
    </div>
  );
}