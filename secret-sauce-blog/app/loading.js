export default function Loading() {
  return (
    <div className='flex flex-1 items-center justify-center'>
      <div
        className='inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
        role='status'
      ></div>
      <div className='ml-3 text-xl'>Loading content</div>
    </div>
  );
}
