import Link from "next/link";
import Heading from "@components/heading";
import { getPosts, postsCacheKey } from '../api-routes/posts';
import useSWR from 'swr';
import { useUser } from '@supabase/auth-helpers-react';
import Image from "next/image";
import books from '@/public/assets/images/bw-books.jpg'


export default function Home() {
 const user = useUser();
 const { data: { data = [] } = {}, error } = useSWR(postsCacheKey, getPosts);

 const randomPosts = data?.sort(() => 0.5 - Math.random()).slice(0, 2);

 return (
   <section className="w-full bg-[url('../public/assets/images/bw-books.jpg')] h-screen p-4 pl-8">
     <Heading>TRENDING</Heading>
     <div className="flex justify-between">
       <div className="grid md:grid-cols-1 gap-6 md:w-1/5">
         {randomPosts?.map((post) => (
           <Link className="" key={post.slug} href={`/blog/${post.slug}`}>
             <div className="">
               <Image
                 src={post.image}
                 alt={post.title}
                 width={150}
                 height={150}
                 className=" md:w-full overflow-hidden object-cover aspect-square"
               />
               <p className="text-sm text-ellipsis overflow-hidden w-38 md:font-bold">
                 {post.title}
               </p>
               <time className="md:font-semibold">
                 {post.created_at.slice(0, 10)}
               </time>
             </div>
           </Link>
         ))}
       </div>
       <h3 className="p-4 text-3xl md:text-6xl w-1/2 text-right leading-relaxed text-lightColor">
         Bite-sized
         <br />
         <span className="text-accentPurple italic">stories</span>
         <br /> to
         <br /> fuel
         <br /> <span className="text-accentGreen">your mind.</span>
       </h3>
     </div>
   </section>
 );
}
