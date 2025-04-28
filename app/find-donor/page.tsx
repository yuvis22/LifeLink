"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Search,
  MapPin,
  Filter,
  Calendar,
  Clock,
  Heart,
  Phone,
  Mail,
  User,
  Droplet,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

// Mock data for donors
const mockDonors = [
  {
    id: 1,
    name: "Robert Garcia",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
    bloodType: "O-",
    lastDonation: "2025-03-10",
    location: "Downtown Medical Center",
    distance: "2.3",
    availability: "Weekdays, 9AM-5PM",
    contactDetails: {
      phone: "+1 (555) 123-4567",
      email: "robert.g@example.com",
    },
    verified: true,
    emergencyAvailable: true,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    image:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600",
    bloodType: "O+",
    lastDonation: "2025-02-15",
    location: "Northside Hospital",
    distance: "4.7",
    availability: "Weekends, 10AM-8PM",
    contactDetails: {
      phone: "+1 (555) 987-6543",
      email: "sarah.j@example.com",
    },
    verified: true,
    emergencyAvailable: false,
  },
  {
    id: 3,
    name: "Michael Chen",
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
    bloodType: "AB-",
    lastDonation: "2025-01-20",
    location: "Eastside Health Center",
    distance: "1.5",
    availability: "Evenings, 5PM-9PM",
    contactDetails: {
      phone: "+1 (555) 456-7890",
      email: "michael.c@example.com",
    },
    verified: true,
    emergencyAvailable: true,
  },
  {
    id: 4,
    name: "Jessica Williams",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
    bloodType: "A+",
    lastDonation: "2025-03-05",
    location: "Central Blood Bank",
    distance: "3.2",
    availability: "Flexible",
    contactDetails: {
      phone: "+1 (555) 234-5678",
      email: "jessica.w@example.com",
    },
    verified: true,
    emergencyAvailable: true,
  },
  {
    id: 5,
    name: "Emily Wilson",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
    bloodType: "B+",
    lastDonation: "2025-02-28",
    location: "Westside Medical Plaza",
    distance: "5.1",
    availability: "Weekends only",
    contactDetails: {
      phone: "+1 (555) 876-5432",
      email: "emily.w@example.com",
    },
    verified: false,
    emergencyAvailable: false,
  },
];

const FindDonorPage = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const [bloodType, setBloodType] = useState("any-type");
  const [distance, setDistance] = useState("any-distance");
  const [emergencyOnly, setEmergencyOnly] = useState(false);
  const [filteredDonors, setFilteredDonors] = useState(mockDonors);

  const handleSearch = () => {
    let results = [...mockDonors];

    if (bloodType && bloodType !== "any-type") {
      results = results.filter((donor) => donor.bloodType === bloodType);
    }

    if (emergencyOnly) {
      results = results.filter((donor) => donor.emergencyAvailable);
    }

    if (distance && distance !== "any-distance") {
      const maxDistance = parseInt(distance);
      results = results.filter(
        (donor) => parseFloat(donor.distance) <= maxDistance
      );
    }

    if (searchLocation) {
      const searchTermLower = searchLocation.toLowerCase();
      results = results.filter((donor) =>
        donor.location.toLowerCase().includes(searchTermLower)
      );
    }

    setFilteredDonors(results);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Find a Blood Donor
        </h1>
        <p className="text-lg text-gray-600">
          Search for compatible blood donors in your area based on blood type
          and location.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {/* Filters Panel */}
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Filter className="h-5 w-5 mr-2 text-rose-600" />
                Search Filters
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="blood-type">Blood Type</Label>
                <Select value={bloodType} onValueChange={setBloodType}>
                  <SelectTrigger id="blood-type">
                    <SelectValue placeholder="Select blood type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any-type">Any Type</SelectItem>
                    <SelectItem value="A+">A+</SelectItem>
                    <SelectItem value="A-">A-</SelectItem>
                    <SelectItem value="B+">B+</SelectItem>
                    <SelectItem value="B-">B-</SelectItem>
                    <SelectItem value="AB+">AB+</SelectItem>
                    <SelectItem value="AB-">AB-</SelectItem>
                    <SelectItem value="O+">O+</SelectItem>
                    <SelectItem value="O-">O-</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <div className="relative">
                  <MapPin className="h-4 w-4 absolute top-3 left-3 text-gray-400" />
                  <Input
                    id="location"
                    placeholder="City, hospital, or center"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="distance">Maximum Distance (miles)</Label>
                <Select value={distance} onValueChange={setDistance}>
                  <SelectTrigger id="distance">
                    <SelectValue placeholder="Select distance" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any-distance">Any Distance</SelectItem>
                    <SelectItem value="5">Within 5 miles</SelectItem>
                    <SelectItem value="10">Within 10 miles</SelectItem>
                    <SelectItem value="15">Within 15 miles</SelectItem>
                    <SelectItem value="25">Within 25 miles</SelectItem>
                    <SelectItem value="50">Within 50 miles</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2 pt-2">
                <Switch
                  id="emergency-only"
                  checked={emergencyOnly}
                  onCheckedChange={setEmergencyOnly}
                />
                <Label htmlFor="emergency-only">Emergency donors only</Label>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                onClick={handleSearch}
                className="w-full bg-rose-600 hover:bg-rose-700 text-white"
              >
                <Search className="h-4 w-4 mr-2" />
                Search Donors
              </Button>
            </CardFooter>
          </Card>

          <div className="mt-6">
            <Accordion
              type="single"
              collapsible
              className="bg-white rounded-lg shadow-sm border border-gray-100"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="px-4 py-3">
                  Need Assistance?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <p className="text-gray-600 mb-3">
                    Our support team is available 24/7 to help you find a
                    compatible donor in emergencies.
                  </p>
                  <Button variant="outline" className="w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    Contact Support
                  </Button>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="px-4 py-3">
                  About Blood Compatibility
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <p className="text-gray-600 mb-2">
                    It's important to find donors with compatible blood types:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
                    <li>Type O- is the universal donor</li>
                    <li>Type AB+ is the universal recipient</li>
                    <li>For platelets, compatibility rules differ</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Results Panel */}
        <div className="md:col-span-3">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">
              {filteredDonors.length} Donors Available
            </h2>
            <Select defaultValue="distance">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="distance">Nearest First</SelectItem>
                <SelectItem value="recent">Recent Donors</SelectItem>
                <SelectItem value="availability">Availability</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            {filteredDonors.length > 0 ? (
              filteredDonors.map((donor) => (
                <Card
                  key={donor.id}
                  className="hover:shadow-md transition-shadow duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row">
                      <div className="flex items-start md:w-1/3 mb-4 md:mb-0">
                        <Avatar className="h-14 w-14 mr-4 border-2 border-gray-100">
                          <AvatarImage src={donor.image} alt={donor.name} />
                          <AvatarFallback>
                            {donor.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center">
                            <h3 className="font-semibold text-lg text-gray-900">
                              {donor.name}
                            </h3>
                            {donor.verified && (
                              <Badge
                                variant="secondary"
                                className="ml-2 bg-green-50 text-green-700 border-green-200"
                              >
                                Verified
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center mt-1 mb-2">
                            <Badge
                              className={cn(
                                "bg-rose-100 text-rose-700 border-rose-200",
                                donor.bloodType.includes("O-") &&
                                  "bg-amber-100 text-amber-700 border-amber-200",
                                donor.bloodType.includes("AB") &&
                                  "bg-purple-100 text-purple-700 border-purple-200",
                                donor.bloodType.includes("B") &&
                                  !donor.bloodType.includes("A") &&
                                  "bg-blue-100 text-blue-700 border-blue-200"
                              )}
                            >
                              <Droplet className="h-3 w-3 mr-1 fill-current" />
                              {donor.bloodType}
                            </Badge>
                            {donor.emergencyAvailable && (
                              <Badge
                                variant="outline"
                                className="ml-2 bg-rose-50 text-rose-700 border-rose-200"
                              >
                                Emergency
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-gray-500 flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            Last donation:{" "}
                            {new Date(donor.lastDonation).toLocaleDateString()}
                          </p>
                        </div>
                      </div>

                      <div className="md:w-2/3 md:pl-6 md:border-l border-gray-100">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-500 flex items-center">
                              <MapPin className="h-3 w-3 mr-1" />
                              Location
                            </p>
                            <p className="text-gray-700">{donor.location}</p>
                            <p className="text-sm text-gray-600">
                              {donor.distance} miles away
                            </p>
                          </div>

                          <div>
                            <p className="text-sm text-gray-500 flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              Availability
                            </p>
                            <p className="text-gray-700">
                              {donor.availability}
                            </p>
                          </div>

                          <div className="md:col-span-2 pt-2">
                            <div className="flex flex-col sm:flex-row gap-3">
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-gray-700 flex-1"
                              >
                                <Phone className="h-4 w-4 mr-2" />
                                Contact
                              </Button>
                              <Button
                                size="sm"
                                className="bg-rose-600 hover:bg-rose-700 text-white flex-1"
                              >
                                <Heart className="h-4 w-4 mr-2" />
                                Request Donation
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                  <User className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No donors found
                </h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  No matching donors were found with your current filters. Try
                  adjusting your search criteria or contact support for
                  assistance.
                </p>
                <Button className="mt-4 bg-rose-600 hover:bg-rose-700 text-white">
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindDonorPage;
