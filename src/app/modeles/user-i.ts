export interface UserI {
    uid: string | number;
    nom: string;
    mdp:string;
    avatar:string;
    mail:string;
    tel:string;
    club?: string;
    status:string;
}

export interface IdI {
    mail: string;
    passe: string;
}
