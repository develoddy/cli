// export class Message {
//     constructor(
//         public _id: number,
//         public content : string,
//         public user_id : number,
//         public conversation_id : number,
//         public created_at: string,
//         public updated_at: string,
//         public is_read: number
//     ){}
// }


export interface Message {
    _id             : number,
    content         : string,
    user_id         : number,
    conversation_id : number,
    created_at      : string,
    updated_at      : string,
    is_read         : number,
    conversationId  : number;
    userId          : number;
}