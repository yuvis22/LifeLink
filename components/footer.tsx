import Link from 'next/link';
import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-6 w-6 text-rose-600 fill-rose-600" />
              <span className="font-bold text-lg text-rose-600">LifeLink</span>
            </div>
            <p className="text-gray-600 mb-4">Connecting donors to save lives. Every drop counts.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-rose-600">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-rose-600">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-rose-600">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-rose-600">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-600 hover:text-rose-600">Home</Link></li>
              <li><Link href="/find-donor" className="text-gray-600 hover:text-rose-600">Find a Donor</Link></li>
              <li><Link href="/schedule" className="text-gray-600 hover:text-rose-600">Schedule Donation</Link></li>
              <li><Link href="/articles" className="text-gray-600 hover:text-rose-600">Articles</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-rose-600">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-rose-600">Blood Type Guide</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-rose-600">Donation Eligibility</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-rose-600">Donation Process</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-rose-600">FAQs</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-rose-600">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 text-rose-600" />
                <span className="text-gray-600">+1 (800) DONATE</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 text-rose-600" />
                <span className="text-gray-600">contact@lifelink.org</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-rose-600" />
                <span className="text-gray-600">123 Donation St, Health City, HC 12345</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} LifeLink Blood Donor Network. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;