'use client'

import Image from 'next/image'
import { MapPin, Phone, Mail, ExternalLink, CheckCircle, X } from 'lucide-react';
import { useState } from 'react';
import Workinghours from '@/components/landingpage/Workinghours';
import { Philosopher } from 'next/font/google'
import { cn } from '@/lib/utils';

const philosopher = Philosopher({ subsets: ['latin'], weight: ["400", '700'] })

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        description: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        }

        if (!formData.description.trim()) {
            newErrors.description = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            setShowSuccessPopup(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                description: ''
            });
        } catch (error) {
            alert('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const closeSuccessPopup = () => {
        setShowSuccessPopup(false);
    };

    return (
        <section className="py-16 px-3 md:px-10">
            {showSuccessPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 ">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                Message Received!
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Thank you for contacting us. We have received your message and will get back to you within 24 hours.
                            </p>
                            <button
                                onClick={closeSuccessPopup}
                                className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105"
                            >
                                Close
                            </button>
                        </div>
                        <button
                            onClick={closeSuccessPopup}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            )}
            <div>
                <div className=' grid grid-cols-1 md:grid-cols-5  border md:h-screen overflow-hidden  '>

                    {/* Right Side - Form */}
                    <div className="p-8 lg:p-12 w-full  col-span-1 md:col-span-3 ">
                        <div
                            className={cn("text-2xl font-light mb-6 text-black  ", philosopher.className)}>
                           Get in Touch With Our Friendly Team — We're Here to Help You Find Your Perfect Car
                        </div >
                        <form onSubmit={handleSubmit} className="space-y-6 my-auto ">
                            {/* Name Field */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Your Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Name"
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                                        }`}
                                />
                                {errors.name && (
                                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                                )}
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Email"
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                                        }`}
                                />
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                                )}
                            </div>

                            {/* Phone Field */}
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="Phone"
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                                        }`}
                                />
                                {errors.phone && (
                                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                                )}
                            </div>

                            {/* Description Field */}
                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                                    Description <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    rows={4}
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    placeholder="Message"
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 resize-none ${errors.description ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                                        }`}
                                />
                                {errors.description && (
                                    <p className="mt-1 text-sm text-red-600">{errors.description}</p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center justify-center">
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                        Sending...
                                    </div>
                                ) : (
                                    'Send'
                                )}
                            </button>
                        </form>
                    </div>
                    <div className=' w-full h-full col-span-1 md:col-span-2  border '>
                        <Image src='/front-view-woman-wearing-headset-working-desk-with-laptop_23-2148434726.jpg' width={1080} height={1080} alt="sofa image" className='   object-cover w-full md:h-[100vh] '></Image>
                    </div>
                </div>

                <div className="h-3 border-x border-neutral-300 bg-[repeating-linear-gradient(-45deg,var(--color-neutral-300),var(--color-neutral-300)_1px,transparent_1px,transparent_6px)]"></div>
                <div className="grid divide-y border md:grid-cols-4 md:gap-4 md:divide-x md:divide-y-0">
                    <div className="flex flex-col justify-center items-center  space-y-8 p-6 sm:p-6">
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <MapPin className="w-8 h-8 text-orange-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            789 Oak Lane, Lakeside, TX 54321
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center  space-y-8 p-6 sm:p-6">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Phone className="w-8 h-8 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Contact</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            1800-2541-2541, 1800-14-0147
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center  space-y-8 p-6 sm:p-6">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Mail className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            pagedone1234@gmail.com
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center  space-y-8 p-6 sm:p-6">
                        <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <ExternalLink className="w-8 h-8 text-pink-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Google Map</h3>
                        <p className="text-gray-600 text-sm mb-2">Discover our prime location</p>
                        <a href="https://www.google.com/maps" target='_blank' className="text-indigo-600 hover:text-indigo-700 font-medium text-sm transition-colors duration-200">
                            View More
                        </a>
                    </div>
                </div>
            </div>
            <Workinghours></Workinghours>
        </section>
    )
}


