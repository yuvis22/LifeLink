"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const articles = [
  {
    title: "Benefits of Regular Blood Donation",
    excerpt:
      "Discover how regular blood donation can improve your health while saving lives.",
    date: "Apr 15, 2025",
    readTime: "5 min read",
    image:
      "https://images.pexels.com/photos/7656532/pexels-photo-7656532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Health",
  },
  {
    title: "What to Expect During Your First Blood Donation",
    excerpt:
      "A step-by-step guide to your first blood donation experience and how to prepare.",
    date: "Apr 10, 2025",
    readTime: "4 min read",
    image:
      "https://images.pexels.com/photos/6823742/pexels-photo-6823742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Guide",
  },
  {
    title: "Understanding Different Blood Types and Compatibility",
    excerpt:
      "Learn about the different blood types, their characteristics, and compatibility for transfusions.",
    date: "Apr 5, 2025",
    readTime: "6 min read",
    image:
      "https://images.pexels.com/photos/6823834/pexels-photo-6823834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Education",
  },
];

const LatestArticles = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest <span className="text-rose-600">Articles</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Stay informed with the latest news, stories, and educational
              content about blood donation.
            </p>
          </div>
          <Link href="/articles" className="mt-4 md:mt-0">
            <Button variant="outline" className="group">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-rose-600 text-white text-xs font-semibold px-2 py-1 rounded">
                      {article.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>{article.date}</span>
                    <span className="mx-2">•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <CardTitle className="text-xl">{article.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-gray-600">
                    {article.excerpt}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Link href={`/articles/${index + 1}`} className="w-full">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-rose-600 hover:text-rose-700 p-0 group"
                    >
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
