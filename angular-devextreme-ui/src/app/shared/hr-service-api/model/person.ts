/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Address } from './address';
import { Contact } from './contact';


export interface Person { 
    id?: number;
    xmin?: number;
    personType: Person.PersonTypeEnum;
    identityNumber: string;
    name: string;
    surName?: string;
    avatarId?: number;
    birthDate?: string;
    deathDate?: string;
    addresses?: Array<Address>;
    contacts?: Array<Contact>;
    fullName?: string;
}
export namespace Person {
    export type PersonTypeEnum = 'Person' | 'LegalEntity';
    export const PersonTypeEnum = {
        Person: 'Person' as PersonTypeEnum,
        LegalEntity: 'LegalEntity' as PersonTypeEnum
    };
}


