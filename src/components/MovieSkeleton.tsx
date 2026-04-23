export default function MovieSkeleton() { 
  return (
    <li className="bg-[#1f1f1f] rounded shadow p-3 flex flex-col gap-2 animate-pulse">
      <div className="w-full aspect-2/3 bg-[#2a2a2a] rounded" />
      <div className="h-4 bg-[#2a2a2a] rounded w-3/4" />
      <div className="h-3 bg-[#2a2a2a] rounded w-1/4" />
      <div className="h-3 bg-[#2a2a2a] rounded" />
      <div className="h-3 bg-[#2a2a2a] rounded" />
      <div className="h-3 bg-[#2a2a2a] rounded w-1/2" />
    </li>
  );
} 
