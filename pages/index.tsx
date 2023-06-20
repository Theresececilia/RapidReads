import Link from "next/link";
import Heading from "@components/heading";
import { getPosts, postsCacheKey } from '../api-routes/posts';
import useSWR from 'swr';
import { useUser } from '@supabase/auth-helpers-react';
import Image from "next/image";


export default function Home() {
 const user = useUser();
 const { data: { data = [] } = {}, error } = useSWR(postsCacheKey, getPosts);

 return (
   <section>
     <Heading>Trending Posts</Heading>
     <div className="flex">
       {data?.map((post) => (
         <Link key={post.slug} href={`/blog/${post.slug}`}>
           <div className="w-full mb-6 mr-6">
             <Image src={post.image} alt={post.title} width={150} height={150} className="rounded-md overflow-hidden h-40" />
             <p className="text-lg">{post.title}</p>
             <time className="">{post.created_at.slice(0, 16)}</time>
           </div>
         </Link>
       ))}
     </div>
   </section>
 );
}
