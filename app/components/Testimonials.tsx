"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    quote:
      "Artify-AI transformed my creative process. Their AI tools helped me explore new artistic directions I never thought possible.",
    author: "Jane Doe",
    position: "Digital Artist",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "As a professional photographer, I was skeptical about AI art. Artify-AI changed my perspective with their innovative approach to blending human creativity with AI.",
    author: "John Smith",
    position: "Photographer",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "The collaboration tools at Artify-AI allowed our design team to work together in ways we never imagined. Our productivity and creativity have soared.",
    author: "Emily Brown",
    position: "Creative Director, DesignCo",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl font-black mb-16 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What Our Users Say
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              className="bg-gray-800 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.author}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-bold text-white">{testimonial.author}</p>
                  <p className="text-gray-400">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

