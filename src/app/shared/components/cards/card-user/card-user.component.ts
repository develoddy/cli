import { Component, Input, Output, OnInit, EventEmitter } from "@angular/core";
import { Profile, ResUsers__, ResUsers__user } from "@data/models/post";
//import { Profile, ResProfileFollow } from "@data/models/user";
import { UserService     } from "@data/services/api/user.service";
// import { ICardUser } from './icard-user.metadata';

@Component({
    selector: "app-card-user",
    templateUrl: "./card-user.component.html",
    styleUrls: ["./card-user.component.css"],
})
export class CardUserComponent implements OnInit {
    // PROPERTIES
    public profiles: ResUsers__user[];
    public resUserFollow: ResUsers__[];
    public following_arr = [];
    public url: string;
    public followUserOver;

    @Input() _data: ResUsers__;
    @Input() _identity;

    @Output() _followedId = new EventEmitter();
    @Output() _unfollowedId = new EventEmitter();

    // CONSTRUCTOR
    constructor(private userService: UserService) {
        this.url = this.userService.url;
    }

    /*
    - ---------------- ngOnInit ----------------
    - SE RECIBE LOS DATOS QUE LE LLEGA DEL COMPONENTE PADRE (USER-LIST-COMPONENT)
    - */
    ngOnInit() {
        console.log("Card-user.component cargado correctamente...");
        this.profiles = this._data.res_users.profiles;
        this.following_arr = this._data.users_following;
    }
    
    /*
    - ---------------- ngDoCheck ----------------
    - ESTE METODO ESTÁ PENDIENTE SI SE REALIZA ALGUN CAMBIO EN EL COMPONENTE HIJO.
    - */
    ngDoCheck() {
        this.profiles = this._data.res_users.profiles;
        this.following_arr = this._data.users_following;
    }

    /**
     * AL PASAR EL RATON SOBRE EL BOTON FOLLOWING SE DETECTA EL USER DEL ID
     * @param user_id 
     */
    mouseEnter(user_id) {
        this.followUserOver = user_id;
    }

    /**
     * AL PASAR EL RATON SOBRE EL BOTON FOLLOWING SE DETECTA EL USER DEL ID
     * @param user_id 
     */
    mouseleave(user_id) {
        this.followUserOver = 0;
    }

    /**
     * SE OBTIENE EL ID DEL USUARIO QUE QUEREMOS SEGGUIR.
     * DESPUES SE LO ENVIAMOS AL COMPONENTE PADRE "USER-LIST-COMPONENT"
     * @param followedId 
     */
    public followUser(followedId:number) {
        this._followedId.emit(followedId);
    }

    /**
     * unfollowUser
     */
    public unfollowUser(followedId:number) {
        this._unfollowedId.emit(followedId);
    }
}
