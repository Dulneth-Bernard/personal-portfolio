import { log } from "console";
import { client, urlFor } from "./lib/sanity";
import { simpleBlogCard } from "./lib/interface";
import { Card, CardContent } from "@/components/ui/card";
import { Car } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// Fetch data 
async function  getData(){

  // Get the data from Sanity, to query data sanity uses Grock as its query Language
  // `` is optics
  
  const query = `
  *[_type == 'blog'] | order(_createdAt desc){
    // What i need from sanity
    title,
      smallDescription,
      "currentSlug"  : slug.current,
      TitleImage
      
      
  }`;

  // Fetch data we  create a sanityclient , this connect to sanity backend and with query we axtract data

  const data = await client.fetch(query);

  return data;

}



//this component runs on server ad hence we can use async
//await ensure the function to be async
export default async function Home() {
  const data: simpleBlogCard[] =  await getData();
  console.log(data);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-6">
      
      { data.map( (post,id)=>(
         <Card key={id}> 
         <Image src={urlFor(post.TitleImage).url() } 
         alt=" blog title image" 
         width={500} 
         height={500}
         className="rounded-t-lg  h-[200px] object-cover"
         >

          </Image>



          <CardContent className="mt-5">
          <h3 className="text-lg line-clamp-2 font-bold">{post.title}</h3>
           <p className="line-clamp-3 text-sm mt-3 text-gray-600 dark:text-gray-400">{post.smallDescription}</p> 
            <Button asChild className="w-full mt-7">
              <Link href={`/blog/${post.currentSlug}`}> Read More</Link>
              </Button>
          </CardContent>
      


          </Card>

         
          
          ) ) }

    
   
    </div>
   
  );
}
