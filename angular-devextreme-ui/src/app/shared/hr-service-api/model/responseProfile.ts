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
import { Contact } from './contact';


export interface ResponseProfile { 
    password?: string;
    oldPassword?: string;
    personAvatarId?: number;
    personContacts?: Array<Contact>;
    departmentAvatarId?: number;
    departmentContacts?: Array<Contact>;
    secret?: string;
    using2FA?: boolean;
    verificationCode?: string;
    name?: string;
    surName?: string;
    departmentCode?: string;
    shortcuts?: Array<string>;
}

