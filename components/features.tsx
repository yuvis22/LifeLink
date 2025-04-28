"use client";

import { motion } from 'framer-motion';
import { 
  Search, 
  Calendar, 
  FileText, 
  MapPin, 
  Clock, 
  Users, 
  AlertCircle, 
  HeartPulse 
} from 'lucide-react';

const features = [
  {
    icon: <Search className="h-10 w-10 text-rose-600" />,
    title: "Find Donors",
    description: "Search for blood donors by blood type, location, and availability in your area."
  },
  {
    icon: <Calendar className="h-10 w-10 text-rose-600" />,
    title: "Schedule Donations",
    description: "Book your donation appointments online with local blood banks and donation centers."
  },
  {
    icon: <AlertCircle className="h-10 w-10 text-rose-600" />,
    title: "Emergency Requests",
    description: "Create urgent requests for specific blood types during critical situations."
  },
  {
    icon: <MapPin className="h-10 w-10 text-rose-600" />,
    title: "Blood Bank Locator",
    description: "Find nearby blood banks and donation centers with detailed contact information."
  },
  {
    icon: <FileText className="h-10 w-10 text-rose-600" />,
    title: "Resource Library",
    description: "Access educational articles about blood donation benefits, process and eligibility."
  },
  {
    icon: <HeartPulse className="h-10 w-10 text-rose-600" />,
    title: "Eligibility Check",
    description: "Determine if you're eligible to donate blood with our interactive questionnaire."
  },
  {
    icon: <Clock className="h-10 w-10 text-rose-600" />,
    title: "Donation Reminders",
    description: "Receive timely notifications when you're eligible to donate again."
  },
  {
    icon: <Users className="h-10 w-10 text-rose-600" />,
    title: "Donor Community",
    description: "Connect with other donors, share experiences and encourage participation."
  }
];

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Saving Lives Made <span className="text-rose-600">Simple</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform connects blood donors with those in need through a simple, 
            efficient process designed to save lives.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="bg-rose-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;