import { Category } from "./category";
import { User } from "./user";

export class Post {
    id?: number;
    title?: string;
    description?: string;
    content?: string;
    comments?: Comment[]
    user?: User;
    categories?: Category[];
    imageUrl?: string[];
    featured?: boolean;
}
