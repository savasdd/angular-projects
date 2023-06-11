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
import { UserDepartmentRole } from './userDepartmentRole';
import { Person } from './person';


export interface User { 
    id?: number;
    xmin?: number;
    username: string;
    password: string;
    enabled: boolean;
    lastPasswordResetDate?: string;
    person: Person;
    userDepartmentRoles?: Array<UserDepartmentRole>;
    secret?: string;
    using2FA?: boolean;
    shortcuts?: Array<string>;
}
