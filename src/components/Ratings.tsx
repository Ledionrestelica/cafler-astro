import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Stars from "./Stars";

const testimonials = [
  {
    quote: "It really works.",
    content:
      "I downloaded Pocket today and turned $5000 into $25,000 in half an hour.",
    author: "CrazyInvestor",
  },
  {
    quote: "Screw garages.",
    content:
      "I barely made any money investing in mutual funds. With Pocket, I'm doubling my net-worth every single month.",
    author: "JordanBelfort1962",
  },
  {
    quote: "Wish I could give 6 stars",
    content:
      "This is literally the most important app you will ever download in your life. Get on this before it's so popular that everyone else is getting these tips too.",
    author: "SarahLuvzCash",
  },
  {
    quote: "Wish I could give 6 stars",
    content:
      "This is literally the most important app you will ever download in your life. Get on this before it's so popular that everyone else is getting these tips too.",
    author: "SarahLuvzCash",
  },
  {
    quote: "Wish I could give 6 stars",
    content:
      "This is literally the most important app you will ever download in your life. Get on this before it's so popular that everyone else is getting these tips too.",
    author: "SarahLuvzCash",
  },
  {
    quote: "Wish I could give 6 stars",
    content:
      "This is literally the most important app you will ever download in your life. Get on this before it's so popular that everyone else is getting these tips too.",
    author: "SarahLuvzCash",
  },
];

export default function RatingCarousel() {
  return (
    <div className="bg-[#191919] py-[80px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto space-y-[16px] px-4">
        <h2 className="uppercase text-2xl black text-center text-white mb-2">
          Happy Customers
        </h2>

        <div className="relative w-full">
          <Carousel className="w-full">
            <CarouselContent className="">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="w-full">
                  <Card className="rounded-[12px] bg-transparent border-none text-white h-max">
                    <CardContent className="flex items-center justify-center flex-col text-center mt-[12px]">
                      <h3 className="text-xl semibold mb-2">
                        "{testimonial.quote}"
                      </h3>
                      <p className="flex-grow mb-4 semibold">
                        {testimonial.content}
                      </p>
                      <div className="flex gap-4 items-center">
                        <p className="regular text-white">
                          -{testimonial.author}
                        </p>
                        <div className="flex mb-2 gap-1">
                          <Stars star={5} />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-[10px]" />
            <CarouselNext className="absolute right-[10px]" />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
