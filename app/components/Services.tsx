"use client"

import { motion } from "framer-motion"
import { Sparkles, Code, Users, Palette } from "lucide-react"

const services = [
  {
    icon: <Sparkles className="w-12 h-12 mb-4 text-blue-500" />,
    title: "AI Art Generation",
    description:
      "Create stunning artwork with our state-of-the-art AI models that transform your ideas into visual masterpieces.",
  },
  {
    icon: <Code className="w-12 h-12 mb-4 text-green-500" />,
    title: "Creative Coding",
    description:
      "Learn programming through art with our interactive tutorials that blend Python with digital art creation.",
  },
  {
    icon: <Users className="w-12 h-12 mb-4 text-yellow-500" />,
    title: "Collaborative Creation",
    description:
      "Work together with other artists using our AI-powered collaboration tools to create unique collective projects.",
  },
  {
    icon: <Palette className="w-12 h-12 mb-4 text-purple-500" />,
    title: "NFT Art Series",
    description: "Transform your AI creations into limited-edition NFTs with our integrated blockchain technology.",
  },
]

export default function Services() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl font-black mb-16 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-gray-700 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              {service.icon}
              <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

