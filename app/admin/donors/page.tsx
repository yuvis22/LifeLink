"use client";

import { useState, useEffect } from "react";
import { format } from "date-fns";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface Donor {
  _id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  bloodType: string;
  phone: string;
  city: string;
  state: string;
  lastDonation?: string;
  emergencyAvailable: boolean;
  createdAt: string;
}

export default function DonorsPage() {
  const [donors, setDonors] = useState<Donor[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/donors");
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to fetch donors");
        }

        setDonors(data.donors);
      } catch (error: any) {
        console.error("Error fetching donors:", error);
        setError(error.message || "An error occurred while fetching donors");
      } finally {
        setIsLoading(false);
      }
    };

    fetchDonors();
  }, []);

  const filteredDonors = donors.filter((donor) => {
    const searchValue = searchTerm.toLowerCase();
    return (
      donor.firstName.toLowerCase().includes(searchValue) ||
      donor.lastName.toLowerCase().includes(searchValue) ||
      donor.bloodType.toLowerCase().includes(searchValue) ||
      donor.city.toLowerCase().includes(searchValue) ||
      donor.state.toLowerCase().includes(searchValue)
    );
  });

  return (
    <div className="container mx-auto py-10 px-4">
      <Card>
        <CardHeader>
          <CardTitle>Registered Donors</CardTitle>
          <CardDescription>
            View and manage all registered blood donors in the system.
          </CardDescription>
          <div className="relative mt-4">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Search donors..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex justify-center items-center h-40">
              <p>Loading donors...</p>
            </div>
          ) : error ? (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          ) : donors.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-500">No donors registered yet.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Blood Type</TableHead>
                    <TableHead>Age</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Last Donation</TableHead>
                    <TableHead>Emergency</TableHead>
                    <TableHead>Registered</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredDonors.map((donor) => {
                    // Calculate age from date of birth
                    const dob = new Date(donor.dateOfBirth);
                    const today = new Date();
                    const age = today.getFullYear() - dob.getFullYear();

                    return (
                      <TableRow key={donor._id}>
                        <TableCell className="font-medium">
                          {donor.firstName} {donor.lastName}
                        </TableCell>
                        <TableCell>
                          <span className="bg-rose-100 text-rose-800 px-2 py-1 rounded-full text-xs font-medium">
                            {donor.bloodType}
                          </span>
                        </TableCell>
                        <TableCell>{age}</TableCell>
                        <TableCell>
                          {donor.city}, {donor.state}
                        </TableCell>
                        <TableCell>
                          {donor.lastDonation
                            ? format(
                                new Date(donor.lastDonation),
                                "MMM d, yyyy"
                              )
                            : "Never"}
                        </TableCell>
                        <TableCell>
                          {donor.emergencyAvailable ? (
                            <span className="text-green-600">Available</span>
                          ) : (
                            <span className="text-gray-400">Unavailable</span>
                          )}
                        </TableCell>
                        <TableCell>
                          {format(new Date(donor.createdAt), "MMM d, yyyy")}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
