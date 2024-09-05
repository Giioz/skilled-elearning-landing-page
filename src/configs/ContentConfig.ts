type IContent = {
    id : number,
    img : string,
    title : string,
    description : string,
    buttonText : string
} 

export const ContentConfig:IContent[] = [
    {
        id : 0,
        img : '../../public/icons/Shape.svg',
        title : 'Animation',
        description : 'Learn the latest animation techniques to create stunning motion design and captivate your audience.',
        buttonText : 'Get Started'
    },
    {
        id : 1,
        img : 'test',
        title : 'Design',
        description : 'Create beautiful, usable interfaces to help shape the future of how the web looks.',
        buttonText : 'Get Started'
    },
    {
        id : 2,
        img : 'test',
        title : 'Photography',
        description : 'Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.',
        buttonText : 'Get Started'
    },
    {
        id : 3,
        img : 'test',
        title : 'Crypto',
        description : 'All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.',
        buttonText : 'Get Started'
    },
    {
        id : 4,
        img : 'test',
        title : 'Business',
        description : 'A step-by-step playbook to help you start, scale, and sustain your business without outside investment.',
        buttonText : 'Get Started'
    },
]