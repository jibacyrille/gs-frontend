export interface Student {
    id: String,
    code: String,
    firstName: String,
    lastName: String,
    programId: String,
    photo: String,

}
export interface EleveInitDTO {
    id: string,
    matricule:string,
    nom: string,
    prenom: string,
    classe: string,
    etat: string

}

export interface Payment {
    id: String,
    date: String,
    amount: Number,
    type: String,
    status: String,
    file: String,
    eleve: Student
}

export enum PaymentType {
    CASH, CHECK, TRANSFER, DEPOSIT
}

export enum PaymentStatus {
    CREATED, VALIDATED, REJECTED
}
export enum ClassList {
    "6EME", "5EME", "4EME", "3EME", "2NDE", "1ERE", "6TLE"
}
