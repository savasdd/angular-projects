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
import { Department } from './department';
import { KullaniciBilgileri } from './kullaniciBilgileri';
import { User } from './user';
import { TokenDepartmentRequest } from './tokenDepartmentRequest';
import { RoleView } from './roleView';
import { Person } from './person';


export interface TokenRequest { 
    access_token?: string;
    token_type?: string;
    refresh_token?: string;
    expires_in?: number;
    scope?: string;
    user_id?: number;
    user_name?: string;
    registrationId?: string;
    department_id?: number;
    department_search_code?: string;
    authorities?: Array<string>;
    person?: Person;
    department?: Department;
    using2FA?: boolean;
    department_list?: Array<TokenDepartmentRequest>;
    kimlikNo?: string;
    level?: number;
    sonucKodu?: string;
    sonucAciklamasi?: string;
    roleViewList?: Array<RoleView>;
    kullaniciBilgileri?: KullaniciBilgileri;
    user?: User;
    shortcuts?: Array<string>;
    deviceList?: Array<string>;
}
