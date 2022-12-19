
// ==  ResProfileFollowOne
// export class ResProfileFollowOne {
//     constructor(
//         public profile: Profile,
//         public follow:  Follow
//     ){}
    
// }

// export class Follow {
//     constructor(
//         public user_id:     number,
//         public followed_id: number
//     ){}
// }
// == End ==





// == ResProfileFollow
// export class ResProfileFollow {
//     constructor(
//         public res_profile:     ResProfile,
//         public users_following: number[],
//         public users_followed:  number[],
//     ){}
// }

// export class ResProfile {
//     constructor(
//         public totalItems:  number,
//         public profiles:    Profile[],
//         public totalPages:  number,
//         public currentPage: number,
//     ){}
// }



// export class Post {
//     constructor(
//         public id               : number,
//         public title            : string,
//         public content          : string,
//         public lat              : number,
//         public lng              : number,
//         public start_at         : string,
//         public finish_at        : string,
//         public receptor_type_id : number,
//         public author_ref_id    : number,
//         public receptor_ref_id  : number,
//         public level_id         : number,
//         public post_type_id     : number,
//         public created_at       : string,
//         public updated_at       : string,
//         public userId           : number,
//         public user             : User,
//         public images           : Image[]
         
//     ){}   
// }

// export class User {
//     constructor(
//         public id:         number,
//         public name:       string,
//         public lastname:   string,
//         public username:   string,
//         public email:      string,
//         public password:   string,
//         public code:       string,
//         public is_active:  boolean,
//         public is_admin:   boolean,
//         public created_at: string,
//         public updated_at: string,
//     ){}
// }



// export class Image {

//     constructor(
//         public id:         number,
//         public src:        string,
//         public title:      null,
//         public content:    null,
//         public user_id:    number,
//         public level_id:   number,
//         public album_id:   number,
//         public created_at: null,
//         public updated_at: null,
//         public post_image: PostImage
//     ){}
// }


// export class Profile {
//     constructor(
//         public id:             number,
//         public day_of_birth:   string,
//         public gender:         string,
//         public country_id:     number,
//         public image:          string,
//         public image_header:   string,
//         public title:          string,
//         public bio:            string,
//         public likes:          string,
//         public dislikes:       string,
//         public address:        string,
//         public phone:          string,
//         public public_email:   string,
//         public user_id:        number,
//         public level_id:       number,
//         public sentimental_id: number,
//         public created_at:     string,
//         public updated_at:     string,
//         public user:           User,
//     ){}
// }