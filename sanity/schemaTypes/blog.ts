
export default{
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields:[
        {
            name: 'title',
            type: 'string',
            title: 'Title of blog article'


    },
    {
        // Using a slug isntead of id for SEO purposes
        name: 'slug',
        type: 'slug',
        title: 'Title of your blog article',
        // Make the slug auto generated instead of manually input
        options:{
            source: 'title'
            //generate slug based on title
        }

    },
        // Feild for blog title image
    {
        name: 'TitleImage',
        type: 'image',
        title: 'Title image '
        
    },
    {
        name: 'smallDescription',
        type:'text',
        title:'Small description '

    },
    // Feild for blog content
    {
        name:'content',
        type:'array',
        email: 'Content',
        // Tell sanity type of array, block enables text editor in sanity
        of: [{
            type: 'block',
        }]
    }


]




}