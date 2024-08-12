export type TypeUser  = {
    id : number | string ,
    name: string,
    gender: string,
    email:string,
    phone: string,
    username: string,
    password: string,
    birthDate: string,
    image: string,
    address: string,
    role: string;
}



export type TypePost = {
    id: string | number,
    userId: number | string,
    content: string,
    image: string | null | undefined
    timestamp: string,
    likes: TypeLike,
    comments: TypeComment[] 
}

export type TypeLike = {
    count: number,
    users : (string | number)[];
}

export type TypeComment = {
    id: string | number,
    author : string | number,
    content: string,
    timestamp: string,
    image: string,
    likes: TypeLike
}