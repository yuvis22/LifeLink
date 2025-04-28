"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Droplet, Calendar, Phone } from 'lucide-react';

const CallToAction = () => {
  const ctaVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-rose-600 to-red-700 rounded-2xl overflow-hidden shadow-xl">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={ctaVariants}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Make a Difference?
                </h2>
                <p className="text-rose-100 mb-8 text-lg">
                  Your blood donation can save up to three lives. Join our community of heroes today and be part of someone's miracle.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/schedule">
                    <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100 w-full">
                      <Calendar className="mr-2 h-5 w-5" />
                      Schedule Now
                    </Button>
                  </Link>
                  <Link href="/find-donor">
                    <Button size="lg" className="bg-rose-700 text-white hover:bg-rose-800 w-full">
                      <Droplet className="mr-2 h-5 w-5" />
                      Find a Donor
                    </Button>
                  </Link>
                </div>
                
                <div className="mt-8 flex items-center">
                  <Phone className="h-5 w-5 text-rose-200 mr-2" />
                  <span className="text-white">
                    <span className="font-semibold">24/7 Hotline:</span> +1 (800) DONATE
                  </span>
                </div>
              </motion.div>
            </div>
            
            <div className="md:w-1/2 relative">
              <img 
                src="https://images.pexels.com/photos/5965704/pexels-photo-5965704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Blood donation" 
                className="h-full w-full object-cover object-center"
                style={{ minHeight: "300px" }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black to-transparent">
                <blockquote className="text-white italic">
                  "The blood you donate gives someone another chance at life. One day that someone may be a close relative, a friend, a loved one—or even you."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Our Impact in Numbers
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-4xl font-bold text-rose-600">10k+</p>
              <p className="text-gray-600">Active Donors</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-4xl font-bold text-rose-600">5k+</p>
              <p className="text-gray-600">Lives Saved</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-4xl font-bold text-rose-600">100+</p>
              <p className="text-gray-600">Partner Hospitals</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-4xl font-bold text-rose-600">50+</p>
              <p className="text-gray-600">Donation Centers</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;