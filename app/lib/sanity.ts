
import { createClient } from "next-sanity";
import  imageUrlBuilder  from "@sanity/image-url";
export const client =   createClient(
    
    {
        apiVersion: '2023-05-03',
        dataset : 'production',
        projectId: 'ucdk2lbi',
        // We dont need cdn as next js does cashing and ISR
        useCdn: false

    }
);

//Convert images to url using sanity
const builder = imageUrlBuilder(client)

export function urlFor(source:any){
    return builder.image(source);
}