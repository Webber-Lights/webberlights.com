export default function PlaylistTableSkeleton() {
  return (
    <div className='p-4'>
      <div className='animate-pulse space-y-4'>
        <div className='h-12 bg-gray-300 rounded'></div>
        {[...Array(5)].map((_, i) => (
          <div key={i} className='h-16 bg-gray-200 rounded'></div>
        ))}
      </div>
    </div>
  );
}
