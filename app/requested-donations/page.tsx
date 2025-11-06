"use client";

import { useState, useEffect } from "react";
import { format, parseISO } from "date-fns";
import {
  Calendar,
  Clock,
  MapPin,
  User,
  Phone,
  Mail,
  Heart,
  AlertCircle,
  Building2,
  Droplet,
  Search,
  Filter,
  LoaderCircle,
  FileText,
  CheckCircle2,
  XCircle,
  UserCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import Link from "next/link";

interface DonationRequest {
  _id: string;
  donorId?: string;
  donorName?: string;
  requester: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    relationshipToPatient: string;
  };
  patient: {
    firstName: string;
    lastName: string;
    bloodType: string;
  };
  requestDetails: {
    urgencyLevel: string;
    neededDate?: string;
    neededTime?: string;
    medicalFacility: string;
    facilityAddress?: string;
    facilityCity?: string;
    facilityState?: string;
    facilityZipCode?: string;
    reason?: string;
    additionalNotes?: string;
  };
  status: string;
  createdAt: string;
  updatedAt: string;
}

export default function RequestedDonationsPage() {
  const [requests, setRequests] = useState<DonationRequest[]>([]);
  const [filteredRequests, setFilteredRequests] = useState<DonationRequest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [urgencyFilter, setUrgencyFilter] = useState("all");
  const [sortBy, setSortBy] = useState("recent");

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/donation-requests");
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to fetch donation requests");
        }

        setRequests(data.requests || []);
        setFilteredRequests(data.requests || []);
      } catch (error: any) {
        console.error("Error fetching donation requests:", error);
        setError(error.message || "An error occurred while fetching requests");
        toast.error("Failed to load donation requests", {
          description: error.message,
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchRequests();
  }, []);

  // Filter and sort requests
  useEffect(() => {
    let filtered = [...requests];

    // Search filter
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (req) =>
          req.requester.firstName.toLowerCase().includes(searchLower) ||
          req.requester.lastName.toLowerCase().includes(searchLower) ||
          req.patient.firstName.toLowerCase().includes(searchLower) ||
          req.patient.lastName.toLowerCase().includes(searchLower) ||
          req.patient.bloodType.toLowerCase().includes(searchLower) ||
          req.requestDetails.medicalFacility.toLowerCase().includes(searchLower) ||
          (req.donorName &&
            req.donorName.toLowerCase().includes(searchLower))
      );
    }

    // Status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter((req) => req.status === statusFilter);
    }

    // Urgency filter
    if (urgencyFilter !== "all") {
      filtered = filtered.filter(
        (req) => req.requestDetails.urgencyLevel === urgencyFilter
      );
    }

    // Sort
    switch (sortBy) {
      case "recent":
        filtered.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;
      case "oldest":
        filtered.sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
        break;
      case "urgency":
        const urgencyOrder = { emergency: 0, urgent: 1, scheduled: 2 };
        filtered.sort(
          (a, b) =>
            urgencyOrder[
              a.requestDetails.urgencyLevel as keyof typeof urgencyOrder
            ] -
            urgencyOrder[
              b.requestDetails.urgencyLevel as keyof typeof urgencyOrder
            ]
        );
        break;
      default:
        break;
    }

    setFilteredRequests(filtered);
  }, [requests, searchTerm, statusFilter, urgencyFilter, sortBy]);

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending: {
        label: "Pending",
        className: "bg-yellow-100 text-yellow-700 border-yellow-200",
        icon: Clock,
      },
      contacted: {
        label: "Contacted",
        className: "bg-blue-100 text-blue-700 border-blue-200",
        icon: Phone,
      },
      confirmed: {
        label: "Confirmed",
        className: "bg-green-100 text-green-700 border-green-200",
        icon: CheckCircle2,
      },
      completed: {
        label: "Completed",
        className: "bg-emerald-100 text-emerald-700 border-emerald-200",
        icon: CheckCircle2,
      },
      cancelled: {
        label: "Cancelled",
        className: "bg-red-100 text-red-700 border-red-200",
        icon: XCircle,
      },
    };

    const config = statusConfig[status as keyof typeof statusConfig] || {
      label: status,
      className: "bg-gray-100 text-gray-700 border-gray-200",
      icon: FileText,
    };

    const Icon = config.icon;

    return (
      <Badge className={cn("border", config.className)}>
        <Icon className="h-3 w-3 mr-1" />
        {config.label}
      </Badge>
    );
  };

  const getUrgencyBadge = (urgency: string) => {
    const urgencyConfig = {
      emergency: {
        label: "Emergency",
        className: "bg-red-100 text-red-700 border-red-200",
        icon: AlertCircle,
      },
      urgent: {
        label: "Urgent",
        className: "bg-orange-100 text-orange-700 border-orange-200",
        icon: Clock,
      },
      scheduled: {
        label: "Scheduled",
        className: "bg-blue-100 text-blue-700 border-blue-200",
        icon: Calendar,
      },
    };

    const config =
      urgencyConfig[urgency as keyof typeof urgencyConfig] || {
        label: urgency,
        className: "bg-gray-100 text-gray-700 border-gray-200",
        icon: Clock,
      };

    const Icon = config.icon;

    return (
      <Badge className={cn("border", config.className)}>
        <Icon className="h-3 w-3 mr-1" />
        {config.label}
      </Badge>
    );
  };

  const resetFilters = () => {
    setSearchTerm("");
    setStatusFilter("all");
    setUrgencyFilter("all");
    setSortBy("recent");
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center items-center h-64">
          <LoaderCircle className="h-8 w-8 animate-spin text-rose-600" />
          <span className="ml-2">Loading donation requests...</span>
        </div>
      </div>
    );
  }

  if (error && requests.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <Card>
          <CardContent className="py-12 text-center">
            <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Error loading donation requests
            </h3>
            <p className="text-gray-600">{error}</p>
            <Button
              className="mt-4"
              onClick={() => window.location.reload()}
            >
              Try Again
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Donation Requests
          </h1>
          <p className="text-lg text-gray-600">
            View and manage all blood donation requests in the system.
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Filter className="h-5 w-5 mr-2 text-rose-600" />
              Filters & Search
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="search">Search</Label>
                <div className="relative">
                  <Search className="h-4 w-4 absolute top-3 left-3 text-gray-400" />
                  <Input
                    id="search"
                    placeholder="Search requests..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger id="status">
                    <SelectValue placeholder="All statuses" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="contacted">Contacted</SelectItem>
                    <SelectItem value="confirmed">Confirmed</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="urgency">Urgency</Label>
                <Select value={urgencyFilter} onValueChange={setUrgencyFilter}>
                  <SelectTrigger id="urgency">
                    <SelectValue placeholder="All urgency levels" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Urgency Levels</SelectItem>
                    <SelectItem value="emergency">Emergency</SelectItem>
                    <SelectItem value="urgent">Urgent</SelectItem>
                    <SelectItem value="scheduled">Scheduled</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="sort">Sort By</Label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger id="sort">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recent">Most Recent</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                    <SelectItem value="urgency">By Urgency</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <p className="text-sm text-gray-600">
                Showing {filteredRequests.length} of {requests.length} requests
              </p>
              <Button variant="outline" size="sm" onClick={resetFilters}>
                Reset Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Requests List */}
        {filteredRequests.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <Heart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No donation requests found
              </h3>
              <p className="text-gray-600 mb-4">
                {searchTerm || statusFilter !== "all" || urgencyFilter !== "all"
                  ? "Try adjusting your filters to see more results."
                  : "No donation requests have been submitted yet."}
              </p>
              {searchTerm || statusFilter !== "all" || urgencyFilter !== "all" ? (
                <Button variant="outline" onClick={resetFilters}>
                  Clear Filters
                </Button>
              ) : (
                <Link href="/request-donation">
                  <Button className="bg-rose-600 hover:bg-rose-700 text-white">
                    <Heart className="h-4 w-4 mr-2" />
                    Create Request
                  </Button>
                </Link>
              )}
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {filteredRequests.map((request) => (
              <Card
                key={request._id}
                className="hover:shadow-md transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Heart className="h-5 w-5 text-rose-600" />
                        Request #{request._id.slice(-6).toUpperCase()}
                      </CardTitle>
                      <CardDescription className="mt-1">
                        Created on {format(parseISO(request.createdAt), "PPP")}
                      </CardDescription>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {getStatusBadge(request.status)}
                      {getUrgencyBadge(request.requestDetails.urgencyLevel)}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Requester Information */}
                    <div>
                      <h3 className="font-semibold text-sm text-gray-500 mb-3 flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        Requester Information
                      </h3>
                      <div className="space-y-2 text-sm">
                        <p>
                          <span className="font-medium">Name:</span>{" "}
                          {request.requester.firstName}{" "}
                          {request.requester.lastName}
                        </p>
                        <p>
                          <span className="font-medium">Email:</span>{" "}
                          <a
                            href={`mailto:${request.requester.email}`}
                            className="text-rose-600 hover:underline"
                          >
                            {request.requester.email}
                          </a>
                        </p>
                        <p>
                          <span className="font-medium">Phone:</span>{" "}
                          <a
                            href={`tel:${request.requester.phone}`}
                            className="text-rose-600 hover:underline"
                          >
                            {request.requester.phone}
                          </a>
                        </p>
                        {request.requester.relationshipToPatient && (
                          <p>
                            <span className="font-medium">Relationship:</span>{" "}
                            {request.requester.relationshipToPatient}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Patient Information */}
                    <div>
                      <h3 className="font-semibold text-sm text-gray-500 mb-3 flex items-center">
                        <UserCheck className="h-4 w-4 mr-2" />
                        Patient Information
                      </h3>
                      <div className="space-y-2 text-sm">
                        <p>
                          <span className="font-medium">Name:</span>{" "}
                          {request.patient.firstName}{" "}
                          {request.patient.lastName}
                        </p>
                        <p>
                          <span className="font-medium">Blood Type Needed:</span>{" "}
                          <Badge className="bg-rose-100 text-rose-700 border-rose-200">
                            <Droplet className="h-3 w-3 mr-1 fill-current" />
                            {request.patient.bloodType}
                          </Badge>
                        </p>
                      </div>
                    </div>

                    {/* Request Details */}
                    <div>
                      <h3 className="font-semibold text-sm text-gray-500 mb-3 flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        Request Details
                      </h3>
                      <div className="space-y-2 text-sm">
                        {request.requestDetails.neededDate && (
                          <p>
                            <span className="font-medium">Date Needed:</span>{" "}
                            {format(
                              parseISO(request.requestDetails.neededDate),
                              "PPP"
                            )}
                          </p>
                        )}
                        {request.requestDetails.neededTime && (
                          <p>
                            <span className="font-medium">Time Preference:</span>{" "}
                            {request.requestDetails.neededTime}
                          </p>
                        )}
                        {request.requestDetails.reason && (
                          <p>
                            <span className="font-medium">Reason:</span>{" "}
                            {request.requestDetails.reason}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Medical Facility */}
                    <div>
                      <h3 className="font-semibold text-sm text-gray-500 mb-3 flex items-center">
                        <Building2 className="h-4 w-4 mr-2" />
                        Medical Facility
                      </h3>
                      <div className="space-y-2 text-sm">
                        <p>
                          <span className="font-medium">Facility:</span>{" "}
                          {request.requestDetails.medicalFacility}
                        </p>
                        {request.requestDetails.facilityAddress && (
                          <p>
                            <MapPin className="h-3 w-3 inline mr-1" />
                            {request.requestDetails.facilityAddress}
                            {request.requestDetails.facilityCity && (
                              <>
                                , {request.requestDetails.facilityCity}
                                {request.requestDetails.facilityState && (
                                  <> {request.requestDetails.facilityState}</>
                                )}
                                {request.requestDetails.facilityZipCode && (
                                  <> {request.requestDetails.facilityZipCode}</>
                                )}
                              </>
                            )}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Donor Information (if available) */}
                  {request.donorName && (
                    <>
                      <Separator className="my-4" />
                      <div>
                        <h3 className="font-semibold text-sm text-gray-500 mb-2 flex items-center">
                          <Heart className="h-4 w-4 mr-2" />
                          Selected Donor
                        </h3>
                        <p className="text-sm">
                          <span className="font-medium">Donor:</span>{" "}
                          {request.donorName}
                          {request.donorId && (
                            <span className="text-gray-500 ml-2">
                              (ID: {request.donorId.slice(-6)})
                            </span>
                          )}
                        </p>
                      </div>
                    </>
                  )}

                  {/* Additional Notes */}
                  {request.requestDetails.additionalNotes && (
                    <>
                      <Separator className="my-4" />
                      <div>
                        <h3 className="font-semibold text-sm text-gray-500 mb-2 flex items-center">
                          <FileText className="h-4 w-4 mr-2" />
                          Additional Notes
                        </h3>
                        <p className="text-sm text-gray-700">
                          {request.requestDetails.additionalNotes}
                        </p>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

