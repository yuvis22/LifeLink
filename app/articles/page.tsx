"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Filter,
  Clock,
  Calendar,
  ChevronRight,
  BookOpen,
  Tag,
  FileText,
  ChevronLeft,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const articles = [
  {
    id: 1,
    title: "Benefits of Regular Blood Donation",
    excerpt:
      "Discover how regular blood donation can improve your health while saving lives.",
    content: `
      <p>Regular blood donation offers numerous health benefits beyond the satisfaction of saving lives. By donating blood, you're not just helping others—you're also taking care of your own health.</p>

      <h2>Reduced Risk of Heart Disease</h2>
      <p>Regular blood donations can reduce the risk of heart attacks and strokes. By donating blood, you remove iron from your system, which can reduce the thickness of your blood and decrease the risk of heart disease.</p>

      <h2>Free Health Check-up</h2>
      <p>Before donating blood, you'll receive a mini health check-up including pulse, blood pressure, body temperature, and hemoglobin levels. This regular monitoring can help detect health issues early.</p>

      <h2>Enhanced Blood Cell Production</h2>
      <p>After donation, your body works to replenish the blood loss by generating new blood cells, which can help maintain good health and rejuvenate your system.</p>

      <h2>Calorie Burn</h2>
      <p>Donating blood burns calories! The energy your body uses to replace the blood you've donated can burn up to 650 calories per donation.</p>

      <h2>Psychological Benefits</h2>
      <p>The knowledge that your donation could save up to three lives provides emotional satisfaction. This act of altruism can reduce stress and improve emotional well-being.</p>

      <p>Remember, most healthy adults can donate blood every 56 days. Regular donation not only helps those in need but contributes to your overall health maintenance.</p>
    `,
    publishDate: "2025-04-15",
    readTime: "5 min read",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-42an9fU4ete0WZkRXjL5fGsVzh80ihYqqg&s",
    category: "Health",
    tags: ["health benefits", "heart health", "blood donation"],
  },
  {
    id: 2,
    title: "What to Expect During Your First Blood Donation",
    excerpt:
      "A step-by-step guide to your first blood donation experience and how to prepare.",
    content: `
      <p>Donating blood for the first time can be intimidating, but understanding the process can help ease any anxiety. This guide walks you through what to expect during your first blood donation experience.</p>

      <h2>Before Your Appointment</h2>
      <p>Prepare for your donation by eating iron-rich foods like spinach, red meat, and beans in the weeks leading up to your appointment. Stay hydrated by drinking plenty of water the day before and the day of your donation. Have a substantial meal 2-3 hours before donating.</p>

      <h2>The Donation Process</h2>
      <p>Upon arrival, you'll complete a registration form and answer questions about your health history. A technician will check your vital signs, including temperature, pulse, blood pressure, and hemoglobin levels.</p>

      <p>The actual donation takes only about 8-10 minutes. A sterile needle is inserted into your arm, and blood flows into a collection bag. Throughout the process, you'll be seated comfortably or lying down.</p>

      <h2>After Donating</h2>
      <p>After your donation, you'll rest for 10-15 minutes and enjoy refreshments. This helps your body adjust to the slight decrease in fluid volume. You should avoid strenuous activity for the rest of the day and keep drinking fluids.</p>

      <p>Most people feel fine after donating, though some may experience slight dizziness or fatigue. These symptoms typically resolve quickly with rest and hydration.</p>

      <h2>Tips for a Successful Donation</h2>
      <ul>
        <li>Wear comfortable clothing with sleeves that can be rolled up</li>
        <li>Bring a list of medications you're taking</li>
        <li>Have identification with you</li>
        <li>Plan to spend about an hour at the donation center</li>
        <li>Bring a friend for support if you're nervous</li>
      </ul>

      <p>Remember, your single donation can save up to three lives! The entire process, from arrival to departure, usually takes about an hour, with the actual blood draw lasting only about 10 minutes.</p>
    `,
    publishDate: "2025-04-10",
    readTime: "4 min read",
    image:
      "https://images.pexels.com/photos/6823742/pexels-photo-6823742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Guide",
    tags: ["first time", "preparation", "donation process"],
  },
  {
    id: 3,
    title: "Understanding Different Blood Types and Compatibility",
    excerpt:
      "Learn about the different blood types, their characteristics, and compatibility for transfusions.",
    content: `
      <p>Blood types play a crucial role in transfusions. Understanding your blood type and its compatibility with others can be life-saving knowledge.</p>

      <h2>The ABO Blood Group System</h2>
      <p>There are four main blood types: A, B, AB, and O. Each type is also classified by the Rhesus (Rh) factor, which can be either positive (+) or negative (-), creating eight common blood types: A+, A-, B+, B-, AB+, AB-, O+, and O-.</p>

      <h2>What Determines Blood Type?</h2>
      <p>Blood types are determined by antigens present on red blood cells. Type A blood has A antigens, Type B has B antigens, Type AB has both, and Type O has neither. The Rh factor adds another antigen (D) when positive.</p>

      <h2>Blood Type Compatibility</h2>
      <p>For safe transfusions, donors and recipients must have compatible blood types. Here's a quick guide:</p>

      <h3>Universal Donor and Recipient</h3>
      <p>O- is known as the universal donor because it can be given to any blood type. AB+ is the universal recipient as it can receive any blood type.</p>

      <h3>Type O</h3>
      <p>O+ can donate to: O+, A+, B+, AB+<br>
      O+ can receive from: O+, O-</p>
      <p>O- can donate to: All blood types<br>
      O- can receive from: O- only</p>

      <h3>Type A</h3>
      <p>A+ can donate to: A+, AB+<br>
      A+ can receive from: A+, A-, O+, O-</p>
      <p>A- can donate to: A+, A-, AB+, AB-<br>
      A- can receive from: A-, O-</p>

      <h3>Type B</h3>
      <p>B+ can donate to: B+, AB+<br>
      B+ can receive from: B+, B-, O+, O-</p>
      <p>B- can donate to: B+, B-, AB+, AB-<br>
      B- can receive from: B-, O-</p>

      <h3>Type AB</h3>
      <p>AB+ can donate to: AB+ only<br>
      AB+ can receive from: All blood types</p>
      <p>AB- can donate to: AB+, AB-<br>
      AB- can receive from: A-, B-, AB-, O-</p>

      <h2>Population Distribution</h2>
      <p>The distribution of blood types varies by ethnicity and region. Globally, O+ is the most common blood type (about 38% of the population), while AB- is the rarest (less than 1%).</p>

      <p>Knowing your blood type is essential for medical emergencies. Consider getting tested if you don't already know your blood type, and consider becoming a donor, especially if you have a rare blood type.</p>
    `,
    publishDate: "2025-04-05",
    readTime: "6 min read",
    image:
      "https://images.pexels.com/photos/6823834/pexels-photo-6823834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Education",
    tags: ["blood types", "compatibility", "transfusion"],
  },
  {
    id: 4,
    title: "The Science Behind Blood Transfusions",
    excerpt:
      "Explore the fascinating science that makes blood transfusions possible and life-saving.",
    content: `
      <p>Blood transfusions are one of modern medicine's most remarkable achievements, saving countless lives every day. But what exactly happens during this process?</p>

      <h2>History of Blood Transfusions</h2>
      <p>The journey to safe blood transfusions was long and sometimes perilous. Early attempts date back to the 17th century, but it wasn't until the early 1900s, when Karl Landsteiner discovered blood types, that transfusions became significantly safer.</p>

      <h2>The Collection Process</h2>
      <p>Modern blood collection involves drawing about 450 ml of blood from a donor into sterile bags containing anticoagulants to prevent clotting. This blood can be separated into components (red cells, platelets, and plasma) to benefit multiple recipients.</p>

      <h2>Testing and Processing</h2>
      <p>All donated blood undergoes rigorous testing for infectious diseases including HIV, hepatitis B and C, and syphilis. The blood is also typed and screened for antibodies to minimize the risk of transfusion reactions.</p>

      <h2>Storage and Preservation</h2>
      <p>Blood components have different shelf lives: red blood cells can be stored for up to 42 days at 4°C, platelets for 5-7 days at room temperature with constant agitation, and plasma can be frozen for up to one year.</p>

      <h2>The Transfusion Process</h2>
      <p>During a transfusion, blood components are delivered directly into the recipient's bloodstream through an intravenous (IV) line. The patient is monitored closely for any adverse reactions, especially during the first 15 minutes when most reactions occur.</p>

      <h2>Technological Advances</h2>
      <p>Recent advances include pathogen reduction technologies, better testing methods, and development of artificial blood substitutes. Researchers are also exploring ways to extend storage life and create universal blood products.</p>

      <p>Understanding the science behind blood transfusions highlights the importance of regular blood donation. Every contribution helps maintain the supply chain that keeps this vital medical procedure available when needed.</p>
    `,
    publishDate: "2025-03-25",
    readTime: "7 min read",
    image:
      "https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Science",
    tags: ["transfusion", "medical science", "blood storage"],
  },
  {
    id: 5,
    title: "Common Myths About Blood Donation Debunked",
    excerpt:
      "Separating fact from fiction about blood donation to encourage more people to give.",
    content: `
      <p>Despite the constant need for blood donations, many misconceptions prevent potential donors from participating. Let's clear up some common myths.</p>

      <h2>Myth 1: "Donating blood is painful."</h2>
      <p><strong>Fact:</strong> Most donors feel only a brief pinch when the needle is inserted. The actual donation process is typically painless. Trained staff ensure your comfort throughout the process.</p>

      <h2>Myth 2: "I don't have enough blood to spare."</h2>
      <p><strong>Fact:</strong> The average adult has 10-12 pints of blood, and a standard donation is just 1 pint (about 10% of your total). Your body replaces the fluid within 24 hours and the red blood cells within 4-6 weeks.</p>

      <h2>Myth 3: "I can get infections or diseases from donating blood."</h2>
      <p><strong>Fact:</strong> All equipment used for blood collection is sterile and used only once. There is no risk of contracting any disease through donating blood.</p>

      <h2>Myth 4: "I'm taking medications, so I can't donate."</h2>
      <p><strong>Fact:</strong> Many medications do not disqualify you from donating. While some medications require a waiting period after your last dose, most common medications like blood pressure medicine, birth control, and antidepressants don't prevent donation.</p>

      <h2>Myth 5: "I'm too old/young to donate."</h2>
      <p><strong>Fact:</strong> While age requirements vary slightly by location, most blood centers accept donors from age 16 or 17 up to 75 or older, as long as they meet health criteria.</p>

      <h2>Myth 6: "The blood center always has enough blood."</h2>
      <p><strong>Fact:</strong> Blood shortages are common, especially during holidays and summer months. Blood has a limited shelf life (42 days for red cells), so a constant supply is needed.</p>

      <h2>Myth 7: "My blood type isn't needed."</h2>
      <p><strong>Fact:</strong> All blood types are needed. While O-negative is always in high demand as the universal donor type, every type has specific uses and recipients who need it.</p>

      <p>By understanding the facts about blood donation, more people can feel comfortable participating in this life-saving act. One donation can save up to three lives—a remarkable impact from just an hour of your time.</p>
    `,
    publishDate: "2025-03-15",
    readTime: "5 min read",
    image:
      "https://images.pexels.com/photos/6823669/pexels-photo-6823669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Education",
    tags: ["myths", "facts", "misconceptions"],
  },
  {
    id: 6,
    title: "How Blood Donations Help During Disasters",
    excerpt:
      "Learn about the critical role of blood donations during natural disasters and emergency situations.",
    content: `
      <p>When disasters strike, blood donations become even more critical. Whether it's a hurricane, earthquake, mass shooting, or other catastrophe, having an adequate blood supply can mean the difference between life and death for victims.</p>

      <h2>The Surge in Demand</h2>
      <p>During disasters, blood needs can increase dramatically. Trauma victims may require 50 units or more of blood products. Burns, crush injuries, and other trauma can all require significant transfusions.</p>

      <h2>The Challenge of Collection During Disasters</h2>
      <p>Ironically, many disasters disrupt the very blood collection systems needed to respond to them. Power outages, damaged infrastructure, and displaced populations can make it difficult to collect blood in affected areas.</p>

      <h2>The Importance of Existing Inventory</h2>
      <p>When disaster strikes, medical professionals rely on blood that was already on the shelves. This highlights the critical importance of regular donations before emergencies occur. The blood products that save lives during a disaster were likely donated days or weeks earlier.</p>

      <h2>Types of Blood Products Needed</h2>
      <p>Different disaster scenarios create needs for specific blood products:</p>
      <ul>
        <li><strong>Red blood cells:</strong> Critical for trauma patients with significant blood loss</li>
        <li><strong>Platelets:</strong> Essential for burn victims and patients with internal bleeding</li>
        <li><strong>Plasma:</strong> Used to treat shock and help with clotting</li>
      </ul>

      <h2>The National Blood Supply System</h2>
      <p>During major disasters, blood centers across the country coordinate to send supplies where they're most needed. This national system ensures rapid response, but it requires consistent donations nationwide to maintain readiness.</p>

      <h2>How You Can Help</h2>
      <p>The best way to help during disasters is to be a regular donor before they occur. If you're eligible, consider donating blood every 56 days (for whole blood) to help maintain a stable supply.</p>

      <p>In the aftermath of widely publicized disasters, blood centers often see a surge in donations. While this generosity is commendable, establishing a habit of regular donation throughout the year is even more valuable for disaster preparedness.</p>

      <p>By becoming a regular donor, you're helping to ensure that blood is available when the unthinkable happens, potentially saving lives when minutes count.</p>
    `,
    publishDate: "2025-03-01",
    readTime: "6 min read",
    image:
      "https://images.pexels.com/photos/7659709/pexels-photo-7659709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Emergency",
    tags: ["disasters", "emergency response", "crisis"],
  },
];

const categories = [
  { name: "All", count: articles.length },
  {
    name: "Health",
    count: articles.filter((a) => a.category === "Health").length,
  },
  {
    name: "Guide",
    count: articles.filter((a) => a.category === "Guide").length,
  },
  {
    name: "Education",
    count: articles.filter((a) => a.category === "Education").length,
  },
  {
    name: "Science",
    count: articles.filter((a) => a.category === "Science").length,
  },
  {
    name: "Emergency",
    count: articles.filter((a) => a.category === "Emergency").length,
  },
];

// Extract all unique tags
const allTags: string[] = Array.from(
  new Set(articles.flatMap((article) => article.tags))
);

const ArticlesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTag, setSelectedTag] = useState("");
  const [sort, setSort] = useState("newest");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredArticles = articles
    .filter((article) => {
      // Apply search filter
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        return (
          article.title.toLowerCase().includes(searchLower) ||
          article.excerpt.toLowerCase().includes(searchLower) ||
          article.content.toLowerCase().includes(searchLower)
        );
      }
      return true;
    })
    .filter((article) => {
      // Apply category filter
      if (selectedCategory !== "All") {
        return article.category === selectedCategory;
      }
      return true;
    })
    .filter((article) => {
      // Apply tag filter
      if (selectedTag) {
        return article.tags.includes(selectedTag);
      }
      return true;
    })
    .sort((a, b) => {
      // Apply sorting
      if (sort === "newest") {
        return (
          new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
        );
      } else {
        return (
          new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime()
        );
      }
    });

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Blood Donation Articles
        </h1>
        <p className="text-lg text-gray-600">
          Educational resources and information about blood donation and its
          impact.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search articles..."
              className="pl-10"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>

          <div className="flex items-center gap-4">
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Filter className="h-4 w-4 mr-2 text-rose-600" />
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={cn(
                        "w-full text-left px-3 py-2 rounded-lg flex justify-between items-center text-sm",
                        selectedCategory === category.name
                          ? "bg-rose-50 text-rose-700 font-medium"
                          : "hover:bg-gray-100"
                      )}
                    >
                      <span>{category.name}</span>
                      <span className="bg-gray-100 text-gray-700 rounded-full px-2 py-0.5 text-xs">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Tag className="h-4 w-4 mr-2 text-rose-600" />
                  Popular Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {allTags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className={cn(
                        "cursor-pointer",
                        selectedTag === tag
                          ? "bg-rose-50 text-rose-700 border-rose-200"
                          : "bg-gray-50 hover:bg-gray-100"
                      )}
                      onClick={() =>
                        setSelectedTag(selectedTag === tag ? "" : tag)
                      }
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <Separator />

              <div className="bg-rose-50 rounded-lg p-4 border border-rose-100">
                <h3 className="font-semibold text-rose-800 mb-2 flex items-center">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Reading Time
                </h3>
                <p className="text-sm text-rose-700">
                  Our articles are concise and informative, with most taking 5-7
                  minutes to read. Perfect for a quick coffee break or waiting
                  room read.
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredArticles.map((article) => (
                  <Card
                    key={article.id}
                    className="overflow-hidden hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="h-48 relative">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-rose-600 text-white hover:bg-rose-700">
                          {article.category}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>
                          {new Date(article.publishDate).toLocaleDateString()}
                        </span>
                        <span className="mx-2">•</span>
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{article.readTime}</span>
                      </div>
                      <h3 className="font-semibold text-lg text-gray-900">
                        {article.title}
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 line-clamp-2">
                        {article.excerpt}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="ghost"
                        className="p-0 h-auto text-rose-600"
                      >
                        <Link
                          href={`/articles/${article.id}`}
                          className="flex items-center"
                        >
                          Read More
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <FileText className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No articles found
                </h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  We couldn&apos;t find any articles matching your search
                  criteria. Try adjusting your filters or search term.
                </p>
                <Button
                  className="mt-4 bg-rose-600 hover:bg-rose-700 text-white"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                    setSelectedTag("");
                  }}
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;
