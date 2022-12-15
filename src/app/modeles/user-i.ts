export interface UserI {
    uid: string ;
    nom: string;
    mdp:string;
    avatar:string;
    mail:string;
    tel:string;
    club?: string;
    statut:string;
}
export interface IdI {
    mail: string;
    passe: string;
}
