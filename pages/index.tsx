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
   <section className="w-full">
     <Heading>Trending Posts</Heading>
     <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
       {data?.map((post) => (
         <Link className="" key={post.slug} href={`/blog/${post.slug}`}>
           <div className="">
             <Image src={post.image} alt={post.title} width={150} height={150} className="rounded-md w-full overflow-hidden object-cover aspect-square" />
             <p className="text-lg">{post.title}</p>
             <time className="">{post.created_at.slice(0, 16)}</time>
           </div>
         </Link>
       ))}
     </div>
   </section>
 );
}
