import Image from "next/image";
import items from "@/data/items.json";
import Navbar from "@/components/Navbar";
import { Item } from '../types/item';

export default function Home() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto p-4 ">
        <h1 className="text-3xl font-bold mb-8 text-center">Item List</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item: Item) => (
            <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl text-gray-700 font-semibold mb-2">{item.name}</h2>
                <p className="text-gray-700 mb-4">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}