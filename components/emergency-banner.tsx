"use client";

import { useState } from 'react';
import { AlertCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const EmergencyBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const closeNotification = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="bg-rose-600 text-white relative"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-center">
              <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
              <p className="text-sm md:text-base font-medium">
                Urgent need for O- blood type in Central Hospital. &nbsp;
                <Link 
                  href="/emergency-request" 
                  className="underline underline-offset-2 font-semibold hover:text-rose-100"
                >
                  Learn how to help
                </Link>
              </p>
              <Button 
                variant="ghost" 
                size="sm" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:text-white hover:bg-rose-700"
                onClick={closeNotification}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EmergencyBanner;