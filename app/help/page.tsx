'use client';

import React, { useState } from 'react';

export default function HelpPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        file: null
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-black dark:text-white mb-2">
                Help & Support
            </h1>
            <p className="text-black/70 dark:text-white/70 mb-8">
                Need assistance? Send us a message and we&apos;ll get back to you as soon as possible.
            </p>

            <div className="bg-black/5 dark:bg-white/5 backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-black dark:text-white mb-2">
                    Contact Support
                </h2>
                <p className="text-black/70 dark:text-white/70 mb-6">
                    Fill out the form below to get in touch with our support team.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-black dark:text-white mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-4 py-2 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-black text-black dark:text-white placeholder-black/50 dark:placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-black/5 dark:focus:ring-white/5"
                                placeholder="Enter your name"
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-black dark:text-white mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-2 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-black text-black dark:text-white placeholder-black/50 dark:placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-black/5 dark:focus:ring-white/5"
                                placeholder="Enter your email"
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-black dark:text-white mb-2">
                            Subject
                        </label>
                        <select
                            id="subject"
                            name="subject"
                            className="w-full px-4 py-2 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black/5 dark:focus:ring-white/5"
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        >
                            <option value="">Select a subject</option>
                            <option value="LOD">Submit LOD if you see Errors</option>
                            <option value="accountingquestion">Accounting Question</option>
                            <option value="catalogquestion">Catalog Question</option>
                            <option value="generalinquiry">General Inquiry</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-black dark:text-white mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            className="w-full px-4 py-2 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-black text-black dark:text-white placeholder-black/50 dark:placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-black/5 dark:focus:ring-white/5"
                            placeholder="Please describe what you need help with..."
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-black dark:text-white mb-2">
                            Attach a file (optional)
                        </label>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-black/10 dark:border-white/10 rounded-lg">
                            <div className="space-y-1 text-center">
                                <svg
                                    className="mx-auto h-12 w-12 text-black/50 dark:text-white/50"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 48 48"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <div className="flex text-sm text-black/70 dark:text-white/70">
                                    <label
                                        htmlFor="file-upload"
                                        className="relative cursor-pointer rounded-md font-medium text-black dark:text-white hover:text-black/70 dark:hover:text-white/70 focus-within:outline-none focus-within:ring-2 focus-within:ring-black/5 dark:focus-within:ring-white/5"
                                    >
                                        <span>Select file</span>
                                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                    </label>
                                </div>
                                <p className="text-xs text-black/50 dark:text-white/50">
                                    PNG, JPG, PDF up to 10MB
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <button
                            type="button"
                            className="px-4 py-2 text-sm font-medium text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white"
                            onClick={() => setFormData({ name: '', email: '', subject: '', message: '', file: null })}
                        >
                            Reset
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg text-sm font-medium transition-all duration-200 hover:bg-black/90 dark:hover:bg-white/90"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
} 