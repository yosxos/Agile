export interface UserI {
    uid: string | number;
    nom: string;
    prenoms: Array<string>;
    statut?: string;
}

export interface IdI {
    mail: string;
    passe: string;
}
