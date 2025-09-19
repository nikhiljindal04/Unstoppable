import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Pagination() {
  return (
    <div className="mt-12 flex items-center justify-center gap-2">
      <a
        href="#"
        className="flex h-10 w-10 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-primary/20 hover:text-white"
      >
        <FaChevronLeft />
      </a>
      <a className="flex bg-[#13ec5b] h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-background-dark">
        1
      </a>
      {[2, 3].map((num) => (
        <a
          key={num}
          className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium text-white/70 transition-colors hover:bg-primary/20 hover:text-white"
          href="#"
        >
          {num}
        </a>
      ))}
      <a
        href="#"
        className="flex h-10 w-10 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-primary/20 hover:text-white"
      >
        <FaChevronRight />
      </a>
    </div>
  );
}
