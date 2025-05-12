export default function Error({ message }: { message?: string }) {
  return (
    <div className="inset-0 absolute w-full h-full flex justify-center items-center z-50">
      <div className="p-8 text-center text-red-600">Error: {message}</div>
    </div>
  );
}
