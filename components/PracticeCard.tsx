'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface PracticeCardProps {
  icon: React.ReactNode
  title: string
  caseCount: number
  category: string
  description: string
}

export function PracticeCard({
  icon,
  title,
  caseCount,
  category,
  description,
}: PracticeCardProps) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-[20px] bg-white shadow-lg transition-all duration-500 hover:shadow-2xl">

      {/* Header */}
      <div className="bg-[#FBF2E8] px-8 py-8 transition-all duration-500 group-hover:bg-[#EAA322]">

        <div className="flex items-start justify-between">

          {/* Icon */}
          <div className="text-[46px] text-[#0F5EA8]">
            {icon}
          </div>

          {/* Animated Completed Case Button */}
          <motion.button
            initial="rest"
            whileHover="hover"
            className="relative overflow-hidden rounded-full border-2 border-[#EAA322] bg-white px-5 py-2 text-sm font-semibold"
          >
            {/* Animated Background */}
            <motion.div
              variants={{
                rest: {
                  width: 0,
                },
                hover: {
                  width: '110%',
                },
              }}
              transition={{
                duration: 0.35,
                ease: 'easeInOut',
              }}
              className="absolute left-1/2 top-0 h-full -translate-x-1/2 bg-[#222]"
            />

            {/* Border */}
            <motion.div
              variants={{
                rest: {
                  borderColor: '#EAA322',
                },
                hover: {
                  borderColor: '#222',
                },
              }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 rounded-full border-2"
            />

            {/* Text */}
            <motion.span
              variants={{
                rest: {
                  color: '#222',
                },
                hover: {
                  color: '#fff',
                },
              }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              Completed Case ({caseCount})
            </motion.span>
          </motion.button>

        </div>

        {/* Title */}
        <h3 className="mt-8 text-[34px] font-bold leading-none text-[#0F5EA8]">
          {title}
        </h3>

      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col bg-[#F3F3F3] px-8 py-8 transition-all duration-500 group-hover:bg-[#1F4F8D]">

        {/* Description */}
        <p className="flex-1 text-[17px] leading-9 text-[#333333] transition-all duration-500 group-hover:text-white">
          {description}
        </p>

        {/* Bottom */}
        <div className="mt-6">

          {/* Progress Line */}
          <div className="flex h-1 w-32 overflow-hidden rounded-full">

            <motion.div
              className="h-full bg-[#EAA322]"
              initial={{ width: 48 }}
              whileHover={{ width: 128 }}
              transition={{
                duration: 0.3,
                ease: 'easeInOut',
              }}
            />

            <motion.div
              className="h-full flex-1 bg-[#1F4F8D]"
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 0 }}
              transition={{
                duration: 0.2,
              }}
            />

          </div>

          {/* Category */}
          <h4 className="mt-5 text-[18px] font-semibold text-[#444444] transition-all duration-500 group-hover:text-white">
            {category}
          </h4>

        </div>

      </div>
    </div>
  )
}
