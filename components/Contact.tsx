"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, AlertTriangle } from "lucide-react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormData } from "@/lib/schema";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const fullNameBorderControls = useAnimation();
  const emailBorderControls = useAnimation();
  const messageBorderControls = useAnimation();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate form submission (e.g., API call)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    reset();
    toast({
      title: "Message sent!",
      description: "We'll get back to you soon.",
    });
    console.log("Form data submitted:", data);
  };

  return (
    <motion.section
      id="contact"
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Contact
      </motion.h2>
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {[
            { icon: Mail, text: "john@example.com" },
            { icon: Phone, text: "+1 (123) 456-7890" },
            { icon: MapPin, text: "New York, NY" },
          ].map(({ icon: Icon, text }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <Icon className="w-6 h-6 mr-2 text-purple-400" />
              <span className="text-gray-700 dark:text-gray-300">{text}</span>
            </motion.div>
          ))}
        </div>
        <motion.form
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
        >
          <div className="relative">
            <Input
              {...register("fullName")}
              placeholder="Full Name"
              onFocus={() => fullNameBorderControls.start({ scaleX: 1 })}
              onBlur={() => fullNameBorderControls.start({ scaleX: 0 })}
              className="w-full px-3 py-2 bg-transparent border-t-0 border-r-0 border-l-0 dark:text-white border-b-2 border-gray-700 focus:outline-none rounded-[0px]"
            />
            <motion.div
              className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-400 origin-left"
              initial={{ scaleX: 0 }}
              animate={fullNameBorderControls}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </div>
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-3">
              <AlertTriangle className="inline mr-2 h-5 w-5" />
              {errors.fullName.message}
            </p>
          )}

          <div className="relative">
            <Input
              {...register("email")}
              type="email"
              placeholder="Email"
              onFocus={() => emailBorderControls.start({ scaleX: 1 })}
              onBlur={() => emailBorderControls.start({ scaleX: 0 })}
              className="w-full px-3 py-2 bg-transparent border-t-0 border-r-0 border-l-0 dark:text-white border-b-2 border-gray-700 focus:outline-none rounded-[0px]"
            />
            <motion.div
              className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-400 origin-left"
              initial={{ scaleX: 0 }}
              animate={emailBorderControls}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm mt-3">
              <AlertTriangle className="inline mr-2 h-5 w-5" />
              {errors.email.message}
            </p>
          )}

          <div className="relative">
            <Textarea
              {...register("message")}
              placeholder="Your Message"
              onFocus={() => messageBorderControls.start({ scaleX: 1 })}
              onBlur={() => messageBorderControls.start({ scaleX: 0 })}
              className="w-full px-3 py-2 bg-transparent border-t-0 border-r-0 border-l-0 dark:text-white border-b-2 border-gray-700 focus:outline-none h-32 resize-none rounded-[0px]"
            />
            <motion.div
              className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-400 origin-left"
              initial={{ scaleX: 0 }}
              animate={messageBorderControls}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </div>
          {errors.message && (
            <p className="text-red-500 text-sm mt-3">
              <AlertTriangle className="inline mr-2 h-5 w-5" />
              {errors.message.message}
            </p>
          )}

          <div className="col-span-1 md:col-span-2 w-fit place-self-end">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full dark:bg-gray-500 dark:hover:bg-purple-400 hover:bg-purple-400 dark:text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out flex gap-2 items-center overflow-hidden"
            >
              <AnimatePresence>
                {!isSubmitting ? (
                  <motion.span
                    key="send"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    Send Message
                  </motion.span>
                ) : (
                  <motion.span
                    key="sending"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    Sending...
                  </motion.span>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </motion.form>
      </div>
    </motion.section>
  );
}
