import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function MDXLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="h-full flex-grow py-1">
                <div className="container">
                    <div className="flex h-full">
                        <div className="prose max-w-full py-16">{children}</div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
