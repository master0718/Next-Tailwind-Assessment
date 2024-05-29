import Navbar from '@/components/Navbar';

export default function About() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-white">About</h1>
        <p className='text-white'>This is the about page.</p>
      </div>
    </div>
  );
}