import Image from "next/image";

export default function DualDivSection({
  image,
  smallTitle,
  title,
  description,
}) {
  return (
    <div className="flex justify-center items-center gap-10 py-10">
      {/* Left Image */}
      <div className="w-1/2 pl-30 pr-5">
        <Image src={image} alt={title} width={400} height={300} />
      </div>

      {/* Right Content */}
      <div className="w-1/2 pl-5 pr-30">
        <h2 className="text-xl text-gray-500">{smallTitle}</h2>
        <h1 className="text-7xl font-bold mt-2">{title}</h1>
        <p className="text-md mt-4 text-gray-600">{description}</p>
      </div>
    </div>
  );
}
