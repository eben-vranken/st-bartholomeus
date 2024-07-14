import { Target } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import React from 'react';

const BlogPost: React.FC<{ title: string, content: string, date: string }> = ({ title, content, date }) => {
    return (
        <Link
            className="flex flex-col gap-y-4 bg-text/5 rounded p-3 cursor-pointer hover:brightness-90 transition-all"
            href={{
                pathname: '/',
                query: { title, content, date }  // Pass each property separately
            }}
        >
            {/* Blog Post Title */}
            <section className="flex items-center gap-x-3">
                {/* Blog Post Icon */}
                <Target size={32} className="text-primary" />
                <h1 className="font-bold text-xl">{title}</h1>
            </section>

            {/* Blog Post content */}
            <section className="max-h-48 overflow-hidden text-ellipsis">
                <p className="text-sm opacity-50 line-clamp-[9]">
                    {content}
                </p>
            </section>

            {/* Blog Post Information */}
            <section className="flex items-center gap-x-3 opacity-50 mt-auto">
                <span className="font-bold">{date}</span> — <span className="text-sm">Eben Vranken</span>
            </section>
        </Link>
    );
};

export default BlogPost;
