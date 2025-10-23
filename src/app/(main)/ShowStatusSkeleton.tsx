export default function ShowStatusSkeleton() {
  return (
    <section className='flex flex-col p-2 justify-center items-center max-w-auto'>
      <div>
        <h2 className='text-4xl font-bold text-red-600'>Show Status</h2>
        <br />
        <div className='animate-pulse flex flex-col items-center'>
          <div className='h-6 bg-gray-300 rounded w-32 mb-2'></div>
          <div className='h-4 bg-gray-200 rounded w-48'></div>
        </div>
      </div>
    </section>
  );
}