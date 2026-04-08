import Unicorn from '../assets/unicorn.webp';

export default function Card({ item }) {
  console.log(item);

  return (
    <div className="w-64 h-full border border-gray-200 shadow-md">
      <div className="w-full overflow-hidden border-b border-gray-200">
        <img
          src={item.images[0]?.imageUrl}
          alt="unicorn"
          className="w-full h-auto transition-all duration-300 hover:scale-110"
        />
      </div>
      <div className="my-3 ml-3">
        <p className="text-2xl text-blue-800 font-bold font-josefin mb-4">{item?.title}</p>
        <p className="text-md text-stone-500 font-semibold font-josefin mb-">{item?.desc}</p>
        <div className="flex justify-end">
          <p className="px-4 py-2 bg-[#F5F3FF] text-purple-700 font-semibold clip-path-tag font-josefin ">$9.99</p>
        </div>
      </div>
    </div>
  );
}
