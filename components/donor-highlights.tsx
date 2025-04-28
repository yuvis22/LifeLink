"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  ChevronLeft, 
  ChevronRight, 
  Star,
  Award
} from 'lucide-react';

const donors = [
  {
    name: "Sarah Johnson",
    bloodType: "O+",
    donations: 12,
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600",
    highlight: "Donates regularly every 3 months for the past 3 years."
  },
  {
    name: "Michael Chen",
    bloodType: "AB-",
    donations: 8,
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
    highlight: "Rare blood type donor who travels 30 miles to donate."
  },
  {
    name: "Jessica Williams",
    bloodType: "A+",
    donations: 20,
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
    highlight: "Started a donation drive at her workplace that collected 50+ units."
  },
  {
    name: "Robert Garcia",
    bloodType: "O-",
    donations: 15,
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
    highlight: "Universal donor who's helped in 5 emergency situations."
  },
  {
    name: "Emily Wilson",
    bloodType: "B+",
    donations: 10,
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
    highlight: "Overcame her fear of needles to become a regular donor."
  }
];

const DonorHighlights = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextDonor = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % donors.length);
  };

  const prevDonor = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + donors.length) % donors.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -200 : 200,
      opacity: 0
    })
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-rose-600">Hero</span> Donors
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our exceptional donors who are making a difference in their communities 
            through their generous blood donations.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute top-1/2 left-4 md:left-0 transform -translate-y-1/2 z-10">
            <button 
              onClick={prevDonor}
              className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
          </div>
          
          <div className="min-h-[400px] flex items-center justify-center">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-6 md:p-8 w-full"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/3 flex flex-col items-center">
                  <div className="relative">
                    <Avatar className="h-32 w-32 border-4 border-rose-100">
                      <AvatarImage src={donors[activeIndex].image} alt={donors[activeIndex].name} />
                      <AvatarFallback>{donors[activeIndex].name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-2 -right-2">
                      <div className="bg-rose-600 text-white rounded-full p-1">
                        <Award className="h-6 w-6" />
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mt-4 text-gray-900">{donors[activeIndex].name}</h3>
                  
                  <div className="flex items-center justify-center gap-4 mt-2">
                    <Badge variant="outline" className="bg-rose-50 text-rose-700 border-rose-200 font-semibold">
                      {donors[activeIndex].bloodType}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="h-4 w-4 text-amber-500 mr-1" />
                      <span>{donors[activeIndex].donations} donations</span>
                    </div>
                  </div>
                </div>
                
                <div className="w-full md:w-2/3 mt-6 md:mt-0">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 relative">
                    <div className="absolute -top-3 -left-3">
                      <div className="text-5xl text-rose-200">"</div>
                    </div>
                    <p className="text-lg text-gray-700 relative z-10 pt-4">
                      {donors[activeIndex].highlight}
                    </p>
                    <div className="absolute -bottom-3 -right-3 transform rotate-180">
                      <div className="text-5xl text-rose-200">"</div>
                    </div>
                  </div>
                  
                  <div className="mt-6 bg-rose-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Impact:</h4>
                    <p className="text-gray-700">
                      With {donors[activeIndex].donations} donations, {donors[activeIndex].name} has 
                      potentially saved up to {donors[activeIndex].donations * 3} lives and contributed 
                      approximately {donors[activeIndex].donations * 450}ml of blood to help those in need.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="absolute top-1/2 right-4 md:right-0 transform -translate-y-1/2 z-10">
            <button 
              onClick={nextDonor}
              className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
          
          <div className="flex justify-center mt-8">
            {donors.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > activeIndex ? 1 : -1);
                  setActiveIndex(index);
                }}
                className={`h-2 w-2 rounded-full mx-1 transition-colors ${
                  index === activeIndex ? 'bg-rose-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonorHighlights;