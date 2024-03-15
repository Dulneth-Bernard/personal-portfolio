

import { FullBlogType } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { log } from "console";
import { PortableText } from "@portabletext/react"

import Image from "next/image";
async function fetchBlogData(slug : string) {

    const query = `
    *[_type== "blog" && slug.current == "${slug}" ]{
        "currentSlug" : slug.current ,
      title,
        content,
        TitleImage,
    } [0]
    ` 

    const data = await client.fetch(query);
    return data;

    
}
// Destructure the values on the url

export default async  function BlogArticle({params}: {params: {slug:string}}){
  
    
    const data : FullBlogType  =  await fetchBlogData(params.slug);
    console.log(data);

  
    
    return (
        <div className="mt-8">
            <h1>
                <span className="block text-base text-primary font-semibold tracking-wide uppercase text-center">Dulneth Bernard's Blog </span>
                <span className="mt-2 text-center block  text-3xl leading-8 font-bold tracking-tight sm:text-4xl">{data.title}</span>
            </h1>

            <Image src = {urlFor(data.TitleImage).url()} alt= "Title image " 
            width={800} height={800}
            className="rounded-lg mt-5 border"
            priority
            />

            <div className="mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary">
                {/* Sanitize the content from sanity using portabletreact */}
              
                <PortableText value={data.content}/>
            </div>
          
               


        </div>

 
    );
}